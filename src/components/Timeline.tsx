'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { program } from '@/lib/data';

export default function Timeline() {
  return (
    <section id="program" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Program Schedule
          </h2>
          <p className="text-gray-300 text-lg">
            A day of inspiration and discovery
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-red-600"></div>

          <div className="space-y-8">
            {program.map((item, index) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className="relative flex items-start"
              >
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-4 h-4 bg-red-600 rounded-full mt-2 ml-6 border-4 border-white shadow"></div>

                {/* Content */}
                <div className="ml-12 bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 flex-1 hover:border-red-500/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <span className="text-red-500 font-medium mt-1 sm:mt-0">
                      {item.time}
                    </span>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>

                  {item.speaker && (
                    <p className="text-sm text-gray-400 mt-2 italic">
                      Speaker: {item.speaker}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}