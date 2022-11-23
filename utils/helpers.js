function formatDate(date) {
  const options = { weekday: "short", month: "short", day: "2-digit" };
  return new Date(date).toLocaleDateString("de-DE", options).replace(/[.,]/g, "");
}

function formatRenderTime(startTime, endTime) {
  return (
    new Date(startTime).toLocaleTimeString("de-DE", { timeStyle: "short" }) +
    " - " +
    new Date(endTime).toLocaleTimeString("de-DE", { timeStyle: "short" })
  );
}

function formatOnlyTime(time) {
  return new Date(time).toTimeString();
}

export { formatDate, formatRenderTime, formatOnlyTime };
