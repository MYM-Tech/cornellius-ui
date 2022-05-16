import { DirectiveBinding } from '@vue/runtime-core';

import { baseConfig } from '../config/config';

import parsingConfiguration from '../tools/parsingConfiguration';
import { LifecycleStatus } from '../interfaces/lifecycle.type';
import checkIntersectionObserver from '../tools/checkIntersectionObserver';

import { PropsInterface, ValueInput } from '../interfaces/config.type';
import handleInitialConfig from '../hooks/handleInitialConfig';
import handleLifecycle from '../hooks/handleLifecycle';
import handleImage from '../hooks/handleImage';
import handleIntersectionObserver from '../hooks/handleIntersectionObserver';

export default function lazyImage(value: PropsInterface) {
    handleInitialConfig(value);

    const virtualArrayImage = new WeakMap<HTMLElement>();

    function mount(el: HTMLElement, binding: DirectiveBinding<string | ValueInput>): void {
        const { src, loadingUrl, errorUrl, lifecycle } = parsingConfiguration(binding.value);

        handleLifecycle(LifecycleStatus.LOADING, lifecycle, el);

        el.setAttribute('src', loadingUrl);

        if (!checkIntersectionObserver()) {
            handleImage(el, src, errorUrl, lifecycle);
            if (baseConfig.watchUpdate) {
                /* TODO: refactor do something if IntersectionObserver is not supported */
                throw new Error('Not support IntersectionObserver!');
            }
        }

        handleIntersectionObserver(el, src, errorUrl, virtualArrayImage, lifecycle);
    }

    function unmount(el: HTMLElement) {
        virtualArrayImage.get(el)?.unobserve(el);
        virtualArrayImage.delete(el);
    }

    function update(el: HTMLElement, binding: DirectiveBinding<string | ValueInput>): void {
        virtualArrayImage.get(el)?.unobserve(el);
        const { src, errorUrl, lifecycle } = parsingConfiguration(binding.value);
        handleIntersectionObserver(el, src, errorUrl, virtualArrayImage, lifecycle);
    }

    return { mount, unmount, update };
}
