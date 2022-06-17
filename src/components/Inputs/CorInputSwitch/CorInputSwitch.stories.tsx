import { Meta, StoryFn } from '@storybook/vue3';
import CorInputSwitch from './CorInputSwitch';
import { CorInputSwitchPorps } from './CorInputSwitch.types';

export default {
    title: 'Inputs/Input Switch',
    component: CorInputSwitch,
    argTypes: {
        label: { type: 'string' },
        disabled: { type: 'boolean' },
    },
} as Meta;

const Template: StoryFn<CorInputSwitchPorps> = (args) => ({
    components: { CorInputSwitch },
    setup() {
        return { args };
    },
    template: `<CorInputSwitch v-bind="args"/>`,
});

export const Default = Template.bind({});
Default.args = {
    label: 'Label',
    disabled: false,
    checked: true,
    onChange: (e) => console.log(e),
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Label',
    disabled: true,
    checked: true,
    onChange: (e) => console.log(e),
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
