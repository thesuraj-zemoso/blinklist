import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BannerTwo } from "./BannerTwo";

export default {
  title: "atoms/banner/banner-item-2/bannerTwo",
  Compoenent: BannerTwo,
} as ComponentMeta<typeof BannerTwo>;

const Template: ComponentStory<typeof BannerTwo> = () => <BannerTwo />;

export const Primary = Template.bind({});
