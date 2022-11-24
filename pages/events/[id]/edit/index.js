import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { de } from "date-fns/locale";
import { useRouter } from "next/router";
import useSWR from "swr";
import EventForm from "../../../../components/EventForm";
import { fetcher } from "../../../../utils/api";

function EditEvent() {
  const router = useRouter();
  const { id } = router.query;

  const { data: event } = useSWR(`/api/events/${id}`, fetcher);

  async function editEvent(event) {
    await fetch(`/api/events/${id}`, {
      method: "PATCH",
      body: JSON.stringify(event),
    });
    router.push(`/events/${id}`);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={de}>
      <EventForm defaultEvent={event} sendEvent={editEvent} buttonContent="Update" />
    </LocalizationProvider>
  );
}

export default EditEvent;
