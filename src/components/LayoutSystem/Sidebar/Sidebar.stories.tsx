import { Meta, StoryFn } from '@storybook/vue3';
import { MainLayout } from '../MainLayout/MainLayout';
import { Sidebar, SidebarProps } from './Sidebar';

export default {
  title: 'Layout System/Sidebar',
  component: Sidebar,
} as Meta;

type SidebarStoryProps = SidebarProps & {
  style: string;
  reverse: boolean;
};

const sideBarStory: StoryFn<SidebarStoryProps> = (args) => ({
  components: { Sidebar, MainLayout },
  setup() {
    return { args };
  },
  template: `
    <MainLayout  v-bind:reverseSidebar="args.reverse" v-bind:style="args.style">
      <Sidebar v-bind="args">
        <div style="background: #0AD561; height: 100%;"></div>
      </Sidebar>
      <div style="background: #e0efe7; height: 100%; flex: 2"></div>
    </MainLayout>`,
});

export const SidebarStory = sideBarStory.bind({});

SidebarStory.args = {
  style: 'background: white',
  reverse: false,
};

const sidebarStoryReversed: StoryFn<SidebarStoryProps> = (args) => ({
  components: { Sidebar, MainLayout },
  setup() {
    return { args };
  },
  template: `
    <MainLayout v-bind:reverseSidebar="args.reverse">
    <Sidebar v-bind="args">
      <div style="background: #0AD561; height: 100%;"></div>
    </Sidebar>
    <div style="background: #e0efe7; height: 100%; flex: 2;"></div>
    </MainLayout>`,
});

export const SidebarReversed = sidebarStoryReversed.bind({});

SidebarReversed.args = {
  reverse: true,
};
