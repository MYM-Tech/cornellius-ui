import { Meta, StoryFn } from '@storybook/vue3';
import CorDatePicker from './CorDatePicker';

export default {
    title: 'Inputs/Input Date',
    component: CorDatePicker,
    argTypes: {},
} as Meta;

const Template: StoryFn = (args) => ({
    components: { CorDatePicker },
    setup() {
        return { args };
    },
    template: `<CorDatePicker />`,
});

export const Default = Template.bind({});
Default.args = {};
