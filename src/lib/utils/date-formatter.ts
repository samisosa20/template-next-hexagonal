export function dateFormatter(date: Date, options: Intl.DateTimeFormatOptions) {
  return date.toLocaleDateString("es-CO", options);
}
