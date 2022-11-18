import React from "react";
import Button from ".";
import Svg from "../Svg";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const AddButton = Template.bind({});
AddButton.args = {
  type: "button",
  variant: "add",
  children: "",
};
export const BackButton = Template.bind({});
BackButton.args = {
  type: "button",
  variant: "back",
  children: "",
};
export const CreateButton = Template.bind({});
CreateButton.args = {
  type: "submit",
  variant: "create",
  children: "Create",
};
