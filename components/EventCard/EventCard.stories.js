import React from "react";
import EventCard from ".";

export default {
  title: "Components/Event",
  component: EventCard,
};

const Template = (args) => <EventCard {...args} />;

export const DefaultEventCard = Template.bind({});
DefaultEventCard.args = {
  event: {
    id: "1234",
    name: "Training",
    date: "2022-12-02",
    startTime: "2022-12-02 20:00",
    endTime: "2022-12-02 22:00",
    accepted: 3,
    cancelled: 4,
  },
  teamName: "test",
};
