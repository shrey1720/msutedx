'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            What is TEDx?
          </h2>

          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              In the spirit of ideas worth spreading, TEDx is a program of local,
              self-organized events that bring people together to share a TED-like
              experience. At a TEDx event, TED Talks video and live speakers combine
              to spark deep discussion and connection in a small group. These local,
              self-organized events are branded TEDx, where x = independently
              organized TED event.
            </p>

            <p>
              The TED Conference provides general guidance for the TEDx program,
              but individual TEDx events are self-organized (subject to certain rules
              and regulations).
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                TEDx MSU Baroda is proud to be part of this global movement,
                bringing together thinkers, innovators, and community members
                to explore ideas that matter.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}