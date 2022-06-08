import { Meta, StoryFn } from '@storybook/vue3';
import CorInputText from './CorInputText';
import { CorInputTextProps } from './CorInputText.types';

export default {
    title: 'Cornellius/Inputs/Input Text/Components',
    component: CorInputText,
    argTypes: {
        label: { type: 'string' },
        disabled: { type: 'boolean' },
        placeholder: { type: 'string' },
        value: { type: 'string' },
        status: { control: 'select', options: ['success', 'warning', 'error', undefined] },
        statusMessage: { type: 'string' },
        onChange: { action: 'onChange' },
        onSubmit: { action: 'onSubmit' },
    },
} as Meta;

const Template: StoryFn<CorInputTextProps> = (args) => ({
    components: { CorInputText },
    setup() {
        return { args };
    },
    template: `<CorInputText v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
    label: 'Label',
    disabled: false,
    placeholder: 'Placeholder',
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Disabled text input',
    disabled: true,
    value: 'Not editable',
};

export const ErrorWithMessage = Template.bind({});
ErrorWithMessage.args = {
    label: 'Input with error message',
    disabled: false,
    status: 'error',
    statusMessage: 'This is an error message',
    value: 'Wrong value',
};
