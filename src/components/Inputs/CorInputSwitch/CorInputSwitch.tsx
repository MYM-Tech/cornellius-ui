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
        classWrapper: {
            type: String,
            required: false,
        },
        classLabel: {
            type: String,
            required: false,
        },
        classSwitchWrapper: {
            type: String,
            required: false,
        },
        classSwitchLever: {
            type: String,
            required: false,
        },
    },
    setup(props) {
        let defaultClass;

        if (props.inline) {
            if (props.labelPosition === 'right') {
                defaultClass = CSS['cor_input_switch--inline--right'];
            } else {
                defaultClass = CSS['cor_input_switch--inline'];
            }
        } else {
            defaultClass = CSS.cor_input_switch;
        }

        const classesWrapper = classNames(defaultClass, {
            [props.classWrapper as string]: !!props.classWrapper,
        });

        const classesLabel = classNames(CSS.cor_input_switch_label, {
            [props.classLabel as string]: !!props.classLabel,
        });

        const classesSwitchWrapper = classNames(CSS.cor_input_switch_wrapper, {
            [props.classSwitchWrapper as string]: !!props.classSwitchWrapper,
        });

        const classesSwitchLever = classNames(CSS.cor_input_switch_wrapper_lever, {
            [props.classSwitchLever as string]: !!props.classSwitchLever,
        });

        const checked = ref(props.checked);

        return () => (
            <div class={classesWrapper}>
                {props.label && <span class={classesLabel}>{props.label}</span>}

                <div class={classesSwitchWrapper}>
                    <input
                        v-model={checked.value}
                        value={checked.value}
                        type="checkbox"
                        onInput={props.onChange}
                        disabled={props.disabled}
                    />
                    <span class={classesSwitchLever}></span>
                </div>
            </div>
        );
    },
});

export default CorInputSwitch;
