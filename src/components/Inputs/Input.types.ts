type TypeOmitHTMLInput = Omit<HTMLInputElement, 'value' | 'max' | 'min' | 'step'>;
type HTMLInputProps<T> = Partial<TypeOmitHTMLInput> & {
    value?: T;
    min?: number;
    max?: number;
    step?: number;
};

export interface CorInputProps<T = string> extends HTMLInputProps<T> {
    value?: T;
    disabled?: boolean;
    label?: string;
    statusMessage?: string;
    placeholder?: string;
    status?: 'success' | 'warning' | 'error' | undefined;
    class?: string | string[];
    onChange?(value: string | Event): void;
    onSubmit?(e: Event): void;
    onBlur?(e: FocusEvent): void;
    onKeydown?(e: KeyboardEvent): void;
}
