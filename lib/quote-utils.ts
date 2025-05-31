export function getDailyQuote(quotes: { text: string; citation: string }[]) {
  // Get current date and use it to determine which quote to show
  const today = new Date()
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24)

  // Use modulo to cycle through quotes
  const quoteIndex = dayOfYear % quotes.length
  return quotes[quoteIndex]
}

export function getCurrentDate(): string {
  const today = new Date()
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  return today.toLocaleDateString("en-US", options)
}
