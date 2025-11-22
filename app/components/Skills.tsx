'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  TrendingUp,
  DollarSign,
  BarChart3,
  Users,
  MessageSquare,
  Network,
  FileSpreadsheet,
  Database,
  Code2,
  Briefcase,
} from 'lucide-react'

const professionalSkills = [
  { name: 'International Trade & Investment Analysis', level: 90, icon: TrendingUp },
  { name: 'Financial Management & Budgeting', level: 95, icon: DollarSign },
  { name: 'Data Analysis & Reporting', level: 88, icon: BarChart3 },
  { name: 'Leadership & Team Coordination', level: 85, icon: Users },
  { name: 'Communication & Problem-Solving', level: 90, icon: MessageSquare },
]

const technicalSkills = [
  { name: 'Microsoft Excel & Office Suite', level: 92, icon: FileSpreadsheet },
  { name: 'SQL & Data Management', level: 80, icon: Database },
  { name: 'Cisco Networking & IT Essentials', level: 75, icon: Network },
  { name: 'Financial Statement Preparation & Analysis', level: 88, icon: BarChart3 },
]

const competencies = [
  'Data Collection & Validation',
  'Data Visualization',
  'Budget Planning',
  'Financial Reporting',
  'Inventory Management',
  'Cost Accounting',
  'Process Improvement',
  'Stakeholder Management',
  'Project Coordination',
  'Financial Auditing',
]

export default function Skills() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-slate-900 dark:text-white">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Professional Skills */}
            <motion.div variants={itemVariants} className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800">
              <h3 className="text-2xl font-bold mb-8 font-serif text-slate-900 dark:text-white flex items-center gap-3">
                <span className="w-8 h-1 bg-primary-500 rounded-full"></span>
                Professional Skills
              </h3>
              <div className="space-y-8">
                {professionalSkills.map((skill, index) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="group"
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                              {skill.name}
                            </h4>
                            <span className="text-sm font-bold text-primary-600 dark:text-primary-400">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                              transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Technical Skills */}
            <motion.div variants={itemVariants} className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-slate-900 dark:text-white">
                <Code2 className="w-6 h-6 text-primary-500" />
                Technical Skills
              </h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                      <span className="text-slate-500 dark:text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-primary-500 to-accent rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Core Competencies */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-2xl font-bold mb-8 font-serif text-slate-900 dark:text-white">
              Core Competencies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {competencies.map((competency, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-5 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium hover:border-accent dark:hover:border-accent hover:text-accent dark:hover:text-accent transition-all shadow-sm hover:shadow-md cursor-default"
                >
                  {competency}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
