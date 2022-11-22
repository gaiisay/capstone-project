import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { de } from "date-fns/locale";
import { useRouter } from "next/router";
import EventForm from "../../../../components/EventForm";

function EditEvent() {
  const router = useRouter();
  const { id } = router.query;

  async function editEvent(event) {
    await fetch(`/api/events/${id}`, {
      method: "PATCH",
      body: JSON.stringify(event),
    });
    router.push(`/events/${id}`);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={de}>
      <EventForm sendEvent={editEvent} />
    </LocalizationProvider>
  );
}

export default EditEvent;
