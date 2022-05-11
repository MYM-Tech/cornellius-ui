import classNames from 'classnames';
import { FunctionalComponent } from 'vue';
import { CorRadioInputProps } from './CorRadioInput.types';
import CSS from './CorRadioInput.module.scss';

const CorRadioInput: FunctionalComponent<CorRadioInputProps> = ({
    id,
    label,
    checked,
    disabled,
    name,
    onChange,
}) => {
    const classes = classNames(CSS.cor_radio_input);

    return (
        <div class={classes}>
            <label>
                <input
                    type="radio"
                    id={id}
                    checked={checked}
                    name={name}
                    onChange={onChange}
                    disabled={disabled}
                />
                {label}
            </label>
        </div>
    );
};

export default CorRadioInput;
