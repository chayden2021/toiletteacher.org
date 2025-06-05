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

          {/* Navigation */}
          <div className="space-y-4 flex flex-col items-center">
            <Select onValueChange={setSelectedPath}>
              <SelectTrigger className="w-64 px-2 py-1"> {/* Thinner width and less padding */}
                <SelectValue placeholder="Choose your toilet teacher" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="/jesus">Jesus</SelectItem>
                <SelectItem value="/tolle">Eckhart Tolle</SelectItem>
              </SelectContent>
            </Select>

            <Button
              onClick={handleGetStarted}
              disabled={!selectedPath}
              className="w-12 h-8 p-0 flex items-center justify-center"
            >
              <span className="text-lg">&#8594;</span>
            </Button>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 border-t border-gray-200 pt-6 w-64 mx-auto">
          <p>
            <a href="/add-to-home" className="text-blue-500 hover:underline">
              Add to Home Screen
            </a>
          </p>
          <p>This web page was inspired by DailyTao.org.</p>
        </footer>
      </div>
    </div>
  )
}
