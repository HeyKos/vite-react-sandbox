import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { LabeledInput, LabeledInputProperties } from './labeled-input';

export default {
  title: "Molecules/Labeled Input",
  component: LabeledInput,
  argTypes: {},
} as Meta;

const Template: Story<LabeledInputProperties> = (args) => <LabeledInput {...args} />;

export const Email = Template.bind({});
Email.args = {
    htmlId: "email",
    inputType: "email",
    label: "Email Address",
    placeholderText: "Enter your email",
};

export const Password = Template.bind({});
Password.args = {
    htmlId: "password",
    inputType: "password",
    label: "Password",
    placeholderText: "Enter your password",
};
