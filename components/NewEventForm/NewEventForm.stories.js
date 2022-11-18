import React from "react";
import NewEventForm from ".";
import { MemoryRouterProvider } from "next-router-mock";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { de } from "date-fns/locale";

export default {
  title: "Components/Form",
  component: NewEventForm,
};

const Template = (args) => (
  <MemoryRouterProvider>
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={de}>
      <NewEventForm {...args} />
    </LocalizationProvider>
  </MemoryRouterProvider>
);

export const BareForm = Template.bind({});
BareForm.args = {
  addEvent: console.log,
};
