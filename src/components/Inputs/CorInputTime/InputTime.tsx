/* eslint-disable no-param-reassign */
import classNames from 'classnames';
import changeOnPressArrows from './hooks/changeOnPressArrows';
import { parsingTypeFormat, parsingValue } from './hooks/formatValue';
import handleOnBlur from './hooks/handleOnBlur';
import handleOnChange from './hooks/handleOnChange';
import CSS from './InputTime.module.scss';
import { InputTimeType } from './InputTime.type';

const defaultMaxValue = {
    hour: 23,
    min: 59,
    sec: 59,
    ms: 59,
};

const defaultMinValue = {
    hour: 0,
    min: 0,
    sec: 0,
    ms: 0,
};

const InputTime = ({
    classes,
    value = new Date(),
    disabled,
    maxTime,
    minTime,
    onBlur = (e) => e,
    onChange = (e) => e,
    onKeydown = (e) => e,
    timeFormat = 'HH:mm',
}: InputTimeType) => {
    const className = classNames(CSS.inputTime, classes);
    const { hasMilliseconds, hasSeconds, has12H } = parsingTypeFormat(timeFormat);
    // eslint-disable-next-line prefer-const
    let hours = parsingValue.hours(value, has12H);
    if (maxTime !== undefined) {
        defaultMaxValue.hour = maxTime.getHours();
        defaultMaxValue.min = maxTime.getMinutes();
        defaultMaxValue.sec = maxTime.getSeconds();
        defaultMaxValue.ms = maxTime.getMilliseconds();
    }

    if (minTime !== undefined) {
        defaultMinValue.hour = minTime.getHours();
        defaultMinValue.min = minTime.getMinutes();
        defaultMinValue.sec = minTime.getSeconds();
        defaultMinValue.ms = minTime.getMilliseconds();
    }

    return (
        <div class={className}>
            <div class={CSS.inputTime__topArrow}></div>
            <div class={CSS.inputTime__blockTIme}>
                <input
                    v-model={hours}
                    value={hours}
                    disabled={disabled}
                    v-model:update={hours}
                    onInput={(e) =>
                        handleOnChange(
                            e,
                            timeFormat,
                            value,
                            'hours',
                            defaultMaxValue.hour,
                            defaultMinValue.hour,
                            onChange
                        )
                    }
                    onBlur={(e) => {
                        handleOnBlur(
                            e,
                            timeFormat,
                            value,
                            'hours',
                            defaultMaxValue.hour,
                            defaultMinValue.hour,
                            onBlur
                        );
                    }}
                    onKeydown={(e) => {
                        changeOnPressArrows(
                            e,
                            value,
                            timeFormat,
                            'hours',
                            defaultMaxValue.hour,
                            defaultMinValue.hour,
                            onKeydown
                        );
                    }}
                />
                {/* <span>:</span>
                <input
                    v-model={minutes}
                    value={limitedTimeValue(minutes, 59)}
                    disabled={disabled}
                />
                {hasSeconds && <input v-model={seconds} value={seconds} disabled={disabled} />}
                {hasMilliseconds && (
                    <input v-model={milliseconds} value={milliseconds} disabled={disabled} />
                )}
                {useAmPmSelector && has12H && (
                    <select>
                        <option>AM</option>
                        <option>PM</option>
                    </select>
                )} */}
            </div>
            <div class={CSS.inputTime__bottomArrow}></div>
        </div>
    );
};

export default InputTime;
