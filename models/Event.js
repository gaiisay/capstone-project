import { Schema, model, models } from "mongoose";

const eventSchema = new Schema({
  id: String,
  name: String,
  description: String,
  date: String,
  startTime: String,
  endTime: String,
  location: String,
});

const Event = models.Event || model("Event", eventSchema);

export default Event;
