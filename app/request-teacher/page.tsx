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
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Title */}
        <header className="text-center mb-12">
          <h1 className="text-3xl text-gray-900 mb-2">Request a New Teacher</h1>
          <p className="text-lg text-gray-600 italic">
            Suggest a teacher you'd like to see added to ToiletTeacher.org
          </p>
        </header>

        {/* Form or Success Message */}
        {success ? (
          <div className="text-center border border-gray-300 p-6 rounded bg-gray-100">
            <p className="text-lg font-medium text-gray-800">Success!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full border border-gray-300 p-2 rounded"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className={`w-12 h-12 p-0 flex items-center justify-center border border-gray-300 rounded ${
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
        <footer className="text-center mt-12">
          <a
            href="/"
            className="text-blue-500 hover:underline text-sm"
          >
            Home
          </a>
        </footer>
      </div>
    </div>
  );
}