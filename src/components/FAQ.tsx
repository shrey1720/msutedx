"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "What is TEDx MSU Baroda?",
        a: "TEDx MSU Baroda is an independently organized event licensed by TED, bringing together innovators, thinkers, and explorers from MS University and beyond to share ideas worth spreading."
    },
    {
        q: "When and where is the event?",
        a: "The main event is scheduled for February 28, 2026, starting at 9 AM. Location details will be shared with ticket holders."
    },
    {
        q: "How can I attend?",
        a: "Registration will open soon. Keep an eye on our registration section and social media channels for the official ticket link."
    },
    {
        q: "Can I be a speaker?",
        a: "Speaker applications for the 2026 edition are currently closed as our lineup is finalized. However, you can always reach out for future collaborations."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="section-padding">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">FAQ</h2>
                <p className="text-gray-400">Everything you need to know about the event.</p>
            </div>

            <div className="flex flex-col gap-4 max-w-3xl mx-auto">
                {faqs.map((faq, i) => (
                    <div key={i} className="glass-card glass-card-hover">
                        <button
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            className="w-full flex justify-between items-center p-6 text-left"
                        >
                            <span className="font-semibold text-white">{faq.q}</span>
                            <motion.div
                                animate={{ rotate: openIndex === i ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ChevronDown className="text-red-600" />
                            </motion.div>
                        </button>
                        <AnimatePresence>
                            {openIndex === i && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                                        {faq.a}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
}
