import { Meta, StoryFn } from '@storybook/vue3';
import CorPopup from './CorPopup';
import CorInputText from '../Inputs/CorInputText/CorInputText';

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

const PopoverTemplate: StoryFn = (args) => (
    <CorPopup
        {...args}
        trigger="click"
        onOpen={() => console.log('Opened !')}
        onClose={() => console.log('Closed !')}
        autoFocus={true}
    >
        {{
            default: () => <button>Click me !</button>,
            content: () => (
                <div style="padding: 0 0 5px 0">
                    <CorInputText label="Popper input" placeholder="You can edit me" />
                </div>
            ),
        }}
    </CorPopup>
);

export const Popover = PopoverTemplate.bind({});
Popover.args = {
    position: 'top',
};

const TooltipTemplate: StoryFn = (args) => (
    <CorPopup
        {...args}
        trigger="hover"
        onOpen={() => console.log('Opened !')}
        onClose={() => console.log('Closed !')}
    >
        {{
            default: () => <button>Hover me !</button>,
            content: () => <div>Multipass !</div>,
        }}
    </CorPopup>
);

export const Tooltip = TooltipTemplate.bind({});
Tooltip.args = {
    position: 'top',
    withArrow: true,
};
