import { Meta, StoryFn } from '@storybook/vue3';
import CorInputCheckbox from './CorInputCheckbox';
import { CorInputCheckboxProps } from './CorInputCheckbox.types';

export default {
    title: 'Inputs/Input Checkbox',
    component: CorInputCheckbox,
    argTypes: {
        label: { type: 'string' },
        disabled: { type: 'boolean' },
    },
} as Meta;

const Template: StoryFn<CorInputCheckboxProps> = (args) => ({
    components: { CorInputCheckbox },
    setup() {
        return { args };
    },
    template: `<CorInputCheckbox v-bind="args" />`,
});

const MultiTemplate: StoryFn = () => ({
    components: { CorInputCheckbox },
    setup() {
        return {};
    },
    template: `
        <div>
            <CorInputCheckbox label="First input" name="story" checked />
            <CorInputCheckbox label="Second input" name="story" />
            <CorInputCheckbox label="Third input" name="story" />
            <CorInputCheckbox label="Fourth input" name="story" />
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
