import { Meta, StoryFn } from '@storybook/vue3';
import CorInputCheckbox from './CorInputCheckbox';

export default {
    title: 'Inputs/Input Checkbox',
    component: CorInputCheckbox,
    argTypes: {
        label: { type: 'string' },
        disabled: { type: 'boolean' },
        checkPosition: { control: 'select', options: ['left', 'right'] },
        onChange: { action: 'onChange' },
    },
} as Meta;

const Template: StoryFn = (args) => ({
    components: { CorInputCheckbox },
    setup() {
        return { args };
    },
    template: `<CorInputCheckbox v-bind="args" />`,
});

const MultiTemplate: StoryFn = (args) => ({
    components: { CorInputCheckbox },
    setup() {
        return { args };
    },
    template: `
        <div>
            <CorInputCheckbox :checkPosition="args.checkPosition" label="First input" name="story" checked />
            <CorInputCheckbox :checkPosition="args.checkPosition" label="Second input" name="story" />
            <CorInputCheckbox :checkPosition="args.checkPosition" label="Third input" name="story" />
            <CorInputCheckbox :checkPosition="args.checkPosition" label="Fourth input" name="story" />
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
    onChange: (e) => {
        console.log(e);
    },
};
