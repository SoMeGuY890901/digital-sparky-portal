"use client";

import { LazyMotion, domAnimation, m, useAnimation } from "framer-motion";
import { useEffect } from "react";

type SparkLogoProps = {
  size?: number;
  className?: string;
};

export function SparkLogo({ size = 48, className }: SparkLogoProps) {
  const controls = useAnimation();

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    void controls.start({
      filter: [
        "drop-shadow(0 0 0px rgba(201, 85, 61, 0))",
        "drop-shadow(0 0 12px rgba(201, 85, 61, 0.95))",
        "drop-shadow(0 0 4px rgba(201, 85, 61, 0.5))",
      ],
      transition: { duration: 1.6, ease: "easeOut", times: [0, 0.42, 1] },
    });
  }, [controls]);

  return (
    <LazyMotion features={domAnimation} strict>
      <m.svg
        animate={controls}
        width={size}
        height={size}
        viewBox="0 0 64 64"
        className={className}
        aria-hidden="true"
        focusable="false"
      >
        <path
          className="spark-draw"
          d="M32 7.5 L36.2 25.2 L55 32 L36.2 38.8 L32 56.5 L27.8 38.8 L9 32 L27.8 25.2 Z"
          fill="none"
          stroke="#C9553D"
          strokeWidth="2.4"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          className="spark-draw spark-draw-inner"
          d="M32 20 L34.2 29.4 L44 32 L34.2 34.6 L32 44 L29.8 34.6 L20 32 L29.8 29.4 Z"
          fill="none"
          stroke="#E0C48A"
          strokeWidth="1.6"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <circle className="spark-core" cx="32" cy="32" r="1.6" fill="#E0C48A" />
      </m.svg>
    </LazyMotion>
  );
}
