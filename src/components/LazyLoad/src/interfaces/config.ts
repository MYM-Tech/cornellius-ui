/* eslint-disable no-use-before-define */
import { Lifecycle } from './lifecycle';

export interface ExtHTMLElement extends HTMLElement {
    lazy?: defaultConfigInterface;
}
export interface propsInterface {
    errorImageUrl?: string;
    loadingImageUrl?: string;
    observerOptions?: IntersectionObserverInit;
    errorClasses?: Array<string>;
    loadingClasses?: Array<string>;
    loadedClasses?: Array<string>;
    onError?: (el: ExtHTMLElement, conf: defaultConfigInterface) => void;
    onLoad?: (el: ExtHTMLElement, conf: defaultConfigInterface) => void;
    watchUpdate?: boolean;
    lifecycle?: Lifecycle;
}

export interface defaultConfigInterface extends propsInterface {
    src: string;
    key: string;
}

export interface valueInput {
    src: string;
    errorUrl?: string;
    loadingUrl?: string;
    lifecycle?: Lifecycle;
}
export interface parsingConfigurationResult {
    src: string;
    errorUrl: string;
    loadingUrl: string;
    lifecycle?: Lifecycle;
}
