import { de } from "date-fns/locale";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useState } from "react";
import { useRouter } from "next/router";
import NewEventForm from "../../../components/NewEventForm";
import Button from "../../../components/Button";
import Link from "next/link";
import StyledLink from "../../../components/StyledLink";
import Svg from "../../../components/Svg";

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
    <main>
      <StyledLink href="/" variant="back">
        <Svg variant="back" />
      </StyledLink>
      <h1>New Event</h1>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={de}>
        <NewEventForm addEvent={addEvent} />
      </LocalizationProvider>
    </main>
  );
}

export default AddEvent;
