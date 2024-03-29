import { Meta, StoryFn } from '@storybook/vue3';
import CorButton from './CorButton';
import { CorButtonProps } from './CorButton.types';
import CorCheckIcon from '../Icons/CorCheckIcon/CorCheckIcon';

export default {
    title: 'Cornellius/Button',
    component: CorButton,
    argTypes: {
        label: { type: 'string' },
        disabled: { type: 'boolean' },
        type: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
        size: { control: 'select', options: ['regular', 'large', 'small', 'micro'] },
        onClick: { action: 'onClick' },
    },
} as Meta;

const Template: StoryFn<CorButtonProps> = (args) => ({
    components: { CorButton, CorCheckIcon },
    setup() {
        return { args };
    },
    template: `<CorButton v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
    label: 'Label',
    disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Disabled button',
    disabled: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    leftIcon: `👍`,
    label: 'Like',
};
