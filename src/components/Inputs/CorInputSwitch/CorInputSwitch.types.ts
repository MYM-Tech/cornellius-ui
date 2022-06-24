export interface CorInputSwitchPorps {
    id: string;
    label?: string;
    onChange?: (event: Event) => void;
    checked?: boolean;
    disabled?: boolean;
    inline?: boolean;
    labelPosition: 'left' | 'right';
    className?: string | string[];
    classSwitch?: string | string[];
}
