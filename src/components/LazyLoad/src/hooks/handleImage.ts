import { Lifecycle, LifecycleStatus } from '../interfaces/lifecycle';
import checkIsImgTag from '../tools/checkIsImgTag';
import listenImageStatus from '../tools/listenImageStatus';
import setAttributeSrc from '../tools/setAttributeSrc';
import setImageBackground from '../tools/setImageBackground';
import handleLifecycle from './handleLifecycle';

export default function handleImage(
    el: HTMLElement,
    src: string,
    error?: string,
    lifecycle?: Lifecycle
) {
    if (checkIsImgTag(el)) {
        if (src) {
            const preSrc = el.getAttribute('src');
            if (preSrc !== src) {
                setAttributeSrc(el, src);
            }
        }
        listenImageStatus(
            el as HTMLImageElement,
            () => {
                handleLifecycle(LifecycleStatus.LOADED, lifecycle, el);
            },
            () => {
                // Fix onload trigger twice, clear onload event
                // Reload on update
                el.onload = null;
                handleLifecycle(LifecycleStatus.ERROR, lifecycle, el);
                if (error) {
                    setAttributeSrc(el, error);
                    throw new Error(`Image failed to load!And failed src was: ${src} `);
                }
            }
        );
    } else {
        setImageBackground(el, src);
    }
}
