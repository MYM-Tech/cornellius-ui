// import dayjs, { Dayjs } from 'dayjs';
import { FunctionalComponent } from 'vue';
import CorInputText from '../CorInputText/CorInputText';
import { CorInputTimeProps } from './CorInputTime.types';
import CSS from './CorInputTime.module.scss';


const formatTime = (v: number, max: number) => {
    if (v < 10) {
        return `0${v}`;
    }

    if (v < 0 || Number.isNaN(v)) {
        return '00';
    }

    if (v > max) {
        return `${max}`;
    }

    return `${v}`;
};

const onComponentChange = (e: Event, max: number) => {
    const target = e.target as HTMLInputElement;
    const numberValue = formatTime(parseInt(target.value, 10), max);
    target.value = numberValue;
    return numberValue;
};

const CorInputTime: FunctionalComponent<CorInputTimeProps> = ({
    value,
    disabled,
    format,
    label,
    maxTime,
    minTime,
    onChange,
    onSubmit,
    placeholder,
    status,
    statusMessage,
    showSeconds,
}) => (
    // const onKeydown = (e: KeyboardEvent) => {
    //     const target = e.target as HTMLInputElement;

    //     if (e.key === 'ArrowUp') {
    //         const toNumber = parseInt(target.value, 10);
    //         console.log('*** toNumber', toNumber);
    //         target.value = toNumber.toString();
    //     }

    //     if (e.key === 'ArrowDown') {
    //         const toNumber = parseInt(target.value, 10) - 1;
    //         target.value = `${toNumber}`;
    //     }
    // };

    <div class={CSS.cor_input_time}>
        <CorInputText
            class={CSS.cor_time_part}
            value={formatTime(value?.getHours() || 0, 23)}
            onBlur={(e) => onComponentChange(e, 23)}
        />
        <span>:</span>
        <CorInputText
            class={CSS.cor_time_part}
            value={formatTime(value?.getMinutes() || 0, 23)}
            onBlur={(e) => onComponentChange(e, 59)}
        />
        {showSeconds && (
            <>
                <span>:</span>
                <CorInputText
                    class={CSS.cor_time_part}
                    value={formatTime(value?.getSeconds() || 0, 23)}
                    onBlur={(e) => onComponentChange(e, 59)}
                />
            </>
        )}
    </div>
);
export default CorInputTime;
