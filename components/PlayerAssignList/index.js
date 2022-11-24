import useSWR from "swr";
import { fetcher } from "../../utils/api";
import PlayerCard from "../PlayerCard";

function PlayerAssignList() {
  const { data: players, error } = useSWR("/api/players", fetcher);

  if (error) return <h1>There was an error</h1>;

  if (!players) return <h1>...Loading...</h1>;

  return (
    <>
      <h3>Unassigned</h3>
      {players.map((player) => (
        <PlayerCard player={player} minimal />
      ))}
    </>
  );
}

export default PlayerAssignList;
