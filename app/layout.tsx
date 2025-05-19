import type React from "react"
import { Inter } from "next/font/google"
import MUIRegistry from "@/lib/mui-registry"
import { AuthProvider } from "@/lib/auth-context"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Next.js with MUI and Google Auth",
  description: "A simple project using Next.js, MUI and Google Authentication",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MUIRegistry>
          <AuthProvider>{children}</AuthProvider>
        </MUIRegistry>
      </body>
    </html>
  )
}
