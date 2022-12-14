import styled from "styled-components";
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
    <Wrapper>
      <h2>Attendance</h2>
      <StyledH3>
        Unassigned <span>{unassignedPlayers.length}</span>
      </StyledH3>
      {unassignedPlayers.map((player) => (
        <PlayerCard key={player.id} player={player} minimal assignPlayer={assignPlayer} category="unassigned" />
      ))}
      <StyledH3 accepted>
        Accepted <span>{acceptedPlayers.length}</span>
      </StyledH3>
      {acceptedPlayers.map((player) => (
        <PlayerCard key={player.id} player={player} minimal assignPlayer={assignPlayer} category="accepted" />
      ))}
      <StyledH3 cancelled>
        Cancelled <span>{cancelledPlayers.length}</span>
      </StyledH3>
      {cancelledPlayers.map((player) => (
        <PlayerCard key={player.id} player={player} minimal assignPlayer={assignPlayer} category="cancelled" />
      ))}
    </Wrapper>
  );
}

const StyledH3 = styled.h3`
  color: ${({ accepted, cancelled }) => (accepted ? "var(--green)" : cancelled ? "var(--red)" : "var(--yellow)")};
  margin: 1rem 0 0 0;
  font-variation-settings: "wght" 600;

  span {
    margin-left: 1rem;
    color: #fffbff;
    background-color: ${({ accepted, cancelled }) =>
      accepted ? "var(--green)" : cancelled ? "var(--red)" : "var(--yellow)"};
    padding: 0.2rem 0.6rem;
    border-radius: 50px;
  }
`;

const Wrapper = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  width: 100%;
  display: grid;
  gap: 10px;
  background: var(--background-color);
  z-index: 5;
  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3);
  border-radius: 28px 28px 0px 0px;

  h2 {
    text-align: center;
    font-variation-settings: "wght" 600;
  }
`;

export default PlayerAssignList;
