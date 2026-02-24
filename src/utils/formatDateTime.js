export default function formatDateTime(input) {
  const d = input ? new Date(input) : new Date();
  const pad = (n) => String(n).padStart(2, "0");
  const day = pad(d.getDate());
  const month = pad(d.getMonth() + 1);
  const year = d.getFullYear();
  let hours = d.getHours();
  const minutes = pad(d.getMinutes());
  const seconds = pad(d.getSeconds());
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  hours = pad(hours);
  return `${day}-${month}-${year} ${hours}:${minutes}:${seconds} ${ampm}`;
}
