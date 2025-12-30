"use client";


import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface Text_01Props {
  text: string;
  className?: string;
}

export const ShimmerText = ({
  text = "Gina",
  className,
}: Text_01Props) => {
  return (
    <div className=" ml-3 flex justify-start">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden mb-2"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 4}}
      >
        <motion.div
          animate={{
            backgroundPosition: ["200% center", "-200% center"],
          }}
          className={cn(
            "bg-[length:200%_100%] bg-linear-to-r from-accent-2 via-accent to-primary bg-clip-text p-1 font-bold text-4xl font-monserrat text-transparent dark:from-white dark:via-neutral-600 dark:to-white",
            className
          )}
          transition={{
            duration: 4,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          {text}
        </motion.div>
      </motion.div>
    </div>
  );
}
