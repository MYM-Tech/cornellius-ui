import { Meta, StoryFn } from '@storybook/vue3';
import CorPopup from './CorPopup';

export default {
    title: 'Popup',
    component: CorPopup,
    argTypes: {
        position: {
            control: { type: 'select' },
            options: [
                'top',
                'top-start',
                'top-end',
                'right',
                'right-start',
                'right-end',
                'bottom',
                'bottom-start',
                'bottom-end',
                'left',
                'left-start',
                'left-end',
                'auto',
            ],
        },
        withArrow: {
            control: { type: 'boolean' },
        },
        keyEscClose: {
            control: { type: 'boolean' },
        },
        show: {
            control: { type: 'boolean' },
            defaultValue: true,
        },
    },
} as Meta;

const Template: StoryFn = (args) => (
    <CorPopup
        {...args}
        onOpen={() => console.log('Opened !')}
        onClose={() => console.log('Closed !')}
    >
        {{
            default: () => <button>Click me !</button>,
            content: () => <div>Multipass !</div>,
        }}
    </CorPopup>
);

export const Default = Template.bind({});
Default.args = {};
