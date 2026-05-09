"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type HeaderProps = {
  currentLocale: "ar" | "en";
  switchTo: string;
  langSwitch: string;
  whatsappUrl: string;
  nav: {
    services: string;
    solutions: string;
    why: string;
    process: string;
    about: string;
    contact: string;
    whatsapp: string;
  };
};

export default function Header({
  currentLocale,
  switchTo,
  langSwitch,
  whatsappUrl,
  nav,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const packagesLabel = currentLocale === "ar" ? "الباقات" : "Packages";
  const menuLabel = currentLocale === "ar" ? "القائمة" : "Menu";
  const closeLabel = currentLocale === "ar" ? "إغلاق" : "Close";

  const links = [
    { href: "#services", label: nav.services },
    { href: "#solutions", label: nav.solutions },
    { href: "#packages", label: packagesLabel },
    { href: "#why", label: nav.why },
    { href: "#process", label: nav.process },
    { href: "#about", label: nav.about },
    { href: "#contact", label: nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 80) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
        setIsMenuOpen(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#05070f]/85 backdrop-blur-xl transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-6 md:py-5">
          <a href="#" className="flex items-center gap-3">
            <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-white/10 bg-white md:h-12 md:w-12">
              <Image
                src="/narovil-logo.png"
                alt="NAROVIL logo"
                fill
                sizes="48px"
                className="object-cover"
                priority
              />
            </div>

            <div>
              <h1 className="text-base font-bold tracking-[0.28em] text-white md:text-lg">
                NAROVIL
              </h1>
              <p className="text-[11px] text-white/50 md:text-xs">
                Software Studio
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={switchTo}
              className="inline-flex rounded-full border border-white/10 px-3 py-2 text-xs text-white/70 transition hover:bg-white/10 hover:text-white md:px-4"
            >
              {langSwitch}
            </a>

            {/* Desktop WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              className="hidden rounded-full bg-[#4da3ff] px-5 py-2.5 text-sm font-semibold text-[#05070f] transition hover:bg-[#7dbdff] md:inline-flex"
            >
              {nav.whatsapp}
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="inline-flex rounded-full bg-[#4da3ff] px-4 py-2 text-xs font-bold text-[#05070f] transition hover:bg-[#7dbdff] md:hidden"
            >
              {menuLabel}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 z-[70] h-screen w-[82%] max-w-sm border-white/10 bg-[#07111f] p-6 shadow-2xl transition-transform duration-300 md:hidden ${
          currentLocale === "ar"
            ? `left-0 border-r ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`
            : `right-0 border-l ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-white/10 bg-white">
              <Image
                src="/narovil-logo.png"
                alt="NAROVIL logo"
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-sm font-bold tracking-[0.25em] text-white">
                NAROVIL
              </h2>
              <p className="text-[11px] text-white/45">Software Studio</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="rounded-full border border-white/10 px-3 py-2 text-xs text-white/70"
          >
            {closeLabel}
          </button>
        </div>

        <nav className="space-y-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-semibold text-white/75 transition hover:bg-white/[0.07] hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          className="mt-6 flex w-full justify-center rounded-full bg-[#4da3ff] px-6 py-4 text-sm font-bold text-[#05070f]"
        >
          {currentLocale === "ar" ? "ناقش مشروعك عبر واتساب" : "Discuss on WhatsApp"}
        </a>
      </div>
    </>
  );
}