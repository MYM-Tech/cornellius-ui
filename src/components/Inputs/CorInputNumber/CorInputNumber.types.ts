import { CorInputProps } from '../Input.types';

export interface CorInputNumberProps extends CorInputProps {
    max?: number;
    min?: number;
    showButtons?: boolean;
}
