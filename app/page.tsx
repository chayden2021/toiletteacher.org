"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const [selectedPath, setSelectedPath] = useState("");
  const router = useRouter();

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
          <h1 className="text-2xl text-gray-900 mb-4">ToiletTeacher.org</h1>
          <img
            src="/images/kangxi-emporer-southern-inspection-tour-scroll-three.jpg"
            alt="Kangxi Emperor Southern Inspection Tour"
            className="w-full h-auto mb-6"
          />
        </header>

        {/* Subtitle */}
        <div className="mb-8">
          <p className="text-base text-gray-500 italic">
            Why not spend your toilet time getting closer to the truth? Pick a toilet teacher and breathe with their daily message.
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
                  Select a teacher
                </option>
                <option value="/teachers/jesus">Jesus</option>
                <option value="/teachers/krishna">Krishna | The Bhagavad Gita</option>
                <option value="https://dailytao.org">Lao Tzu | dailytao.org</option>
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
            This website was inspired by{" "}
            <a href="https://dailytao.org" className="text-blue-500 hover:underline">
              DailyTao.org
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
