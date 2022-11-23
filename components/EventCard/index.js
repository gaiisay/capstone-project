import styled from "styled-components";
import { formatDate, formatRenderTime } from "../../utils/helpers";
import StyledLink from "../StyledLink";

function EventCard({ event, teamName = "Your Team" }) {
  const eventDate = formatDate(event.date);
  const eventTime = formatRenderTime(event.startTime, event.endTime);

  return (
    <StyledLink href={`/events/${event.id}`}>
      <Card>
        <StyledDate dateTime={event.date}>{eventDate}</StyledDate>
        <time>{eventTime}</time>
        <h3>{event.name}</h3>
        <h4>{teamName}</h4>
      </Card>
    </StyledLink>
  );
}

const Card = styled.div`
  width: 90vw;
  max-width: 500px;
  padding: 1rem;
  margin: 0.5rem;
  display: grid;
  grid-template-columns: 2rem 3fr;
  align-items: center;
  column-gap: 2rem;
  background-color: #f27507;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3);
`;

const StyledDate = styled.time`
  grid-row: span 3;
  text-align: center;
`;

export default EventCard;
