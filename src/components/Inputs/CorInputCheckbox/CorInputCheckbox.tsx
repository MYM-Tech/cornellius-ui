import classNames from 'classnames';
import { FunctionalComponent } from 'vue';
import { CorInputCheckboxProps } from './CorInputCheckbox.types';
import CSS from './CorInputCheckbox.module.scss';
import CorCheckIcon from '../../Icons/CorCheckIcon/CorCheckIcon';

const CorInputCheckbox: FunctionalComponent<CorInputCheckboxProps> = ({
    id,
    label,
    checked,
    disabled,
    name,
    customIcon,
    onChange,
}) => {
    const classes = classNames(CSS.cor_input_checkbox);

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
                {customIcon || <CorCheckIcon />}
                {label}
            </label>
        </div>
    );
};

export default CorInputCheckbox;
