import classNames from 'classnames';
import { FunctionalComponent } from 'vue';
import CSS from './CorInputMoney.module.scss';
import { CorInputMoneyProps } from './CorInputMoney.types';
import formatValue from './helpers/formatValue';

const CorInputMoney: FunctionalComponent<CorInputMoneyProps> = ({
    disabled,
    label,
    statusMessage,
    max,
    min,
    placeholder,
    value = '0',
    status,
    showButtons = true,
    symbol = '$',
    symbolPosition = 'left',
    decimals = 2,
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
        const inputElement = e.target as HTMLInputElement;
        inputElement.value = formatValue(value, decimals, min, max);

        if (!onChange) return;

        onChange(`${Number(inputElement.value) * 100}`);
    };

    return (
        <div class={classes}>
            {label && <label>{label}</label>}
            <div class={symbolClasses}>
                {symbol && <div class={CSS.cor_currency_symbol}>{symbol}</div>}
                <input
                    v-model={value}
                    value={value}
                    disabled={disabled}
                    placeholder={placeholder}
                    type="text"
                    onBlur={onInput}
                    onSubmit={onSubmit}
                />
            </div>
            {statusMessage && <div class={CSS.cor_input_number__status}>{statusMessage}</div>}
        </div>
    );
};

export default CorInputMoney;
