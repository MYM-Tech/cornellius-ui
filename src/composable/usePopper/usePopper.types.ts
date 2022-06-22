import { ComputePositionConfig, Placement } from '@floating-ui/core';
import { Ref } from 'vue';

export interface UsePopper {
    update: () => void;
    show: () => void;
    hide: () => void;
    toggle: () => void;
    isOpen: Ref<boolean>;
}

export interface PopperOptions extends Partial<Omit<ComputePositionConfig, 'placement'>> {
    placement: Placement | undefined | 'auto';
    arrowRef?: Ref<HTMLElement | null>;
}
