'use client';

import { motion } from 'framer-motion';
import { wordReveal } from '@/lib/animations';

const titleWords = ['TEDx', 'MSU', 'Baroda'];
const subtitleWords = ['Syntopia'];

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden pt-32 pb-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Main title wrapper to prevent cutting */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-6 w-full"
        >
          {/* 
            Guaranteed Single-Line Scaling: 
            Using 6.8vw ensures the 13 characters of "TEDxMSUBaroda" 
            occupy exactly ~88% of the viewport width, fitting perfectly 
            inside the 1rem side-paddings (px-4) on even the smallest 
            320px devices.
          */}
          <h1 className="text-[clamp(1.5rem,6.8vw,12rem)] font-black mb-4 ted-text-gradient tracking-tighter leading-none whitespace-nowrap">
            TEDxMSUBaroda
          </h1>
        </motion.div>

        {/* Subtitle / Theme */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-2xl sm:text-5xl lg:text-6xl font-light text-red-600 tracking-[0.4em] uppercase font-serif italic">
            Syntopia
          </h2>
        </motion.div>

        {/* One-line hook */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-lg sm:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
        >
          Where unconventional ideas synthesize into a harmonious future.
        </motion.p>

        {/* Date & Venue */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center mb-16 text-[10px] sm:text-sm uppercase tracking-widest text-gray-500 font-bold"
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
            February 28, 2026
          </span>
          <span className="hidden sm:block w-1 h-1 bg-gray-800 rounded-full" />
          <span>9:00 AM Onwards</span>
          <span className="hidden sm:block w-1 h-1 bg-gray-800 rounded-full" />
          <span>MSU Baroda Campus</span>
        </motion.div>
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-white/10 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
