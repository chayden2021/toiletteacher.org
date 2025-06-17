"use client";

import { useState } from "react";

export default function RequestTeacherPage() {
  const [loading, setLoading] = useState(false); // Add loading state
  const [success, setSuccess] = useState(false); // Add success state

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

    if (loading) return; // Prevent multiple submissions if already loading

    setLoading(true); // Disable the button while processing

    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      console.log("Email sent successfully!");
      setSuccess(true); // Show success message
    } else {
      console.error("Error sending email.");
    }

    setLoading(false); // Re-enable the button after processing
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Title */}
        <header className="mb-12">
          <h1 className="text-2xl text-gray-900 mb-2">Get In Touch</h1>
          <p className="text-lg text-gray-600 italic mb-4">
            ToiletTeacher.org
          </p>
          <img
            src="/images/sixteen-luohans.png"
            alt="Sixteen Luohans"
            className="w-full h-auto mb-6 rounded"
          />
          <p className="text-base text-gray-600 italic mb-6">
            Provide some feedback or suggest a new teacher!
          </p>
        </header>

        {/* Form or Success Message */}
        {success ? (
          <div className="border border-gray-300 p-6 rounded bg-gray-100">
            <p className="text-lg font-medium text-gray-800">Success!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mb-12">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name (optional)
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-64 border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email (optional)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-64 border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-64 border border-gray-300 p-2 rounded"
              ></textarea>
            </div>
            <div className="flex justify-start">
              <button
                type="submit"
                disabled={loading}
                className={`w-12 h-8 p-0 flex items-center justify-center border border-gray-300 rounded ${
                  loading
                    ? "opacity-50 cursor-not-allowed"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                <span className="text-lg">&#8594;</span>
              </button>
            </div>
          </form>
        )}

        {/* Home Link */}
        <footer className="text-left text-sm text-gray-500 border-t border-gray-200 pt-6">
          <a href="/" className="text-blue-500 hover:underline">
            Home
          </a>
        </footer>
      </div>
    </div>
  );
}