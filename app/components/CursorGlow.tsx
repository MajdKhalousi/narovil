"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  const pos = useRef({ x: -300, y: -300 });
  const smooth = useRef({ x: -300, y: -300 });
  const raf = useRef<number>(0);

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    const updateDeviceType = () => {
      setIsDesktop(mediaQuery.matches);
    };

    updateDeviceType();
    mediaQuery.addEventListener("change", updateDeviceType);

    return () => {
      mediaQuery.removeEventListener("change", updateDeviceType);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };

      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top = e.clientY + "px";
        dotRef.current.style.opacity = "1";
      }
    };

    const animate = () => {
      smooth.current.x += (pos.current.x - smooth.current.x) * 0.07;
      smooth.current.y += (pos.current.y - smooth.current.y) * 0.07;

      if (glowRef.current) {
        glowRef.current.style.left = smooth.current.x + "px";
        glowRef.current.style.top = smooth.current.y + "px";
      }

      raf.current = requestAnimationFrame(animate);
    };

    const onLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf.current);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      <div ref={glowRef} className="cursor-glow" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}