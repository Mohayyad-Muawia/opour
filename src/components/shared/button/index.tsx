"use client";
import { Link } from "@/i18n/routing";
import { motion, HTMLMotionProps } from "motion/react";

export default function Button({
  children,
  onClick,
  className,
  href,
  ...props
}: HTMLMotionProps<"button"> & {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  href?: string;
}) {
  const animationProps = {
    whileHover: { y: -2, opacity: 0.75 },
    whileTap: { scale: 0.96 },
    transition: { duration: 0, ease: ["easeInOut"] },
  } as any;
  if (href) {
    return (
      <Link href={href}>
        <motion.button
          onClick={onClick}
          className={className}
          {...animationProps}
          {...props}
        >
          {children}
        </motion.button>
      </Link>
    );
  } else {
    return (
      <motion.button
        onClick={onClick}
        className={className}
        {...animationProps}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
}
