import { FunctionalComponent } from 'vue';
import CSS from './CorInpurSwitch.module.scss';
import { CorInputSwitchPorps } from './CorInputSwitch.types';

const CorInputSwitch: FunctionalComponent<CorInputSwitchPorps> = ({
    label,
    onChange,
    checked = false,
    disabled,
}) => (
    <div class={CSS.CorInpurSwitch}>
        {label && <div class={CSS.CorInpurSwitch__label}>{label}</div>}

        <div class={CSS.CorInpurSwitch__switchElement}>
            <input
                type="checkbox"
                v-model={checked}
                onClick={onChange}
                checked={checked}
                disabled={disabled}
            />
            <span class={CSS.CorInpurSwitch__switchElement__circle}></span>
        </div>
    </div>
);

export default CorInputSwitch;
