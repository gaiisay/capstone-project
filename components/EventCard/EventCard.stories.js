import React from "react";
import EventCard from ".";

export default {
  title: "Components/Event",
  component: Event,
};

const Template = (args) => <EventCard {...args} />;

export const Event = Template.bind({});
Event.args = {
  event: {
    name: "Training",
    date: "2022-12-02",
    startTime: "20:00",
    endTime: "22:00",
  },
  teamName: "test",
};
