import { Meta, StoryFn } from '@storybook/vue3';
import CorInputCheckbox from './CorInputCheckbox';
import CSS from './stories.module.scss';

export default {
    title: 'Cornellius/Inputs/Input Checkbox',
    component: CorInputCheckbox,
    argTypes: {
        label: { type: 'string' },
        disabled: { type: 'boolean' },
        checkPosition: { control: 'select', options: ['left', 'right'] },
        onChange: { action: 'onChange' },
        class: { type: 'string' },
        name: { type: 'string' },
        defaultValue: { type: 'boolean' },
        onBlur: { action: 'onBlur' },
    },
} as Meta;

const Template: StoryFn = (args) => ({
    components: { CorInputCheckbox },
    setup() {
        return { args };
    },
    template: `<CorInputCheckbox v-bind="args" />`,
});

const MultiTemplate: StoryFn = (args) => (
    <>
        <CorInputCheckbox
            class={CSS.checkboxBlue}
            checkPosition={args.checkPosition}
            label="First input"
            name={args.name}
            disabled={args.disabled}
            onBlur={args.onBlur}
            defaultValue={true}
        />
        <CorInputCheckbox
            checkPosition={args.checkPosition}
            label="Second input"
            name={args.name}
            disabled={args.disabled}
            onBlur={args.onBlur}
            defaultValue={args.defaultValue}
        />
        <CorInputCheckbox
            checkPosition={args.checkPosition}
            label="Third input"
            name={args.name}
            disabled={args.disabled}
            onBlur={args.onBlur}
            defaultValue={args.defaultValue}
        />
        <CorInputCheckbox
            checkPosition={args.checkPosition}
            label="Fourth input"
            name={args.name}
            disabled={args.disabled}
            onBlur={args.onBlur}
            defaultValue={args.defaultValue}
        />
    </>
);

export const MultipleInput = MultiTemplate.bind({});

export const Default = Template.bind({});
Default.args = {
    label: 'Label',
    disabled: false,
    defaultValue: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Disabled checkbox input',
    disabled: true,
    value: 'Not editable',
    onChange: (e) => {
        console.log(e);
    },
};
