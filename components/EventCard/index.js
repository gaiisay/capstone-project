import styled from "styled-components";

function EventCard({ event, teamName }) {
  const options = { weekday: "short", month: "short", day: "numeric" };
  const eventDate = new Date(event.date).toLocaleDateString("de-DE", options);
  const eventTime = event.startTime + " - " + event.endTime;

  return (
    <Card>
      <StyledDate data-testid="date" dateTime={event.date}>
        {eventDate}
      </StyledDate>
      <p data-testid="time">{eventTime}</p>
      <h3 data-testid="name">{event.name}</h3>
      <p data-testid="team">{teamName}</p>
    </Card>
  );
}

const Card = styled.article`
  max-width: 768px;
  padding: 1rem;
  margin: 0.5rem;
  display: grid;
  grid-template-columns: 2rem 3fr;
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  column-gap: 2rem;
  background-color: #f27507;
  border-radius: 10px;
`;

const StyledDate = styled.time`
  grid-row: span 3;
  text-align: center;
`;

export default EventCard;
