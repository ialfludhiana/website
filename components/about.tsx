"use client";

import Image from "next/image";
import Link from "next/link";
import { IoMdPaperPlane } from "react-icons/io";

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-20" aria-label="About IALF immigration consultancy">
      <div className="absolute inset-0">
        <Image
          src="/about.jpg"
          alt="Immigration and visa consultation support"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-slate-900/10" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="p-6 text-white md:w-2/3 md:p-10">
          <h2 className="mb-2 text-3xl">
            <span className="text-[#0284c7]">Immigration</span> &amp; Visa Consultancy
          </h2>

          <div className="ml-1 w-40 border-b-2 border-[#0284c7]" />

          <p className="mb-4 mt-5 text-white">
            IALF is an immigration and visa consultancy supporting students and professionals pursuing opportunities
            overseas. We provide guidance across study visas, visitor visas, and permanent residency pathways for
            destinations such as Canada, Australia, the USA, the UK, New Zealand, and parts of Europe.
          </p>

          <p className="mb-4 text-white">
            Consultations are available by appointment only to ensure dedicated time and focused guidance for every client.
          </p>

          <p className="mb-6 text-white">
            Whether you are aiming for academic excellence, permanent residency, or international expansion, we provide
            personalised guidance throughout the process — from choosing the right program to preparing SOPs and
            documentation.
          </p>

          <Link
            href="/about"
            className="flex w-48 items-center gap-3 rounded bg-white px-5 py-3 text-[#0284c7] transition-colors hover:bg-[#0284c7] hover:text-white"
            aria-label="Read more about IALF immigration and visa consultancy"
          >
            <IoMdPaperPlane aria-hidden="true" />
            <span>Read About IALF</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
