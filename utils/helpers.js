function formatDate(date) {
  const options = { weekday: "short", month: "short", day: "2-digit" };
  return new Date(date).toLocaleDateString("de-DE", options).replace(/[.,]/g, "");
}

function formatTime(startTime, endTime) {
  return (
    new Date(startTime).toLocaleTimeString("de-DE", { timeStyle: "short" }) +
    " - " +
    new Date(endTime).toLocaleTimeString("de-DE", { timeStyle: "short" })
  );
}

export { formatDate, formatTime };
