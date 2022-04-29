import classNames from 'classnames';
import { FunctionalComponent } from 'vue';
import CSS from './CorInputText.module.scss';
import { CorInputTextProps } from './CorInputText.types';

const CorInputText: FunctionalComponent<CorInputTextProps> = ({
    disabled,
    label,
    statusMessage,
    maxLength,
    minLength,
    placeholder,
    value,
    status,
    onChange,
    onSubmit,
}) => {
    const classes = classNames(CSS.cor_input_text, {
        [CSS['cor_input_text--success']]: status === 'success',
        [CSS['cor_input_text--warning']]: status === 'warning',
        [CSS['cor_input_text--error']]: status === 'error',
    });

    const onInput = (e: Event) => {
        if (!onChange) return;

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
                maxlength={maxLength}
                minlength={minLength}
                type="text"
                onInput={onInput}
                onSubmit={onSubmit}
            />
            {statusMessage && <div class={CSS.cor_input_text__status}>{statusMessage}</div>}
        </div>
    );
};

export default CorInputText;
