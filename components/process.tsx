"use client";

import Link from "next/link";
import { SlCalender } from "react-icons/sl";
import { CiPassport1 } from "react-icons/ci";
import {
  PiAirplaneTakeoffThin,
  PiGlobeStandThin,
  PiStudentThin,
  PiUsersThin,
} from "react-icons/pi";

const steps = [
  {
    icon: <PiUsersThin className="text-4xl" aria-hidden="true" />,
    title: "Consultation",
    description: "We discuss your goals and understand your visa or immigration requirements.",
  },
  {
    icon: <PiStudentThin className="text-4xl" aria-hidden="true" />,
    title: "Assessment",
    description: "We assess eligibility, suggest the right pathway, and guide students on study options.",
  },
  {
    icon: <CiPassport1 className="text-4xl" aria-hidden="true" />,
    title: "Submission",
    description: "We help prepare your application, documentation checklist, and submission process.",
  },
  {
    icon: <PiAirplaneTakeoffThin className="text-4xl" aria-hidden="true" />,
    title: "Approval",
    description: "We support interview preparation and provide pre-departure guidance after approval.",
  },
  {
    icon: <PiGlobeStandThin className="text-4xl" aria-hidden="true" />,
    title: "Worldwide Help",
    description: "We support complex and refused cases, assisting clients globally.",
  },
];

export default function Process() {
  return (
    <section className="bg-white py-16" id="process" aria-labelledby="process-heading">
      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <h2 id="process-heading" className="mb-3 text-3xl text-slate-800">
          How we assist you
        </h2>

        <p className="mb-6 text-slate-600">
          Transparent, step-by-step visa and immigration support from consultation through approval.
        </p>

        <hr className="absolute left-0 right-0 top-[calc(50%_-_1.5rem)] z-0 mx-auto w-[80%] border-t border-gray-300" />

        <ol className="relative z-10 grid gap-8 md:grid-cols-5" role="list">
          {steps.map((step) => (
            <li
              key={step.title}
              className="group flex flex-col items-center p-4 text-slate-700 transition-transform duration-200 hover:-translate-y-1"
            >
              <span className="relative z-20 mb-5 rounded-full bg-[#0284c7] p-5 text-white shadow-lg shadow-[#0284c7]/20 transition-transform duration-200 group-hover:scale-110">
                {step.icon}
              </span>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="max-w-xs text-sm text-slate-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 text-center">
        <p className="text-lg text-slate-700">
          Our expert counsellors are specialists in refused and complex cases.
        </p>

        <Link
          href="#appointment"
          className="inline-flex items-center gap-3 rounded-md border border-[#0284c7] px-6 py-2 text-[#0284c7] transition-colors hover:bg-[#0284c7] hover:text-white"
          aria-label="Book an appointment with immigration experts"
        >
          <SlCalender aria-hidden="true" />
          Book Appointment
        </Link>
      </div>
    </section>
  );
}
