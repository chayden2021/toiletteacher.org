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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">ToiletTeacher.org</h1>
          <p className="text-lg text-gray-600 italic">Closer to the Truth, One Flush at a Time</p>
        </header>

        {/* Main Content */}
        <main className="mb-12">
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 mb-8">
            <p className="text-gray-800 leading-relaxed text-lg">
              Over the course of our lives, we spend a significant amount of time on the toilet. What if, instead of scrolling, we used that time to get closer to the truth? Sound like a good idea? Choose a teacher below and take a few deep breaths with their daily message. Feel free to bookmark your toilet teacher’s page. Enjoy!
            </p>
            <br />
            <p className="text-gray-700 leading-relaxed">
              ...
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <Select onValueChange={setSelectedPath}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose your toilet teacher" />
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
          <p>Footer description.</p>
          <p className="mt-2">This website was inspired by dailytao.org.</p>
        </footer>
      </div>
    </div>
  )
}
