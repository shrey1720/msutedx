'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { sponsors } from '@/lib/data';

const tierStyles = {
  platinum: 'col-span-full md:col-span-2',
  gold: 'col-span-1',
  silver: 'col-span-1',
  bronze: 'col-span-1',
};

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Sponsors
          </h2>
          <p className="text-gray-300 text-lg">
            Partners who make TEDx MSU Baroda possible
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sponsors.map((sponsor) => (
            <motion.div
              key={sponsor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`glass-card glass-card-hover p-8 ${tierStyles[sponsor.tier]}`}
            >
              <div className="aspect-video bg-white/5 rounded-xl flex items-center justify-center mb-6 border border-white/5">
                {/* Placeholder for sponsor logo */}
                <div className="text-center">
                  <div className="text-5xl mb-2">🏢</div>
                  <span className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">{sponsor.name}</span>
                </div>
              </div>

              <div className="text-center">
                <h3 className="font-bold text-white text-lg mb-2">
                  {sponsor.name}
                </h3>
                <span className={`inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${sponsor.tier === 'platinum' ? 'bg-yellow-100 text-yellow-800' :
                  sponsor.tier === 'gold' ? 'bg-yellow-50 text-yellow-700' :
                    sponsor.tier === 'silver' ? 'bg-gray-100 text-gray-700' :
                      'bg-orange-100 text-orange-800'
                  }`}>
                  {sponsor.tier} Partner
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="inline-block glass-card p-8 border-red-600/10">
            <p className="text-gray-400 mb-4">
              Interested in being part of the Syntopia journey?
            </p>
            <a
              href="mailto:msuxtedx09@gmail.com"
              className="text-2xl font-bold text-white hover:text-red-500 transition-colors underline decoration-red-600 underline-offset-8"
            >
              Collaborate as a Partner
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}