import { Meta, StoryFn } from '@storybook/vue3';
import CorInputSwitch from './CorInputSwitch';

export default {
    title: 'Inputs/Input Switch',
    component: CorInputSwitch,
    argTypes: {
        label: { type: 'string' },
        disabled: { type: 'boolean' },
        radioPosition: { control: 'select', options: ['left', 'right'] },
    },
} as Meta;

const Template = (args: any) => ({
    components: { CorInputSwitch },
    setup() {
        return { args };
    },
    template: `<CorInputSwitch v-bind="args"/>`,
});

export const Default: any = Template.bind({});
Default.args = {
    label: 'Label',
    disabled: false,
    value: true,
    onChange: (e) => console.log(e),
};
