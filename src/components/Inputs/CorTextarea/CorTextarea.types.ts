export interface CorTextareaProps {
    value?: string;
    disabled?: boolean;
    label?: string;
    statusMessage?: string;
    maxLength?: number;
    minLength?: number;
    placeholder?: string;
    status?: 'success' | 'warning' | 'error' | undefined;
    onChange?(value: string): void;
    onSubmit?(e: Event): void;
}
