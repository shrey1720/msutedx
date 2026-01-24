'use client';

import { motion } from 'framer-motion';
import { wordReveal } from '@/lib/animations';

const titleWords = ['TEDx', 'MSU', 'Baroda'];
const subtitleWords = ['Echoes', 'of', 'Tomorrow'];

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main title */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-4">
            {titleWords.map((word, index) => (
              <motion.span
                key={word}
                custom={index}
                variants={wordReveal}
                className="inline-block mr-4 last:mr-0"
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light text-red-400">
            {subtitleWords.map((word, index) => (
              <motion.span
                key={word}
                custom={index + titleWords.length}
                variants={wordReveal}
                className="inline-block mr-3 last:mr-0"
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          Ideas worth spreading. A celebration of innovation, culture, and human potential.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}