"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { scratchPrompts } from "@/lib/scratch-prompts"

interface TeacherPageLayoutProps {
  teacherName: string
  currentDate: string
  quote: { text: string; citation: string }
  quoteIndex: number
  quoteTotal: number
  children?: React.ReactNode // for any extra content
}

export default function TeacherPageLayout({
  teacherName,
  currentDate,
  quote,
  quoteIndex,
  quoteTotal,
  children,
}: TeacherPageLayoutProps) {
  const [showScratch, setShowScratch] = useState(false)
  const [scratchText, setScratchText] = useState("")
  const [scratchPlaceholder, setScratchPlaceholder] = useState(scratchPrompts[0])

  const onScratchPaperClick = () => {
    // Pick a random prompt
    const randomPrompt = scratchPrompts[Math.floor(Math.random() * scratchPrompts.length)]
    setScratchPlaceholder(randomPrompt)
    setShowScratch((v) => !v)
    // Optionally clear the textarea when opening
    if (!showScratch) setScratchText("")
  }

  const onShareClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Check out this quote from my Toilet Teacher!",
          url: window.location.href, // Optional: Include the current page URL
        })
        .then(() => console.log("Quote shared successfully!"))
        .catch((error) => console.error("Error sharing quote:", error))
    } else {
      alert("Sharing is not supported on this device.")
    }
  }

  // Reset quotes based on EST time
  useEffect(() => {
    const now = new Date()
    const utcHour = now.getUTCHours()
    const utcDate = now.getUTCDate()

    // Calculate EST time (UTC-5 or UTC-4 during daylight saving time)
    const isDST = new Date().getTimezoneOffset() < 240 // Check if daylight saving time is active
    const estHour = (utcHour - (isDST ? 4 : 5) + 24) % 24
    const estDate = estHour >= 0 ? utcDate : utcDate - 1

    const todayEST = `${now.getUTCFullYear()}-${now.getUTCMonth() + 1}-${estDate}`
    const lastReset = localStorage.getItem("lastResetDateEST")

    if (lastReset !== todayEST) {
      // Reset quotes if the date has changed in EST
      // resetQuotes(); // Uncomment this line if you have a resetQuotes function
      localStorage.setItem("lastResetDateEST", todayEST) // Update the last reset date
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl text-gray-900 mb-2">
            <Link href="/" className="hover:text-gray-700">
              {teacherName}
            </Link>
          </h1>
          <p className="text-lg text-gray-500">{currentDate}</p>
          <p className="text-sm text-gray-400">
            {quoteIndex + 1} of {quoteTotal}
          </p>
        </header>

        {/* Main Content */}
        <main className="mb-4">
          {/* Quote Section */}
          <blockquote className="text-gray-800 leading-relaxed text-lg font-medium">
            {(() => {
              // Split by \n for line breaks
              return quote.text.split("\n").map((line, lineIdx) => {
                // Split by \i for italics
                const parts = line.split(/\\i/)
                return (
                  <span key={lineIdx}>
                    {parts.map((part, idx) =>
                      idx % 2 === 1 ? (
                        <span key={idx} className="italic">
                          {part}
                        </span>
                      ) : (
                        <span key={idx}>{part}</span>
                      )
                    )}
                    {lineIdx !== quote.text.split("\n").length - 1 && <br />}
                  </span>
                )
              })
            })()}
          </blockquote>
          <div className="text-sm text-gray-500 mt-4 mb-8 italic">{quote.citation}</div>

          {showScratch && (
            <div>
              <textarea
                className="w-full h-40 mt-2 p-3 border border-gray-300 rounded resize-y"
                placeholder={quote.prompt || scratchPlaceholder} // Use the prompt as the placeholder
                value={scratchText}
                onChange={(e) => setScratchText(e.target.value)}
              />
            </div>
          )}
          {children}
        </main>

        {/* Divider above footer, left-aligned and matching footer width */}
        <div>
          <hr className="border-t border-gray-200 w-[160px] ml-0" />
        </div>

        {/* Footer */}
        <footer className="text-xs text-gray-500 pt-4 flex items-center gap-2 ml-0">
          <button
            type="button"
            className="text-blue-600 hover:underline text-xs"
            onClick={onShareClick}
          >
            Share Quote
          </button>
          <span>|</span>
          <button
            type="button"
            className="text-blue-600 hover:underline text-xs"
            onClick={onScratchPaperClick}
          >
            Journal
          </button>
          <span>|</span>
          <Link href="/" className="text-blue-600 hover:underline text-xs">
            Home
          </Link>
        </footer>
      </div>
    </div>
  )
}