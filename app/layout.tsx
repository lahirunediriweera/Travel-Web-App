import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'

export const metadata: Metadata = {
  title: 'Travel',
  description: 'Travel App for Train',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main className='relative overflow-hidden'>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
