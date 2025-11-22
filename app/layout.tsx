import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Abdirahman Hassan Jimale - Portfolio',
  description: 'Portfolio of Abdirahman Hassan Jimale - Economics Graduate specializing in International Trade, Financial Analysis, and Data Management',
  keywords: ['Abdirahman Hassan Jimale', 'Economics', 'Financial Analyst', 'International Trade', 'Portfolio', 'Data Analysis'],
  authors: [{ name: 'Abdirahman Hassan Jimale' }],
  openGraph: {
    title: 'Abdirahman Hassan Jimale - Portfolio',
    description: 'Economics Graduate specializing in International Trade, Financial Analysis, and Data Management',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
