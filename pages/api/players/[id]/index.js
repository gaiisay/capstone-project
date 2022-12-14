import { deletePlayerById, getPlayerById, updatePlayerById } from "../../../../services/playerService";

async function handler(req, res) {
  const { id } = req.query;
  if (req.method === "GET") {
    const player = await getPlayerById(id);
    res.status(200).json(player);
  } else if (req.method === "PATCH") {
    const player = JSON.parse(req.body);

    const updatedPlayer = await updatePlayerById(id, player);

    res.status(200).json(updatedPlayer);
  } else if (req.method === "DELETE") {
    const player = await deletePlayerById(id);
    res.status(200).json(player);
  } else {
    res.status(405).setHeader("Allow", ["GET", "PATCH", "DELETE"]).send();
  }
}

export default handler;
