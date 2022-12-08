import { useRouter } from "next/router";
import useSWR from "swr";
import PlayerForm from "../../../../components/PlayerForm";
import { fetcher } from "../../../../utils/api";

function EditEvent() {
  const router = useRouter();
  const { id } = router.query;

  const { data: player } = useSWR(`/api/players/${id}`, fetcher);

  async function editPlayer(player) {
    await fetch(`/api/players/${id}`, {
      method: "PATCH",
      body: JSON.stringify(player),
    });
    router.back();
  }

  return <PlayerForm defaultPlayer={player} sendPlayer={editPlayer} buttonContent="Update" />;
}

export default EditEvent;
