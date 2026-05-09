"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function IntroScreen({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"logo" | "text" | "out">("logo");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("text"), 800);
    const t2 = setTimeout(() => setPhase("out"), 2200);
    const t3 = setTimeout(() => onDone(), 2900);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  return (
    <div
      className={`intro-screen ${phase === "out" ? "intro-out" : ""}`}
      aria-hidden="true"
    >
      {/* Radial glow */}
      <div className="intro-glow" />

      <div className="intro-logo-wrap">
        {/* Logo image */}
        <div className={`intro-logo-box ${phase !== "logo" ? "intro-logo-scaled" : ""}`}>
          <div className="intro-ring" />
          <div className="intro-img-box">
            <Image
              src="/narovil-logo.png"
              alt="NAROVIL"
              fill
              sizes="120px"
              className="object-contain"
              priority
            />
            {/* Shine sweep */}
            <div className={`intro-shine ${phase !== "logo" ? "intro-shine-run" : ""}`} />
          </div>
          {/* Star pulse — positioned like actual logo */}
          <div className={`intro-star ${phase !== "logo" ? "intro-star-pulse" : ""}`}>
            <svg viewBox="0 0 20 20" fill="none" width="20" height="20">
              <path
                d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z"
                fill="#4da3ff"
              />
            </svg>
          </div>
        </div>

        {/* Brand name */}
        <div className={`intro-brand ${phase === "text" || phase === "out" ? "intro-brand-in" : ""}`}>
          NAROVIL
        </div>
        <div className={`intro-sub ${phase === "text" || phase === "out" ? "intro-sub-in" : ""}`}>
          Software Studio
        </div>
      </div>

      {/* Progress bar */}
      <div className="intro-progress">
        <div className={`intro-progress-fill ${phase !== "logo" ? "intro-progress-done" : ""}`} />
      </div>
    </div>
  );
}
