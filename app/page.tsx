"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function HomePage() {
  const [selectedPath, setSelectedPath] = useState("")
  const router = useRouter()

  const handleGetStarted = () => {
    if (selectedPath) {
      router.push(selectedPath)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">DailyWisdom.org</h1>
          <p className="text-lg text-gray-600 italic">Words of Wisdom, Day by Day</p>
        </header>

        {/* Main Content */}
        <main className="mb-12">
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 mb-8">
            <p className="text-gray-800 leading-relaxed text-lg">
              Welcome to your daily source of wisdom and inspiration. Each day brings new insights from great thinkers,
              philosophers, and visionaries throughout history. Choose your path below to begin your journey of daily
              reflection and growth.
            </p>
            <br />
            <p className="text-gray-700 leading-relaxed">
              Whether you seek ancient wisdom or modern inspiration, our carefully curated collections offer timeless
              truths that speak to the human experience. Let these words guide you toward greater understanding and
              purpose.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <Select onValueChange={setSelectedPath}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose your daily journey" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="/wisdom">Ancient Wisdom</SelectItem>
                <SelectItem value="/inspiration">Modern Inspiration</SelectItem>
              </SelectContent>
            </Select>

            <Button onClick={handleGetStarted} disabled={!selectedPath} className="w-full">
              Get Started
            </Button>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 border-t border-gray-200 pt-6">
          <p>DailyWisdom.org displays a new quote each day for your enjoyment and enlightenment.</p>
          <p className="mt-2">© 2025 DailyWisdom.org. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  )
}
