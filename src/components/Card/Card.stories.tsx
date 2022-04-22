import { Meta, StoryFn } from '@storybook/vue3';
import { Card, CardProps } from './Card';

export default {
    title: 'Example/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
        onClick: {},
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
        },
    },
} as Meta;

type CardStoryArgs = CardProps & {
    content: string;
};

const Template: StoryFn<CardStoryArgs> = (args) => ({
    components: { Card },
    setup() {
        return { args };
    },
    template: `<Card v-bind="args">${args.content}</Card>`,
});

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    content: 'This is a card',
};
