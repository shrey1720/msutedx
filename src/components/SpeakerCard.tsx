'use client';

import { motion } from 'framer-motion';
import { cardHover } from '@/lib/animations';
import { Speaker } from '@/lib/data';

interface SpeakerCardProps {
  speaker: Speaker;
  onClick: () => void;
}

export default function SpeakerCard({ speaker, onClick }: SpeakerCardProps) {
  return (
    <motion.div
      variants={cardHover}
      whileHover="hover"
      onClick={onClick}
      className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden cursor-pointer group border border-white/10 hover:border-red-600/50 transition-colors"
    >
      <div className="aspect-square bg-gray-800 relative overflow-hidden">
        {/* Placeholder for speaker image */}
        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center">
          <span className="text-gray-400 text-sm">Photo</span>
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">
          {speaker.name}
        </h3>
        <p className="text-red-600 font-medium mb-3">
          {speaker.title}
        </p>
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
          {speaker.bio}
        </p>
        <div className="mt-4 pt-4 border-t border-white/10">
          <p className="text-sm font-medium text-white">
            {speaker.topic}
          </p>
        </div>
      </div>
    </motion.div>
  );
}