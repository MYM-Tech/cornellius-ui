import { Meta, StoryFn } from '@storybook/vue3';
import { MainLayout, MainLayoutProps } from './MainLayout';

export default {
    title: 'Cornellius/Layout System/MainLayout',
    component: MainLayout,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

type MainStoryProps = MainLayoutProps & {
    style: string;
};

const mainStory: StoryFn<MainStoryProps> = (args) => ({
    components: { MainLayout },
    setup() {
        return { args };
    },
    template: `
    <MainLayout v-bind="args" reverseSideBar="false">
      <div style="background: #0AD561; height: 100%;">
      </div>
    </MainLayout>`,
});

export const Main = mainStory.bind({});

Main.args = {
    style: 'background: white; border:1px solid red',
};
