import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BannerOne } from "./BannerOne";

export default {
  title: "atoms/banner/banner-item-1/bannerOne",
  Component: BannerOne,
} as ComponentMeta<typeof BannerOne>;

const Template: ComponentStory<typeof BannerOne> = () => <BannerOne />;

export const Primary = Template.bind({});
