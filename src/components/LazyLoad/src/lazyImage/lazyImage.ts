import { nextTick } from 'vue';
import { DirectiveBinding } from '@vue/runtime-core';

import { baseConfig } from '../config/config';

import parsingConfiguration from '../tools/parsingConfiguration';
import { LifecycleStatus } from '../interfaces/lifecycle';
import { checkIntersectionObserver } from '../tools/checkIntersectionObserver';
import { ArrayElements } from '../config/virtualElements';

import { propsInterface, valueInput } from '../interfaces/config';
import handleInitialConfig from '../hooks/handleInitialConfig';
import handleLifecycle from '../hooks/handleLifecycle';
import handleImage from '../hooks/handleImage';
import handleIntersectionObserver from '../hooks/handleIntersectionObserver';

export default function lazyImage(value: propsInterface) {
    nextTick().then(() => handleInitialConfig(value));

    function mount(el: HTMLElement, binding: DirectiveBinding<string | valueInput>): void {
        const { src, loadingUrl, errorUrl, lifecycle } = parsingConfiguration(binding.value);

        handleLifecycle(LifecycleStatus.LOADING, lifecycle, el);

        el.setAttribute('src', loadingUrl);

        if (!checkIntersectionObserver) {
            handleImage(el, src, errorUrl, lifecycle);
            if (baseConfig.watchUpdate) {
                throw new Error('Not support IntersectionObserver!');
            }
        }
        /* refactor do something if IntersectionObserver is not supported */
        handleIntersectionObserver(el, src, errorUrl, lifecycle);
    }

    function unmount(el: HTMLElement) {
        ArrayElements.get(el)?.unobserve(el);
        ArrayElements.delete(el);
    }
    function update(el: HTMLElement, binding: DirectiveBinding<string | valueInput>): void {
        ArrayElements.get(el)?.unobserve(el);
        const { src, errorUrl, lifecycle } = parsingConfiguration(binding.value);
        handleIntersectionObserver(el, src, errorUrl, lifecycle);
    }

    return { mount, unmount, update };
}
