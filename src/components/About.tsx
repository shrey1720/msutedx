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
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-10">
            About <span className="text-red-600">TEDx</span>
          </h2>

          <div className="space-y-8 text-gray-300 text-lg leading-relaxed text-left">
            <div className="glass-card p-8 group hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-bold text-white mb-4">What is TED?</h3>
              <p>
                TED is a nonprofit organization devoted to Ideas Worth Spreading, often in the form of short talks delivered by leading thinkers and doers. Many of these talks are given at TED conferences, intimate co-located events and thousands of independently organized TEDx events around the world.
              </p>
            </div>

            <div className="glass-card p-8 group hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-bold text-white mb-4">What is TEDx?</h3>
              <p>
                In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event.
              </p>
            </div>

            <div className="glass-card p-8 group hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-bold text-white mb-4">TED vs. TEDx</h3>
              <p>
                The primary difference is that TED is the global organization and main conference, while TEDx events are fully planned and executed independently on a community-by-community basis, under a free license granted by TED.
              </p>
            </div>

            <div className="bg-red-600/5 border border-red-600/20 p-6 rounded-xl mt-12 text-center">
              <p className="text-sm font-medium text-red-500 uppercase tracking-widest mb-2 italic">Official Statement</p>
              <p className="text-gray-400 text-sm leading-relaxed italic">
                This independent TEDx event is operated under license from TED. TEDxMSUBaroda is not endorsed by TED.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}