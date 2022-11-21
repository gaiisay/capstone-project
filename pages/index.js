import useSWR from "swr";
import EventCard from "../components/EventCard";
import StyledLink from "../components/StyledLink";
import Svg from "../components/Svg";
import { fetcher } from "../helpers/api";

export default function Home() {
  const { data: events, error } = useSWR("/api/events", fetcher);

  if (error) return <h1>There was an error</h1>;

  if (!events) return <h1>...Loading...</h1>;

  const sortedEvents = [...events].sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <>
      {sortedEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}

      <StyledLink href="/events/add" variant="add">
        <Svg variant="add" />
      </StyledLink>
    </>
  );
}
