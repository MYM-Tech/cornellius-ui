import { Meta, StoryFn } from '@storybook/vue3';
import CorInputMoney from './CorInputMoney';
import { CorInputMoneyProps } from './CorInputMoney.types';

export default {
    title: 'Inputs/Input Money',
    component: CorInputMoney,
    argTypes: {
        label: { type: 'string' },
        disabled: { type: 'boolean' },
        placeholder: { type: 'string' },
        value: { type: 'number' },
        status: { control: 'select', options: ['success', 'warning', 'error', undefined] },
        statusMessage: { type: 'string' },
        onChange: { action: 'onChange' },
        onSubmit: { action: 'onSubmit' },
        decimals: { type: 'number' },
        min: { type: 'number' },
        max: { type: 'number' },
        showButtons: { type: 'boolean', defaultValue: true },
        symbolPosition: { control: 'select', options: ['left', 'right'] },
        symbol: { type: 'string', defaultValue: '$' },
    },
} as Meta;

const Template: StoryFn<CorInputMoneyProps> = (args) => ({
    components: { CorInputMoney },
    setup() {
        return { args };
    },
    template: `<CorInputMoney v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
    label: 'Label',
    disabled: false,
    placeholder: 'Placeholder',
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Disabled money input',
    disabled: true,
    value: 'Not editable',
};
