import ReadNow from "./ReadNow";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MemoryRouter } from 'react-router-dom';
export default {
    title:'atoms/bookpagedetails/bookoptions/readbutton/ReadNow',
    Component: ReadNow,
    decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)]
}as ComponentMeta<typeof ReadNow>

const Template:ComponentStory<typeof ReadNow> = (args)=><ReadNow {...args} />;

export const Primary = Template.bind({});

