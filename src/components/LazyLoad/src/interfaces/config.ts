import { ExtComponentPublicInstance, ExtHTMLElement } from "./Element";
import { Lifecycle } from "./lifecycle";


export interface propsInterface {
    errorImageUrl?: string;
    loadingImageUrl?: string;
    observerOptions?: IntersectionObserverInit;
    errorClasses?: Array<string>
    loadingClasses?: Array<string>
    loadedClasses?: Array<string>
    onError?: (el: ExtHTMLElement, conf: defaultConfigInterface) => void
    onLoad?: (el: ExtHTMLElement, conf: defaultConfigInterface) => void
    watchUpdate?: boolean
    lifecycle?: Lifecycle;
}

export interface defaultConfigInterface extends propsInterface {
    src: string,
    key: string
}