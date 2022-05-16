import { ExtHTMLElement, PropsInterface } from './config.type';
import { ExtComponentPublicInstance } from './element.type';

export interface ImageConfigInterface extends PropsInterface {
    timeout: number;
    preLoad: number;
    component: boolean;
    sorted: boolean;
    debounce: boolean;
    afterListen?: (
        event: Event | undefined,
        lazyElMap: Map<string, Set<ExtHTMLElement>>,
        lazyVmMap: Map<string, Set<ExtComponentPublicInstance>>
    ) => void;
}
