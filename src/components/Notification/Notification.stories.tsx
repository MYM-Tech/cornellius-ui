import { Meta, StoryFn } from '@storybook/vue3';
import { notification } from '../../index';
import { NotificationArgsProps } from './Notification.types';

export default {
    title: 'Cornellius/Feedback/Notification',
    argTypes: {
      title: { type: 'string' },
      description: { type: 'string' },
      duration: { type: 'number' },
      closable: { type: 'boolean' },
      placement: {
        options: ['top', 'bottom', 'topLeft', 'bottomLeft', 'topRight', 'bottomRight'],
        control: { type: 'radio' },
        type: { name: 'string', required: false },
        defaultValue: 'topRight'
      },
      key: { type: 'string' },
      class: { type: 'string' },
      top: { type: 'string' },
      bottom: { type: 'string' },
      onClick: { action: 'onClick' },
      onClose: { action: 'onClose' },
      getContainer: { type: 'function' },
      render: { type: 'function' },
    }
} as Meta;

const Template: StoryFn<NotificationArgsProps> = (args) => {

  return (
    <div>
      <button onClick={() => notification.open(args)}>Open notification</button>
    </div>
  );
};

export const NotificationStory = Template.bind({});

NotificationStory.args = {
  title: 'Notification title',
  description: 'This is a description. This is a description. This is a description. This is a description.',
  duration: 5,
  placement: 'topRight',
  closable: true,
  key: '',
  class: '',
  style: {},
  top: '24px',
  bottom: '24px',
  getContainer: () => document.body,
  onClick: () => alert('onClick'),
  onClose: () => console.log('onClose'),
};
