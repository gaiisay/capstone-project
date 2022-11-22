import { getEventById, updateEventById } from "../../../../helpers/db";

async function handler(req, res) {
  const { id } = req.query;
  if (req.method === "GET") {
    const event = await getEventById(id);
    res.status(200).json(event);
  } else if (req.method === "PATCH") {
    const event = JSON.parse(req.body);
    const updatedEvent = await updateEventById(id, event);
    res.status(200).json(updatedEvent);
  } else {
    res.status(405).setHeader("Allow", ["GET", "PATCH"]).send();
  }
}

export default handler;
