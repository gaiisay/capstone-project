import Image from "next/image";
import styled from "styled-components";
import teamLogo from "../../public/teamLogo.jpeg";

function Team() {
  return (
    <Wrapper>
      <h2>Your team</h2>
      <Image src={teamLogo} width={70} alt="teamlogo" />
      <h3>Kader</h3>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  row-gap: 10px;

  img {
    justify-self: center;
  }
`;

export default Team;
