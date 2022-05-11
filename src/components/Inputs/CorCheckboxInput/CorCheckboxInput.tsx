import classNames from 'classnames';
import { FunctionalComponent } from 'vue';
import { CorCheckboxInputProps } from './CorCheckboxInput.types';
import CSS from './CorCheckboxInput.module.scss';
import CorCheckIcon from '../../Icons/CorCheckIcon/CorCheckIcon';

const CorCheckboxInput: FunctionalComponent<CorCheckboxInputProps> = ({
    id,
    label,
    checked,
    disabled,
    name,
    onChange,
}) => {
    const classes = classNames(CSS.cor_checkbox_input);

    return (
        <div class={classes}>
            <label>
                <input
                    type="checkbox"
                    id={id}
                    checked={checked}
                    onChange={onChange}
                    name={name}
                    disabled={disabled}
                />
                <CorCheckIcon />
                {label}
            </label>
        </div>
    );
};

export default CorCheckboxInput;
