"use client";

import { motion } from "framer-motion";
import { Ticket } from "lucide-react";

export default function Registration() {
    return (
        <section id="registration" className="section-padding">
            <div className="glass-card p-12 md:p-20 text-center relative overflow-hidden">
                {/* Animated background glow */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute -top-20 -right-20 w-64 h-64 bg-red-600 blur-[100px] rounded-full pointer-events-none"
                />

                <div className="relative z-10">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className="inline-flex items-center justify-center w-16 h-16 bg-red-600/20 rounded-full mb-6"
                    >
                        <Ticket className="text-red-600 w-8 h-8" />
                    </motion.div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Secure Your Booking</h2>
                    <div className="grid md:grid-cols-2 gap-10 text-left max-w-4xl mx-auto mb-12">
                        <div>
                            <h3 className="text-white font-bold mb-3 uppercase tracking-widest text-sm">Who is it for?</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                For the dreamers, the doers, and the synthesize-ers. If you are curious about how the future is being built at the intersection of diverse disciplines, this is for you.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-white font-bold mb-3 uppercase tracking-widest text-sm">Experience</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                A transformative day of mind-shifting talks, high-impact networking, and immersive deep-dives into the heart of Syntopia.
                            </p>
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-red-600 text-white font-bold py-4 px-10 rounded-full text-lg shadow-[0_0_30px_rgba(230,43,30,0.3)] hover:shadow-[0_0_50px_rgba(230,43,30,0.5)] transition-all cursor-pointer"
                    >
                        Book Your Tickets Now
                    </motion.button>

                    <p className="mt-8 text-xs text-gray-500 uppercase tracking-widest">
                        Limited seats available • February 28, 2026
                    </p>
                </div>
            </div>
        </section>
    );
}
