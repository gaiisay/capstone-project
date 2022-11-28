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
        <MainInfoWrapper>
          <time>{eventTime}</time>
          <h3>{event.name}</h3>
          <h4>{teamName}</h4>
        </MainInfoWrapper>
        <AttendanceWrapper>
          <div>
            <AttendanceNumber accepted>{event.accepted}</AttendanceNumber>
          </div>
          <div>
            <AttendanceNumber>{event.cancelled}</AttendanceNumber>
          </div>
        </AttendanceWrapper>
      </Card>
    </StyledLink>
  );
}

const Card = styled.div`
  width: 90vw;
  max-width: 500px;
  padding: 1rem;
  margin-bottom: 0.5rem;
  display: grid;
  grid-template-columns: 2rem 1fr 20px;
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

const AttendanceWrapper = styled.div`
  grid-column-start: 3;
  display: grid;
  gap: 5px;
  justify-content: center;
`;

const AttendanceNumber = styled.p`
  padding: 10px;
  background-color: ${({ accepted }) => (accepted ? "#0ba95b" : "#ed203d")};
  border-radius: 10px;
`;

const MainInfoWrapper = styled.div`
  grid-column-start: 2;
`;

export default EventCard;
