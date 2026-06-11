import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import SiteFooter from "@/components/site-footer";
import TestimonialLogos from "@/components/testimonial-logos";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ialf.in";

export const metadata = {
  title: "Business Visa • IALF",
  description:
    "Secure your Canadian Business Visa with IALF. Guidance for business visitors, investor visas, and entrepreneur pathways.",
  alternates: { canonical: `${SITE_URL}/services/business-visa` }
};

const serviceLinks = [
  { label: "Student Visa", href: "/services/student-visa" },
  { label: "Permanent Residency", href: "/services/permanent-residency" },
  { label: "Spousal Sponsorship", href: "/services/spousal-sponsorship" },
  { label: "Startup Visa", href: "/services/startup-visa" },
  { label: "Visitor Visa", href: "/services/visitor-visa" },
  { label: "Business Visa", href: "/services/business-visa" },
];

export default function BusinessVisaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="relative h-[170px] w-full overflow-hidden bg-sky-500/70">
        <Image src="/header.png" alt="Header" fill className="object-cover opacity-60" sizes="100vw" priority />
        <div className="absolute left-10 top-1/2 -translate-y-1/2 transform text-white md:left-40">
          <h1 className="mb-1 text-3xl font-bold drop-shadow md:text-4xl">Business Visa</h1>
          <div className="text-sm font-normal text-white/80">
            Home <span className="mx-1 text-white/50">/</span> Services <span className="mx-1 text-white/50">/</span> Business Visa
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-4 text-2xl font-light text-[#0284c7]">Business Visa / Business Visitor</h2>
            <div className="mb-6 h-0.5 w-12 bg-[#0284c7]" />
            <p className="mb-4 text-justify text-slate-700">
              Canada welcomes foreign businesspeople for meetings, conferences, trade events, and business exploration. If you&apos;re planning to explore Canadian market opportunities or meet business partners, IALF ensures your Business Visitor application is solid.
            </p>
            <p className="mb-4 text-justify text-slate-700">
              For entrepreneurs seeking more permanent immigration pathways through business investment, we also guide you through the Self-Employed Persons Program and relevant Provincial Entrepreneur Streams.
            </p>
            <h3 className="mb-3 mt-6 text-lg font-semibold text-slate-800">Business Immigration Pathways:</h3>
            <ul className="mb-6 space-y-2 text-slate-700">
              {[
                "Business Visitor Visa (TRV for business purposes)",
                "Self-Employed Persons Program",
                "Provincial Entrepreneur Immigration Streams",
                "Intra-Company Transfer Work Permits",
                "Business documentation and cover letter preparation",
                "Refused case appeal and reapplication",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#0284c7]" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="inline-block rounded bg-[#0284c7] px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-[#0369a1]">
              Book a Free Consultation
            </Link>
          </div>

          <aside className="space-y-4">
            <div className="border border-slate-200 p-4">
              <h3 className="mb-3 font-semibold text-slate-800">Our Services</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {serviceLinks.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="flex items-center gap-2 hover:text-[#0284c7]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0284c7]" />
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-slate-200 bg-[#0284c7] p-5 text-white">
              <p className="mb-2 font-semibold">Need Help?</p>
              <p className="text-sm text-white/80">Contact our team for personalised immigration advice.</p>
              <Link href="/contact" className="mt-4 block rounded bg-white px-4 py-2 text-center text-sm font-semibold text-[#0284c7] hover:bg-slate-100">
                Contact Us
              </Link>
            </div>
          </aside>
        </div>
      </div>

      <TestimonialLogos />
      <SiteFooter />
    </main>
  );
}
