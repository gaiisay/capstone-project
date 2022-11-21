import React from "react";
import Button from ".";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const CreateButton = Template.bind({});
CreateButton.args = {
  type: "submit",
  variant: "create",
  children: "Create",
};
