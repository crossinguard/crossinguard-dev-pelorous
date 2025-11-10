/**
 * Formats a Date object to a localized string
 * @param date - The date to format
 * @param locale - The locale to use (default: "en-US")
 * @returns Formatted date string (e.g., "Jan 1, 2025")
 */
export function formatDate(date: Date, locale: string = "en-US"): string {
  return date.toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
