import { Image } from "cloudinary-react";
import { useRouter } from "next/router";
import styled from "styled-components";
import useSWR from "swr";
import DeleteModal from "../../../components/DeleteModal";
import StyledLink from "../../../components/StyledLink";
import Svg from "../../../components/Svg";
import { fetcher } from "../../../utils/api";

function PlayerDetails() {
  const router = useRouter();
  const { id } = router.query;

  const { data: player, error } = useSWR(`/api/players/${id}`, fetcher);

  if (error) return <h1>There was an error</h1>;

  if (!player) return <h1>...Loading...</h1>;

  async function deletePlayer() {
    await fetch(`/api/players/${id}`, {
      method: "DELETE",
    });

    router.push("/team");
  }

  return (
    <>
      <Background />
      <DeleteModal deleteItem={deletePlayer} />
      <Wrapper>
        <StyledImg
          publicId={player.imageSrc ? player.imageSrc : "placeholder_o9m05l"}
          width={100}
          height={100}
          alt={`image of ${player.name}`}
        />
        <h2>{player.name}</h2>
        <p>{player.role}</p>
        <h3>
          {player.age} | {player.position}
        </h3>
      </Wrapper>
      <StyledLink href={`/team/${id}/edit`} variant="fab">
        <Svg variant="edit" size="30" />
      </StyledLink>
    </>
  );
}

const StyledImg = styled(Image)`
  border-radius: 10px;
  justify-self: center;
  grid-row: span 3;
  margin-bottom: 1rem;
`;

const Wrapper = styled.div`
  padding: 2rem 1rem;
  display: grid;
  justify-items: center;
  gap: 0.5rem;
  z-index: 5;

  h2 {
    font-variation-settings: "wght" 700;
  }

  h3,
  p {
    font-variation-settings: "wght" 500;
  }
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-image: url("/ball-closeup.jpg");
  background-color: var(--background-color);
  background-position: center;
  background-size: cover;
  opacity: 0.25;
`;

export default PlayerDetails;
