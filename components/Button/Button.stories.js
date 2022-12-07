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
export const AcceptButton = Template.bind({});
AcceptButton.args = {
  type: "button",
  variant: "accept",
  children: "",
};
export const CancelButton = Template.bind({});
CancelButton.args = {
  type: "button",
  variant: "cancel",
  children: "",
};
export const UnassignButton = Template.bind({});
UnassignButton.args = {
  type: "button",
  variant: "unassign",
  children: "",
};
export const BackButton = Template.bind({});
BackButton.args = {
  type: "button",
  variant: "back",
  children: "",
};
