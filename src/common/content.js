const UA = {
  title: "Привіт"
}
const EN = {
  title: "Title"
}
export default function content(lang) {
  return lang === "UA" ? UA : EN;
}