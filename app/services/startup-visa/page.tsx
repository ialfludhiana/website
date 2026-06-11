import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../../../components/navbar";
import TestimonialLogos from "../../../components/testimonial-logos";
import SiteFooter from "../../../components/site-footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ialf.in";
const PAGE_TITLE = "Startup Visa";

export const metadata = {
  title: `${PAGE_TITLE} • IALF`,
  description: "Canada Startup Visa guidance with pitch readiness, incubator alignment, and documentation support.",
  alternates: { canonical: `${SITE_URL}/services/startup-visa` },
  openGraph: {
    title: `${PAGE_TITLE} • IALF`,
    description: "Canada Startup Visa guidance with pitch readiness, incubator alignment, and documentation support.",
    url: `${SITE_URL}/services/startup-visa`,
    images: [{ url: `${SITE_URL}/header.png`, width: 1200, height: 630, alt: PAGE_TITLE }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} • IALF`,
    description: "Canada Startup Visa guidance with pitch readiness, incubator alignment, and documentation support.",
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
  { q: "Do you connect with incubators/angels?", a: "We guide on aligning with designated organizations and help you prepare investor-ready pitch materials." },
  { q: "What documents are needed?", a: "Business plan, pitch deck, commitment certificate/letter of support, language proof, funds, and personal docs." },
  { q: "How do you reduce risk?", a: "We focus on viability, market proof, financials, and completeness to meet program expectations." },
  { q: "Can you help post-landing?", a: "We can guide on early operational steps and compliance after arrival." }
];

export default function StartupVisaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="relative h-[170px] w-full overflow-hidden bg-sky-500/70">
        <Image src="/header.png" alt="Header" fill className="object-cover opacity-60" sizes="100vw" priority />
        <div className="absolute left-10 top-1/2 -translate-y-1/2 transform text-white md:left-40">
          <h1 className="mb-1 text-3xl font-bold drop-shadow md:text-4xl">{PAGE_TITLE}</h1>
          <div className="text-sm font-normal text-white/80">
            Home <span className="mx-1 text-white/50">/</span> Startup Visa
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[2fr,1fr]">
          <div className="space-y-6">
            <section className="border border-slate-100 bg-slate-50/70 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">Position your startup for Canada</h2>
              <p className="mt-2 text-slate-700">
                We help you refine your business narrative, pitch deck, and market proof while aligning with designated
                incubators/angels to secure the needed support.
              </p>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <div className="border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Pitch & plan</div>
                  <p className="mt-1 text-sm text-slate-700">Investor-style deck, market sizing, and execution roadmap.</p>
                </div>
                <div className="border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Support pathway</div>
                  <p className="mt-1 text-sm text-slate-700">Guidance on incubator/angel alignment and documentation.</p>
                </div>
              </div>
            </section>

            <section className="border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Our process</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {[
                  { title: "Assess & refine", body: "Business viability review, market proof, and deck/storyline upgrades." },
                  { title: "Align with support", body: "Guidance for incubators/angels and application readiness." },
                  { title: "Docs & proofs", body: "Plan, financials, letter of support, and personal documents." },
                  { title: "Submit & follow-up", body: "Application assembly, tracking, and post-landing orientation." }
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

            <section className="border border-slate-100 bg-gradient-to-r from-indigo-500/90 to-blue-600/90 p-6 text-white shadow-sm">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="text-sm uppercase tracking-wide text-white/80">Ready to pitch?</div>
                  <h3 className="text-2xl font-semibold">Book a startup visa consult</h3>
                  <p className="mt-1 text-white/80">Get your deck, plan, and support pathway aligned for Canada.</p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-white/70 bg-white/10 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-white hover:text-blue-700"
                >
                  Talk to an advisor
                </Link>
              </div>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-20">
            <div className="border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Why startups choose us</div>
              <ul className="mt-2 space-y-2 text-sm text-slate-700">
                <li>• Investor-grade pitch and plan refinement.</li>
                <li>• Guidance on designated organizations and support letters.</li>
                <li>• Complete application assembly and tracking.</li>
              </ul>
            </div>

            <div className="border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Success highlight</div>
              <p className="mt-2 text-lg font-semibold text-slate-900">Incubator acceptance</p>
              <p className="text-sm text-slate-700">
                “Their deck polish and market proof guidance helped us secure a letter of support quickly.”
              </p>
              <div className="mt-3 text-sm font-medium text-slate-900">Rajat Malhotra</div>
            </div>
          </aside>
        </div>
      </div>

      <TestimonialLogos />
      <SiteFooter />
    </main>
  );
}
