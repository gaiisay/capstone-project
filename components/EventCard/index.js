import styled from "styled-components";
import { formatDate, formatTime } from "../../helpers/util";
import StyledLink from "../StyledLink";

function EventCard({ event, teamName = "Your Team" }) {
  const eventDate = formatDate(event.date);
  const eventTime = formatTime(event.startTime, event.endTime);

  return (
    <StyledLink href={`/events/${event.id}`} variant="card">
      <StyledDate dateTime={event.date}>{eventDate}</StyledDate>
      <time>{eventTime}</time>
      <h3>{event.name}</h3>
      <h4>{teamName}</h4>
    </StyledLink>
  );
}

const StyledDate = styled.time`
  grid-row: span 3;
  text-align: center;
`;

export default EventCard;
