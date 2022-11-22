import { de } from "date-fns/locale";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useRouter } from "next/router";
import EventForm from "../../../components/EventForm";

function AddEvent({}) {
  const router = useRouter();

  async function addEvent(event) {
    await fetch("/api/events", {
      method: "POST",
      body: JSON.stringify(event),
    });
    router.push("/");
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={de}>
      <EventForm sendEvent={addEvent} />
    </LocalizationProvider>
  );
}

export default AddEvent;
