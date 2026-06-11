import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../../../components/navbar";
import TestimonialLogos from "../../../components/testimonial-logos";
import SiteFooter from "../../../components/site-footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ialf.in";
const PAGE_TITLE = "Visitor Visa";

export const metadata = {
  title: "Canada Visitor Visa Consultants Ludhiana | Tourist Visa",
  description:
    "Apply for Canada visitor visa with IALF Immigration Ludhiana. Expert tourist and visitor visa consultants in Punjab with high approval rates.",
  alternates: { canonical: `${SITE_URL}/services/visitor-visa` },
};

const sideLinks = [
  { href: "/services/permanent-residency", label: "Permanent Residency" },
  { href: "/services/spousal-sponsorship", label: "Spousal Sponsorship" },
  { href: "/services/startup-visa", label: "Startup Visa" },
  { href: "/services/student-visa", label: "Student Visa" },
  { href: "/services/visitor-visa", label: "Visitor Visa" }
];

const faqs = [
  { q: "What proofs are key?", a: "Purpose of visit, itinerary, funds, employment/leave, home ties, and travel history where applicable." },
  { q: "Do you draft cover letters?", a: "Yes—purpose-driven cover letters that clearly explain travel intent and ties." },
  { q: "How do you reduce refusal risk?", a: "By aligning purpose, funds, ties, and documentation to address common refusal reasons." },
  { q: "Can you help with reapplications?", a: "We review the previous file, address gaps, and rebuild for a stronger submission." }
];

export default function VisitorVisaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="relative h-[170px] w-full overflow-hidden bg-sky-500/70">
        <Image src="/header.png" alt="" fill className="object-cover opacity-60" sizes="100vw" priority />
        <div className="absolute left-10 top-1/2 -translate-y-1/2 transform text-white md:left-40">
          <h1 className="mb-1 text-3xl font-bold drop-shadow md:text-4xl">{PAGE_TITLE}</h1>
          <div className="text-sm font-normal text-white/80">
            Home <span className="mx-1 text-white/50">/</span> Visitor Visa
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[2fr,1fr]">
          <div className="space-y-6">
            <section className="border border-slate-100 bg-slate-50/70 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">Clear, well-supported applications</h2>
              <p className="mt-2 text-slate-700">
                We shape your travel story—purpose, itinerary, funds, and ties—into a concise, believable application that
                meets visa expectations.
              </p>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <div className="border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Purpose & cover</div>
                  <p className="mt-1 text-sm text-slate-700">Purpose-driven cover letter and itinerary alignment.</p>
                </div>
                <div className="border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Funds & ties</div>
                  <p className="mt-1 text-sm text-slate-700">Proof of funds, employment/leave, family and home ties.</p>
                </div>
              </div>
            </section>

            <section className="border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Our process</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {[
                  { title: "Profile & intent", body: "Clarify purpose, travel history, and required documents." },
                  { title: "Proofs & cover letter", body: "Purpose letter, itinerary, funds, employment/leave proofs." },
                  { title: "Completeness check", body: "Review for consistency and address common refusal triggers." },
                  { title: "Submit & support", body: "Submission guidance, biometrics, and reapplication strategy if needed." }
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

            <section className="border border-slate-100 bg-gradient-to-r from-sky-500/90 to-blue-600/90 p-6 text-white shadow-sm">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="text-sm uppercase tracking-wide text-white/80">Travel ready</div>
                  <h3 className="text-2xl font-semibold">Book a visitor visa consult</h3>
                  <p className="mt-1 text-white/80">Get a purpose-led cover letter, proof checklist, and submission plan.</p>
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
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Why choose us</div>
              <ul className="mt-2 space-y-2 text-sm text-slate-700">
                <li>• Purpose-driven cover letters and itineraries.</li>
                <li>• Strong proof of funds and home ties strategy.</li>
                <li>• Reapplication guidance for past refusals.</li>
              </ul>
            </div>

            <div className="border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Success highlight</div>
              <p className="mt-2 text-lg font-semibold text-slate-900">Visit approved</p>
              <p className="text-sm text-slate-700">
                “Clear purpose letter and strong ties documentation helped me get my visa without delays.”
              </p>
              <div className="mt-3 text-sm font-medium text-slate-900">Rajvir Singh Gillr</div>
            </div>
          </aside>
        </div>
      </div>

      <TestimonialLogos />
      <SiteFooter />
    </main>
  );
}
