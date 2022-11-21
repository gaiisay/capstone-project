import { getEventById } from "../../../../helpers/db";

async function handler(req, res) {
  const { id } = req.query;
  if (req.method === "GET") {
    const event = await getEventById(id);
    res.status(200).json(event);
  } else {
    res.status(405).setHeader("Allow", ["GET"]).send();
  }
}

export default handler;
