export default function humanDate(isoDate) {
  const options = { year: "numeric", month: "long", day: "numeric" }
  return new Date(isoDate).toLocaleDateString(undefined, options)
}