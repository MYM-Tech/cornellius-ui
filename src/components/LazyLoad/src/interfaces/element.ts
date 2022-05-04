import {ComponentPublicInstance} from 'vue'
import { defaultConfigInterface } from './config'


export enum visibilityInterface {
    visible,
    noVisible,
    errorDisplay
}

export interface ExtComponentPublicInstance extends ComponentPublicInstance {
    isLoaded: boolean
    $props: {
      lazyKey: string
      watchUpdate: boolean
    }
  }
  
  export interface ExtHTMLElement extends HTMLElement {
    lazy?: defaultConfigInterface
  }

  export type Vm_El = ExtComponentPublicInstance | ExtHTMLElement