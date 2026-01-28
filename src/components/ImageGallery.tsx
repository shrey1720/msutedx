"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
    "/file.svg",
    "/globe.svg",
    "/window.svg",
    "/next.svg",
    "/vercel.svg",
];

export default function ImageGallery() {
    return (
        <section className="py-20 overflow-hidden relative">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Visual <span className="text-red-600">Journey</span>
                </h2>
                <div className="w-20 h-1 bg-red-600 mx-auto rounded-full" />
            </div>

            <div className="flex relative items-center">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        duration: 30,
                        ease: "linear",
                    }}
                    className="flex gap-6 whitespace-nowrap"
                >
                    {[...images, ...images, ...images].map((src, i) => (
                        <div
                            key={i}
                            className="glass-card w-64 h-48 md:w-96 md:h-64 relative group shrink-0"
                        >
                            <Image
                                src={src}
                                alt={`Gallery photo ${i}`}
                                fill
                                className="object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                                <p className="text-xs text-white/50 group-hover:text-white transition-colors">TEDx MSU Baroda Highlight</p>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Gradient fades for edge smoothing */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
}
