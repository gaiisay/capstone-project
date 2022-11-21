import { useRouter } from "next/router";
import styled from "styled-components";
import useSWR from "swr";
import StyledLink from "../../../components/StyledLink";
import Svg from "../../../components/Svg";
import { fetcher } from "../../../helpers/api";
import { formatDate, formatTime } from "../../../helpers/util";

function EventDetails() {
  const router = useRouter();
  const { id } = router.query;

  const { data: event, error } = useSWR(`/api/events/${id}`, fetcher);

  if (error) return <h1>There was an error</h1>;

  if (!event) return <h1>...Loading...</h1>;

  const eventDate = formatDate(event.date);
  const eventTime = formatTime(event.startTime, event.endTime);
  return (
    <>
      <Wrapper>
        <h2>{event.name}</h2>
        <h3>Your team</h3>
        <p>
          <time>{eventDate} </time>
          <time>{eventTime}</time>
        </p>
        <p>Location: {event.location}</p>
        <p>Description: {event.description}</p>
      </Wrapper>

      <StyledLink href="" variant="fab">
        <Svg variant="edit" />
      </StyledLink>
    </>
  );
}

const Wrapper = styled.div`
  width: 90vw;
  align-self: flex-start;
  margin: 1rem 2rem;
  display: grid;
  gap: 5px;
`;

export default EventDetails;
