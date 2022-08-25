import { VNode } from 'vue';
import { CorInputTextProps } from '../CorInputText/CorInputText.types';

export interface CorInputMoneyProps extends Omit<CorInputTextProps, 'onChange' | 'variant'> {
    symbol?: string | VNode;
    symbolPosition?: 'left' | 'right';
    max?: number;
    min?: number;
    decimals?: number;
    step?: number;
    onChange: (value: string) => void;
}
