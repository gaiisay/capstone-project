import React from "react";
import NewEventForm from ".";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { de } from "date-fns/locale";

export default {
  title: "Components/Form",
  component: NewEventForm,
};

const Template = (args) => (
  <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={de}>
    <NewEventForm {...args} />
  </LocalizationProvider>
);

export const BareForm = Template.bind({});
BareForm.args = {
  addEvent: console.log,
};
