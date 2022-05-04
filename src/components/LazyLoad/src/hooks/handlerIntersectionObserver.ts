import { defaultConfig } from "../Config/Config";
import { ArrayElements } from "./handlerAttributes";
import { handlerImage } from "./handlerImage";

export function handlerIntersectionObserver(el: HTMLElement, src: any, error: any, lifecycle: any) {
    ArrayElements.set(el,
      new IntersectionObserver((entries) => {
        Array.prototype.forEach.call(entries, (entry) => {
          if (entry.isIntersecting) {
            ArrayElements.get(el)?.unobserve(entry.target);
            handlerImage(el, src, error, lifecycle);
          }
        });
      }, defaultConfig.observerOptions));
  
    ArrayElements.get(el)?.observer(el);
  }