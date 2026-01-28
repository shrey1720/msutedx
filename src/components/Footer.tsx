'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            TEDx MSU Baroda
          </h3>

          <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            This independent TEDx event is operated under license from TED.
            TEDx MSU Baroda is not endorsed by TED.
          </p>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              © {currentYear} TEDx MSU Baroda. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              This event is independently organized and not endorsed by TED.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
