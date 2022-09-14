import classNames from 'classnames';
import { defineComponent, PropType, reactive, VNode } from 'vue';
import CSS from './CorInputCheckbox.module.scss';
import CorCheckIcon from '../../Icons/CorCheckIcon/CorCheckIcon';

const CorInputCheckbox = defineComponent({
    props: {
        class: String,
        id: String,
        label: String,
        name: String,
        disabled: Boolean,
        defaultValue: Boolean,
        customIcon: Object as PropType<VNode | VNode[]>,
        checkPosition: {
            type: String as PropType<'left' | 'right'>,
            default: 'left',
        },
        onChange: {
            type: Function as PropType<(e: Event) => void>,
        },
        onBlur: {
            type: Function as PropType<(e: Event) => void>,
        },
    },
    setup(props) {
        const state = reactive({ value: props.defaultValue });

        const classes = classNames(props.class, CSS.cor_input_checkbox, {
            [CSS[`cor_input_checkbox--right`]]: props.checkPosition === 'right',
        });

        const onChange = (e: Event) => {
            state.value = !state.value;
            if (props.onChange) {
                props.onChange(e);
            }
        };

        return () => (
            <div class={classes}>
                <label>
                    <div class={CSS.cor_check}>
                        <input
                            type="checkbox"
                            id={props.id}
                            checked={state.value}
                            onChange={onChange}
                            name={props.name}
                            disabled={props.disabled}
                        />
                        {props.customIcon || <CorCheckIcon />}
                    </div>
                    {props.label}
                </label>
            </div>
        );
    },
});

export default CorInputCheckbox;
