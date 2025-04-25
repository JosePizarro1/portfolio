import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Portafolio",
  description: "Mi portafolio de desarrollador full stack",
  icons: {
    icon: "/flash.png", 
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body className={`${inter.className} bg-gray-950 text-gray-100 antialiased`}>{children}</body>
    </html>
  )
}