import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { LabeledInput, LabeledInputProperties } from "./labeled-input";
import { Formik } from "formik";

export default {
    title: "Molecules/Labeled Input",
    component: LabeledInput,
    argTypes: {},
} as Meta;

const Template: Story<LabeledInputProperties> = (args) => (
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    <Formik onSubmit={() => {}} initialValues={{ value: "" }}>
        <LabeledInput {...args} />
    </Formik>
);

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
