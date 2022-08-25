import { Meta, StoryFn } from '@storybook/vue3';
import { MainLayout } from '../MainLayout/MainLayout';
import { Sidebar } from '../Sidebar/Sidebar';
import { Content, ContentProps } from './Content';

export default {
    title: 'Cornellius/Layout System/Content',
    component: Content,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

type ContentStoryArgs = ContentProps & {
    style: string;
    reverse: boolean;
    backgroundColor: string;
};

const contentStorySidebar: StoryFn<ContentStoryArgs> = (args) => (
    <MainLayout
        v-bind:reverseSidebar={args.reverse}
        v-bind:style={args.style}
        v-slots={
            <>
                <Sidebar v-slots={<div style={{ background: '#e0efe7', height: '100%' }}></div>} />
                <Content v-slots={<div style={{ background: '#0AD561', height: '100%;' }}></div>} />
            </>
        }
    />
);

export const ContentWithSidebar = contentStorySidebar.bind({});

ContentWithSidebar.args = {
    reverse: false,
    style: 'background: white; border:1px solid red',
};

const contentStory: StoryFn<ContentStoryArgs> = (args) => (
    <MainLayout
        style={args.style}
        reverseSidebar={args.reverse}
        v-slots={
            <Content
                fullSize={args.fullSize}
                v-slots={() => (
                    <div style={{ background: args.backgroundColor, height: '100%' }}></div>
                )}
            />
        }
    />
);

export const ContentWithoutSidebar = contentStory.bind({});

ContentWithoutSidebar.args = {
    fullSize: true,
    reverse: false,
    style: 'background: white; border:1px solid red',
    backgroundColor: '#0AD561',
};
