import Image from "next/image";
import styled from "styled-components";
import Button from "../Button";

function PlayerCard({ player, minimal, assignPlayer, category }) {
  return (
    <>
      {minimal ? (
        <SimpleCard>
          <StyledImg src={player.imageSrc} width={30} height={30} alt={`image of ${player.name}`} />
          <Wrapper>
            <h2>{player.name}</h2>
            <StyledParagraph active={!player.role ? false : true}>{player.role}</StyledParagraph>
            <ButtonGroup>
              {category === "accepted" ? undefined : (
                <Button type="button" variant="accept" onClick={() => assignPlayer(player, "accepted")} />
              )}
              {category === "unassigned" ? undefined : (
                <Button type="button" variant="unassign" onClick={() => assignPlayer(player, "unassigned")} />
              )}
              {category === "cancelled" ? undefined : (
                <Button type="button" variant="cancel" onClick={() => assignPlayer(player, "cancelled")} />
              )}
            </ButtonGroup>
          </Wrapper>
        </SimpleCard>
      ) : (
        <Card>
          <StyledImg src={player.imageSrc} width={50} height={50} alt={`image of ${player.name}`} />
          <Wrapper>
            <h2>{player.name}</h2>
            <StyledParagraph active={!player.role ? false : true}>{player.role}</StyledParagraph>
          </Wrapper>

          <h3>
            {player.age} | {player.position}
          </h3>
        </Card>
      )}
    </>
  );
}

const SimpleCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  font-size: 0.7rem;
  width: 90vw;
  max-width: 500px;
  padding: 1rem;
  background-color: var(--card-color);
  border-radius: 10px;
  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3);
`;

const Card = styled.div`
  font-size: 0.8rem;
  display: grid;
  align-items: center;
  grid-template-columns: 0.3fr 1fr;
  column-gap: 1rem;
  row-gap: 0.5rem;
  width: 90vw;
  max-width: 500px;
  padding: 1rem;
  margin: 0.3rem 0;
  background-color: var(--card-color);
  border-radius: 10px;
  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3);
`;

const StyledImg = styled(Image)`
  grid-row: span 2;
  border-radius: 50px;
  justify-self: center;
`;

const StyledParagraph = styled.p`
  padding: 0.3rem 0.5rem;
  background-color: ${({ active }) => (active ? "cornflowerblue" : "")};
  width: fit-content;
  border-radius: 20px;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export default PlayerCard;
