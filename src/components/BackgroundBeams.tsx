'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const BackgroundBeams = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-black" />

            {/* Gradient Orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 100, 0],
                    y: [0, -50, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/20 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"
            />

            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.4, 0.2],
                    x: [0, -100, 0],
                    y: [0, 50, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-800/10 rounded-full blur-[120px] transform -translate-x-1/2 translate-y-1/2"
            />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    );
};
