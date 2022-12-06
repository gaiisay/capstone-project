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

  await Player.updateMany({}, { $pull: { attendances: { eventId: id } } });

  const updatedPlayers = await getAllPlayers();
  return updatedPlayers;
}

async function createPlayer(player) {
  await connectToDatabase();

  const createdPlayer = await Player.create({
    ...player,
    id: crypto.randomUUID(),
  });

  return {
    ...createdPlayer.toObject(),
    _id: undefined,
    __v: undefined,
  };
}

export { getAllPlayers, getPlayerById, updatePlayerById, updatePlayersWhenEventDeleted, createPlayer };
