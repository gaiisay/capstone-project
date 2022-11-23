import Event from "../models/Event";
import connectToDatabase from "../utils/dbConnect";

async function getAllEvents() {
  await connectToDatabase();

  const events = await Event.find({}, { _id: false });
  return events;
}

async function getEventById(id) {
  await connectToDatabase();

  const event = await Event.findOne({ id }, { _id: false, __v: false });
  return event;
}

async function updateEventById(id, event) {
  await connectToDatabase();

  await Event.updateOne({ id }, event);
  const updatedEvent = await getEventById(id);
  return updatedEvent;
}

async function deleteEventById(id) {
  connectToDatabase();

  const event = await getEventById(id);
  await Event.deleteOne({ id });

  return event;
}

async function createEvent(event) {
  await connectToDatabase();

  const createdEvent = await Event.create({
    ...event,
    id: crypto.randomUUID(),
  });

  return {
    ...createdEvent.toObject(),
    _id: undefined,
    __v: undefined,
  };
}

export { getAllEvents, createEvent, getEventById, updateEventById, deleteEventById };
