import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import MainNavigation, { MainNavigationProperties } from "./main-navigation";

export default {
  title: "Molecules/Main Navigation",
  component: MainNavigation,
  argTypes: {},
} as Meta;

export const MainNavigationTemplate: Story<MainNavigationProperties> = (args) => <MainNavigation {...args} />
