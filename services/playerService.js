import Player from "../models/Player";
import connectToDatabase from "../utils/dbConnect";

async function getAllPlayers() {
  await connectToDatabase();

  const players = await Player.find({}, { _id: false });
  return players;
}

async function getPlayerById(id) {
  await connectToDatabase();

  const player = await Player.findOne({ id }, { _id: false, __v: false });
  return player;
}

async function updatePlayerById(id, player) {
  await connectToDatabase();

  await Player.updateOne({ id }, player);
  const updatedPlayer = await getPlayerById(id);
  return updatedPlayer;
}

export { getAllPlayers, getPlayerById, updatePlayerById };
