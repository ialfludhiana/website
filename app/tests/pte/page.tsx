import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../../../components/navbar";
import TestimonialLogos from "../../../components/testimonial-logos";
import SiteFooter from "../../../components/site-footer";
import { IoStar } from "react-icons/io5";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ialf.in";
const PAGE_TITLE = "Pearson Test of English (PTE)";

export const metadata = {
  title: "PTE Coaching Ludhiana | PTE Preparation for Canada",
  description:
    "Score high in PTE Academic with IALF coaching in Ludhiana. AI-scored practice, mock labs, and targeted strategies for Canada immigration requirements.",
  alternates: { canonical: `${SITE_URL}/tests/pte` },
};

const sideLinks = [
  { href: "/tests/ielts", label: "IELTS - General / Academic" },
  { href: "/tests/pte", label: "Pearson Test of English (PTE)" },
  { href: "/tests/delf-dalf", label: "DELF/DALF" },
  { href: "/tests/tcf", label: "Test de Connaissance du Francais (TCF)" },
  { href: "/tests/tef", label: "Test d'Evaluation de Francais (TEF)" }
];

export default function PTEPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="relative h-[170px] w-full overflow-hidden bg-sky-500/70">
        <Image src="/header.png" alt="" fill className="object-cover opacity-60" sizes="100vw" priority />
        <div className="absolute left-10 top-1/2 -translate-y-1/2 transform text-white md:left-40">
          <h1 className="mb-1 text-3xl font-bold drop-shadow md:text-4xl">{PAGE_TITLE}</h1>
          <div className="text-sm font-normal text-white/80">
            Home <span className="mx-1 text-white/50">/</span> PTE
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[2fr,1fr]">
          <div className="space-y-6">

            <p className="text-xl font-medium">Pearson Test of English</p>
            <section className="border border-slate-100 bg-slate-50/70 p-6 shadow-sm">
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-semibold text-slate-900">Score higher with AI-scored strategies</h2>
                <p className="text-slate-700">
                  PTE rewards precision and tempo. We drill repeat-sentence fluency, describe-image structure, and
                  one-pass reading accuracy so your AI score spikes quickly—whether you need 65+ or 79+.
                </p>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="border border-slate-200 bg-white px-4 py-3 shadow-sm">
                    <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Speaking Sprint</div>
                    <p className="mt-1 text-sm text-slate-700">Fluency-first drills for repeat sentence & read aloud.</p>
                  </div>
                  <div className="border border-slate-200 bg-white px-4 py-3 shadow-sm">
                    <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Writing Frames</div>
                    <p className="mt-1 text-sm text-slate-700">Templates for summarize text & essays with grammar cleanup.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">A 4-week action plan</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {[
                  { title: "Week 1", body: "Baseline mock, microphone check, fluency drills, core templates." },
                  { title: "Week 2", body: "Speaking tempo loops + reading re-order & fill-in-the-blanks accuracy." },
                  { title: "Week 3", body: "Writing polish: summarize written text + essay with banded feedback." },
                  { title: "Week 4", body: "Full-length AI-scored mocks, timing strategy, and refinement." }
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
                <li>• Unlimited AI-style speaking mocks with fluency timing.</li>
                <li>• Writing scored to PTE rubrics with actionable fixes.</li>
                <li>• Listening & Reading drills with error logs and re-ordering practice.</li>
                <li>• Templates for describe image, re-tell lecture, and summarize text.</li>
                <li>• Visa-aligned counselling to match your target score and timeline.</li>
              </ul>
            </section>

            <section className="border border-slate-100 bg-gradient-to-r from-indigo-500/90 to-blue-600/90 p-6 text-white shadow-sm">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="text-sm uppercase tracking-wide text-white/80">Ready to accelerate?</div>
                  <h3 className="text-2xl font-semibold">Book a PTE strategy call</h3>
                  <p className="mt-1 text-white/80">
                    Get a score roadmap, device setup tips, and the exact drills to hit your target.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-white/70 bg-white/10 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-white hover:text-blue-700"
                >
                  Talk to a PTE coach
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
                    className={`block border border-slate-200 px-3 py-2 transition hover:bg-slate-50 ${item.href === "/tests/pte" ? "bg-slate-900 text-white hover:bg-slate-900" : "text-slate-800"
                      }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Result highlight</div>
              <p className="mt-2 text-lg text-slate-900">Overall 79+ in 5 weeks</p>
              <p className="text-sm text-slate-700">
                “Fluency drills and describe-image templates made the difference. I knew exactly how to pace every task.”
              </p>
              <div className="flex items-center mt-3 text-xs gap-2 justify-end text-yellow-500"><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></div>
              <div className="mt-3 text-sm font-medium flex justify-end  text-slate-900">Sanjana, Student Visa</div>
            </div>

            <div className="border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Helpful links</div>
              <ul className="mt-2 space-y-2 text-sm text-slate-700">
                <li>• Free PTE device & mic check</li>
                <li>• Speaking fluency timer practice</li>
                <li>• Template pack for 65+ and 79+</li>
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
