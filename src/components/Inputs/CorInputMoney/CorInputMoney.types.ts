import { VNode } from 'vue';
import { CorInputProps } from '../Input.types';

export interface CorInputMoneyProps extends CorInputProps {
    max?: number;
    min?: number;
    showButtons?: boolean;
    symbol?: string | VNode;
    symbolPosition?: 'left' | 'right';
}
