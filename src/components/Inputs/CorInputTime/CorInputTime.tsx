/* eslint-disable prefer-const */

import classNames from 'classnames';
import handle12hValueDate from './hooks/handle12hValueDate';
import { parsingTypeFormat, parsingValue } from './hooks/parsingValue';
import CSS from './InputTime.module.scss';
import { CorInputTimeType } from './InputTime.type';
import setInitialValue from './hooks/setInitialValue';
import InputTime from './InputTime';

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

const CorInputTime = ({
    classes,
    value = new Date(),
    disabled,
    maxTime,
    minTime,
    onBlur = (e) => e,
    onChange = (e) => e,
    onKeydown = (e) => e,
    timeFormat = 'HH:mm',
}: CorInputTimeType) => {
    const className = classNames(CSS.input__time, classes);
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

    return (
        <div class={className}>
            <div class={CSS.inputTime__blockTime}>
                <InputTime
                    maxValue={defaultMaxValue.hour}
                    minValue={defaultMinValue.hour}
                    onKeydown={onKeydown}
                    time={value}
                    type={'hours'}
                    value={hours}
                    disable={disabled}
                    onBlur={onBlur}
                    onChange={onChange}
                    timeFormat={timeFormat}
                />
                <span>:</span>
                <InputTime
                    maxValue={defaultMaxValue.min}
                    minValue={defaultMinValue.min}
                    onKeydown={onKeydown}
                    time={value}
                    type={'minutes'}
                    value={minutes}
                    disable={disabled}
                    onBlur={onBlur}
                    onChange={onChange}
                    timeFormat={timeFormat}
                />
                {hasSeconds && (
                    <>
                        <span>:</span>
                        <InputTime
                            maxValue={defaultMaxValue.sec}
                            minValue={defaultMinValue.sec}
                            onKeydown={onKeydown}
                            time={value}
                            type={'seconds'}
                            value={seconds}
                            disable={disabled}
                            onBlur={onBlur}
                            onChange={onChange}
                            timeFormat={timeFormat}
                        />
                    </>
                )}
                {hasMilliseconds && (
                    <>
                        <span>.</span>
                        <InputTime
                            maxValue={defaultMaxValue.ms}
                            minValue={defaultMinValue.ms}
                            onKeydown={onKeydown}
                            time={value}
                            type={'milliseconds'}
                            value={milliseconds}
                            disable={disabled}
                            onBlur={onBlur}
                            onChange={onChange}
                            timeFormat={timeFormat}
                        />
                    </>
                )}
                {has12H && (
                    <select
                        class={CSS.inputTime__blockTime__selectAMPM}
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
        </div>
    );
};

export default CorInputTime;
