import Link from "next/link"
import { inspirationQuotes } from "@/lib/inspiration-quotes"
import { getDailyQuote, getCurrentDate } from "@/lib/quote-utils"
import { Button } from "@/components/ui/button"

export default function InspirationPage() {
  const dailyQuote = getDailyQuote(inspirationQuotes)
  const currentDate = getCurrentDate()

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            <Link href="/" className="hover:text-gray-700">
              DailyWisdom.org
            </Link>
          </h1>
          <p className="text-lg text-gray-600 italic mb-4">Modern Inspiration</p>
          <p className="text-sm text-gray-500">{currentDate}</p>
        </header>

        {/* Main Content */}
        <main className="mb-12">
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <blockquote className="text-gray-800 leading-relaxed text-lg font-medium">{dailyQuote}</blockquote>
          </div>
        </main>

        {/* Navigation */}
        <div className="text-center mb-8">
          <Link href="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 border-t border-gray-200 pt-6">
          <p>Modern inspiration from leaders, innovators, and visionaries.</p>
          <p className="mt-2">© 2025 DailyWisdom.org. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  )
}
