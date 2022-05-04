import { propsInterface } from "../interfaces/config"
import { imageConfigInterface } from "../interfaces/image"


export const ObserverOptionsDafault = {
  rootMargin: '0px',
  threshold: 0
}

export const baseConfig: propsInterface = {
    errorImageUrl: '',
    loadingImageUrl: '',
    errorClasses: [],
    loadingClasses: [],
    loadedClasses: [],
    onError: undefined,
    onLoad: undefined,
    watchUpdate: true,
    observerOptions: ObserverOptionsDafault,
    lifecycle: {}
  }


  export const defaultConfig: imageConfigInterface = Object.assign({
    timeout: 200,
    preLoad: 0.3,
    component: false,
    sorted: true,
    debounce: false,
    afterListen: undefined
  }, baseConfig)