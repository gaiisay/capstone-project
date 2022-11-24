import Player from "../models/Player";
import connectToDatabase from "../utils/dbConnect";

async function getAllPlayers() {
  await connectToDatabase();

  const players = await Player.find({}, { _id: false });
  return players;
}

export { getAllPlayers };
