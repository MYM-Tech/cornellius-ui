import classNames from 'classnames';
import { FunctionalComponent, ref } from 'vue';
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
    onBlur,
    onChange,
    onSubmit,
    onKeydown,
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
                v-model={value}
                value={value}
                disabled={disabled}
                placeholder={placeholder}
                maxlength={maxLength}
                minlength={minLength}
                type="text"
                onInput={onInput}
                onBlur={onBlur}
                onSubmit={onSubmit}
                onKeydown={onKeydown}
            />
            {statusMessage && <div class={CSS.cor_input_text__status}>{statusMessage}</div>}
        </div>
    );
};

export default CorInputText;
