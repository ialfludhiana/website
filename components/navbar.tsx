"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { PiFacebookLogoLight, PiInstagramLogoThin, PiYoutubeLogoThin } from "react-icons/pi";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "#language-test", label: "Language Tests" },
  { href: "#gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" }
];

const serviceLinks = [
  { href: "/services/student-visa", label: "Student Visa" },
  { href: "/services/permanent-residency", label: "Permanent Residency" },
  { href: "/services/spousal-sponsorship", label: "Spousal Sponsorship" },
  { href: "/services/startup-visa", label: "StartUp Visa" },
  { href: "/services/visitor-visa", label: "Visitor Visa" }
];

const languageLinks = [
  { href: "/tests/ielts", label: "IELTS" },
  { href: "/tests/pte", label: "Pearson Test of English (PTE)" },
  { href: "/tests/tef", label: "TEF (French)" },
  { href: "/tests/tcf", label: "TCF (French)" },
  { href: "/tests/delf-dalf", label: "DELF / DALF" }
];

const galleryLinks = [
  { href: "/gallery/testimonials", label: "Testimonials" },
  { href: "/gallery/videos", label: "Video Section" },
  { href: "/gallery/events-seminars", label: "Events & Seminars" },
  { href: "/submit-testimonial", label: "Submit Your Testimonial" }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const languageRef = useRef<HTMLDivElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesOpen(false);
      if (languageRef.current && !languageRef.current.contains(e.target as Node)) setLanguageOpen(false);
      if (galleryRef.current && !galleryRef.current.contains(e.target as Node)) setGalleryOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full py-5 transition-colors duration-300 ${isScrolled ? "bg-slate-400/15 backdrop-blur" : "bg-slate-100/90 shadow-sm backdrop-blur"
        }`}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="IALF" width={140} height={40} className="h-14 w-auto object-contain" />
        </div>

        <div className="ml-auto flex items-center gap-8">
          <nav className="hidden items-center gap-12 md:flex">
            <Link href="/" className="text-md text-slate-600 transition-colors hover:text-slate-500">
              Home
            </Link>
            <Link href="/about" className="text-md text-slate-600 transition-colors hover:text-slate-500">
              About
            </Link>

            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => {
                setServicesOpen(true);
                setLanguageOpen(false);
                setGalleryOpen(false);
              }}
            >
              <button
                type="button"
                onClick={() => setServicesOpen((o) => !o)}
                className="flex items-center gap-1 text-md text-slate-600 transition-colors hover:text-slate-500"
              >
                Services <IoChevronDown className="text-sm" />
              </button>
              {servicesOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white py-2 text-sm text-slate-700 shadow-lg">
                  {serviceLinks.map((s, idx) => (
                    <React.Fragment key={s.href}>
                      <Link href={s.href} className="block px-4 py-2 hover:bg-slate-100">
                        {s.label}
                      </Link>
                      {idx < serviceLinks.length - 1 && <div className="mx-2 h-px bg-slate-200" />}
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>

            <div
              ref={languageRef}
              className="relative"
              onMouseEnter={() => {
                setLanguageOpen(true);
                setServicesOpen(false);
                setGalleryOpen(false);
              }}
            >
              <button
                type="button"
                onClick={() => setLanguageOpen((o) => !o)}
                className="flex items-center gap-1 text-md text-slate-600 transition-colors hover:text-slate-500"
              >
                Language Tests <IoChevronDown className="text-sm" />
              </button>
              {languageOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white py-2 text-sm text-slate-700 shadow-lg">
                  {languageLinks.map((s, idx) => (
                    <React.Fragment key={s.href}>
                      <Link href={s.href} className="block px-4 py-2 hover:bg-slate-100">
                        {s.label}
                      </Link>
                      {idx < languageLinks.length - 1 && <div className="mx-2 h-px bg-slate-200" />}
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>

            <div
              ref={galleryRef}
              className="relative"
              onMouseEnter={() => {
                setGalleryOpen(true);
                setServicesOpen(false);
                setLanguageOpen(false);
              }}
            >
              <button
                type="button"
                onClick={() => setGalleryOpen((o) => !o)}
                className="flex items-center gap-1 text-md text-slate-600 transition-colors hover:text-slate-500"
              >
                Gallery <IoChevronDown className="text-sm" />
              </button>
              {galleryOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white py-2 text-sm text-slate-700 shadow-lg">
                  {galleryLinks.map((s, idx) => (
                    <React.Fragment key={s.href}>
                      <Link href={s.href} className="block px-4 py-2 hover:bg-slate-100">
                        {s.label}
                      </Link>
                      {idx < galleryLinks.length - 1 && <div className="mx-2 h-px bg-slate-200" />}
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>

            {primaryLinks
              .filter((link) => !["Home", "About", "Language Tests", "Gallery"].includes(link.label))
              .map((link) => (
                <Link key={link.label} href={link.href} className="text-md text-slate-600 transition-colors hover:text-slate-500">
                  {link.label}
                </Link>
              ))}
          </nav>

          <div className="flex items-center gap-3 text-xl text-slate-700">
            <Link
              href="https://www.facebook.com/@ialfuk"
              aria-label="Facebook"
              className="rounded-full bg-slate-300 p-2 text-slate-500 transition hover:bg-slate-200 hover:text-blue-500"
            >
              <PiFacebookLogoLight />
            </Link>
            <Link
              href="https://www.instagram.com/ialfludhiana"
              aria-label="Instagram"
              className="rounded-full bg-slate-300 p-2 transition hover:bg-slate-200 hover:text-blue-500"
            >
              <PiInstagramLogoThin />
            </Link>
            <Link
              href="https://www.youtube.com/@ialfludhiana"
              aria-label="YouTube"
              className="rounded-full bg-slate-300 p-2 transition hover:bg-slate-200 hover:text-blue-500"
            >
              <PiYoutubeLogoThin />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
