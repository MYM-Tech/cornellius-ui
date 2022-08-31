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
    className = '',
    variant = 'text',
    onBlur,
    onChange,
    onSubmit,
    onKeydown,
}) => {
    const classes = classNames(CSS.cor_input_text, className, {
        [CSS['cor_input_text--success']]: status === 'success',
        [CSS['cor_input_text--warning']]: status === 'warning',
        [CSS['cor_input_text--error']]: status === 'error',
    });

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
                type={variant}
                onInput={onChange}
                onBlur={onBlur}
                onSubmit={onSubmit}
                onKeydown={onKeydown}
            />
            {statusMessage && <div class={CSS.cor_input_text__status}>{statusMessage}</div>}
        </div>
    );
};

export default CorInputText;
