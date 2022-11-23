import { action } from "@storybook/addon-actions";
import React from "react";
import DeleteEvent from ".";

export default {
  title: "Components/DeleteEvent",
  component: DeleteEvent,
};

const Template = (args) => <DeleteEvent {...args} />;

export const DeleteEventModal = Template.bind({});
DeleteEventModal.args = {
  deleteEvent: action("deleted event"),
};
