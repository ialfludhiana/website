import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../../../components/navbar";
import TestimonialLogos from "../../../components/testimonial-logos";
import SiteFooter from "../../../components/site-footer";
import { IoStar } from "react-icons/io5";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ialf.in";
const PAGE_TITLE = "TCF (French)";

export const metadata = {
  title: "TCF Canada Preparation Ludhiana | IALF Immigration",
  description:
    "Achieve your TCF Canada target score with expert coaching at IALF Ludhiana. Focused French test preparation for immigration and permanent residency applications.",
  alternates: { canonical: `${SITE_URL}/tests/tcf` },
};

const sideLinks = [
  { href: "/tests/ielts", label: "IELTS - General / Academic" },
  { href: "/tests/pte", label: "Pearson Test of English (PTE)" },
  { href: "/tests/delf-dalf", label: "DELF/DALF" },
  { href: "/tests/tcf", label: "Test de Connaissance du Francais (TCF)" },
  { href: "/tests/tef", label: "Test d'Evaluation de Francais (TEF)" }
];

export default function TCFPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="relative h-[170px] w-full overflow-hidden bg-sky-500/70">
        <Image src="/header.png" alt="" fill className="object-cover opacity-60" sizes="100vw" priority />
        <div className="absolute left-10 top-1/2 -translate-y-1/2 transform text-white md:left-40">
          <h1 className="mb-1 text-3xl font-bold drop-shadow md:text-4xl">{PAGE_TITLE}</h1>
          <div className="text-sm font-normal text-white/80">
            Home <span className="mx-1 text-white/50">/</span> TCF
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[2fr,1fr]">
          <div className="space-y-6">
            <section className="border border-slate-100 bg-slate-50/70 p-6 shadow-sm">
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-semibold text-slate-900">Hit the TCF thresholds for immigration</h2>
                <p className="text-slate-700">
                  We coach you on CEFR-aligned production and comprehension so you can meet the French-language proof for
                  Quebec and federal programs. Expect structured speaking loops and writing outlines that mirror exam tasks.
                </p>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="border border-slate-200 bg-white px-4 py-3 shadow-sm">
                    <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Oral expression</div>
                    <p className="mt-1 text-sm text-slate-700">Role-play prompts, spontaneity drills, and connector fluency.</p>
                  </div>
                  <div className="border border-slate-200 bg-white px-4 py-3 shadow-sm">
                    <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Compréhension écrite</div>
                    <p className="mt-1 text-sm text-slate-700">Timed reading, inference skills, and answer-mapping practice.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">4-week calibration plan</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {[
                  { title: "Week 1", body: "Baseline CEFR check, phonetics refresh, core grammar cleanup." },
                  { title: "Week 2", body: "Listening + reading accuracy with timed drills and vocab by theme." },
                  { title: "Week 3", body: "Speaking spontaneity, role-plays, opinion structuring." },
                  { title: "Week 4", body: "Mock exam sets, pacing strategy, final feedback loop." }
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
                <li>• Speaking simulations with examiner-style feedback.</li>
                <li>• Writing frameworks with CEFR-linked corrections.</li>
                <li>• Listening/reading drills with error logs by theme.</li>
                <li>• Vocabulary banks for immigration/academic contexts.</li>
                <li>• Guidance on score proof for Quebec and federal streams.</li>
              </ul>
            </section>

            <section className="border border-slate-100 bg-gradient-to-r from-sky-600/90 to-indigo-700/90 p-6 text-white shadow-sm">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="text-sm uppercase tracking-wide text-white/80">Ready to get certified?</div>
                  <h3 className="text-2xl font-semibold">Book a TCF strategy call</h3>
                  <p className="mt-1 text-white/80">
                    Map your current CEFR level to the score you need and get a focused drill plan.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-white/70 bg-white/10 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-white hover:text-blue-700"
                >
                  Talk to a TCF coach
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
                    className={`block border border-slate-200 px-3 py-2 transition hover:bg-slate-50 ${item.href === "/tests/tcf" ? "bg-slate-900 text-white hover:bg-slate-900" : "text-slate-800"
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
                “Role-play drills and timed comprehension sets helped me clear the TCF requirement for Quebec.”
              </p>
              <div className="flex items-center mt-3 text-xs gap-2 justify-end text-yellow-500"><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></div>
              <div className="mt-3 text-sm font-medium flex justify-end  text-slate-900">Rajkamal Singh Dhillon</div>
            </div>

            <div className="border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Helpful links</div>
              <ul className="mt-2 space-y-2 text-sm text-slate-700">
                <li>• Free CEFR self-check</li>
                <li>• Oral expression connector list</li>
                <li>• Writing templates for TCF prompts</li>
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
