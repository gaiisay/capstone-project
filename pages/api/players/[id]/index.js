import { updatePlayerById } from "../../../../services/playerService";

async function handler(req, res) {
  const { id } = req.query;
  if (req.method === "PATCH") {
    const player = JSON.parse(req.body);

    const updatedPlayer = await updatePlayerById(id, player);

    res.status(200).json(updatedPlayer);
  } else {
    res.status(405).setHeader("Allow", ["PATCH"]).send();
  }
}

export default handler;
