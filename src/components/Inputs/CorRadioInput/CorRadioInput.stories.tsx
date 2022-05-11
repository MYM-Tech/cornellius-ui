import { Meta, StoryFn } from '@storybook/vue3';
import CorRadioInput from './CorRadioInput';
import { CorRadioInputProps } from './CorRadioInput.types';

export default {
    title: 'Inputs/Input Radio',
    component: CorRadioInput,
    argTypes: {
        label: { type: 'string' },
        disabled: { type: 'boolean' },
    },
} as Meta;

const Template: StoryFn<CorRadioInputProps> = (args) => ({
    components: { CorRadioInput },
    setup() {
        return { args };
    },
    template: `<CorRadioInput v-bind="args" />`,
});

const MultiTemplate: StoryFn = () => ({
    components: { CorRadioInput },
    setup() {
        return {};
    },
    template: `
        <div>
            <CorRadioInput label="First input" name="story" checked />
            <CorRadioInput label="Second input" name="story" />
            <CorRadioInput label="Third input" name="story" />
            <CorRadioInput label="Fourth input" name="story" />
        </div>
    `,
});

export const MultipleInput = MultiTemplate.bind({});

export const Default = Template.bind({});
Default.args = {
    label: 'Label',
    disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Disabled radio input',
    disabled: true,
    value: 'Not editable',
};
