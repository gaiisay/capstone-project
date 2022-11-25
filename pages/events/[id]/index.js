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

    router.push("/");
  }

  return (
    <>
      <DeleteEvent deleteEvent={deleteEvent} />
      <Wrapper>
        <h2>{event.name}</h2>
        <h3>Your team</h3>
        <p>
          <time>{eventDate} </time>
          <time>{eventTime}</time>
        </p>
        <p>Location: {eventLocation}</p>
        <p>Description: {eventDescription}</p>

        <PlayerAssignList minimal eventId={event.id} />
      </Wrapper>

      <StyledLink href={`/events/${id}/edit`} variant="fab">
        <Svg variant="edit" size="30" />
      </StyledLink>
    </>
  );
}

const Wrapper = styled.div`
  align-self: flex-start;
  padding: 1rem 2rem;
  display: grid;
  gap: 5px;
`;

export default EventDetails;
