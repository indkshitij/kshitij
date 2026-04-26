import { differenceInMonths, parse, isValid } from "date-fns";

export function formatDuration(start: string, end?: string): string {
  const startDate = parsePeriodDate(start, "first");
  const endDate = end ? parsePeriodDate(end, "last") : new Date();

  if (!isValid(startDate) || !isValid(endDate)) {
    console.error("Invalid date:", { start, end });
    return "";
  }

  const totalMonths = differenceInMonths(endDate, startDate) + 1;

  if (totalMonths <= 0) return "";

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const y = years
    ? `${years} ${years === 1 ? "year" : "years"}`
    : "";

  const m = months
    ? `${months} ${months === 1 ? "month" : "months"}`
    : "";

  return [y, m].filter(Boolean).join(" ");
}

// ----------------------------

function parsePeriodDate(
  str: string,
  fallbackMonth: "first" | "last"
): Date {
  const value = str.trim();

  if (value.toLowerCase() === "present") {
    return new Date();
  }

  const normalized = value.replace(
    /^[a-z]{3}/,
    (m) => m.charAt(0).toUpperCase() + m.slice(1).toLowerCase()
  );

  if (/^[A-Za-z]{3} \d{4}$/.test(normalized)) {
    return parse(normalized, "MMM yyyy", new Date());
  }

  if (value.includes(".")) {
    return parse(value, "MM.yyyy", new Date());
  }

  return parse(
    `${fallbackMonth === "last" ? "12" : "01"}.${value}`,
    "MM.yyyy",
    new Date()
  );
}