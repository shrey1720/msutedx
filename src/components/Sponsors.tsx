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
              className={`bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-white/20 transition-all ${tierStyles[sponsor.tier]}`}
            >
              <div className="aspect-video bg-white/5 rounded-lg flex items-center justify-center mb-4 border border-white/5">
                {/* Placeholder for sponsor logo */}
                <div className="text-center">
                  <div className="text-4xl mb-2">🏢</div>
                  <span className="text-gray-400 text-sm">{sponsor.name}</span>
                </div>
              </div>

              <div className="text-center">
                <h3 className="font-semibold text-white mb-2">
                  {sponsor.name}
                </h3>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${sponsor.tier === 'platinum' ? 'bg-yellow-100 text-yellow-800' :
                    sponsor.tier === 'gold' ? 'bg-yellow-50 text-yellow-700' :
                      sponsor.tier === 'silver' ? 'bg-gray-100 text-gray-700' :
                        'bg-orange-100 text-orange-800'
                  }`}>
                  {sponsor.tier.charAt(0).toUpperCase() + sponsor.tier.slice(1)}
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
          className="text-center mt-12"
        >
          <p className="text-gray-400">
            Interested in partnering with us?{' '}
            <a href="mailto:contact@tedxmsubaroda.com" className="text-red-500 hover:underline">
              Get in touch
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}