import { useRouter } from "next/router";
import styled from "styled-components";
import useSWR from "swr";
import DeleteEvent from "../../../components/DeleteEvent";
import PlayerAssignList from "../../../components/PlayerAssignList";
import StyledLink from "../../../components/StyledLink";
import Svg from "../../../components/Svg";
import { fetcher } from "../../../utils/api";
import { formatDate, formatRenderTime } from "../../../utils/helpers";

function EventDetails() {
  const router = useRouter();
  const { id } = router.query;

  const { data: player, error } = useSWR(`/api/players/${id}`, fetcher);

  if (error) return <h1>There was an error</h1>;

  if (!player) return <h1>...Loading...</h1>;

  return (
    <>
      <Wrapper>
        <h2>{player.name}</h2>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  position: sticky;
  top: 70px;
  align-self: stretch;
  padding: 0 1rem;
  justify-items: center;
  text-align: center;
  display: grid;
  gap: 5px;
  height: 100%;
  z-index: 5;
`;

export default EventDetails;
