"use client";

import Link from "next/link";
import { PiStudentThin, PiAirplaneInFlightThin } from "react-icons/pi";
import { CiPassport1, CiHeart } from "react-icons/ci";

const items = [
  {
    icon: <PiStudentThin className="mb-3" aria-hidden="true" />,
    title: "Student Visa",
    description:
      "Guidance for course selection, documentation, and student visa application filing for your chosen university/college and country.",
    url: "/services/student-visa",
  },
  {
    icon: <CiPassport1 className="mb-3" aria-hidden="true" />,
    title: "Permanent Residency",
    description:
      "Support for PR eligibility assessment, improving CRS, and application strategy to help you settle abroad in your dream country.",
    url: "/services/permanent-residency",
  },
  {
    icon: <CiHeart className="mb-3" aria-hidden="true" />,
    title: "Spousal Sponsorship",
    description:
      "Assistance with spouse and family sponsorship pathways and document preparation with submission support (online and in person).",
    url: "/services/spousal-sponsorship",
  },
  {
    icon: <PiAirplaneInFlightThin className="mb-3" aria-hidden="true" />,
    title: "Visitor & Business Visas",
    description:
      "Visitor and business visa detailed eligibility checks, travel assessment, documentation guidance, and itinerary support.",
    url: "/services/visitor-visa",
  },
];

export default function ServicesCards() {
  return (
    <section
      id="services"
      className="bg-gray-100 py-20"
      aria-label="Visa and immigration consultancy services"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="text-left">
          <h2 className="mb-2 text-2xl">Our Services</h2>
          <div className="mb-2 w-10 rounded-lg border-b-2 border-[#0284c7]" />
        </header>

        <ul className="mt-2 grid gap-8 md:grid-cols-2 lg:grid-cols-4" role="list">
          {items.map((s) => (
            <li key={s.url} className="h-full">
              <Link
                href={s.url}
                className="flex h-full flex-col py-6 text-left transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#0284c7]/40"
                aria-label={`Learn more about ${s.title}`}
              >
                <div className="mb-3 text-[#0284c7] text-5xl">
                  {s.icon}
                </div>

                <h3 className="mb-2 text-xl">{s.title}</h3>
                <p className="text-sm text-gray-600 text-justify">
                  {s.description}
                </p>

                <span className="mt-auto inline-block pt-4 text-sm text-[#0284c7]">
                  View more →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <hr className="mt-6 border-gray-200" />

        <h3 className="mt-7 text-xl">
          Licensed Immigration Company
        </h3>

        <div className="mb-4 w-20 rounded-lg border-b-2 border-[#0284c7]" />
        <p className="max-w-6xl text-sm text-gray-600 text-justify mt-5">
          Explore our visa and immigration consultancy services including student visas,
          permanent residency, spousal sponsorship, and visitor or business visas. Our
          experienced consultants provide personalized guidance, accurate documentation
          support, and end-to-end assistance to help you achieve your international
          education, travel, or settlement goals with confidence.
        </p>
      </div>
    </section>
  );
}
