import React from "react";
import Button from ".";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const SubmitButton = Template.bind({});
SubmitButton.args = {
  type: "submit",
  variant: "standard",
  children: "Create",
};
