'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, BookOpen, Users2 } from 'lucide-react'

const certifications = [
  {
    title: 'Diploma in Cisco Networking Academy',
    issuer: 'SIMAD University',
    icon: Award,
  },
  {
    title: 'Diploma in Leadership',
    issuer: 'SIMAD University',
    icon: Users2,
  },
  {
    title: 'Financial Management for NGOs',
    issuer: 'Kaabe Consultancy Firm Ltd',
    icon: Award,
  },
  {
    title: 'NGO Management',
    issuer: 'Success Skills Institute',
    icon: Award,
  },
  {
    title: 'Climate Justice Incubator Program',
    issuer: 'ICE Institute',
    icon: Award,
  },
  {
    title: 'Project Management',
    issuer: 'Nile University',
    icon: Award,
  },
  {
    title: 'Logical Framework Analysis for Sustainable Project',
    issuer: 'Center for Research and Development - SIMAD University',
    icon: Award,
  },
  {
    title: 'Core Life Skills and Employability Development Training',
    issuer: 'SIMAD ilab',
    icon: Award,
  },
  {
    title: 'Google Apps for Business',
    issuer: 'Caseer ACADEMY',
    icon: Award,
  },
]

const workshops = [
  'East African Community Conference (EACON)',
  'Conference on Economics and Public Administration (CEPAD)',
  'Somali Banking and Finance Conference',
  'Local Conference of Youth Somalia (LCOY)',
  'Conference on Economic and Public Policy Development (CEPAD)',
  'Annual Leadership & Innovation Summit',
]

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="certifications" className="py-24 bg-slate-50 dark:bg-slate-950 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-slate-900 dark:text-white">
              Certifications & Professional Development
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent mx-auto rounded-full"></div>
          </motion.div>

          {/* Certifications Grid */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Certifications</h3>
              <div className="h-px flex-grow bg-gradient-to-r from-accent to-transparent"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => {
                const Icon = cert.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                          {cert.title}
                        </h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Workshops & Conferences */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 font-serif text-slate-900 dark:text-white flex items-center gap-3 justify-center md:justify-start">
              <span className="w-8 h-1 bg-primary-500 rounded-full"></span>
              Workshops & Conferences
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {workshops.map((workshop, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white dark:bg-slate-900 p-5 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-all flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 bg-navy-50 dark:bg-navy-900/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-5 h-5 text-navy-600 dark:text-navy-400" />
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 font-medium">{workshop}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
