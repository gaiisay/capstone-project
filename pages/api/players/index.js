import { getAllPlayers, updatePlayersWhenEventDeleted } from "../../../services/playerService";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const players = await getAllPlayers();
    res.status(200).json(players);
  } else if (req.method === "PATCH") {
    const updatedPlayer = await updatePlayersWhenEventDeleted(req.body);

    res.status(200).json(updatedPlayer);
  } else {
    res.status(405).setHeader("Allow", ["GET", "PATCH"]).send();
  }
}
