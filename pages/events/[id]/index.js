import { useRouter } from "next/router";
import styled from "styled-components";
import useSWR from "swr";
import DeleteModal from "../../../components/DeleteModal";
import PlayerAssignList from "../../../components/PlayerAssignList";
import StyledLink from "../../../components/StyledLink";
import Svg from "../../../components/Svg";
import { fetcher } from "../../../utils/api";
import { formatDate, formatRenderTime } from "../../../utils/helpers";

function EventDetails() {
  const router = useRouter();
  const { id } = router.query;

  const { data: event, error } = useSWR(`/api/events/${id}`, fetcher);

  if (error) return <h1>There was an error</h1>;

  if (!event) return <h1>...Loading...</h1>;

  const eventDate = formatDate(event.date);
  const eventTime = formatRenderTime(event.startTime, event.endTime);
  const eventLocation = !event.location ? "As usual" : event.location;
  const eventDescription = !event.description ? "Let's goooo" : event.description;

  async function deleteEvent() {
    await fetch(`/api/events/${id}`, {
      method: "DELETE",
    });

    await fetch("/api/players", {
      method: "PATCH",
      body: event.id,
    });

    router.push("/");
  }

  return (
    <>
      <Background />
      <DeleteModal deleteItem={deleteEvent} />
      <Wrapper>
        <h2>{event.name}</h2>
        <p>
          <time>{eventDate}</time> &nbsp; <time>{eventTime}</time>
        </p>

        <h3>Location</h3>
        <p>{eventLocation}</p>

        <h3>Description</h3>
        <p>{eventDescription}</p>
      </Wrapper>
      <PlayerAssignList minimal eventId={event.id} />

      <StyledLink href={`/events/${id}/edit`} variant="fab">
        <Svg variant="edit" size="30" />
      </StyledLink>
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

  h2,
  h3 {
    font-variation-settings: "wght" 700;
  }

  p,
  time {
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

export default EventDetails;
