
import { baseConfig } from "../config/config"
import { Lifecycle } from "../interfaces/lifecycle"


  export interface ValueFormatterObject {
    src: string,
    errorUrl?: string,
    loadingUrl?: string,
    lifecycle?: Lifecycle;
  }
  
  export function parsingConfiguration(value: ValueFormatterObject | string): ValueFormatterObject {
    let src = value as string
    let loadingUrl = baseConfig.loadingImageUrl
    let errorUrl = baseConfig.errorImageUrl
    let lifecycle = baseConfig.lifecycle
    
    if (typeof value === 'function' || toString.call(value) === '[object Object]') {
      src = (value as ValueFormatterObject).src
      loadingUrl = (value as ValueFormatterObject).loadingUrl || baseConfig.loadingImageUrl;
      errorUrl = (value as ValueFormatterObject).errorUrl || errorUrl
      lifecycle = ((value as ValueFormatterObject).lifecycle || lifecycle)
    }
    return { src, loadingUrl, errorUrl, lifecycle }
  }