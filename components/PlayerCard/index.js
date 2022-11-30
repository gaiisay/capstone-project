import Image from "next/image";
import styled, { css } from "styled-components";
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
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  justify-content: space-between;
  align-items: center;
  font-size: 0.7rem;
  width: 90vw;
  max-width: 500px;
  padding: 1rem;
  background: var(--card-color);
  opacity: 95%;
  border-radius: 10px;
  box-shadow: var(--box-shadow);
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
  background: var(--card-color);
  opacity: 95%;
  border-radius: 10px;
  box-shadow: var(--box-shadow);
`;

const StyledImg = styled(Image)`
  grid-row: span 2;
  border-radius: inherit;
  justify-self: center;
`;

const StyledParagraph = styled.p`
  padding: 0.3rem 0.5rem;
  background-color: cornflowerblue;
  width: fit-content;
  border-radius: 20px;

  ${({ active }) =>
    !active &&
    css`
      display: none;
    `}
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-self: flex-end;
`;

export default PlayerCard;
