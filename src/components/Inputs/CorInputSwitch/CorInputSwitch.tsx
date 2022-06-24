import classNames from 'classnames';
import { FunctionalComponent } from 'vue';
import CSS from './CorInpurSwitch.module.scss';
import { CorInputSwitchPorps } from './CorInputSwitch.types';

const CorInputSwitch: FunctionalComponent<CorInputSwitchPorps> = ({
    label,
    onChange,
    checked = false,
    disabled,
    inline,
    labelPosition = 'left',
    className,
    classSwitch
}) => {
    let defaultClass;

    if (inline) {
        if (labelPosition === 'right') {
            defaultClass = CSS['CorInpurSwitch__inline--right'];
        } else {
            defaultClass = CSS.CorInpurSwitch__inline;
        }
    } else {
        defaultClass = CSS.CorInpurSwitch;
    }

    const classes = classNames(defaultClass, className);
    const switchClass = classNames(CSS.CorInpurSwitch__switchElement__circle, classSwitch)
    return (
        <div class={classes}>
            {label && <div class={CSS.CorInpurSwitch__label}>{label}</div>}

            <div class={CSS.CorInpurSwitch__switchElement}>
                <input
                    type="checkbox"
                    v-model={checked}
                    onClick={onChange}
                    checked={checked}
                    disabled={disabled}
                />
                <span class={switchClass}></span>
            </div>
        </div>
    );
};

export default CorInputSwitch;
