"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { getDailyImage } from "@/lib/get-daily-image";

export default function HomePage() {
  const [selectedPath, setSelectedPath] = useState("");
  const router = useRouter();
  const { path: dailyImage, source: dailySource } = getDailyImage();

  const handleGetStarted = () => {
    if (selectedPath === "https://dailytao.org") {
      // Redirect to external site
      window.location.href = selectedPath;
    } else if (selectedPath) {
      // Redirect to internal route
      router.push(selectedPath);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-2xl text-gray-900 mb-2">ToiletTeacher.org</h1>
          <p className="text-lg text-gray-700 italic mb-4">For more enlightened toilet time</p>
          <img
            src={dailyImage}
            alt="Daily Image"
            className="w-full h-auto mb-2 rounded border-2 border-gray-300" // Thicker border
          />
          <p className="text-sm text-gray-500 italic mt-2">{dailySource}</p>
        </header>

        {/* Subtitle */}
        <div className="mb-8">
          <p className="text-base text-gray-500 italic">
          </p>
        </div>

        {/* Main Content */}
        <main className="mb-12">
          {/* Navigation */}
          <div className="space-y-4">
            {/* Dropdown */}
            <div className="mb-6">
              <select
                id="teacher-select"
                className="p-2 px-4 border border-gray-300 rounded inline-block w-48 text-sm"
                onChange={(e) => setSelectedPath(e.target.value)}
                defaultValue=""
              >
                <option value="" disabled>
                  Choose a teacher
                </option>
                <option value="/teachers/jesus">Jesus | The Gospels</option>
                <option value="/teachers/krishna">Krishna | The Bhagavad Gita</option>
                <option value="https://dailytao.org">Lao Tzu | DailyTao.org</option>
                <option value="/teachers/zhuangzi">Zhuangzi</option>
                <option value="/teachers/alan-watts">Alan Watts</option>
                <option value="/teachers/eckhart-tolle">Eckhart Tolle</option>
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
        <footer className="text-left text-sm text-gray-500 border-t border-gray-200 pt-6">
          <p>
            <a href="/add-to-home" className="text-gray-500 hover:underline">
              Add to Home Screen
            </a>{" "}
            |{" "}
            <a href="/request-teacher" className="text-gray-500 hover:underline">
              Request a Teacher
            </a>
          </p>
          <p className="text-gray-400 italic">
            This website was inspired by{" "}
            <a href="https://dailytao.org" className="text-gray-500 hover:underline">
              DailyTao.org
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
