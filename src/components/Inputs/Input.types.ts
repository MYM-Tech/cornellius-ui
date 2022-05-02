export interface CorInputProps {
    value?: string;
    disabled?: boolean;
    label?: string;
    statusMessage?: string;
    placeholder?: string;
    status?: 'success' | 'warning' | 'error' | undefined;
    onChange?(value: string): void;
    onSubmit?(e: Event): void;
}
