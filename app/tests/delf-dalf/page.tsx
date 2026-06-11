import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../../../components/navbar";
import TestimonialLogos from "../../../components/testimonial-logos";
import SiteFooter from "../../../components/site-footer";
import { IoStar } from "react-icons/io5";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ialf.in";
const PAGE_TITLE = "DELF / DALF";

export const metadata = {
  title: `${PAGE_TITLE} • IALF`,
  description: "DELF/DALF preparation with CEFR-focused speaking, writing, listening, and reading practice.",
  alternates: { canonical: `${SITE_URL}/tests/delf-dalf` },
  openGraph: {
    title: `${PAGE_TITLE} • IALF`,
    description: "DELF/DALF preparation with CEFR-focused speaking, writing, listening, and reading practice.",
    url: `${SITE_URL}/tests/delf-dalf`,
    images: [{ url: `${SITE_URL}/header.png`, width: 1200, height: 630, alt: PAGE_TITLE }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} • IALF`,
    description: "DELF/DALF preparation with CEFR-focused speaking, writing, listening, and reading practice.",
    images: [`${SITE_URL}/header.png`]
  }
};

const sideLinks = [
  { href: "/tests/ielts", label: "IELTS - General / Academic" },
  { href: "/tests/pte", label: "Pearson Test of English (PTE)" },
  { href: "/tests/delf-dalf", label: "DELF/DALF" },
  { href: "/tests/tcf", label: "Test de Connaissance du Francais (TCF)" },
  { href: "/tests/tef", label: "Test d'Evaluation de Francais (TEF)" }
];

export default function DelleDalfPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="relative h-[170px] w-full overflow-hidden bg-sky-500/70">
        <Image src="/header.png" alt="Header" fill className="object-cover opacity-60" sizes="100vw" priority />
        <div className="absolute left-10 top-1/2 -translate-y-1/2 transform text-white md:left-40">
          <h1 className="mb-1 text-3xl font-bold drop-shadow md:text-4xl">{PAGE_TITLE}</h1>
          <div className="text-sm font-normal text-white/80">
            Home <span className="mx-1 text-white/50">/</span> {PAGE_TITLE}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[2fr,1fr]">
          <div className="space-y-6">
            <section className="border border-slate-100 bg-slate-50/70 p-6 shadow-sm">
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-semibold text-slate-900">DELF/DALF success for A1–C2</h2>
                <p className="text-slate-700">
                  We align your prep with CEFR levels for every section—expression orale, production écrite, compréhension
                  orale/écrite—so you can confidently present your certification for studies, work, or immigration.
                </p>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="border border-slate-200 bg-white px-4 py-3 shadow-sm">
                    <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Oral exams</div>
                    <p className="mt-1 text-sm text-slate-700">Structured answers, connectors, and intonation practice.</p>
                  </div>
                  <div className="border border-slate-200 bg-white px-4 py-3 shadow-sm">
                    <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Writing tasks</div>
                    <p className="mt-1 text-sm text-slate-700">Letters, summaries, and essays with CEFR-aligned corrections.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">4-week level-up plan</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {[
                  { title: "Week 1", body: "Level check, phonetics and liaison, grammar refresh by level." },
                  { title: "Week 2", body: "Listening/reading drills with theme-based vocab and speed control." },
                  { title: "Week 3", body: "Speaking scenarios + writing formats for your target level." },
                  { title: "Week 4", body: "Mock exams, timing strategy, and refined feedback." }
                ].map((item) => (
                  <div key={item.title} className="border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm">
                    <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                    <p className="text-sm text-slate-700">{item.body}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="border border-slate-100 bg-slate-50/80 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">What you get</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>• Speaking practice with examiner-style prompts and notes.</li>
                <li>• Writing corrections mapped to CEFR level expectations.</li>
                <li>• Listening/reading drills with error tracking and vocabulary by theme.</li>
                <li>• Templates for letters, summaries, and arguments by level.</li>
                <li>• Guidance on using DELF/DALF for study, work, or immigration files.</li>
              </ul>
            </section>

            <section className="border border-slate-100 bg-gradient-to-r from-emerald-500/90 to-teal-600/90 p-6 text-white shadow-sm">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="text-sm uppercase tracking-wide text-white/80">Ready to certify?</div>
                  <h3 className="text-2xl font-semibold">Book a DELF/DALF session</h3>
                  <p className="mt-1 text-white/80">
                    Get a CEFR roadmap and personalized drills for your target level.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-white/70 bg-white/10 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-white hover:text-emerald-700"
                >
                  Talk to a French coach
                </Link>
              </div>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-20">
            <div className="border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Language Test Menu</div>
              <div className="mt-3 space-y-2 text-sm">
                {sideLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block border border-slate-200 px-3 py-2 transition hover:bg-slate-50 ${item.href === "/tests/delf-dalf" ? "bg-slate-900 text-white hover:bg-slate-900" : "text-slate-800"
                      }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Result highlight</div>
              <p className="mt-2 text-lg font-semibold text-slate-900">B2 achieved</p>
              <p className="text-sm text-slate-700">
                “Structured speaking and writing feedback helped me secure the DELF level I needed for studies.”
              </p>
              <div className="flex items-center mt-3 text-xs gap-2 justify-end text-yellow-500"><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></div>
              <div className="mt-3 text-sm font-medium flex justify-end  text-slate-900">Aman, Learning</div>
            </div>

            <div className="border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Helpful links</div>
              <ul className="mt-2 space-y-2 text-sm text-slate-700">
                <li>• CEFR level self-check</li>
                <li>• Speaking connectors by level</li>
                <li>• Writing templates (letters, essays, summaries)</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      <TestimonialLogos />
      <SiteFooter />
    </main>
  );
}
