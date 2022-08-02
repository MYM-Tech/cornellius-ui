import { defineComponent, PropType, reactive } from 'vue';
import changeOnPressArrows from './hooks/changeOnPressArrows';
import handleOnBlur from './hooks/handleOnBlur';
import handleOnChange from './hooks/handleOnChange';

const InputTime = defineComponent({
    props: {
        maxValue: {
            type: Number,
            required: true,
        },
        minValue: {
            type: Number,
            required: true,
        },
        onChange: {
            type: Function as PropType<(event: Event, newTime: Date) => void>,
            required: false,
        },
        onBlur: {
            type: Function as PropType<(event: Event, newTime: Date) => void>,
            required: false,
        },
        onKeydown: {
            type: Function as PropType<(event: KeyboardEvent, newTime: Date) => void>,
            default: (_e: KeyboardEvent, _date: Date) => [{ e: _e, date: _date }],
        },
        type: {
            type: String as PropType<'hours' | 'minutes' | 'seconds' | 'milliseconds'>,
            required: true,
            validator(value: string) {
                return ['hours', 'minutes', 'seconds', 'milliseconds'].includes(value);
            },
        },
        value: {
            type: Number,
            required: true,
        },
        time: {
            type: Date,
            required: true,
        },
        disable: {
            type: Boolean,
            required: false,
        },
        timeFormat: {
            default: 'HH:mm',
            type: String as PropType<
                'h' | 'HH' | 'h:mm' | 'HH:mm' | 'h:mm:ss' | 'HH:mm:ss' | 'h:mm:ss:S' | 'HH:mm:ss:S'
            >,
            validator(value: string) {
                return [
                    'h',
                    'HH',
                    'h:mm',
                    'HH:mm',
                    'h:mm:ss',
                    'HH:mm:ss',
                    'h:mm:ss:S',
                    'HH:mm:ss:S',
                ].includes(value);
            },
            require: true,
        },
    },
    emits: ['update:value'],
    setup(props) {
        const value = reactive({ value: props.value });
        return () => (
            <input
                value={value.value}
                disabled={props.disable}
                onInput={(e) =>
                    handleOnChange(
                        e,
                        props.timeFormat,
                        props.time,
                        props.type,
                        props.maxValue,
                        props.minValue,
                        props.onChange
                    )
                }
                onBlur={(e) => {
                    handleOnBlur(
                        e,
                        props.timeFormat,
                        props.time,
                        props.type,
                        value.value,
                        props.value,
                        props.onBlur
                    );
                }}
                onKeydown={(e) => {
                    changeOnPressArrows(
                        e,
                        props.time,
                        props.timeFormat,
                        props.type,
                        props.maxValue,
                        props.minValue,
                        props.onKeydown
                    );
                }}
            />
        );
    },
});

export default InputTime;
