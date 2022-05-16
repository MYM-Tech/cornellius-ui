import classNames from 'classnames';
import { FunctionalComponent } from 'vue';
import { CorInputRadioProps } from './CorInputRadio.types';
import CSS from './CorInputRadio.module.scss';

const CorInputRadio: FunctionalComponent<CorInputRadioProps> = ({
    id,
    label,
    checked,
    disabled,
    name,
    radioPosition = 'left',
    onChange,
}) => {
    const classes = classNames(CSS.cor_input_radio, {
        [CSS['cor_input_radio--right']]: radioPosition === 'right',
    });

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

export default CorInputRadio;
