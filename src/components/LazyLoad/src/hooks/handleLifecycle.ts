import { Lifecycle, LifecycleStatus } from '../interfaces/lifecycle.type';

/**
 *
 * @param life { LifecycleStatus }
 * @param lifecycle { Lifecycle }
 * @param el { HTMLElement }
 */
export default function handleLifecycle(
    life: LifecycleStatus,
    lifecycle?: Lifecycle,
    el?: HTMLElement
): void {
    switch (life) {
        case LifecycleStatus.LOADING:
            el?.setAttribute('lazy', LifecycleStatus.LOADING);
            if (lifecycle?.loading) {
                lifecycle.loading(el);
            }
            break;
        case LifecycleStatus.LOADED:
            el?.setAttribute('lazy', LifecycleStatus.LOADED);
            if (lifecycle?.loaded) {
                lifecycle.loaded(el);
            }
            break;
        case LifecycleStatus.ERROR:
            el?.setAttribute('lazy', LifecycleStatus.ERROR);
            if (lifecycle?.error) {
                lifecycle.error(el);
            }
            break;
        default:
            break;
    }
}
