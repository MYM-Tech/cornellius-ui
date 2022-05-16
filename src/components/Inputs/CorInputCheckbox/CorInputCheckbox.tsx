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
    checkPosition = 'left',
    onChange,
}) => {
    const classes = classNames(CSS.cor_input_checkbox, {
        [CSS[`cor_input_checkbox--right`]]: checkPosition === 'right',
    });

    return (
        <div class={classes}>
            <label>
                <div class={CSS.cor_check}>
                    <input
                        type="checkbox"
                        id={id}
                        checked={checked}
                        onChange={onChange}
                        name={name}
                        disabled={disabled}
                    />
                    {customIcon || <CorCheckIcon />}
                </div>
                {label}
            </label>
        </div>
    );
};

export default CorInputCheckbox;
