import { de } from "date-fns/locale";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useState } from "react";
import { useRouter } from "next/router";
import NewEventForm from "../../../components/NewEventForm";

function AddEvent({}) {
  async function addEvent(event) {
    const response = await fetch("/api/events", {
      method: "POST",
      body: JSON.stringify(event),
    });
  }

  return (
    <main>
      //back button
      <h1>New Event</h1>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={de}>
        <NewEventForm addEvent={addEvent} />
      </LocalizationProvider>
    </main>
  );
}

export default AddEvent;
