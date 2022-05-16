import { ObserverOptionsDafaultProps } from '../interfaces/config.type';
import { ImageConfigInterface } from '../interfaces/image.type';

export const ObserverOptionsDafault: ObserverOptionsDafaultProps = {
    rootMargin: '0px',
    threshold: 0,
};

export const baseConfig = {
    errorImageUrl: '',
    loadingImageUrl: '',
    errorClasses: [],
    loadingClasses: [],
    loadedClasses: [],
    onError: undefined,
    onLoad: undefined,
    watchUpdate: true,
    observerOptions: ObserverOptionsDafault,
    lifecycle: {},
};

export const defaultConfig: ImageConfigInterface = {
    timeout: 200,
    preLoad: 0.3,
    component: false,
    sorted: true,
    debounce: false,
    afterListen: undefined,
    ...baseConfig,
};
