'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
  {
    title: 'Finance and Reporting Analyst',
    company: 'Raage Supermarket',
    period: 'Feb 2023 - Dec 2024',
    responsibilities: [
      'Prepared and analyzed financial reports to track business performance and support strategic decision-making',
      'Managed product cost accounting, inventory reconciliation, and revenue analysis for accurate reporting',
      'Conducted monthly and annual financial reviews, ensuring compliance with accounting standards',
      'Utilized Excel and data analysis tools to identify financial trends and improve budget forecasting accuracy',
    ],
  },
  {
    title: 'Internship Head of Finance',
    company: "Students' Association at SIMAD University",
    period: 'Sep 2023 - Nov 2024',
    responsibilities: [
      "Produced and managed the annual budget of the Student Union",
      'Prepared financial reports, including income statements and expenditure summaries',
      "Provided financial updates to the association's leadership and relevant stakeholders",
      'Conducted internal financial audits to prevent discrepancies and ensure transparency',
      "Promoted financial management within the Students' Association",
    ],
  },
  {
    title: 'Internship Head of Operations',
    company: "Students' Association at SIMAD University",
    period: 'Oct 2022 - Dec 2023',
    responsibilities: [
      'Led and coordinated daily operations to ensure efficient execution of student projects and events',
      'Optimized resource allocation and improved workflow efficiency across departments',
      'Collaborated with team leaders to monitor performance and implement process improvements',
    ],
  },
  {
    title: 'Internship Data Collection',
    company: 'All in All Group',
    period: 'May 2024 - Dec 2024',
    responsibilities: [
      'Collected, organized, and entered data accurately using surveys and digital tools',
      'Verified and maintained data quality to support analysis and reporting',
    ],
  },
]

export default function Experience() {
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
    <section id="experience" className="py-24 bg-white dark:bg-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-slate-900 dark:text-white">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent mx-auto rounded-full"></div>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800"></div>

            <div className="space-y-12 md:space-y-20">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-slate-900 border-4 border-accent rounded-full z-10 mt-1.5"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow duration-300">
                      <div className="flex flex-col gap-1 mb-4">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.title}</h3>
                        <span className="text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-accent dark:hover:text-accent transition-colors">
                          {exp.company}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-500 dark:text-slate-400">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                      </div>

                      <ul className="space-y-3">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div >
      </div >
    </section >
  )
}
