import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import LoginForm, { LoginFormProperties } from "./login-form";

export default {
  title: "Molecules/Login Form",
  component: LoginForm,
} as Meta;

export const LoginFormTemplate: Story<LoginFormProperties> = (args) => (
  <LoginForm {...args} />
);
