import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import LoginPage from "./login-page";

export default {
    title: "Pages/Login",
    component: LoginPage,
    argTypes: {},
} as Meta;

export const Default: Story = (args) => <LoginPage {...args} />;
