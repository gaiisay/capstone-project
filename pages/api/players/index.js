import { getAllPlayers } from "../../../services/playerService";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const players = await getAllPlayers();
    res.status(200).json(players);
  } else {
    res.status(405).setHeader("Allow", ["GET"]).send();
  }
}
