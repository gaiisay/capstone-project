import mongoose, { Schema, model, models } from "mongoose";
import { nanoid } from "nanoid";

const URI = `mongodb+srv://gaiisay:${process.env.MONGODB_PASSWORD}@cluster0.nhyoetz.mongodb.net/?retryWrites=true&w=majority`;

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

async function connectToDatabase() {
  await mongoose.connect(URI);
}

async function getAllEvents() {
  await connectToDatabase();

  const events = await Event.find({}, { _id: false });
  return events;
}

async function getEventById(id) {
  await connectToDatabase();

  const event = Event.findOne({ id }, { _id: false, __v: false });
  return event;
}

async function createEvent(event) {
  await connectToDatabase();

  const createdEvent = await Event.create({
    ...event,
    id: nanoid(),
  });

  return {
    ...createdEvent.toObject(),
    _id: undefined,
    __v: undefined,
  };
}

export { getAllEvents, createEvent, getEventById };
