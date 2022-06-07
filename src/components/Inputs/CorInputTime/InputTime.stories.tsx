/* eslint-disable import/no-extraneous-dependencies */
import { Meta, StoryFn } from '@storybook/vue3';
import InputTime from './InputTime';
import { InputTimeType } from './InputTime.type';

export default {
    title: 'Inputs/Input Time/jose version',
    component: InputTime,
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
} as Meta<InputTimeType>;

const Template: StoryFn<InputTimeType> = (args) => (
    <InputTime
        value={args.value}
        onBlur={args.onBlur}
        onKeydown={args.onKeydown}
        onChange={args.onChange}
        timeFormat={args.timeFormat}
        disabled={args.disabled}
        minTime={args.minTime}
        maxTime={args.maxTime}
    />
);

export const Default = Template.bind({});

Default.args = {
    timeFormat: 'HH:mm',
    onblur: (e, time) => console.log(e, time),
};
