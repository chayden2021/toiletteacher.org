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
          <h1 className="text-3xl text-gray-900 mb-2">ToiletTeacher.org</h1>
          <p className="text-lg text-gray-600 italic">Uncovering Truth, One Flush at a Time</p>
        </header>

        {/* Main Content */}
        <main className="mb-12">
          <p className="text-center text-gray-800 leading-relaxed text-lg mb-8">
            We spend a lot of time on the toilet. What if we spent that time getting closer to the Truth? Pick a toilet teacher and take a few deep breaths with their daily message.
          </p>

          {/* Navigation */}
          <div className="space-y-4">
            <Select onValueChange={setSelectedPath}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose your toilet teacher" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="/jesus">Jesus</SelectItem>
              </SelectContent>
            </Select>

            <Button onClick={handleGetStarted} disabled={!selectedPath} className="w-full">
              Get Started
            </Button>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 border-t border-gray-200 pt-6">
          <p>This web page was inspired by DailyTao.org.</p>
          <p className="mt-2">...</p>
        </footer>
      </div>
    </div>
  )
}
