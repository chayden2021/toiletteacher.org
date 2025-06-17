"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { scratchPrompts } from "@/lib/scratch-prompts";
import { getDailyImage } from "@/lib/get-daily-image";

interface TeacherPageLayoutProps {
  teacherName: string;
  currentDate: string;
  quote: { text: string; citation: string };
  quoteIndex: number;
  quoteTotal: number;
  children?: React.ReactNode; // for any extra content
}

export default function TeacherPageLayout({
  teacherName,
  currentDate,
  quote,
  quoteIndex,
  quoteTotal,
  children,
}: TeacherPageLayoutProps) {
  const [showScratch, setShowScratch] = useState(false);
  const [scratchText, setScratchText] = useState("");
  const [scratchPlaceholder, setScratchPlaceholder] = useState(scratchPrompts[0]);
  const { path: dailyImage, source: dailySource } = getDailyImage();

  const onScratchPaperClick = () => {
    const randomPrompt = scratchPrompts[Math.floor(Math.random() * scratchPrompts.length)];
    setScratchPlaceholder(randomPrompt);
    setShowScratch((v) => !v);
    if (!showScratch) setScratchText("");
  };

  const onShareClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Check out this quote from my Toilet Teacher!",
          url: window.location.href,
        })
        .then(() => console.log("Quote shared successfully!"))
        .catch((error) => console.error("Error sharing quote:", error));
    } else {
      alert("Sharing is not supported on this device.");
    }
  };

  useEffect(() => {
    const now = new Date();
    const utcHour = now.getUTCHours();
    const utcDate = now.getUTCDate();

    const isDST = new Date().getTimezoneOffset() < 240;
    const estHour = (utcHour - (isDST ? 4 : 5) + 24) % 24;
    const estDate = estHour >= 0 ? utcDate : utcDate - 1;

    const todayEST = `${now.getUTCFullYear()}-${now.getUTCMonth() + 1}-${estDate}`;
    const lastReset = localStorage.getItem("lastResetDateEST");

    if (lastReset !== todayEST) {
      localStorage.setItem("lastResetDateEST", todayEST);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-2xl text-gray-900 mb-2">
            <Link href="/" className="hover:text-gray-700">
              {teacherName}
            </Link>
          </h1>
          <p className="text-lg text-gray-700 italic mb-4">ToiletTeacher.org</p>
          <img
            src={dailyImage}
            alt={`${teacherName} Image`}
            className="w-full h-auto mt-4 rounded border border-gray-300"
          />
          <p className="text-xs text-gray-500 italic mt-2">{dailySource}</p>
          <hr className="border-gray-300 my-4" />
          <p className="text-lg text-gray-500">{currentDate}</p>
          <p className="text-sm text-gray-400 mb-0">
            {quoteIndex + 1} of {quoteTotal}
          </p>
        </header>

        {/* Main Content */}
        <main className="mb-4">
          <blockquote className="text-gray-800 leading-relaxed text-lg font-medium mt-0">
            {quote.text}
          </blockquote>
          <div className="text-sm text-gray-500 mb-8 italic">{quote.citation}</div>
          <hr className="border-gray-300 my-4" />

          {showScratch && (
            <div>
              <textarea
                className="w-full h-40 mt-2 p-3 border border-gray-300 rounded resize-y focus:ring focus:ring-gray-200"
                placeholder={quote.prompt || scratchPlaceholder}
                value={scratchText}
                onChange={(e) => setScratchText(e.target.value)}
              />
            </div>
          )}
          {children}
        </main>

        {/* Footer */}
        <footer className="text-xs text-gray-500 pt-4 flex items-center gap-2 ml-0">
          <button
            type="button"
            className="text-gray-600 hover:underline text-xs"
            onClick={onShareClick}
          >
            Share Quote
          </button>
          <span>|</span>
          <button
            type="button"
            className="text-gray-600 hover:underline text-xs"
            onClick={onScratchPaperClick}
          >
            Journal
          </button>
          <span>|</span>
          <Link href="/" className="text-gray-600 hover:underline text-xs">
            Home
          </Link>
        </footer>
      </div>
    </div>
  );
}