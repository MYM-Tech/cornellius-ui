import { VNode } from 'vue';

export interface CorButtonProps {
    label: string;
    leftIcon?: VNode;
    rightIcon?: VNode;
    type?: 'primary' | 'secondary' | 'tertiary';
    size?: 'regular' | 'large' | 'small' | 'micro';
    onClick?: (e: Event) => void;
    className?: string;
    disabled?: boolean;
}
