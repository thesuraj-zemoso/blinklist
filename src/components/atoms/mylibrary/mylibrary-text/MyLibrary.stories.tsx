import MyLibrary from './MyLibrary';
import {ComponentMeta , ComponentStory} from  '@storybook/react';

export default {
    title:'atoms/mylibrary/mylibrary-text/MyLibrary',
    Component:MyLibrary,
} as ComponentMeta<typeof MyLibrary>;

const Template:ComponentStory<typeof MyLibrary> = ()=><MyLibrary />;

export const Primary = Template.bind({});

