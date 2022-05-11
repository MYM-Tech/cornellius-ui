import { Meta, StoryFn } from '@storybook/vue3';
import CorInputRadio from './CorInputRadio';
import { CorInputRadioProps } from './CorInputRadio.types';

export default {
    title: 'Inputs/Input Radio',
    component: CorInputRadio,
    argTypes: {
        label: { type: 'string' },
        disabled: { type: 'boolean' },
    },
} as Meta;

const Template: StoryFn<CorInputRadioProps> = (args) => ({
    components: { CorInputRadio },
    setup() {
        return { args };
    },
    template: `<CorInputRadio v-bind="args" />`,
});

const MultiTemplate: StoryFn = () => ({
    components: { CorInputRadio },
    setup() {
        return {};
    },
    template: `
        <div>
            <CorInputRadio label="First input" name="story" checked />
            <CorInputRadio label="Second input" name="story" />
            <CorInputRadio label="Third input" name="story" />
            <CorInputRadio label="Fourth input" name="story" />
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
