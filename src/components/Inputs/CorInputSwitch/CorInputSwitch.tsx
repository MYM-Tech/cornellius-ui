import classNames from 'classnames';
import { defineComponent, PropType, ref } from 'vue';
import CSS from './CorInpurSwitch.module.scss';

const CorInputSwitch = defineComponent({
    props: {
        id: {
            type: String,
            required: false,
        },
        label: {
            type: String,
            required: false,
        },
        onChange: {
            type: Function as PropType<(e: Event) => void>,
            required: false,
        },
        checked: {
            type: Boolean,
            required: false,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        inline: {
            type: Boolean,
            required: false,
            default: false,
        },
        labelPosition: {
            type: String as PropType<'left' | 'right'>,
            required: false,
            default: 'left',
        },
        className: {
            type: String,
            required: false,
        },
        classSwitch: {
            type: String,
            required: false,
        },
    },
    setup(props) {
        let defaultClass;

        if (props.inline) {
            if (props.labelPosition === 'right') {
                defaultClass = CSS['corInpurSwitch__inline--right'];
            } else {
                defaultClass = CSS.corInpurSwitch__inline;
            }
        } else {
            defaultClass = CSS.corInpurSwitch;
        }

        const classes = classNames(defaultClass, props.className);
        const switchClass = classNames(
            CSS.corInpurSwitch__switchElement__circle,
            props.classSwitch
        );
        const checked = ref(props.checked);

        return () => (
            <div class={classes}>
                {props.label && <div class={CSS.corInpurSwitch__label}>{props.label}</div>}

                <div class={CSS.corInpurSwitch__switchElement}>
                    <input
                        v-model={checked.value}
                        value={checked.value}
                        type="checkbox"
                        onInput={props.onChange}
                        disabled={props.disabled}
                    />
                    <span class={switchClass}></span>
                </div>
            </div>
        );
    },
});

export default CorInputSwitch;
