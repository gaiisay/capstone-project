import React from "react";
import PlayerCard from ".";

export default {
  title: "Components/Player",
  component: PlayerCard,
};

const Template = (args) => <PlayerCard {...args} />;

export const DefaultPlayerCard = Template.bind({});
DefaultPlayerCard.args = {
  player: {
    id: "1234",
    name: "Gai Isay",
    age: 26,
    position: "Guard",
    role: "Captain",
    imageSrc: "/gai.jpeg",
  },
};
