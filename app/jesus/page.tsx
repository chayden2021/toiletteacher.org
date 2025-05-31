import { jesusQuotes } from "@/lib/jesus-quotes"
import { getDailyQuote, getCurrentDate } from "@/lib/quote-utils"
import TeacherPageLayout from "@/components/TeacherPageLayout"

export default function JesusPage() {
  const dailyQuote = getDailyQuote(jesusQuotes)
  const currentDate = getCurrentDate()

  return (
    <TeacherPageLayout
      teacherName="Jesus"
      currentDate={currentDate}
      quote={dailyQuote}
    />
  )
}