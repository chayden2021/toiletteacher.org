import { tolleQuotes } from "@/lib/tolle-quotes";
import TeacherPageLayout from "@/components/TeacherPageLayout";

// Utility to get today's quote
function getDailyQuote(quotes: any[]) {
  const startDate = new Date("2025-06-01"); // set your desired start date
  const today = new Date();
  const diffTime = today.getTime() - startDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const index = ((diffDays % quotes.length) + quotes.length) % quotes.length; // ensures positive index
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

export default function TollePage() {
  const { quote, index } = getDailyQuote(tolleQuotes);
  return (
    <TeacherPageLayout
      teacherName="Eckart Tolle"
      currentDate={getFormattedDate()}
      quote={quote}
      quoteIndex={index}
      quoteTotal={tolleQuotes.length}
    />
  );
}