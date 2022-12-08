import { useEffect, useState } from "react";
import useSWR from "swr";
import EventCard from "../components/EventCard";
import StyledLink from "../components/StyledLink";
import Svg from "../components/Svg";
import { fetcher } from "../utils/api";
import logo from "../public/logo2.png";
import styled from "styled-components";
import Image from "next/image";
import { useSplashStore } from "../utils/hooks";

export default function Home() {
  const [attendances, setAttendances] = useState([]);
  const splash = useSplashStore((state) => state.splash);
  const setSplashShown = useSplashStore((state) => state.splashWasShown);

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

  useEffect(() => {
    setTimeout(() => {
      setSplashShown();
    }, 3500);
  }, []);

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
      {splash ? (
        <Background>
          <StyledImage src={logo} width={250} alt="app logo" />
        </Background>
      ) : null}
      {sortedEvents.map((event) => {
        return <EventCard key={event.id} event={event} />;
      })}

      <StyledLink href="/events/add" variant="fab">
        <Svg variant="add" size="30" />
      </StyledLink>
    </>
  );
}

const Background = styled.div`
  z-index: 1000;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: var(--background-color);

  animation: moveout 0.5s;
  animation-delay: 3s;

  @keyframes moveout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

const StyledImage = styled(Image)`
  animation: zoom 0.6s;

  @keyframes zoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`;
