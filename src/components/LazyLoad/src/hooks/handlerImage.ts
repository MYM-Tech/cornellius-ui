
import { Lifecycle, LifecycleStatus } from "../interfaces/lifecycle"
import { checkIsImgTag } from "../tools/checkIsImgTag"
import { listenImageStatus } from "../tools/listenImageStatus"
import { setImageBackground } from "../tools/setImageBackground"
import { handlerLifecycle } from "./handlerLifecycle"



export function handlerImage(el: HTMLElement, src: string, error?: string, lifecycle?: Lifecycle) {
    if (checkIsImgTag(el)) {
        if (src) {
          const preSrc = el.getAttribute('src')
          if (preSrc !== src) {
            el.setAttribute('src', src)
          }
        }
        listenImageStatus(el as HTMLImageElement, () => {
          handlerLifecycle(LifecycleStatus.LOADED, lifecycle, el)
        }, () => {
          // Fix onload trigger twice, clear onload event
          // Reload on update
          el.onload = null
          handlerLifecycle(LifecycleStatus.ERROR, lifecycle, el)
          if (error){ 
              el.setAttribute('src', error) 
              throw new Error(`Image failed to load!And failed src was: ${src} `) 
            }
        })
      } else {
        setImageBackground(el, src)
      }
}


