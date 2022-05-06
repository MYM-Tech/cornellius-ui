/* eslint-disable */
import { defaultConfig } from '../config/config';
import { Lifecycle } from '../interfaces/lifecycle';
import handleImage from './handleImage';

export default function handleIntersectionObserver(
    el: HTMLElement,
    src: string,
    error: string,
    ArrayElements: WeakMap<HTMLElement, any>,
    lifecycle?: Lifecycle
) {
    const settingImageIfIntersection: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
            const { isIntersecting, target } = entry;
            if (!isIntersecting) {
                return;
            }
            
            handleImage(el, src, error, lifecycle);
            observer.unobserve(target);
        });
    };

    const observer = new IntersectionObserver(
        settingImageIfIntersection,
        defaultConfig.observerOptions
    );

    ArrayElements.set(el, observer);

    observer.observe(el);
}
