"use client";

import { useState } from "react";
import IntroScreen from "./IntroScreen";
import CursorGlow from "./CursorGlow";

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      <CursorGlow />
      {!introDone && <IntroScreen onDone={() => setIntroDone(true)} />}
      <div className={`page-content ${introDone ? "page-visible" : ""}`}>
        {children}
      </div>
    </>
  );
}
