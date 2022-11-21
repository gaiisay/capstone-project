import { createEvent, getAllEvents } from "../../../helpers/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const events = await getAllEvents();
    res.status(200).json(events);
  } else if (req.method === "POST") {
    const event = JSON.parse(req.body);

    const createdEvent = await createEvent(event);
    res.status(201).json(createdEvent);
  } else {
    res.status(405).setHeader("Allow", ["GET", "POST"]).send();
  }
}
