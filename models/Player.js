import { Schema, model, models } from "mongoose";

const playerSchema = new Schema({
  id: String,
  name: String,
  age: Number,
  position: String,
  role: String,
  imageSrc: String,
  attendances: [
    {
      eventId: String,
      status: String,
    },
  ],
});

const Player = models.Player || model("Player", playerSchema);

export default Player;
