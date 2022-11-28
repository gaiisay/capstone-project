import { useEffect } from "react";
import useSWR from "swr";
import EventCard from "../components/EventCard";
import StyledLink from "../components/StyledLink";
import Svg from "../components/Svg";
import { fetcher } from "../utils/api";

export default function Home({ attendances, setAttendances }) {
  const { data: players } = useSWR("/api/players", fetcher);
  const { data: events, error } = useSWR(players ? "/api/events" : null, fetcher, {
    onSuccess: (data) => {
      for (const event of data) {
        setAttendances(players, event.id);
      }
    },
  });

  if (error) return <h1>There was an error</h1>;

  if (!events) return <h1>...Loading...</h1>;

  const sortedEvents = [...events]
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((event) => {
      const attendance = attendances.find((att) => att.eventId === event.id);
      if (!attendance) {
        return { ...event, accepted: 0, cancelled: 0 };
      } else {
        return { ...event, accepted: attendance.accepted, cancelled: attendance.cancelled };
      }
    });

  return (
    <>
      {sortedEvents.map((event) => {
        return <EventCard key={event.id} event={event} />;
      })}

      <StyledLink href="/events/add" variant="fab">
        <Svg variant="add" size="30" />
      </StyledLink>
    </>
  );
}
