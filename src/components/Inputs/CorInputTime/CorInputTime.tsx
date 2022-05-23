import dayjs, { Dayjs } from 'dayjs';
import { FunctionalComponent, ShallowReactive } from 'vue';
import CorInputText from '../CorInputText/CorInputText';
import { CorInputTimeProps } from './CorInputTime.types';
import CSS from './CorInputTime.module.scss';
import inputTimeState from './state/inputTimeState';
import handleInputTimeState from './hooks/handleState';
import { CorInputTimeState } from './state/inputTimeState.type';

const onComponentChange = (
    e: Event,
    handler: any,
    handleFunction: 'setHours' | 'setMinutes' | 'setSeconds'
) => {
    const target = e.target as HTMLInputElement;
    const numberValue = parseInt(target.value, 10);
    handler[handleFunction](numberValue);
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
}) => {
    const state = inputTimeState(value);
    const handler = handleInputTimeState(state);

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

    return (
        <div class={CSS.cor_input_time}>
            <CorInputText
                class={CSS.cor_time_part}
                value={formatTime(state.hours || 0, 23)}
                onBlur={(e) => onComponentChange(e, handler, 'setHours')}
            />
            <span>:</span>
            <CorInputText
                class={CSS.cor_time_part}
                value={formatTime(state.minutes || 0, 23)}
                onBlur={(e) => onComponentChange(e, handler, 'setMinutes')}
            />
            {showSeconds && (
                <>
                    <span>:</span>
                    <CorInputText
                        class={CSS.cor_time_part}
                        value={formatTime(state.seconds || 0, 23)}
                        onBlur={(e) => onComponentChange(e, handler, 'setSeconds')}
                    />
                </>
            )}
        </div>
    );
};

export default CorInputTime;
