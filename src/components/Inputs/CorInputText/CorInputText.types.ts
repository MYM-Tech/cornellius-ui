import { CorInputProps } from '../Input.types';

export interface CorInputTextProps extends CorInputProps {
    value?: string;
    disabled?: boolean;
    label?: string;
    statusMessage?: string;
    className?: string;
    maxLength?: number;
    minLength?: number;
    placeholder?: string;
    status?: 'success' | 'warning' | 'error' | undefined;
    variant?: 'text' | 'password' | 'email';
    onChange?: (event: Event) => void;
    onBlur?: (event: FocusEvent) => void;
    onKeydown?: (event: KeyboardEvent) => void;
}
