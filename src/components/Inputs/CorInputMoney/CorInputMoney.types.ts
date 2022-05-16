import { VNode } from 'vue';
import { CorInputNumberProps } from '../CorInputNumber/CorInputNumber.types';

export interface CorInputMoneyProps extends CorInputNumberProps {
    symbol?: string | VNode;
    symbolPosition?: 'left' | 'right';
}
