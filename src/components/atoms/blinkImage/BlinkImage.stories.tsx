import BlinkImage from "./BlinkImage";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
export default {
  title: "atoms/blinkImage/blinkImage",
  Component: BlinkImage,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof BlinkImage>;

const Template: ComponentStory<typeof BlinkImage> = () => <BlinkImage />;

export const Primary = Template.bind({});
