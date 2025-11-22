'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <nav
        className={`fixed top-6 right-4 md:left-1/2 md:right-auto md:transform md:-translate-x-1/2 z-50 transition-all duration-300 w-auto max-w-5xl rounded-full ${isScrolled
          ? 'md:bg-white/95 md:dark:bg-slate-900/95 md:shadow-lg md:border md:border-slate-200 md:dark:border-slate-700/50'
          : 'md:bg-white/90 md:dark:bg-slate-900/90 md:border md:border-transparent'
          }`}
      >
        <div className="md:px-5 md:py-2">
          <div className="flex justify-between items-center gap-6">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-accent dark:hover:text-accent hover:bg-slate-100 dark:hover:bg-white/10 rounded-full transition-all"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu Button */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-1.5 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-600 dark:text-slate-300 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-1.5 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-600 dark:text-slate-300 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-4 right-4 z-40 md:hidden bg-white/95 dark:bg-navy-900/95 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-navy-700/50 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-accent dark:hover:text-accent hover:bg-slate-100 dark:hover:bg-white/10 rounded-xl transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
