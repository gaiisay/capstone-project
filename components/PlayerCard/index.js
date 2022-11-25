import Image from "next/image";
import styled from "styled-components";
import Button from "../Button";

function PlayerCard({ player, minimal }) {
  return (
    <>
      {minimal ? (
        <SimpleCard>
          <StyledImg src={player.imageSrc} width={30} height={30} />
          <Wrapper>
            <h2>{player.name}</h2>
            <StyledParagraph active={!player.role ? false : true}>{player.role}</StyledParagraph>
            <ButtonGroup>
              <Button type="button" variant="accept"></Button>
              <Button type="button" variant="cancel"></Button>
            </ButtonGroup>
          </Wrapper>
        </SimpleCard>
      ) : (
        <Card>
          <StyledImg src={player.imageSrc} width={50} height={50} />
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
  font-size: 0.8rem;
  width: 90vw;
  max-width: 500px;
  padding: 1rem;
  background-color: #f27507;
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
  background-color: #f27507;
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
