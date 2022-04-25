export function fullDateTimeFormat(date: Date, timeZone: string): string {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      dateStyle: "full",
      timeStyle: "medium",
      timeZone,
    }).format(date);
  } catch (error) {
    return "Unable to parse date";
  }
}

export function getLocalTimeZone(): string {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

export function getTimezoneOffset() {
  function z(n: number) {
    return (n < 10 ? "0" : "") + n;
  }
  let offset = new Date().getTimezoneOffset();
  const sign = offset < 0 ? "+" : "-";
  offset = Math.abs(offset);
  return sign + z((offset / 60) | 0) + z(offset % 60);
}

export function getRelativeTime(epoch: number) {
  return "NA";
}

export function getDaysOfYear(date: Date): number {
  return (
    (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) -
      Date.UTC(date.getFullYear(), 0, 0)) /
    24 /
    60 /
    60 /
    1000
  );
}

export function getWeeksOfYear(date: Date): number {
  const oneJan = new Date(date.getFullYear(), 0, 1);
  const numberOfDays = Math.floor(
    (date.getTime() - oneJan.getTime()) / (24 * 60 * 60 * 1000)
  );
  return Math.ceil((date.getDay() + 1 + numberOfDays) / 7);
}
