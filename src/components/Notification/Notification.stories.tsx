import { Meta, StoryFn } from '@storybook/vue3';
import { notification } from '../../index';
import { NotificationArgsProps } from './Notification.types';

export default {
    title: 'Cornellius/Feedback/Notification',
    argTypes: {
      placement: {
        options: ['top', 'bottom', 'topLeft', 'bottomLeft', 'topRight', 'bottomRight'],
        control: { type: 'radio' }
      }
    }
} as Meta;

const Button = ({ title, callback }: { title: string; callback: () => void }) => (
    <button onClick={() => callback()}>{title}</button>
);

const Template: StoryFn<NotificationArgsProps> = (args) => {

  return (
    <div>
      <Button callback={() => notification.open(args)} title={'open notification'} />
    </div>
  );
};

export const NotificationStory = Template.bind({});

NotificationStory.args = {
  title: 'Notification title',
  description: 'This is a description. This is a description. This is a description. This is a description.',
  placement: 'top',
  duration: 0,
  closable: true,
  key: 'test',
  class: '',
  style: {},
};
