/** Fills `{name}` placeholders in a dictionary string. */
export const fill = (text: string, values: Record<string, string | number>) =>
  text.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? ""));

/** Stable fragment id for a heading, e.g. "QR menü nedir?" → "qr-menu-nedir" */
export const anchorId = (heading: string) =>
  heading
    .toLocaleLowerCase("tr")
    .replace(/ı/g, "i")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
