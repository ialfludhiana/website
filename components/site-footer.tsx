"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FiMail, FiPenTool, FiPhone } from "react-icons/fi";
import { IoIosArrowRoundForward, IoMdPaperPlane } from "react-icons/io";
import { PiFacebookLogoLight, PiInstagramLogoThin, PiYoutubeLogoThin } from "react-icons/pi";

const languageLinks = [
  { label: "IELTS - General / Academic", href: "/tests/ielts" },
  { label: "Pearson Test of English (PTE)", href: "/tests/pte" },
  { label: "Test d'Evaluation de Francais (TEF)", href: "/tests/tef" },
  { label: "Test de Connaissance du Francais (TCF)", href: "/tests/tcf" },
  { label: "DELF / DALF", href: "/tests/delf-dalf" }
];

const hidePaths = ["/admin", "/staff", "/testimonials", "/promotions", "/users", "/news", "/appointments", "/reviews"];

export default function SiteFooter() {
  const pathname = usePathname() || "/";
  const hide = hidePaths.some((p) => pathname === p || pathname.startsWith(`${p}/`));
  const [showLoader, setShowLoader] = React.useState(false);

  if (hide) return null;

  function triggerLoader() {
    setShowLoader(true);
    setTimeout(() => setShowLoader(false), 2000);
  }

  return (
    <footer className="bg-[#8f98a3] text-slate-200">
      {showLoader && (
        <div className="fixed inset-0 z-[9999] grid place-items-center bg-white/80 dark:bg-slate-900/80">
          <div className="loader" aria-label="Loading" />
        </div>
      )}

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row lg:px-8">
        <div className="w-full md:w-1/3">
          <FooterSubscribeNew />
        </div>

        <div className="flex items-center gap-6 text-2xl">
          <p className="text-sm">Social Links</p>
          <IoIosArrowRoundForward />
          <Link href="https://facebook.com/@ialfuk" className="rounded-full bg-gray-500 p-2 text-white transition-colors duration-300 ease-in-out hover:bg-[#0369a1]" aria-label="Facebook">
            <PiFacebookLogoLight />
          </Link>
          <Link href="https://instagram.com/ialfludhiana" className="rounded-full bg-gray-500 p-2 text-white transition-colors duration-300 ease-in-out hover:bg-[#0369a1]" aria-label="Instagram">
            <PiInstagramLogoThin />
          </Link>
          <Link href="https://youtube.com/@ialfludhiana" className="rounded-full bg-gray-500 p-2 text-white transition-colors duration-300 ease-in-out hover:bg-[#0369a1]" aria-label="YouTube">
            <PiYoutubeLogoThin />
          </Link>
        </div>
      </div>

      <div className="h-px bg-white/10" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="max-w-md">
          <div className="flex items-center gap-3">
            <Image
              src="/white-logo.png"
              alt="IALF logo"
              width={112}
              height={56}
              className="h-14 w-auto"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/icon.svg";
              }}
            />
          </div>
          <p className="mt-6 w-52 text-sm leading-7 text-slate-100/85">
            IALF is providing trustworthy, transparent, client-focused immigration solutions from a range of Temporary Resident Visa to Permanent Residency. Our team specializes in refused cases
          </p>
        </div>

        <div>
          <h4 className="text-xl text-white">Our Services</h4>
          <div className="mt-2 mb-5 h-[3px] w-14 bg-white/30" />
          <ul className="space-y-3 text-slate-100/85">
            {[
              { label: "Student Visa", href: "/services/student-visa" },
              { label: "Permanent Residency", href: "/services/permanent-residency" },
              { label: "Spousal Sponsorship", href: "/services/spousal-sponsorship" },
              { label: "StartUp Visa", href: "/services/startup-visa" },
              { label: "Business Visa", href: "/services/business-visa" },
              { label: "Visitor Visa", href: "/services/visitor-visa" }
            ].map((s) => (
              <li key={s.label} className="flex items-center gap-2">
                <IoMdPaperPlane />
                <Link href={s.href} className="hover:text-white">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xl text-white">India Office</h4>
          <div className="mt-2 mb-5 h-[3px] w-14 bg-white/30" />
          <ul className="space-y-0 text-slate-100/85">
            <li className="flex items-center font-semibold">IALF Private Limited</li>
            <li>5th Floor, Hotel Mahal,</li>
            <li>Opposite Verka Milk Plant,</li>
            <li>Ferozepur Road, Ludhiana</li>
            <li>Punjab - 141004 India</li>
          </ul>
          <ul className="mt-4 space-y-4 text-slate-100/85">
            <li className="flex items-center gap-2">
              <FiPhone />
              +91 70306 70306
            </li>
            <li className="flex items-center gap-2">
              <FiMail />
              info@ialf.in
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl text-white">Language Tests</h4>
          <div className="mt-2 mb-5 h-[3px] w-14 bg-white/30" />
          <ul className="space-y-3 text-slate-100/85">
            {languageLinks.map((s) => (
              <li key={s.label}>
                <Link href={s.href} className="flex items-center gap-2 hover:text-white">
                  <FiPenTool className="rotate-90" />
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-slate-200 sm:flex-row lg:px-8">
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-xs hover:text-white">
              Terms and Conditions
            </Link>
            <span className="opacity-60">|</span>
            <Link href="/privacy-policy" className="text-xs hover:text-white">
              Privacy Policy
            </Link>
          </div>
          <p className="text-xs text-slate-100/85">&#169; 2017-2026 IALF | Immigration & Visa Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterSubscribeNew() {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "already" | "error">("idle");
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalMessage, setModalMessage] = React.useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "loading") return;
    setStatus("loading");
    setModalOpen(false);
    setModalMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const json = await res.json().catch(() => ({} as Record<string, unknown>));

      if (json?.status === "already_subscribed") {
        setStatus("already");
        setModalMessage((json?.message as string) || "You are already on board.");
        setModalOpen(true);
        return;
      }

      if (!res.ok) {
        setStatus("error");
        setModalMessage((json?.message as string) || "Subscription failed.");
        setModalOpen(true);
        return;
      }

      setStatus("success");
      setModalMessage((json?.message as string) || "Thanks for subscribing. You'll be notified of every event.");
      setEmail("");
      setModalOpen(true);
    } catch (err) {
      console.error("Subscribe request failed", err);
      setStatus("error");
      setModalMessage("Sorry for inconvenience our flight is not taking off today due to technical issue.");
      setModalOpen(true);
    }
  }

  const isLoading = status === "loading";
  const isError = status === "error";
  const modalTitle =
    status === "success" ? "Subscribed!" : status === "already" ? "You're already on board" : "Error";
  const modalColor =
    status === "success"
      ? "bg-emerald-100 text-emerald-600"
      : status === "already"
        ? "bg-amber-100 text-amber-600"
        : "bg-rose-100 text-rose-600";
  const modalButton =
    status === "success"
      ? "bg-emerald-500 hover:bg-emerald-600"
      : status === "already"
        ? "bg-amber-500 hover:bg-amber-600"
        : "bg-rose-500 hover:bg-rose-600";

  return (
    <>
      <form onSubmit={submit} className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email to Subscribe!"
          className="w-full bg-white/10 py-3 pl-5 pr-12 text-slate-100 placeholder:text-slate-300/80 outline-none ring-1 ring-white/15 focus:ring-white/25"
          required
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="absolute right-1 top-1/2 -translate-y-1/2 rounded px-2 py-1 text-gray-100 hover:text-white"
          disabled={isLoading}
        >
          {isLoading ? "..." : <FiMail className="text-xl" />}
        </button>
        {isError && <div className="mt-2 text-xs text-red-200">{modalMessage || "Failed to subscribe."}</div>}
      </form>

      {modalOpen && (status === "success" || status === "already" || status === "error") && (
        <div className="fixed inset-0 z-[10000] grid place-items-center bg-black/40 px-4">
          <div className="w-full max-w-lg bg-white p-10 text-center shadow-2xl">
            <div className={`mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full border-2 ${modalColor} border-current`}>
              <span className="text-4xl">✕</span>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900">{modalTitle}</h3>
            <p className="mt-3 whitespace-pre-line text-base text-slate-600">{modalMessage}</p>
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => {
                  setModalOpen(false);
                  setStatus("idle");
                }}
                className={`w-40 px-4 py-3 text-sm font-semibold text-white transition ${modalButton}`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
