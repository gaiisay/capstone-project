import React from "react";
import { action } from "@storybook/addon-actions";
import PlayerForm from ".";

export default {
  title: "Components/Form",
  component: PlayerForm,
};

const Template = (args) => <PlayerForm {...args} />;

export const CreatePlayerForm = Template.bind({});
CreatePlayerForm.args = {
  defaultPlayer: {},
  addEvent: action("form submitted"),
  buttonContent: "Create",
};
