import React from "react";
import EventForm from ".";
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
    <EventForm {...args} />
  </LocalizationProvider>
);

export const CreateForm = Template.bind({});
CreateForm.args = {
  defaultEvent: {},
  addEvent: action("form submitted"),
  buttonContent: "Create",
};

export const EditForm = Template.bind({});
EditForm.args = {
  defaultEvent: {
    id: "c830d24f-2c14-4089-acca-e8ff639552c1",
    name: "Training",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec o…",
    date: "2022-12-02",
    startTime: "2022-12-02 20:00",
    endTime: "2022-12-02 22:00",
    location: "Rathausstraße 9, 53819 Neunkirchen-Seelscheid",
  },
  addEvent: action("form submitted"),
  buttonContent: "Update",
};
