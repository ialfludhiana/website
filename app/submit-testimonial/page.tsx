import Image from "next/image";
import { Navbar } from "@/components/navbar";
import SiteFooter from "@/components/site-footer";
import SubmitTestimonialForm from "./submit-testimonial-form";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ialf.in";

export const metadata = {
  title: "Submit Your Testimonial • IALF",
  description: "Share your IALF immigration success story. Submit a testimonial and inspire others on their journey.",
  alternates: { canonical: `${SITE_URL}/submit-testimonial` }
};

export default function SubmitTestimonialPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="relative h-[170px] w-full overflow-hidden bg-sky-500/70">
        <Image src="/header.png" alt="Header" fill className="object-cover opacity-60" sizes="100vw" priority />
        <div className="absolute left-10 top-1/2 -translate-y-1/2 transform text-white md:left-40">
          <h1 className="mb-1 text-3xl font-bold drop-shadow md:text-4xl">Submit Your Testimonial</h1>
          <div className="text-sm font-normal text-white/80">
            Home <span className="mx-1 text-white/50">/</span> Submit Testimonial
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
        <h2 className="mb-2 text-xl font-light text-[#0284c7]">Share Your Success Story</h2>
        <div className="mb-6 h-0.5 w-12 bg-[#0284c7]" />
        <p className="mb-8 text-slate-600">
          Your experience can inspire others. Share how IALF helped you achieve your immigration goals.
          All testimonials are reviewed before publication.
        </p>
        <SubmitTestimonialForm />
      </div>

      <SiteFooter />
    </main>
  );
}
