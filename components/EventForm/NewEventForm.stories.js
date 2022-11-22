import React from "react";
import NewEventForm from ".";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { de } from "date-fns/locale";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Form",
  component: EventForm,
};

const Template = (args) => (
  <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={de}>
    <NewEventForm {...args} />
  </LocalizationProvider>
);

export const BareForm = Template.bind({});
BareForm.args = {
  addEvent: action("form submitted"),
};
