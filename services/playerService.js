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

async function updatePlayersWhenEventDeleted(id) {
  await connectToDatabase();

  const output = await Player.updateMany({}, { $pull: { attendances: { eventId: id } } });
  console.log(id, output);

  const updatedPlayers = await getAllPlayers();
  return updatedPlayers;
}

Player.updateMany;

export { getAllPlayers, getPlayerById, updatePlayerById, updatePlayersWhenEventDeleted };
