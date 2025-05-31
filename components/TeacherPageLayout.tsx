import Link from "next/link"

interface TeacherPageLayoutProps {
  teacherName: string
  currentDate: string
  quote: string
  children?: React.ReactNode // for any extra content
}

export default function TeacherPageLayout({
  teacherName,
  currentDate,
  quote,
  children,
}: TeacherPageLayoutProps) {
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
          <p className="text-lg text-gray-600 italic">ToiletTeacher.org</p>
          <p className="text-lg text-gray-500">{currentDate}</p>
        </header>

        {/* Main Content */}
        <main className="mb-4">
          <blockquote className="text-gray-800 leading-relaxed text-lg font-medium">{quote}</blockquote>
          {children}
        </main>

        {/* Footer */}
        <footer className="text-xs text-gray-500 border-t border-gray-200 mt-10 pt-4">
          <Link href="/" className="text-blue-600 hover:underline text-xs">
            Home
          </Link>
        </footer>
      </div>
    </div>
  )
}