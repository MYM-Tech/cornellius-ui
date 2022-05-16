import { VNode } from 'vue';

export interface CorInputCheckboxProps {
    id: string;
    label: string;
    checked?: boolean;
    disabled?: boolean;
    name: string;
    customIcon?: VNode | VNode[];
    checkPosition?: 'left' | 'right';
    onChange?(e: Event): void;
}
