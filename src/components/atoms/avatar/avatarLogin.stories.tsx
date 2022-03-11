import AvatarLogin from "./avatarLogin";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "atoms/avatar/AvatarLogin",
  Component: AvatarLogin,
} as ComponentMeta<typeof AvatarLogin>;

const Template: ComponentStory<typeof AvatarLogin> = (args) => (
  <AvatarLogin {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  handleName: "R",
};
