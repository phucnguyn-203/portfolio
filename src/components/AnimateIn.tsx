"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimateInProps {
    children: ReactNode;
    delay?: number;
}

export default function AnimateIn({ children, delay = 0 }: AnimateInProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
        >
            {children}
        </motion.div>
    );
}
