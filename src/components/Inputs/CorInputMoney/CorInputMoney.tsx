import classNames from 'classnames';
import { FunctionalComponent } from 'vue';
import CSS from './CorInputMoney.module.scss';
import { CorInputMoneyProps } from './CorInputMoney.types';

const CorInputMoney: FunctionalComponent<CorInputMoneyProps> = ({
    disabled,
    label,
    statusMessage,
    max,
    min,
    placeholder,
    value,
    status,
    showButtons = true,
    symbol = '$',
    symbolPosition = 'left',
    onChange,
    onSubmit,
}) => {
    const classes = classNames(CSS.cor_input_money, {
        [CSS['cor_input_money--success']]: status === 'success',
        [CSS['cor_input_money--warning']]: status === 'warning',
        [CSS['cor_input_money--error']]: status === 'error',
        [CSS['cor_input_money--no-btn']]: !showButtons,
    });

    const symbolClasses = classNames(CSS.cor_input_money__symbol_group, {
        [CSS['cor_input_money__symbol_group--right']]: symbolPosition === 'right',
    });

    const onInput = (e: Event) => {
        if (!onChange) return;

        const inputElement = e.target as HTMLInputElement;
        onChange(inputElement.value);
    };

    return (
        <div class={classes}>
            {label && <label>{label}</label>}
            <div class={symbolClasses}>
                {symbol && <div class={CSS.cor_currency_symbol}>{symbol}</div>}
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
            </div>
            {statusMessage && <div class={CSS.cor_input_number__status}>{statusMessage}</div>}
        </div>
    );
};

export default CorInputMoney;
