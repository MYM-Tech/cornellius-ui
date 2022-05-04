import { imageConfigInterface } from '../interfaces/image';

export const ObserverOptionsDafault = {
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

export const defaultConfig: imageConfigInterface = {
    timeout: 200,
    preLoad: 0.3,
    component: false,
    sorted: true,
    debounce: false,
    afterListen: undefined,
    ...baseConfig,
};
