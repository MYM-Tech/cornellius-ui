import { Dayjs } from 'dayjs';
import { CorInputProps } from '../Input.types';

export interface CorInputTimeProps extends CorInputProps<Date> {
    maxTime?: string;
    minTime?: string;
    format?: '12hrs' | '24hrs';
    disabled?: boolean;
    value: Date;
    showSeconds?: boolean;
}
