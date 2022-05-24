import { Meta, StoryFn } from '@storybook/vue3';
import CorInputText from '../CorInputText/CorInputText';
import CorInputTime from './CorInputTime';
import { CorInputTimeProps } from './CorInputTime.types';
// import { CorInputTextProps } from './CorInputText.types';

export default {
    title: 'Inputs/Input Time',
    component: CorInputTime,
    argTypes: {
        label: { type: 'string' },
        disabled: { type: 'boolean' },
        placeholder: { type: 'string' },
        value: { type: 'string' },
        status: { control: 'select', options: ['success', 'warning', 'error', undefined] },
        statusMessage: { type: 'string' },
        onChange: { action: 'onChange' },
        onSubmit: { action: 'onSubmit' },
    },
} as Meta;

const Template: StoryFn<CorInputTimeProps> = (args) => (
    <CorInputTime v-bind={args} value={args.value} />
);

export const Default = Template.bind({});
Default.args = {
    value: new Date(),
    // label: 'Label',
    // disabled: false,
    // placeholder: 'Placeholder',
};

const date1 = new Date();
const date2 = new Date('August 19, 1975 23:15:30');
const DeuxInputTime: StoryFn<{ time1: CorInputTimeProps; time2: CorInputTimeProps }> = (args) => (
    <div>
        <CorInputTime v-bind={args.time1} value={args.time1.value} />
        <br/>
        <div>
            <CorInputText />
            <CorInputTime v-bind={args.time2} value={date2} />
        </div>
       
    </div>
);

export const Deu = DeuxInputTime.bind({});
Deu.args = {
    time1: {
        value: date1,
    }
    // label: 'Label',
    // disabled: false,
    // placeholder: 'Placeholder',
};
// export const Disabled = Template.bind({});
// Disabled.args = {
//     label: 'Disabled time input',
//     disabled: true,
//     value: 'Not editable',
// };

// export const ErrorWithMessage = Template.bind({});
// ErrorWithMessage.args = {
//     label: 'Input with error message',
//     disabled: false,
//     status: 'error',
//     statusMessage: 'This is an error message',
//     value: 'Wrong value',
// };
