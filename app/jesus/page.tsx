import { jesusQuotes } from "@/lib/jesus-quotes";
import { getDailyQuote, getCurrentDate } from "@/lib/quote-utils";
import TeacherPageLayout from "@/components/TeacherPageLayout";

export default function JesusPage() {
  const currentDate = getCurrentDate();
  const dailyQuote = getDailyQuote(jesusQuotes);
  const quoteIndex = jesusQuotes.findIndex((q) => q.text === dailyQuote.text);
  const quoteTotal = jesusQuotes.length;

  return (
    <TeacherPageLayout
      teacherName="Jesus"
      currentDate={currentDate}
      quote={dailyQuote}
      quoteIndex={quoteIndex}
      quoteTotal={quoteTotal}
    />
  );
}