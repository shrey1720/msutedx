'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, cardHover } from '@/lib/animations';
import { team, volunteers } from '@/lib/data';

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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-red-600">Team</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The passionate individuals distilling ideas into Syntopia
          </p>
        </motion.div>

        {/* Core Team Section */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-white mb-10 pl-4 border-l-4 border-red-600 uppercase tracking-widest"
          >
            Core Team
          </motion.h3>
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
                className="glass-card glass-card-hover p-8"
              >
                <p className="text-red-600 font-black text-[10px] uppercase tracking-[0.2em] mb-2">
                  {member.role}
                </p>
                <h4 className="text-xl font-bold text-white mb-3">
                  {member.name}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Volunteer Team Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-white mb-10 pl-4 border-l-4 border-red-600 uppercase tracking-widest"
          >
            Volunteer Team
          </motion.h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
          >
            {volunteers.map((name, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass-card py-3 px-4 border border-white/5 hover:border-red-600/30 transition-colors text-center"
              >
                <span className="text-gray-300 text-sm font-medium">{name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
