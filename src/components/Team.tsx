'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, cardHover } from '@/lib/animations';
import { team } from '@/lib/data';

export default function Team() {
  return (
    <section id="team" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Organizing Team
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            The passionate individuals behind TEDx MSU Baroda
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {team.map((member) => (
            <motion.div
              key={member.id}
              variants={cardHover}
              whileHover="hover"
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/10 hover:border-red-600/50 transition-colors"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-gray-700 to-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-300 text-sm">Photo</span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-red-600 font-medium mb-3">
                {member.role}
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}