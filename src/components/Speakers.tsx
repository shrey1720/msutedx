'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { staggerContainer, fadeInUp, modalVariants } from '@/lib/animations';
import { speakers, Speaker } from '@/lib/data';
import SpeakerCard from './SpeakerCard';

export default function Speakers() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  return (
    <section id="speakers" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Speakers
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Meet the thought leaders who will share their insights and inspire our community.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {speakers.map((speaker) => (
            <SpeakerCard
              key={speaker.id}
              speaker={speaker}
              onClick={() => setSelectedSpeaker(speaker)}
            />
          ))}
        </motion.div>
      </div>

      {/* Speaker Modal */}
      <AnimatePresence>
        {selectedSpeaker && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedSpeaker(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedSpeaker(null)}
                  className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-600"
                >
                  <X size={24} />
                </button>

                <div className="aspect-video bg-gray-200 relative">
                  {/* Placeholder for speaker image */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <span className="text-gray-600">Speaker Photo</span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-2">
                    {selectedSpeaker.name}
                  </h3>
                  <p className="text-red-600 font-medium mb-4">
                    {selectedSpeaker.title}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-black mb-2">
                      {selectedSpeaker.topic}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedSpeaker.talkDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-black mb-2">
                      About
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedSpeaker.bio}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}