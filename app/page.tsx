"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const [selectedPath, setSelectedPath] = useState("")
  const router = useRouter()

  const handleGetStarted = () => {
    if (selectedPath === "https://dailytao.org") {
      // Redirect to external site
      window.location.href = selectedPath
    } else if (selectedPath) {
      // Redirect to internal route
      router.push(selectedPath)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl text-gray-900 mb-2">ToiletTeacher.org</h1>
        </header>

        {/* Text Box */}
        <div className="text-center mb-8">
          <p className="text-xl text-gray-500 italic mb-2">
            We spend a lot of time on the toilet. Why not use it to get closer to the truth? Pick a toilet teacher and breath with their daily message.
          </p>
        </div>

        {/* Main Content */}
        <main className="mb-12">
          {/* Navigation */}
          <div className="space-y-4 flex flex-col items-center">
            {/* Updated Dropdown */}
            <div className="mb-6">
              <select
                id="teacher-select"
                className="p-2 px-4 border border-gray-300 rounded inline-block max-w-fit text-sm"
                onChange={(e) => setSelectedPath(e.target.value)}
                defaultValue=""
              >
                <option value="" disabled>
                  Choose your toilet teacher
                </option>
                <option value="/jesus">Jesus</option>
                <option value="/krishna">Krishna | The Bhagavad Gita</option>
                <option value="https://dailytao.org">Lao Tzu | dailytao.org </option>
                <option value="/zhuangzi">Zhuangzi</option>
                <option value="/tolle">Eckhart Tolle</option>
              </select>
            </div>

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
            <a href="/help-choosing-a-teacher" className="text-blue-500 hover:underline">
              Learn About the Teachers
            </a>
          </p>
          <p>
            <a href="/request-teacher" className="text-blue-500 hover:underline">
              Request a New Teacher
            </a>
          </p>
          <p>
            <a href="/add-to-home" className="text-blue-500 hover:underline">
              Add to Home Screen
            </a>
          </p>
          <p className="text-gray-400 italic">
            This website was inspired by <a href="https://dailytao.org" className="text-blue-500 hover:underline">DailyTao.org</a>
          </p>
        </footer>
      </div>
    </div>
  )
}
