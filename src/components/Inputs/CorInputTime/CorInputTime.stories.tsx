/* eslint-disable import/no-extraneous-dependencies */
import { Meta, StoryFn } from '@storybook/vue3';
import CorInputTime from './CorInputTime';
import { CorInputTimeType } from './CorInputTime.type';

export default {
    title: 'Cornellius/Inputs/Input Time/Components',
    component: CorInputTime,
    argTypes: {
        disabled: { type: 'boolean' },
        value: new Date(),
        status: { control: 'select', options: ['success', 'warning', 'error', undefined] },
        timeFormat: {
            control: 'select',
            options: ['h', 'HH', 'h:mm', 'HH:mm', 'h:mm:ss', 'HH:mm:ss', 'h:mm:ss:S', 'HH:mm:ss:S'],
        },
        onChange: { action: 'onChange' },
        onBlur: { action: 'onBlur' },
        onKeyUp: { action: 'onKeyUp' },
        onKeydown: { action: 'onKeydown' },
    },
} as Meta<CorInputTimeType>;

const Template: StoryFn<CorInputTimeType> = (args) => <CorInputTime {...args} />;

export const Default = Template.bind({});

Default.args = {
    timeFormat: 'HH:mm',
    onblur: (e, time) => console.log(e, time),
};

export const WithSecconds = Template.bind({});

WithSecconds.args = {
    timeFormat: 'HH:mm:ss',
    onblur: (e, time) => console.log(e, time),
};

export const Format12h = Template.bind({});

Format12h.args = {
    timeFormat: 'h:mm:ss',
    onblur: (e, time) => console.log(e, time),
};

export const WithMillisecconds = Template.bind({});

WithMillisecconds.args = {
    timeFormat: 'h:mm:ss:S',
    onblur: (e, time) => console.log(e, time),
};