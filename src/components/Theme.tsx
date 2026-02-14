'use client';

import { motion } from 'framer-motion';
import { fadeInUp, slideInLeft, slideInRight } from '@/lib/animations';
import { theme } from '@/lib/data';

export default function Theme() {
  return (
    <section id="theme" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <p className="text-red-600 font-bold uppercase tracking-[0.3em] mb-4">Our Theme</p>
          <h2 className="text-4xl sm:text-6xl font-extrabold mb-6 ted-text-gradient">
            {theme.title}
          </h2>
          <p className="text-xl text-gray-400 font-light tracking-widest">{theme.tagline}</p>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-8 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
            className="glass-card p-10 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-sm italic font-serif">m</span>
              Meaning of Syntopia
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {theme.description}
            </p>

            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-sm italic font-serif">n</span>
              Why it matters today
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              {theme.whyItMatters}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
            className="glass-card p-10 flex flex-col justify-center bg-red-600/5 border-red-600/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              What kind of ideas fit?
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              We look for ideas that bridge fields—sustainable energy meeting urban design, neuroscience informing AI, or ancient crafts revitalizing modern economies. If it synthesizes the best of different worlds, it belongs at Syntopia.
            </p>

            <h3 className="text-2xl font-bold text-white mb-6">
              What to expect?
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              {theme.whatExpected}
            </p>

            <div className="mt-auto pt-6 border-t border-white/5">
              <p className="text-xl font-bold text-red-500 italic">
                &quot;{theme.closingLine}&quot;
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}