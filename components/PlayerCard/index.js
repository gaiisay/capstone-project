import Image from "next/image";
import styled from "styled-components";
import StyledLink from "../StyledLink";

function PlayerCard({ player }) {
  return (
    <Card>
      <StyledImg src={player.imageSrc} width={50} height={50} />
      <h2>{player.name}</h2>
      <h3>
        {player.age} | {player.position}
      </h3>
    </Card>
  );
}

const Card = styled.div`
  display: grid;
  grid-column: span 2;
  grid-template-columns: 0.3fr 1fr;
  column-gap: 1rem;
  width: 90vw;
  max-width: 500px;
  padding: 1rem;
  background-color: #f27507;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3);
`;

const StyledImg = styled(Image)`
  grid-row: span 2;
  border-radius: 50px;
`;

export default PlayerCard;
