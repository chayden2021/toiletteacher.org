import "@/app/globals.css"
import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: 'ToiletTeacher.org',
  description: 'Uncovering Truth with Daily Quotes, One Flush at a Time',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
