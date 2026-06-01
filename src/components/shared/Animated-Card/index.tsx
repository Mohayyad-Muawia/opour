'use client'
import { motion } from 'motion/react'
import AnimateOnScroll from '@/motion/AnimateOnScroll'

export default function AnimatedCard({ children, className, delay, type, x }: { children: React.ReactNode, className?: string, delay?: number, type?: "fadeInUp" | "fadeInBottom" | "fadeInLeft" | "fadeInRight", x?: number | string }) {
  return (
    <AnimateOnScroll delay={delay} type={type} x={x}>
      <motion.div
        className={`card ${className}`}
        initial={{ y: 0, boxShadow: 'var(--shadow-sm)' }}
        whileHover={{ y: -10, boxShadow: 'var(--shadow-lg)' }}
      >
        {children}
      </motion.div>
    </AnimateOnScroll>
  )
}
