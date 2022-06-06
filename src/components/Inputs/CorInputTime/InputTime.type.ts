export interface InputTimeType {
    classes?: string | string[];
    maxTime?: Date;
    minTime?: Date;
    timeFormat?:
        | 'h'
        | 'HH'
        | 'h:mm'
        | 'HH:mm'
        | 'h:mm:ss'
        | 'HH:mm:ss'
        | 'h:mm:ss:S'
        | 'HH:mm:ss:S';
    disabled?: boolean;
    value?: Date;
    useAmPmSelector?: boolean;
    onKeyUp?: (event: KeyboardEvent, newTime: Date) => void;
    onChange?: (event: Event, newTime: Date) => void;
    onBlur?: (event: Event, newTime: Date) => void;
    onKeydown?: (event: KeyboardEvent, newTime: Date) => void;
}
