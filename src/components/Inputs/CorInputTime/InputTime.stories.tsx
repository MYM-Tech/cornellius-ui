/* eslint-disable import/no-extraneous-dependencies */
import { Meta, StoryFn } from '@storybook/vue3';
import InputTime from './InputTime';
import { InputTimeType } from './InputTime.type';


export default {
    title: 'Inputs/Input Time/jose version',
    component: InputTime,
    argTypes: {
        disabled: { type: 'boolean' },
        placeholder: { type: 'string' },
        value: new Date(),
        status: { control: 'select', options: ['success', 'warning', 'error', undefined] },
        statusMessage: { type: 'string' },
    },
} as Meta;

const Template: StoryFn<InputTimeType> = (args) => (
    <InputTime 
    v-bind={args} 
    value={args.value} 
    onBlur={(e, time) => console.log(e, time)} 
    onKeydown={(e, time) => console.log(e, time)} 
    onChange={(e, time) => console.log(e, time)} 

    />
);

export const Default = Template.bind({});

Default.args = {
    onChange: (e, time) => console.log(e, time),
    onBlur: (e, time) => console.log(e, time),

};
