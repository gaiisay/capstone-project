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
  variant: "submit",
  children: "Create",
};
export const DeleteButton = Template.bind({});
DeleteButton.args = {
  type: "button",
  variant: "delete",
  children: "",
};
export const StandardButton = Template.bind({});
StandardButton.args = {
  type: "button",
  variant: "standard",
  children: "YES",
};
