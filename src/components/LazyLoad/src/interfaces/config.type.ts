/* eslint-disable no-use-before-define */
import { Lifecycle } from './lifecycle.type';

export interface ExtHTMLElement extends HTMLElement {
    lazy?: DefaultConfigInterface;
}

export interface PropsInterface {
    errorImageUrl?: string;
    loadingImageUrl?: string;
    observerOptions?: IntersectionObserverInit;
    errorClasses?: Array<string>;
    loadingClasses?: Array<string>;
    loadedClasses?: Array<string>;
    onError?: (el: ExtHTMLElement, conf: DefaultConfigInterface) => void;
    onLoad?: (el: ExtHTMLElement, conf: DefaultConfigInterface) => void;
    watchUpdate?: boolean;
    lifecycle?: Lifecycle;
}

export interface DefaultConfigInterface extends PropsInterface {
    src: string;
    key: string;
}

export interface ValueInput {
    src: string;
    errorUrl?: string;
    loadingUrl?: string;
    lifecycle?: Lifecycle;
}

export interface ObserverOptionsDafaultProps {
    rootMargin: string;
    threshold: number | number[];
    root?: HTMLElement;
}

export interface ParsingConfigurationResult {
    src: string;
    errorUrl: string;
    loadingUrl: string;
    lifecycle?: Lifecycle;
}
