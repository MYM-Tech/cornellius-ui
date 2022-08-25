export interface CorInputProps<T = string> {
    value?: T;
    disabled?: boolean;
    label?: string;
    statusMessage?: string;
    placeholder?: string;
    status?: 'success' | 'warning' | 'error' | undefined;
    clases?: string | string[];
    onChange?(value: string | Event): void;
    onSubmit?(e: Event): void;
    onBlur?(e: FocusEvent): void;
    onKeydown?(e: KeyboardEvent): void;
}
