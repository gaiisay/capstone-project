import Image from "next/image";
import styled from "styled-components";
import useSWR from "swr";
import { fetcher } from "../../utils/api";
import teamLogo from "../../public/teamlogo.png";
import PlayerCard from "../../components/PlayerCard";

function Team() {
  const { data: players, error } = useSWR("/api/players", fetcher);

  if (error) return <h1>There was an error</h1>;

  if (!players) return <h1>...Loading...</h1>;

  return (
    <>
      <Wrapper>
        <h2>Your team</h2>
        <Image src={teamLogo} width={90} alt="teamlogo" />
        <h3>Players </h3>
      </Wrapper>
      {players.map((player) => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </>
  );
}

const Wrapper = styled.div`
  width: 90vw;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  row-gap: 10px;
  margin-bottom: 0.5rem;

  img {
    justify-self: center;
  }

  h3 {
  }
`;

export default Team;
