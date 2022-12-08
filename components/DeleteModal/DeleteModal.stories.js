import { action } from "@storybook/addon-actions";
import React from "react";
import DeleteModal from ".";

export default {
  title: "Components/DeleteEvent",
  component: DeleteModal,
};

const Template = (args) => <DeleteEvent {...args} />;

export const DeleteEventModal = Template.bind({});
DeleteEventModal.args = {
  deleteEvent: action("deleted event"),
};
