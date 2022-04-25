export function addLeadingText(
  text: string | number,
  count: number,
  char: string
): string {
  return text.toString().padStart(count, char);
}

export function getTextFromClipboard(copyProcessor: (txt: string) => void) {
  navigator.clipboard
    .readText()
    .then((text) => copyProcessor(text))
    .catch((err) => err);
}

export function copyToClipboard(txt?: string) {
  return navigator.clipboard.writeText(txt || "");
}
