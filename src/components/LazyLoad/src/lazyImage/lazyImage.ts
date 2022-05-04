import { Directive, nextTick } from "vue";
import { DirectiveBinding } from "@vue/runtime-core";

import { baseConfig } from "../Config/Config";


import { handlerImage } from "../Hooks/handlerImage";
import { handlerLifecycle } from "../Hooks/handlerLifecycle";
import { handlerInitialConfig } from "../hooks/handlerInitialConfig";
import { parsingConfiguration, ValueFormatterObject } from "../tools/parsingConfiguration";
import { LifecycleStatus } from "../interfaces/lifecycle";
import { checkIntersectionObserver } from "../tools/checkIntersectionObserver";
import { ArrayElements } from "../config/virtualElements";
import { handlerIntersectionObserver } from "../hooks/handlerIntersectionObserver";
import { propsInterface } from "../interfaces/config";




export default function (value: propsInterface) {
    nextTick().then(() => handlerInitialConfig(value));

    function mount(el: HTMLElement, binding: DirectiveBinding<string | ValueFormatterObject>): void {
        const { src, loadingUrl, errorUrl, lifecycle } = parsingConfiguration(binding.value)
        handlerLifecycle(LifecycleStatus.LOADING, lifecycle, el)
        el.setAttribute('src', loadingUrl || baseConfig.loadingImageUrl!)
        if (!checkIntersectionObserver) {
            handlerImage(el, src, errorUrl, lifecycle)
            if (baseConfig.watchUpdate) {
                throw new Error('Not support IntersectionObserver!')
            }

        }
        /* refactor do something if IntersectionObserver is not supported */
        handlerIntersectionObserver(el, src, errorUrl, lifecycle);
    };

    function unmount(el: HTMLElement) {
        ArrayElements.get(el)?.unobserve(el)
        ArrayElements.delete(el)
    };
    function update(el: HTMLElement, binding: DirectiveBinding<string | ValueFormatterObject>): void {
        ArrayElements.get(el)?.unobserve(el)
        const { src, errorUrl, lifecycle } = parsingConfiguration(binding.value)
        handlerIntersectionObserver(el, src, errorUrl, lifecycle)
    }

    return { mount, unmount, update }
};

