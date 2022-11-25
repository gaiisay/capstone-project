import { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../utils/api";
import PlayerCard from "../PlayerCard";

function PlayerAssignList({ eventId }) {
  const { data: players, error, mutate } = useSWR("/api/players", fetcher);

  if (error) return <h1>There was an error</h1>;

  if (!players) return <h1>...Loading...</h1>;

  async function assignPlayer(player, status) {
    const attendance = player.attendances.find((attendance) => attendance.eventId === eventId);
    if (attendance) {
      player.attendances.map((att) => {
        if (att.eventId === attendance.eventId) {
          att.status = status;
          return att;
        } else return att;
      });
    }

    await fetch(`/api/players/${player.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        ...player,
        attendances:
          player.attendances.length === 0 || !attendance
            ? [
                ...player.attendances,
                {
                  eventId: eventId,
                  status: status,
                },
              ]
            : player.attendances,
      }),
    });
    mutate();
  }

  const unassignedPlayers = players.filter((player) => {
    if (
      player.attendances.find(
        (attendance) => Object.values(attendance).includes(eventId) && Object.values(attendance).includes("unassigned")
      )
    )
      return player;
    if (player.attendances.find((attendance) => Object.values(attendance).includes(eventId))) return;

    return player;
  });
  const acceptedPlayers = players.filter((player) =>
    player.attendances.find(
      (attendance) => Object.values(attendance).includes(eventId) && Object.values(attendance).includes("accepted")
    )
  );
  const cancelledPlayers = players.filter((player) =>
    player.attendances.find(
      (attendance) => Object.values(attendance).includes(eventId) && Object.values(attendance).includes("cancelled")
    )
  );

  return (
    <>
      <h3>Unassigned</h3>
      {unassignedPlayers.map((player) => (
        <PlayerCard key={player.id} player={player} minimal assignPlayer={assignPlayer} />
      ))}
      <h3>Accepted</h3>
      {acceptedPlayers.map((player) => (
        <PlayerCard key={player.id} player={player} minimal assignPlayer={assignPlayer} />
      ))}
      <h3>Cancelled</h3>
      {cancelledPlayers.map((player) => (
        <PlayerCard key={player.id} player={player} minimal assignPlayer={assignPlayer} />
      ))}
    </>
  );
}

export default PlayerAssignList;
