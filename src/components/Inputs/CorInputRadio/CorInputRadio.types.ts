export interface CorInputRadioProps {
    id: string;
    label: string;
    checked?: boolean;
    disabled?: boolean;
    name: string;
    radioPosition?: 'left' | 'right';
    onChange?(e: Event): void;
}
