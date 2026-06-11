import Image from "next/image";
import Link from "next/link";
import { TopPicksRotator } from "../../../components/top-picks-rotator";
import { Navbar } from "../../../components/navbar";
import TestimonialLogos from "../../../components/testimonial-logos";
import SiteFooter from "../../../components/site-footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ialf.in";
const PAGE_TITLE = "Student Visa";

export const metadata = {
  title: `${PAGE_TITLE} • IALF`,
  description:
    "End-to-end student visa guidance with SOP crafting, admission support, funds readiness, and visa interview prep.",
  alternates: { canonical: `${SITE_URL}/services/student-visa` },
  openGraph: {
    title: `${PAGE_TITLE} • IALF`,
    description:
      "End-to-end student visa guidance with SOP crafting, admission support, funds readiness, and visa interview prep.",
    url: `${SITE_URL}/services/student-visa`,
    images: [{ url: `${SITE_URL}/header.png`, width: 1200, height: 630, alt: PAGE_TITLE }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} • IALF`,
    description:
      "End-to-end student visa guidance with SOP crafting, admission support, funds readiness, and visa interview prep.",
    images: [`${SITE_URL}/header.png`]
  }
};

const faqs = [
  {
    q: "What makes a strong SOP for Canada?",
    a: "Clear intent, academic fit, career linkage, home ties, and transparent funds. We craft and review with visa trends in mind."
  },
  {
    q: "How do you help with proof of funds?",
    a: "We guide on required amounts, accepted formats, GIC pathways, and documentation to reduce refusal risk."
  },
  {
    q: "Do you assist with university/college selection?",
    a: "Yes—program shortlisting by ROI, visa friendliness, and your academic profile, plus offer management."
  },
  {
    q: "Can you review my refusal and reapply?",
    a: "We audit GCMS notes (when available), address refusal grounds, and rebuild SOP/financials for a stronger reapplication."
  }
];

const topPicksByCountry = [
  {
    country: "Canada",
    schools: [
      { name: "University of Toronto", note: "Global ranking and research strength" },
      { name: "University of British Columbia", note: "STEM & sustainability focus" },
      { name: "University of Waterloo", note: "Co-op and tech ecosystem" },
      { name: "McGill University", note: "Research-led and globally diverse" },
      { name: "University of Alberta", note: "Energy, AI, and life sciences depth" }
    ]
  },
  {
    country: "Australia",
    schools: [
      { name: "University of Melbourne", note: "Research and graduate outcomes" },
      { name: "Monash University", note: "Healthcare and engineering strength" },
      { name: "UNSW Sydney", note: "Industry-linked tech programs" },
      { name: "University of Queensland", note: "Life sciences and sustainability" },
      { name: "University of Sydney", note: "Reputation plus clinical pathways" }
    ]
  },
  {
    country: "United Kingdom",
    schools: [
      { name: "University of Manchester", note: "STEM and business reputation" },
      { name: "University of Leeds", note: "Strong student support and careers" },
      { name: "University of Bristol", note: "Research-led, employability focus" },
      { name: "University of Nottingham", note: "Scholarships and campus experience" },
      { name: "University of Edinburgh", note: "Russell Group, strong global reach" }
    ]
  },
  {
    country: "United States",
    schools: [
      { name: "University of Illinois Urbana-Champaign", note: "Engineering powerhouse" },
      { name: "Arizona State University", note: "Innovation focus and internships" },
      { name: "Northeastern University", note: "Co-op model for work experience" },
      { name: "Purdue University", note: "STEM and aviation leadership" },
      { name: "UC Davis", note: "Life sciences and sustainability" }
    ]
  }
];

export default function StudentVisaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="relative h-[170px] w-full overflow-hidden bg-sky-500/70">
        <Image src="/header.png" alt="Header" fill className="object-cover opacity-60" sizes="100vw" priority />
        <div className="absolute left-10 top-1/2 -translate-y-1/2 transform text-white md:left-40">
          <h1 className="mb-1 text-3xl font-bold drop-shadow md:text-4xl">{PAGE_TITLE}</h1>
          <div className="text-sm font-normal text-white/80">
            Home <span className="mx-1 text-white/50">/</span> Student Visa
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[2fr,1fr]">
          <div className="space-y-6">
            <section className="border border-slate-100 bg-slate-50/70 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">A complete student visa journey</h2>
              <p className="mt-2 text-slate-700">
                From program selection to visa interview prep, we build a case that is coherent, well-funded, and aligned
                with your career goals. We keep you on track with documents, timelines, and submission quality.
              </p>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <div className="border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Admissions + SOP</div>
                  <p className="mt-1 text-sm text-slate-700">
                    Shortlisting, offers, and persuasive SOPs tied to academics and career.
                  </p>
                </div>
                <div className="border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Funds + Compliance</div>
                  <p className="mt-1 text-sm text-slate-700">
                    Proof of funds, GIC guidance, and document integrity to lower refusal risk.
                  </p>
                </div>
              </div>
            </section>

            <section className="border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Our process</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {[
                  { title: "Profile & program fit", body: "Assess grades, goals, budget; shortlist visa-friendly programs." },
                  { title: "SOP drafting", body: "Storyline with intent, ties, and compliance; edited to current trends." },
                  { title: "Financials", body: "Funds assessment, GIC or bank options, and paperwork review." },
                  { title: "Submission & prep", body: "Forms, checklists, biometrics, and interview readiness." }
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
                  <div className="text-sm uppercase tracking-wide text-white/80">Ready to start?</div>
                  <h3 className="text-2xl font-semibold">Book a student visa consult</h3>
                  <p className="mt-1 text-white/80">Get a tailored checklist, timeline, and SOP/financial roadmap.</p>
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
            <TopPicksRotator groups={topPicksByCountry} />

            <div className="border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Why students choose IALF</div>
              <ul className="mt-2 space-y-2 text-sm text-slate-700">
                <li>• SOPs tailored to program and career alignment.</li>
                <li>• Funds and documentation reviewed to reduce refusals.</li>
                <li>• Transparent timelines and submission tracking.</li>
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
