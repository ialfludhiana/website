import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../../../components/navbar";
import TestimonialLogos from "../../../components/testimonial-logos";
import SiteFooter from "../../../components/site-footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ialf.in";
const PAGE_TITLE = "Spousal Sponsorship";

export const metadata = {
  title: `${PAGE_TITLE} • IALF`,
  description: "Spousal sponsorship guidance with proofs strategy, forms, and submission tracking.",
  alternates: { canonical: `${SITE_URL}/services/spousal-sponsorship` },
  openGraph: {
    title: `${PAGE_TITLE} • IALF`,
    description: "Spousal sponsorship guidance with proofs strategy, forms, and submission tracking.",
    url: `${SITE_URL}/services/spousal-sponsorship`,
    images: [{ url: `${SITE_URL}/header.png`, width: 1200, height: 630, alt: PAGE_TITLE }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} • IALF`,
    description: "Spousal sponsorship guidance with proofs strategy, forms, and submission tracking.",
    images: [`${SITE_URL}/header.png`]
  }
};

const sideLinks = [
  { href: "/services/permanent-residency", label: "Permanent Residency" },
  { href: "/services/spousal-sponsorship", label: "Spousal Sponsorship" },
  { href: "/services/startup-visa", label: "Startup Visa" },
  { href: "/services/student-visa", label: "Student Visa" },
  { href: "/services/visitor-visa", label: "Visitor Visa" }
];

const faqs = [
  { q: "Which proofs are most important?", a: "Genuine relationship proofs across timelines—marriage docs, cohabitation, joint finances, communication logs, and travel." },
  { q: "Do you help with forms and cover letters?", a: "Yes—forms, relationship narrative, and cover letters tailored to IRCC expectations." },
  { q: "Can you guide for interviews or ADR?", a: "We prepare you for possible interviews and respond to additional document requests." },
  { q: "How do you reduce refusal risk?", a: "By structuring proofs, checking completeness, and ensuring consistency across all evidence." }
];

export default function SpousalSponsorshipPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="relative h-[170px] w-full overflow-hidden bg-sky-500/70">
        <Image src="/header.png" alt="Header" fill className="object-cover opacity-60" sizes="100vw" priority />
        <div className="absolute left-10 top-1/2 -translate-y-1/2 transform text-white md:left-40">
          <h1 className="mb-1 text-3xl font-bold drop-shadow md:text-4xl">{PAGE_TITLE}</h1>
          <div className="text-sm font-normal text-white/80">
            Home <span className="mx-1 text-white/50">/</span> Spousal Sponsorship
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[2fr,1fr]">
          <div className="space-y-6">
            <section className="border border-slate-100 bg-slate-50/70 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">Build a strong sponsorship file</h2>
              <p className="mt-2 text-slate-700">
                We help you present a genuine relationship with clear, chronological proofs and well-prepared forms, reducing
                refusal risk and delays.
              </p>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <div className="border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Proofs strategy</div>
                  <p className="mt-1 text-sm text-slate-700">Structured evidence across timelines and life events.</p>
                </div>
                <div className="border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Forms + narrative</div>
                  <p className="mt-1 text-sm text-slate-700">Accurate forms, relationship narrative, cover letters.</p>
                </div>
              </div>
            </section>

            <section className="border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Our process</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {[
                  { title: "Profile & eligibility", body: "Check sponsor/principal applicant eligibility and documents." },
                  { title: "Proofs build", body: "Timeline-based evidence: cohabitation, finances, communication, travel." },
                  { title: "Forms & narrative", body: "Accurate forms, relationship story, and cover letters for clarity." },
                  { title: "Submit & respond", body: "Submission tracking, ADR support, and interview readiness." }
                ].map((item) => (
                  <div key={item.title} className="border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm">
                    <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                    <p className="text-sm text-slate-700">{item.body}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="border border-slate-100 bg-slate-50/80 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">FAQs</h3>
              <div className="mt-3 space-y-3">
                {faqs.map((item) => (
                  <details key={item.q} className="group border border-slate-200 bg-white p-4 shadow-sm">
                    <summary className="cursor-pointer text-sm font-semibold text-slate-900">
                      {item.q}
                      <span className="float-right text-slate-400 group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-2 text-sm text-slate-700">{item.a}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="border border-slate-100 bg-gradient-to-r from-rose-500/90 to-pink-600/90 p-6 text-white shadow-sm">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="text-sm uppercase tracking-wide text-white/80">Keep it clean</div>
                  <h3 className="text-2xl font-semibold">Book a sponsorship consult</h3>
                  <p className="mt-1 text-white/80">Get a proofs checklist, narrative draft, and submission roadmap.</p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-white/70 bg-white/10 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-white hover:text-rose-700"
                >
                  Talk to an advisor
                </Link>
              </div>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-20">
            <div className="border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Why choose us</div>
              <ul className="mt-2 space-y-2 text-sm text-slate-700">
                <li>• Proof strategy that covers timelines and life events.</li>
                <li>• Clean forms and clear relationship narrative.</li>
                <li>• ADR and interview preparation support.</li>
              </ul>
            </div>

            <div className="border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Success highlight</div>
              <p className="mt-2 text-lg font-semibold text-slate-900">Smooth approval</p>
              <p className="text-sm text-slate-700">
                “Their proofs checklist and narrative guidance made our application straightforward and stress-free.”
              </p>
              <div className="mt-3 text-sm font-medium text-slate-900">Vipandeep Kaur</div>
            </div>
          </aside>
        </div>
      </div>

      <TestimonialLogos />
      <SiteFooter />
    </main>
  );
}
