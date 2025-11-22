'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowDown, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'
import profilePic from '../assets/dihaan.jpg'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50 dark:bg-slate-950 pt-20"
    >
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary-200/30 dark:bg-primary-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-accent/20 dark:bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] right-[20%] w-[600px] h-[600px] bg-slate-200/40 dark:bg-slate-800/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 dark:bg-accent/20 text-accent-dark dark:text-accent-light font-medium text-sm tracking-wide">
                Available for work
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 font-serif tracking-tight text-navy dark:text-white"
            >
              Abdirahman <br />
              <span className="text-accent dark:text-accent">Hassan Jimale</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Economics Graduate specializing in International Trade, Financial Analysis, and Data Management.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10"
            >
              <a
                href="#contact"
                className="px-8 py-3.5 bg-navy dark:bg-white text-white dark:text-slate-900 rounded-full font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get In Touch
              </a>
              <a
                href="#about"
                className="px-8 py-3.5 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-full font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
              >
                View Portfolio
              </a>
            </motion.div>



            {/* Social Media Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start gap-4 mt-8"
            >
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/14NjyXt9Bqv/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-accent hover:text-white dark:hover:bg-accent dark:hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/abdirahman__arab?igsh=MXR1djRvdTR3ZG1ueA=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-accent hover:text-white dark:hover:bg-accent dark:hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              {/* Email */}
              <a
                href="mailto:abdirahmanhasan04@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-accent hover:text-white dark:hover:bg-accent dark:hover:text-white transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/abdirahman-hassan-83a18a247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-accent hover:text-white dark:hover:bg-accent dark:hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              {/* X (Twitter) */}
              <a
                href="https://x.com/Apdirahmanhasan?t=sqicbF7nIOBmmlMlUv-oyQ&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-accent hover:text-white dark:hover:bg-accent dark:hover:text-white transition-all duration-300"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/252617500237"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-accent hover:text-white dark:hover:bg-accent dark:hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right Column - Profile Image */}
          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Decorative circles */}
              <div className="absolute inset-0 border-2 border-primary-200 dark:border-primary-800 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 border-2 border-dashed border-accent/40 dark:border-accent/60 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

              {/* Image container */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                <Image
                  src={profilePic}
                  alt="Abdirahman Hassan Jimale"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-slate-400 hover:text-accent transition-colors">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  )
}
