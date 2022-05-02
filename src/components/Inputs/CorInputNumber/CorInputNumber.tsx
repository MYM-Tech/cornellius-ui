import classNames from 'classnames';
import { FunctionalComponent } from 'vue';
import CSS from './CorInputNumber.module.scss';
import { CorInputNumberProps } from './CorInputNumber.types';

const CorInputText: FunctionalComponent<CorInputNumberProps> = ({
    disabled,
    label,
    statusMessage,
    max,
    min,
    placeholder,
    value,
    status,
    onChange,
    onSubmit,
}) => {
    const classes = classNames(CSS.cor_input_number, {
        [CSS['cor_input_number--success']]: status === 'success',
        [CSS['cor_input_number--warning']]: status === 'warning',
        [CSS['cor_input_number--error']]: status === 'error',
    });

    const onInput = (e: Event) => {
        if (!onChange) return;

        e.preventDefault();

        const inputElement = e.target as HTMLInputElement;
        onChange(inputElement.value);
    };

    return (
        <div class={classes}>
            {label && <label>{label}</label>}
            <input
                value={value}
                disabled={disabled}
                placeholder={placeholder}
                min={min}
                max={max}
                type="number"
                onInput={onInput}
                onSubmit={onSubmit}
                onChange={onInput}
            />
            {statusMessage && <div class={CSS.cor_input_number__status}>{statusMessage}</div>}
        </div>
    );
};

export default CorInputText;
