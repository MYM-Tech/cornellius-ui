import { Meta, StoryFn } from '@storybook/vue3';
import CorInputNumber from './CorInputNumber';
import { CorInputNumberProps } from './CorInputNumber.types';

export default {
    title: 'Cornellius/Inputs/Input Number/Component',
    component: CorInputNumber,
    argTypes: {
        label: { type: 'string' },
        disabled: { type: 'boolean' },
        placeholder: { type: 'string' },
        value: { type: 'number' },
        status: { control: 'select', options: ['success', 'warning', 'error', undefined] },
        statusMessage: { type: 'string' },
        onChange: { action: 'onChange' },
        onSubmit: { action: 'onSubmit' },
        min: { type: 'number' },
        max: { type: 'number' },
        showButtons: { type: 'boolean', defaultValue: true },
    },
} as Meta;

const Template: StoryFn<CorInputNumberProps> = (args) => ({
    components: { CorInputNumber },
    setup() {
        return { args };
    },
    template: `<CorInputNumber v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
    label: 'Label',
    disabled: false,
    placeholder: 'Placeholder',
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Disabled number input',
    disabled: true,
    value: 'Not editable',
};
