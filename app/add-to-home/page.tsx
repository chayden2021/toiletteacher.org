"use client";

import { useState } from "react";
import Link from "next/link";

export default function AddToHomePage() {
  const [deviceType, setDeviceType] = useState<string | null>(null);

  const instructions = {
    iPhone: [
      "Open Safari on your iPhone and go to your favorite toilet teacher's page.",
      "Tap the share icon (a square with an arrow pointing up).",
      "Scroll down and select 'Add to Home Screen'.",
      "Follow the prompts to add the icon to your home screen.",
    ],
    Android: [
      "Open Chrome on your Android device and go to your favorite toilet teacher's page.",
      "Tap the menu icon (three dots in the top-right corner).",
      "Select 'Add to Home Screen' from the dropdown menu.",
      "Follow the prompts to add the icon to your home screen.",
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <header className="mb-8">
          <h1 className="text-3xl text-gray-900 mb-4">Get Toilet Teacher on Your Home Screen!</h1>
        </header>
        <main>
          {/* Dropdown Menu */}
          <div className="mb-6">
            <label htmlFor="device-select" className="block text-lg text-gray-700 mb-2">
            </label>
            <select
              id="device-select"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={(e) => setDeviceType(e.target.value)}
              defaultValue=""
            >
              <option value="" disabled>
                Device Type
              </option>
              <option value="iPhone">iPhone / iOS</option>
              <option value="Android">Android</option>
            </select>
          </div>

          {/* Instructions */}
          {deviceType && (
            <div>
              <h2 className="text-xl text-gray-800 mb-4">Instructions for {deviceType}:</h2>
              <ol className="list-decimal list-inside text-gray-700 leading-relaxed">
                {instructions[deviceType as "iPhone" | "Android"].map((step, index) => (
                  <li key={index} className="mb-2">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Default Message */}
          {!deviceType && (
            <p className="text-lg text-gray-700 leading-relaxed">
              Select your device type above to see specific instructions.
            </p>
          )}
        </main>

        {/* Centered Home Link */}
        <div className="text-left text-xs text-gray-500 mt-8">
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}