import { App } from 'vue';
import { PropsInterface } from './interfaces/config.type';
import lazyImage from './lazyImage/lazyImage';

export default {
    install(Vue: App, options: PropsInterface) {
        const lazy = lazyImage(options);

        Vue.config.globalProperties.$Lazyload = lazy;
        Vue.provide('Lazyload', lazy);
        Vue.directive('lazy', {
            mounted: lazy.mount.bind(lazy),
            updated: lazy.update.bind(lazy),
            unmounted: lazy.unmount.bind(lazy),
        });
    },
};
