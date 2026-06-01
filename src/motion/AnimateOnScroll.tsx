"use client"

import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef } from "react";

interface AnimateOnScrollProps {
    children: React.ReactNode;
    delay?: number;
    type?: "fadeInUp" | "fadeInBottom" | "fadeInLeft" | "fadeInRight";
    x?: number | string;
    className?: string;
}

export default function AnimateOnScroll({
    children,
    delay = 0,
    type = "fadeInUp",
    x = 0,
    className
}: AnimateOnScrollProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const variants = {
        fadeInUp: {
            hidden: { opacity: 0, y: 30, x },
            visible: { opacity: 1, y: 0, x },
        },
        fadeInBottom: {
            hidden: { opacity: 0, y: -30, x },
            visible: { opacity: 1, y: 0, x },
        },
        fadeInLeft: {
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0 },
        },
        fadeInRight: {
            hidden: { opacity: 0, x: 30 },
            visible: { opacity: 1, x: 0 },
        },
    };

    return (
        <motion.div
            className={className}
            ref={ref}
            variants={variants[type]}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: delay + .2 }}
        >
            {children}
        </motion.div>
    );
}