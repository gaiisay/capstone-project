import { useEffect, useState } from "react";
import useSWR from "swr";
import EventCard from "../components/EventCard";
import StyledLink from "../components/StyledLink";
import Svg from "../components/Svg";
import { fetcher } from "../utils/api";

export default function Home() {
  const [attendances, setAttendances] = useState([]);
  const { data: players } = useSWR("/api/players", fetcher);
  const { data: events, error } = useSWR(players ? "/api/events" : null, fetcher, {
    onSuccess: (data) => {
      for (const oneEvent of data) {
        const acceptedPlayers = players.filter((player) =>
          player.attendances.find(
            (attendance) =>
              Object.values(attendance).includes(oneEvent.id) && Object.values(attendance).includes("accepted")
          )
        );
        const cancelledPlayers = players.filter((player) =>
          player.attendances.find(
            (attendance) =>
              Object.values(attendance).includes(oneEvent.id) && Object.values(attendance).includes("cancelled")
          )
        );
        setAttendances((current) => {
          const currentEvent = current.find((event) => event.eventId === oneEvent.id);
          if (currentEvent) {
            current.map((att) => {
              if (att.eventId === currentEvent.eventId) {
                att.accepted = acceptedPlayers.length;
                att.cancelled = cancelledPlayers.length;
                return att;
              } else return att;
            });
            return [...current];
          }
          return [
            ...current,
            {
              eventId: oneEvent.id,
              accepted: acceptedPlayers.length,
              cancelled: cancelledPlayers.length,
            },
          ];
        });
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
