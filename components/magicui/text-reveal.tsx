"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.99", "start 0.7"] // Değerleri değiştirdik
  });

  const words = text.split(" ");

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <p className="flex flex-wrap text-lg font-medium">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mr-1 mt-1">
      <span className="absolute opacity-10">{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className="text-black dark:text-white"
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
