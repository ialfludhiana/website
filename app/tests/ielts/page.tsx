import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../../../components/navbar";
import TestimonialLogos from "../../../components/testimonial-logos";
import SiteFooter from "../../../components/site-footer";
import { IoStar } from "react-icons/io5";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ialf.in";
const PAGE_TITLE = "IELTS";

export const metadata = {
  title: `${PAGE_TITLE} • IALF`,
  description: "IELTS prep with band-focused roadmaps, mock tests, and one-to-one mentoring.",
  alternates: { canonical: `${SITE_URL}/tests/ielts` },
  openGraph: {
    title: `${PAGE_TITLE} • IALF`,
    description: "IELTS prep with band-focused roadmaps, mock tests, and one-to-one mentoring.",
    url: `${SITE_URL}/tests/ielts`,
    images: [{ url: `${SITE_URL}/header.png`, width: 1200, height: 630, alt: PAGE_TITLE }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} • IALF`,
    description: "IELTS prep with band-focused roadmaps, mock tests, and one-to-one mentoring.",
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

export default function IELTSPage() {
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
            <p className="text-xl font-medium">International English Language Testing System</p>
            <section className="border border-slate-100 bg-slate-50/70 p-6 shadow-sm">
              <div className="flex flex-col gap-3">
                <h2 className="text-xl text-slate-900">Your path to a higher band score</h2>
                <p className="text-slate-700">
                  We combine rigorous mock testing, adaptive feedback, and targeted speaking drills to lift your IELTS
                  performance. Whether you need a 6.5 for academics or an 8+ for skilled migration, we map a plan to the
                  exact band you need.
                </p>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="border border-slate-200 bg-white px-4 py-3 shadow-sm">
                    <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Speaking Studio</div>
                    <p className="mt-1 text-sm text-slate-700">Live interviews, accent clarity, and cue-card mastery.</p>
                  </div>
                  <div className="border border-slate-200 bg-white px-4 py-3 shadow-sm">
                    <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Writing Labs</div>
                    <p className="mt-1 text-sm text-slate-700">
                      Task 1 visuals + Task 2 essays with band-specific rubric feedback.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">A 4-week action plan</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {[
                  { title: "Week 1", body: "Diagnostic test, vocabulary base, grammar clean-up." },
                  { title: "Week 2", body: "Speaking mock loops + listening accuracy drills." },
                  { title: "Week 3", body: "Writing task pair practice with banded feedback." },
                  { title: "Week 4", body: "Full-length mocks, timing strategy, and review." }
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
                <li>• Unlimited speaking mocks with recorded feedback.</li>
                <li>• Writing evaluations graded against official band descriptors.</li>
                <li>• Listening and Reading drills with error logs to track patterns.</li>
                <li>• Band-targeted vocabulary banks and quick-reference templates.</li>
                <li>• Visa-focused counselling to align scores with your immigration goals.</li>
              </ul>
            </section>

            <section className="border border-slate-100 bg-gradient-to-r from-sky-500/90 to-blue-600/90 p-6 text-white shadow-sm">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="text-sm uppercase tracking-wide text-white/80">Ready to start?</div>
                  <h3 className="text-2xl font-semibold">Book a strategy call</h3>
                  <p className="mt-1 text-white/80">
                    Get a band roadmap and the exact prep hours you need to hit your target.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-white/70 bg-white/10 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-white hover:text-blue-700"
                >
                  Talk to an IELTS mentor
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
                    className={`block border border-slate-200 px-3 py-2 transition hover:bg-slate-50 ${item.href === "/tests/ielts" ? "bg-slate-900 text-white hover:bg-slate-900" : "text-slate-800"
                      }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Result highlight</div>
              <p className="mt-2 text-lg font-semibold text-slate-900">Band 8 in 6 weeks</p>
              <p className="text-sm text-slate-700 text-justify">
                “IALF instructors and mentors simplified the writing rubric and drilled me on speaking fluency. I walked into test day calm and
                prepared.”
              </p>
              <div className="flex items-center mt-3 text-xs gap-2 justify-end text-yellow-500"><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></div>
              <div className="mt-3 text-sm font-medium flex justify-end  text-slate-900">Jasleen, Student Visa</div>
            </div>

            <div className="border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Helpful links</div>
              <ul className="mt-2 space-y-2 text-sm text-slate-700">
                <li>• Free IELTS band diagnostic</li>
                <li>• Academic vs General guidance</li>
                <li>• Vocabulary packs by band range</li>
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
