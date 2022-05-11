export interface CorInputRadioProps {
    id: string;
    label: string;
    checked?: boolean;
    disabled?: boolean;
    name: string;
    onChange?(e: Event): void;
}
