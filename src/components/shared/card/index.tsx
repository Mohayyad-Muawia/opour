'use client'
import { motion } from 'motion/react'

export default function Card({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div className={`card ${className}`}
      initial={{ y: 0, boxShadow: "var(--shadow-sm)" }} whileHover={{ y: -10, boxShadow: "var(--shadow-lg)" }}
    >
      {children}
    </motion.div>
  )
}
