import { Meta, StoryFn } from '@storybook/vue3';
import { MainLayout } from '../MainLayout/MainLayout';
import { Sidebar } from '../Sidebar/Sidebar';
import { Content, ContentProps } from './Content';

export default {
  title: 'Layout System/Content',
  component: Content,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

type ContentStoryArgs = ContentProps & {
  style: string;
  reverse: boolean;
  backgroundColor: string
};

const contentStorySidebar: StoryFn<ContentStoryArgs> = (args) => ({
  components: { MainLayout, Sidebar, Content },
  setup() {
    return { args };
  },
  template: `
    <MainLayout v-bind:reverseSidebar="args.reverse" v-bind:style="args.style">
      <Sidebar>
        <div style="background: #e0efe7; height: 100%;"></div>
      </Sidebar>
      <Content>
        <div style="background: #0AD561; height: 100%;"></div>
      </Content>
    </MainLayout>`,
});

export const ContentWithSidebar = contentStorySidebar.bind({});

ContentWithSidebar.args = {
  reverse: false,
  style: 'background: white; border:1px solid red',
};

const contentStory: StoryFn<ContentStoryArgs> = (args) => ({
  components: { MainLayout, Content },
  setup() {
    return { args };
  },
  template: `
    <MainLayout v-bind:style="args.style" v-bind:reverseSidebar="args.reverse">
      <Content v-bind:fullSize="args.fullSize">
        <div style='background: args.backgroundColor; height: 100%;'></div>
      <Content/>
    </MainLayout>`,
});

export const ContentWithoutSidebar = contentStory.bind({});

ContentWithoutSidebar.args = {
  fullSize: true,
  reverse: false,
  style: 'background: white; border:1px solid red',
  backgroundColor: '#0AD561',
};
