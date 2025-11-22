'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Award, Languages } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-slate-900 dark:text-white">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 font-serif text-slate-900 dark:text-white">
                Professional Summary
              </h3>
              <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-400 leading-relaxed">
                <p className="mb-6">
                  A highly motivated and detail-oriented graduate of SIMAD University, with a degree in
                  <span className="text-slate-900 dark:text-slate-200 font-medium"> Bachelor&apos;s Degree in International Trade and Investment</span>.
                  I possess a solid foundation in leadership, project management, and networking.
                </p>
                <p>
                  I demonstrate strong analytical and problem-solving skills with proven experience in
                  attending and contributing to professional workshops and seminars. Passionate about
                  leveraging academic knowledge and practical training to drive organizational success.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              {/* Education Card */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all duration-300 group">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Education</h4>
                    <p className="text-slate-700 dark:text-slate-300 font-medium">
                      Bachelor&apos;s Degree in International Trade and Investment
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">
                      SIMAD University, 2020-2024
                    </p>
                  </div>
                </div>
              </div>

              {/* Certifications Card */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all duration-300 group">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Certifications</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-slate-600 dark:text-slate-400 text-sm">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                        Cisco Networking Academy
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                        Leadership Diploma
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                        Project Management (Coursera)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                        Financial Management for NGOs
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Languages Card */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all duration-300 group">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Languages className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium">
                        Somali (Native)
                      </span>
                      <span className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium">
                        English (Fluent)
                      </span>
                      <span className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium">
                        Arabic (Fluent)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
