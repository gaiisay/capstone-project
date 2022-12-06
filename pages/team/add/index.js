import { useRouter } from "next/router";
import EventForm from "../../../components/EventForm";
import PlayerForm from "../../../components/PlayerForm";

function AddEvent({}) {
  const router = useRouter();

  async function addPlayer(player) {
    await fetch("/api/players", {
      method: "POST",
      body: JSON.stringify(player),
    });
    router.push("/team");
  }

  return <PlayerForm sendPlayer={addPlayer} buttonContent="Create" />;
}

export default AddEvent;
