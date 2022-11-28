import GlobalStyles from "../components/GlobalStyles";
import Layout from "../components/Layout";
import { useLocalStorage } from "../utils/hooks";

function MyApp({ Component, pageProps }) {
  const [attendances, setAttendances] = useLocalStorage("attendances", []);
  function addAttendance(players, eventId) {
    const acceptedPlayers = players.filter((player) =>
      player.attendances.find(
        (attendance) => Object.values(attendance).includes(eventId) && Object.values(attendance).includes("accepted")
      )
    );
    const cancelledPlayers = players.filter((player) =>
      player.attendances.find(
        (attendance) => Object.values(attendance).includes(eventId) && Object.values(attendance).includes("cancelled")
      )
    );

    setAttendances((current) => {
      const event = current.find((event) => event.eventId === eventId);
      if (event) {
        current.map((att) => {
          if (att.eventId === event.eventId) {
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
          eventId: eventId,
          accepted: acceptedPlayers.length,
          cancelled: cancelledPlayers.length,
        },
      ];
    });
  }

  return (
    <Layout>
      <GlobalStyles />
      <Component {...pageProps} attendances={attendances} setAttendances={addAttendance} />
    </Layout>
  );
}

export default MyApp;
