import { propsInterface } from "./config"
import { ExtComponentPublicInstance, ExtHTMLElement } from "./Element"

export interface imageConfigInterface extends propsInterface {
    timeout: number
    preLoad: number
    component: boolean
    sorted: boolean
    debounce: boolean
    afterListen?: (event: Event | undefined, lazyElMap: Map<string, Set<ExtHTMLElement>>, lazyVmMap: Map<string, Set<ExtComponentPublicInstance>>) => void
}
 