import { defaultConfig } from '../config/config';
import { ArrayElements } from '../config/virtualElements';
import { Lifecycle } from '../interfaces/lifecycle';
import handleImage from './handleImage';

export default function handleIntersectionObserver(
    el: HTMLElement,
    src: string,
    error: string,
    lifecycle?: Lifecycle
) {
    ArrayElements.set(
        el,
        new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    ArrayElements.get(el)?.unobserve(entry.target);
                    handleImage(el, src, error, lifecycle);
                }
            });
        }, defaultConfig.observerOptions)
    );

    ArrayElements.get(el)?.observer(el);
}
