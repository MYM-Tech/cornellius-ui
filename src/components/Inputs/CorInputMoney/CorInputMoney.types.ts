import { VNode } from 'vue';
import { CorInputTextProps } from '../CorInputText/CorInputText.types';

export interface CorInputMoneyProps extends CorInputTextProps {
    symbol?: string | VNode;
    symbolPosition?: 'left' | 'right';
    max?: number;
    min?: number;
    decimals?: number;
    step?: number;
}
