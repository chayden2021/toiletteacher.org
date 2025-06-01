import { jesusQuotes } from "@/lib/jesus-quotes";
import TeacherPageLayout from "@/components/TeacherPageLayout";

// Utility to get today's quote
function getDailyQuote(quotes: any[]) {
  const today = new Date();
  const dayNumber = Math.floor(today.getTime() / (1000 * 60 * 60 * 24));
  const index = dayNumber % quotes.length;
  return { quote: quotes[index], index };
}

// Format date as "Sunday, June 1, 2025"
function getFormattedDate() {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Revalidate the page every hour (3600 seconds)
export const revalidate = 3600;

export default function JesusPage() {
  const { quote, index } = getDailyQuote(jesusQuotes);
  return (
    <TeacherPageLayout
      teacherName="Jesus"
      currentDate={getFormattedDate()}
      quote={quote}
      quoteIndex={index}
      quoteTotal={jesusQuotes.length}
    />
  );
}