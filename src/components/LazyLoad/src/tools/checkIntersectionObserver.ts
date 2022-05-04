
export const inBrowser = typeof window !== 'undefined' && window !== null




/**
 * this code is snippet from https://github.com/murongg/vue3-lazyload/blob/bf89256b25856b2a79f7c1e75b6658f3debd51d8/src/util.ts#L44
 * 
 * @returns { boolean }
 */

 export function checkIntersectionObserver(): boolean {
    if (inBrowser &&
      'IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window &&
      'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
      // Minimal polyfill for Edge 15's lack of `isIntersecting`
      // See: https://github.com/w3c/IntersectionObserver/issues/2To11
      if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
        Object.defineProperty(window.IntersectionObserverEntry.prototype,
          'isIntersecting', {
            get () {
              return window.IntersectionObserverEntry.prototype.intersectionRatio > 0
            }
          })
      }
      return true
    }
    return false
  }