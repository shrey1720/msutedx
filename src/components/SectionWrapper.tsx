"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export default function SectionWrapper({ children, className = "", delay = 0 }: SectionWrapperProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98] // Premium cubic-bezier
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
