import { Dayjs } from 'dayjs';
import { CorInputProps } from '../Input.types';

export interface CorInputTimeProps extends CorInputProps<Date> {
    maxTime?: string;
    minTime?: string;
    format?: '12' | '24';
    disabled?: boolean;
    value: Date;
    showSeconds?: boolean;
}
