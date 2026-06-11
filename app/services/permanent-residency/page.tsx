import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../../../components/navbar";
import TestimonialLogos from "../../../components/testimonial-logos";
import SiteFooter from "../../../components/site-footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ialf.in";
const PAGE_TITLE = "Permanent Residency";

export const metadata = {
  title: "Canada Permanent Residency (PR) Consultants Ludhiana",
  description:
    "Apply for Canada PR with expert guidance from IALF Immigration Ludhiana. Express Entry, PNP, and other PR pathways. Trusted Canada PR consultants in Punjab.",
  alternates: { canonical: `${SITE_URL}/services/permanent-residency` },
};

const sideLinks = [
  { href: "/services/permanent-residency", label: "Permanent Residency" },
  { href: "/services/spousal-sponsorship", label: "Spousal Sponsorship" },
  { href: "/services/startup-visa", label: "Startup Visa" },
  { href: "/services/student-visa", label: "Student Visa" },
  { href: "/services/visitor-visa", label: "Visitor Visa" }
];

const faqs = [
  { q: "Which PR pathway fits me?", a: "We assess CRS, work history, language, and job offers to recommend Express Entry, PNP, or other routes." },
  { q: "Can you help improve my CRS?", a: "Yes—language score boosts, provincial targeting, education credential guidance, and job strategy." },
  { q: "Do you review documents before submission?", a: "We run completeness checks, proof reviews, and timeline alignment to reduce refusals." },
  { q: "How do you support after ITA?", a: "Full e-APR assembly, police checks, medical guidance, and submission tracking." }
];

const highlights = [
  "Profile scoring and pathway mapping",
  "Language score upgrade plan (IELTS/PTE/TEF)",
  "Documents and proof review to lower risk",
  "e-APR assembly and submission tracking"
];

export default function PermanentResidencyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="relative h-[170px] w-full overflow-hidden bg-sky-500/70">
        <Image src="/header.png" alt="" fill className="object-cover opacity-60" sizes="100vw" priority />
        <div className="absolute left-10 top-1/2 -translate-y-1/2 transform text-white md:left-40">
          <h1 className="mb-1 text-3xl font-bold drop-shadow md:text-4xl">{PAGE_TITLE}</h1>
          <div className="text-sm font-normal text-white/80">
            Home <span className="mx-1 text-white/50">/</span> Permanent Residency
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[2fr,1fr]">
          <div className="space-y-6">
            <section className="border border-slate-100 bg-slate-50/70 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">A precise PR roadmap</h2>
              <p className="mt-2 text-slate-700">
                We design a pathway that fits your profile—Express Entry, PNP, or employer-driven—then guide you through
                scoring, documents, and submission with minimal friction.
              </p>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <div className="border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Profile & scoring</div>
                  <p className="mt-1 text-sm text-slate-700">CRS optimization, language plan, and credential mapping.</p>
                </div>
                <div className="border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Submission ready</div>
                  <p className="mt-1 text-sm text-slate-700">Proof reviews, timelines, and completeness checks.</p>
                </div>
              </div>
            </section>

            <section className="border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Our process</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {[
                  { title: "Assess & pick pathway", body: "Express Entry vs PNP vs employer streams based on profile." },
                  { title: "Score lift plan", body: "IELTS/PTE/TEF targets, education credential steps, job strategy." },
                  { title: "Docs & proofs", body: "Funds, work letters, PCC/medical guidance, and completeness review." },
                  { title: "Submit & track", body: "e-APR assembly, submission tracking, and response guidance." }
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

            <section className="border border-slate-100 bg-gradient-to-r from-emerald-500/90 to-teal-600/90 p-6 text-white shadow-sm">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="text-sm uppercase tracking-wide text-white/80">Ready to move?</div>
                  <h3 className="text-2xl font-semibold">Book a PR strategy call</h3>
                  <p className="mt-1 text-white/80">Get a scoring plan, documents checklist, and submission roadmap.</p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-white/70 bg-white/10 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-white hover:text-emerald-700"
                >
                  Talk to a PR advisor
                </Link>
              </div>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-20">
            <div className="border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Why choose us</div>
              <ul className="mt-2 space-y-2 text-sm text-slate-700">
                {highlights.map((h) => (
                  <li key={h}>• {h}</li>
                ))}
              </ul>
            </div>

            <div className="border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Success highlight</div>
              <p className="mt-2 text-lg font-semibold text-slate-900">ITA in 3 months</p>
              <p className="text-sm text-slate-700">
                “Score uplift plan and document checks made our e-APR smooth. We felt guided at every step.”
              </p>
              <div className="mt-3 text-sm font-medium text-slate-900">Prabhjot Kaur Chawla</div>
            </div>
          </aside>
        </div>
      </div>

      <TestimonialLogos />
      <SiteFooter />
    </main>
  );
}
