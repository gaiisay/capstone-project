import { getAllEvents } from "../../../helpers/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const events = await getAllEvents();
    res.status(200).json(events);
  } else {
    res.status(405).setHeader("Allow", ["GET"]).send();
  }
}
