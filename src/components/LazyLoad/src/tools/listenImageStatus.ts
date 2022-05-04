export function listenImageStatus(image: HTMLImageElement, success: ((ev: Event) => any) | null, error: OnErrorEventHandler) {
    if( image.onload ) image.onload = success;
    if(image.onerror ) image.onerror = error
} 
