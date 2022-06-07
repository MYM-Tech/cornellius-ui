/* eslint-disable no-param-reassign  */
/* eslint-disable prefer-const */
import classNames from 'classnames';
import handle12hValueDate from './hooks/handle12hValueDate';
import changeOnPressArrows from './hooks/changeOnPressArrows';

import handleOnBlur from './hooks/handleOnBlur';
import handleOnChange from './hooks/handleOnChange';
import { parsingTypeFormat, parsingValue } from './hooks/parsingValue';
import CSS from './InputTime.module.scss';
import { InputTimeType } from './InputTime.type';
import setInitialValue from './hooks/setInitialValue';

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

    let hours = parsingValue.hours(value, has12H);
    let minutes = parsingValue.minutes(value);
    let seconds = parsingValue.seconds(value);
    let milliseconds = parsingValue.milliseconds(value);

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
    console.log(value);
    

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
                <span>:</span>
                <input
                    v-model={minutes}
                    value={minutes}
                    disabled={disabled}
                    onInput={(e) =>
                        handleOnChange(
                            e,
                            timeFormat,
                            value,
                            'minutes',
                            defaultMaxValue.min,
                            defaultMinValue.min,
                            onChange
                        )
                    }
                    onBlur={(e) => {
                        handleOnBlur(
                            e,
                            timeFormat,
                            value,
                            'minutes',
                            defaultMaxValue.min,
                            defaultMinValue.min,
                            onBlur
                        );
                    }}
                    onKeydown={(e) => {
                        changeOnPressArrows(
                            e,
                            value,
                            timeFormat,
                            'minutes',
                            defaultMaxValue.min,
                            defaultMinValue.min,
                            onKeydown
                        );
                    }}
                />
                {hasSeconds && (
                    <>
                        <span>:</span>
                        <input
                            v-model={seconds}
                            value={seconds}
                            disabled={disabled}
                            onInput={(e) =>
                                handleOnChange(
                                    e,
                                    timeFormat,
                                    value,
                                    'seconds',
                                    defaultMaxValue.sec,
                                    defaultMinValue.sec,
                                    onChange
                                )
                            }
                            onBlur={(e) => {
                                handleOnBlur(
                                    e,
                                    timeFormat,
                                    value,
                                    'seconds',
                                    defaultMaxValue.sec,
                                    defaultMinValue.sec,
                                    onBlur
                                );
                            }}
                            onKeydown={(e) => {
                                changeOnPressArrows(
                                    e,
                                    value,
                                    timeFormat,
                                    'seconds',
                                    defaultMaxValue.sec,
                                    defaultMinValue.sec,
                                    onKeydown
                                );
                            }}
                        />
                    </>
                )}
                {hasMilliseconds && (
                    <>
                        <span>:</span>
                        <input
                            v-model={milliseconds}
                            value={milliseconds}
                            disabled={disabled}
                            onInput={(e) =>
                                handleOnChange(
                                    e,
                                    timeFormat,
                                    value,
                                    'millisecond',
                                    defaultMaxValue.ms,
                                    defaultMinValue.ms,
                                    onChange
                                )
                            }
                            onBlur={(e) => {
                                handleOnBlur(
                                    e,
                                    timeFormat,
                                    value,
                                    'millisecond',
                                    defaultMaxValue.ms,
                                    defaultMinValue.ms,
                                    onBlur
                                );
                            }}
                            onKeydown={(e) => {
                                changeOnPressArrows(
                                    e,
                                    value,
                                    timeFormat,
                                    'millisecond',
                                    defaultMaxValue.ms,
                                    defaultMinValue.ms,
                                    onKeydown
                                );
                            }}
                        />
                    </>
                )}
                {has12H && (
                    <select
                        value={setInitialValue(value)}
                        onChange={(e) => {
                            const element = e.target as HTMLSelectElement;
                            handle12hValueDate(value, hours, element.value);
                        }}
                    >
                        <option>AM</option>
                        <option>PM</option>
                    </select>
                )}
            </div>
            <div class={CSS.inputTime__bottomArrow}></div>
        </div>
    );
};

export default InputTime;
