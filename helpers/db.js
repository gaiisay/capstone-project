import events from "../db.json";
import { nanoid } from "nanoid";

let allEvents = events;

function getAllEvents() {
  return allEvents;
}

function createEvent(event) {
  allEvents.push({ ...event, id: nanoid() });
}

export { getAllEvents, createEvent };
