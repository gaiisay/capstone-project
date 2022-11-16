import useSWR from "swr";
import EventCard from "../components/EventCard";
import { fetcher } from "../helpers/api";

export default function Home() {
  const { data: events, error } = useSWR("/api/events", fetcher);
  if (error) return <h1>There was an error</h1>;
  if (!events) return <h1>...Loading...</h1>;

  events.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <>
      <h1>⛹🏽‍♂️ Assist ⛹🏽‍♂️</h1>
      <h2>Deine Veranstaltungen</h2>
      {events.map((event) => (
        <EventCard key={event.id} event={event} teamName="Your Team" />
      ))}
    </>
  );
}
