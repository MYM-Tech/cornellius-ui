import { FunctionalComponent } from 'vue';
import CSS from './CorInpurSwitch.module.scss';
import { CorInputSwitchPorps } from './CorInputSwitchPorps';

const CorInputSwitch: FunctionalComponent<CorInputSwitchPorps> = ({
    label,
    onChange,
    value = true,
}) => (
    <div class={CSS.CorInpurSwitch}>
        <div class={CSS.CorInpurSwitch__label}>{label}</div>
        <div class={CSS.CorInpurSwitch__switchElement}>
            <input type="checkbox" v-model={value} onClick={onChange} checked={value} />
            <span class={CSS.CorInpurSwitch__switchElement__circle}></span>
        </div>
    </div>
);

export default CorInputSwitch;
