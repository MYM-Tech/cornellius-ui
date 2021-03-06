import { ComponentPublicInstance } from 'vue';
import { ExtHTMLElement } from './config.type';

export interface ExtComponentPublicInstance extends ComponentPublicInstance {
    isLoaded: boolean;
    $props: {
        lazyKey: string;
        watchUpdate: boolean;
    };
}

export type Vm_El = ExtComponentPublicInstance | ExtHTMLElement;
