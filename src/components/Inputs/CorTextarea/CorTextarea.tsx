import classNames from 'classnames';
import { FunctionalComponent } from 'vue';
import CSS from './CorTextarea.module.scss';
import { CorTextareaProps } from './CorTextarea.types';

const CorTextarea: FunctionalComponent<CorTextareaProps> = ({
    disabled,
    label,
    statusMessage,
    maxLength,
    minLength,
    placeholder,
    value,
    status,
    className,
    textareaClassName,
    onChange,
    onSubmit,
}) => {
    const classes = classNames(CSS.cor_textarea, className, {
        [CSS['cor_textarea--success']]: status === 'success',
        [CSS['cor_textarea--warning']]: status === 'warning',
        [CSS['cor_textarea--error']]: status === 'error',
    });

    const onInput = (e: Event) => {
        if (!onChange) return;

        const inputElement = e.target as HTMLInputElement;
        onChange(inputElement.value);
    };

    return (
        <div class={classes}>
            {label && <label>{label}</label>}
            <textarea
                value={value}
                disabled={disabled}
                placeholder={placeholder}
                maxlength={maxLength}
                minlength={minLength}
                onInput={onInput}
                onSubmit={onSubmit}
                class={textareaClassName}
            />
            {statusMessage && <div class={CSS.cor_textarea__status}>{statusMessage}</div>}
        </div>
    );
};

export default CorTextarea;
