/* eslint-disable prefer-const */

import classNames from 'classnames';
import { defineComponent, PropType } from 'vue';
import handle12hValueDate from './hooks/handle12hValueDate';
import { parsingTypeFormat, parsingValue } from './hooks/parsingValue';
import CSS from './InputTime.module.scss';
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

const CorInputTime = defineComponent({
    props: {
        classes: {
            type: String as PropType<string[] | string>,
        },
        value: {
            default: new Date(),
            type: Date,
            require: false,
        },
        disabled: {
            type: Boolean,
            require: false,
        },
        maxTime: {
            type: Date,
            require: false,
        },
        minTime: {
            type: Date,
            require: false,
        },
        onBlur: {
            type: Function as PropType<(event: Event, newTime: Date) => void>,
            require: false,
        },
        onChange: {
            type: Function as PropType<(event: Event, newTime: Date) => void>,
            require: false,
        },
        onKeydown: {
            type: Function as PropType<(event: KeyboardEvent, newTime: Date) => void>,
            require: false,
        },
        timeFormat: {
            type: String as PropType<
                'h' | 'HH' | 'h:mm' | 'HH:mm' | 'h:mm:ss' | 'HH:mm:ss' | 'h:mm:ss:S' | 'HH:mm:ss:S'
            >,
            default: 'HH:mm',
            require: false,
        },
    },
    setup(props) {
        const className = classNames(CSS.input__time, props.classes);
        const { hasMilliseconds, hasSeconds, has12H } = parsingTypeFormat(props.timeFormat);

        let hours = parsingValue.hours(props.value, has12H);
        let minutes = parsingValue.minutes(props.value);
        let seconds = parsingValue.seconds(props.value);
        let milliseconds = parsingValue.milliseconds(props.value);

        if (props.maxTime !== undefined) {
            defaultMaxValue.hour = props.maxTime.getHours();
            defaultMaxValue.min = props.maxTime.getMinutes();
            defaultMaxValue.sec = props.maxTime.getSeconds();
            defaultMaxValue.ms = props.maxTime.getMilliseconds();
        }

        if (props.minTime !== undefined) {
            defaultMinValue.hour = props.minTime.getHours();
            defaultMinValue.min = props.minTime.getMinutes();
            defaultMinValue.sec = props.minTime.getSeconds();
            defaultMinValue.ms = props.minTime.getMilliseconds();
        }

        return () => (
            <div class={className}>
                <div class={CSS.inputTime__blockTime}>
                    <InputTime
                        maxValue={defaultMaxValue.hour}
                        minValue={defaultMinValue.hour}
                        onKeydown={props.onKeydown}
                        time={props.value}
                        type={'hours'}
                        value={hours}
                        disable={props.disabled}
                        onBlur={props.onBlur}
                        onChange={props.onChange}
                        timeFormat={props.timeFormat}
                    />
                    <span>:</span>
                    <InputTime
                        maxValue={defaultMaxValue.min}
                        minValue={defaultMinValue.min}
                        onKeydown={props.onKeydown}
                        time={props.value}
                        type={'minutes'}
                        value={minutes}
                        disable={props.disabled}
                        onBlur={props.onBlur}
                        onChange={props.onChange}
                        timeFormat={props.timeFormat}
                    />
                    {hasSeconds && (
                        <>
                            <span>:</span>
                            <InputTime
                                maxValue={defaultMaxValue.sec}
                                minValue={defaultMinValue.sec}
                                onKeydown={props.onKeydown}
                                time={props.value}
                                type={'seconds'}
                                value={seconds}
                                disable={props.disabled}
                                onBlur={props.onBlur}
                                onChange={props.onChange}
                                timeFormat={props.timeFormat}
                            />
                        </>
                    )}
                    {hasMilliseconds && (
                        <>
                            <span>.</span>
                            <InputTime
                                maxValue={defaultMaxValue.ms}
                                minValue={defaultMinValue.ms}
                                onKeydown={props.onKeydown}
                                time={props.value}
                                type={'milliseconds'}
                                value={milliseconds}
                                disable={props.disabled}
                                onBlur={props.onBlur}
                                onChange={props.onChange}
                                timeFormat={props.timeFormat}
                            />
                        </>
                    )}
                    {has12H && (
                        <select
                            class={CSS.inputTime__blockTime__selectAMPM}
                            value={setInitialValue(props.value)}
                            onChange={(e) => {
                                const element = e.target as HTMLSelectElement;
                                handle12hValueDate(props.value, hours, element.value);
                            }}
                        >
                            <option>AM</option>
                            <option>PM</option>
                        </select>
                    )}
                </div>
            </div>
        );
    },
});

export default CorInputTime;
