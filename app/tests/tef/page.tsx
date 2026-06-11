import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../../../components/navbar";
import TestimonialLogos from "../../../components/testimonial-logos";
import SiteFooter from "../../../components/site-footer";
import { IoStar } from "react-icons/io5";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ialf.in";
const PAGE_TITLE = "TEF (French)";

export const metadata = {
  title: "TEF Canada Preparation Ludhiana | IALF Immigration",
  description:
    "Prepare for TEF Canada with expert coaching at IALF Ludhiana. Improve your French score for immigration with targeted speaking, writing, listening, and reading drills.",
  alternates: { canonical: `${SITE_URL}/tests/tef` },
};

const sideLinks = [
  { href: "/tests/ielts", label: "IELTS - General / Academic" },
  { href: "/tests/pte", label: "Pearson Test of English (PTE)" },
  { href: "/tests/delf-dalf", label: "DELF/DALF" },
  { href: "/tests/tcf", label: "Test de Connaissance du Francais (TCF)" },
  { href: "/tests/tef", label: "Test d'Evaluation de Francais (TEF)" }
];

export default function TEFPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="relative h-[170px] w-full overflow-hidden bg-sky-500/70">
        <Image src="/header.png" alt="" fill className="object-cover opacity-60" sizes="100vw" priority />
        <div className="absolute left-10 top-1/2 -translate-y-1/2 transform text-white md:left-40">
          <h1 className="mb-1 text-3xl font-bold drop-shadow md:text-4xl">{PAGE_TITLE}</h1>
          <div className="text-sm font-normal text-white/80">
            Home <span className="mx-1 text-white/50">/</span> TEF
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[2fr,1fr]">
          <div className="space-y-6">
            <section className="border border-slate-100 bg-slate-50/70 p-6 shadow-sm">
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-semibold text-slate-900">Confident TEF performance</h2>
                <p className="text-slate-700">
                  TEF rewards clarity and control. We build your spontaneity for expression orale, structure your production
                  écrite, and sharpen comprehension so you can submit strong French-language proof for visas and studies.
                </p>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="border border-slate-200 bg-white px-4 py-3 shadow-sm">
                    <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Expression orale</div>
                    <p className="mt-1 text-sm text-slate-700">Role-plays, argument structuring, and connector fluency.</p>
                  </div>
                  <div className="border border-slate-200 bg-white px-4 py-3 shadow-sm">
                    <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Production écrite</div>
                    <p className="mt-1 text-sm text-slate-700">Templates for lettre/essai and grammar clean-up for higher scores.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">4-week TEF plan</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {[
                  { title: "Week 1", body: "CEFR baseline, phonetics and liaison practice, core grammar fixes." },
                  { title: "Week 2", body: "Listening/reading drills with themes relevant to immigration & studies." },
                  { title: "Week 3", body: "Speaking spontaneity loops and opinion essays with feedback." },
                  { title: "Week 4", body: "Full TEF-style mocks, timing strategy, and targeted revision." }
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
                <li>• Speaking simulations with examiner-style notes.</li>
                <li>• Writing corrections mapped to TEF scoring.</li>
                <li>• Listening/reading accuracy drills with error tracking.</li>
                <li>• Vocabulary banks for immigration, academics, and work.</li>
                <li>• Guidance on presenting TEF scores for your application.</li>
              </ul>
            </section>

            <section className="border border-slate-100 bg-gradient-to-r from-indigo-600/90 to-blue-700/90 p-6 text-white shadow-sm">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="text-sm uppercase tracking-wide text-white/80">Ready to start?</div>
                  <h3 className="text-2xl font-semibold">Book a TEF strategy call</h3>
                  <p className="mt-1 text-white/80">
                    Get a CEFR-to-score roadmap and a focused drill plan for your target.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-white/70 bg-white/10 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-white hover:text-blue-700"
                >
                  Talk to a TEF coach
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
                    className={`block border border-slate-200 px-3 py-2 transition hover:bg-slate-50 ${item.href === "/tests/tef" ? "bg-slate-900 text-white hover:bg-slate-900" : "text-slate-800"
                      }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Result highlight</div>
              <p className="mt-2 text-lg font-semibold text-slate-900">B2/C1 progress</p>
              <p className="text-sm text-slate-700">
                “Weekly speaking loops and structured essays got my TEF scores accepted for my visa file.”
              </p>
              <div className="flex items-center mt-3 text-xs gap-2 justify-end text-yellow-500"><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></div>
              <div className="mt-3 text-sm font-medium flex justify-end  text-slate-900">Drishti</div>
            </div>

            <div className="border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Helpful links</div>
              <ul className="mt-2 space-y-2 text-sm text-slate-700">
                <li>• CEFR connectors cheat sheet</li>
                <li>• Sample TEF prompts and responses</li>
                <li>• Listening practice by daily themes</li>
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
