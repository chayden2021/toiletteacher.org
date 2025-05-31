import Link from "next/link"
import { jesusQuotes } from "@/lib/jesus-quotes"
import { getDailyQuote, getCurrentDate } from "@/lib/quote-utils"
import { Button } from "@/components/ui/button"

export default function JesusPage() {
  const dailyQuote = getDailyQuote(jesusQuotes)
  const currentDate = getCurrentDate()

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl text-gray-900 mb-2">
            <Link href="/" className="hover:text-gray-700">
              Jesus
            </Link>
          </h1>
          <p className="text-lg text-gray-600 italic">ToiletTeacher.org</p>
          <p className="text-lg text-gray-500">{currentDate}</p>
        </header>

        {/* Main Content */}
        <main className="mb-4">
            <blockquote className="text-gray-800 leading-relaxed text-lg font-medium">{dailyQuote}</blockquote>
        </main>

        {/* Footer */}
        <footer className="text-xs text-gray-500 border-t border-gray-200 mt-4 pt-4">
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
        </footer>
      </div>
    </div>
  )
}
