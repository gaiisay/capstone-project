import styled from "styled-components";

function EventCard({ event, teamName }) {
  const options = { weekday: "short", month: "short", day: "2-digit" };
  const eventDate = new Date(event.date).toLocaleDateString("de-DE", options).replace(/[.,]/g, "");
  const eventTime = event.startTime + " - " + event.endTime;

  return (
    <Card>
      <StyledDate dateTime={event.date}>{eventDate}</StyledDate>
      <time>{eventTime}</time>
      <h3>{event.name}</h3>
      <h4>{teamName}</h4>
    </Card>
  );
}

const Card = styled.article`
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
`;

const StyledDate = styled.time`
  grid-row: span 3;
  text-align: center;
`;

export default EventCard;
