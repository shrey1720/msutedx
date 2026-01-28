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
      className="glass-card glass-card-hover cursor-pointer group"
    >
      <div className="aspect-[4/5] bg-gray-900 relative overflow-hidden">
        {/* Placeholder for speaker image */}
        <div className="w-full h-full bg-gradient-to-t from-gray-900 to-transparent flex items-center justify-center">
          <span className="text-gray-600 font-bold uppercase tracking-widest text-xs">TEDx Speaker</span>
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-red-600/10 transition-colors duration-500" />
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-red-500 transition-colors">
          {speaker.name}
        </h3>
        <p className="text-red-600 font-black text-xs uppercase tracking-[0.2em] mb-4">
          {speaker.title}
        </p>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light line-clamp-3">
          {speaker.bio}
        </p>
        <div className="pt-4 border-t border-white/5">
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
            Topic: <span className="text-white ml-2">{speaker.topic}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}