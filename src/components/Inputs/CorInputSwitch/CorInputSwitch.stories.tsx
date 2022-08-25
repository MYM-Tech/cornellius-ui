import { Meta, StoryFn } from '@storybook/vue3';
import CorInputSwitch from './CorInputSwitch';

export default {
    title: 'Cornellius/Inputs/Input Switch',
    component: CorInputSwitch,
    argTypes: {
        label: { type: 'string' },
        disabled: { type: 'boolean' },
        checked: { type: 'boolean' },
        labelPosition: { control: 'select', options: ['left', 'right'] },
        onChange: { action: 'onChange' },
    },
} as Meta;

const Template: StoryFn = (args) => <CorInputSwitch {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Label',
    disabled: false,
    checked: true,
    inline: false,
    onChange: (e) => console.log(e.target.value),
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Label',
    disabled: true,
    checked: true,
    onChange: (e) => console.log(e.target.value),
};

const MultiTemplate: StoryFn = (args) => ({
    components: { CorInputSwitch },
    setup() {
        return { args };
    },
    template: `
        <div>
            <CorInputSwitch  label="First input" checked="true"/>
            <CorInputSwitch  label="Second input" />
            <CorInputSwitch  label="Third input" checked="true" />
            <CorInputSwitch  label="Fourth input" />
        </div>
    `,
});

export const MultipleInput = MultiTemplate.bind({});
