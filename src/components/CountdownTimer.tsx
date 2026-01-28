"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CountdownTimer() {
    const targetDate = new Date("2026-02-28T09:00:00");

    const calculateTimeLeft = () => {
        const difference = +targetDate - +new Date();
        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setTimeLeft(calculateTimeLeft());
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    if (!mounted) return null;

    return (
        <div className="w-full flex justify-center items-center py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {Object.entries(timeLeft).map(([unit, value]) => (
                    <motion.div
                        key={unit}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center"
                    >
                        <div className="glass-card w-20 h-20 md:w-28 md:h-28 flex items-center justify-center mb-2">
                            <span className="text-3xl md:text-4xl font-bold text-red-600 font-mono">
                                {String(value).padStart(2, "0")}
                            </span>
                        </div>
                        <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-500 font-bold">
                            {unit}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
