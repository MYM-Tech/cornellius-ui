import { Meta, StoryFn } from '@storybook/vue3';
import CorCheckboxInput from './CorCheckboxInput';
import { CorCheckboxInputProps } from './CorCheckboxInput.types';

export default {
    title: 'Inputs/Input Checkbox',
    component: CorCheckboxInput,
    argTypes: {
        label: { type: 'string' },
        disabled: { type: 'boolean' },
    },
} as Meta;

const Template: StoryFn<CorCheckboxInputProps> = (args) => ({
    components: { CorCheckboxInput },
    setup() {
        return { args };
    },
    template: `<CorCheckboxInput v-bind="args" />`,
});

const MultiTemplate: StoryFn = () => ({
    components: { CorCheckboxInput },
    setup() {
        return {};
    },
    template: `
        <div>
            <CorCheckboxInput label="First input" name="story" checked />
            <CorCheckboxInput label="Second input" name="story" />
            <CorCheckboxInput label="Third input" name="story" />
            <CorCheckboxInput label="Fourth input" name="story" />
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
    label: 'Disabled checkbox input',
    disabled: true,
    value: 'Not editable',
};
