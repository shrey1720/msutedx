'use client';

import { motion } from 'framer-motion';
import { fadeInUp, slideInLeft, slideInRight } from '@/lib/animations';
import { theme } from '@/lib/data';

export default function Theme() {
  return (
    <section id="theme" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-red-500">
            {theme.title}
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
          >
            <h3 className="text-2xl font-semibold text-black mb-6">
              Our Theme
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              {theme.description}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
          >
            <h3 className="text-2xl font-semibold text-black mb-6">
              Our Philosophy
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              {theme.philosophy}
            </p>
          </motion.div>
        </div>

        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 bg-white rounded-full shadow-lg">
            <div className="text-6xl">💡</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}