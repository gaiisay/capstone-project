import styled, { css } from "styled-components";
import { formatDate, formatRenderTime } from "../../utils/helpers";
import StyledLink from "../StyledLink";
import Svg from "../Svg";

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

        <AttendanceNumber accepted>
          <p>{event.accepted}</p>
          <Svg variant="accept"></Svg>
        </AttendanceNumber>

        <AttendanceNumber cancelled>
          {event.cancelled}
          <Svg variant="cancel"></Svg>
        </AttendanceNumber>
      </Card>
    </StyledLink>
  );
}

const Card = styled.div`
  position: relative;
  width: 90vw;
  max-width: 500px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 2rem 1fr 20px;
  align-items: center;
  column-gap: 2rem;
  border-radius: 12px;
  opacity: 95%;
  background-color: var(--card-color);
  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3);
  font-variation-settings: "wght" 500;
`;

const StyledDate = styled.time`
  grid-row: span 3;
  text-align: center;
`;

const AttendanceNumber = styled.div`
  position: absolute;
  font-size: 1.1rem;
  right: 0px;
  width: 50px;
  height: 30px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3);

  div {
    padding: unset;
  }

  ${({ accepted }) =>
    accepted &&
    css`
      top: 0;
      background-color: var(--green);
      border-top-right-radius: inherit;
      border-bottom-left-radius: inherit;
    `};
  ${({ cancelled }) =>
    cancelled &&
    css`
      bottom: 0;
      background-color: var(--red);
      border-top-left-radius: inherit;
      border-bottom-right-radius: inherit;
    `};
`;

const MainInfoWrapper = styled.div`
  grid-column-start: 2;
  display: grid;
  gap: 8px;

  time {
    font-size: small;
  }

  h3 {
    font-variation-settings: "wght" 700;
  }
  h4 {
    font-size: small;
  }
`;

export default EventCard;
