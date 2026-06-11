"use client";

import Link from "next/link";
import { SlCalender } from "react-icons/sl";
import { MdOutlinePhoneForwarded } from "react-icons/md";

export default function InfoCards() {
  return (
    <section className="relative z-20 -mt-10 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3">
          <div className="bg-white p-8 shadow-sm border-b-4 border-[#6cc6e8] hover:bg-gray-50">
            <h3 className="mb-4 text-2xl text-[#0284c7]">Opening Hours</h3>
            <div className="mt-3 flex items-center justify-between">
              <p className="text-sm text-gray-600">Monday - Friday</p>
              <p className="text-sm text-[#0284c7]">10:00 - 6:00</p>
            </div>
            <div className="mt-4 border-b border-gray-200" />
            <div className="mt-3 flex items-center justify-between">
              <p className="text-sm text-gray-600">Saturday</p>
              <p className="text-sm text-[#0284c7]">10:00 - 5:00</p>
            </div>
            <div className="mt-4 border-b border-gray-200" />
            <div className="mt-3 flex items-center justify-between">
              <p className="text-sm text-gray-600">Sunday</p>
              <p className="text-sm text-[#0284c7]">Holiday</p>
            </div>
          </div>

          <div className="bg-white p-8 shadow-sm border-b-4 border-[#54b1d0] hover:bg-gray-50">
            <h3 className="mb-2 text-2xl text-[#0284c7]">Meeting Experts</h3>
            <div className="mt-5">
              <p className="text-justify text-sm text-gray-500">
                Our consultations are conducted strictly by prior appointment to ensure
                dedicated time and focused guidance for every client. Walk-in visits are
                not entertained by experts.
              </p>
              <Link
                href="#appointment"
                className="mt-8 inline-flex items-center gap-3 rounded-md border border-[#0284c7] px-6 py-2 text-[#0284c7] hover:bg-[#0284c7] hover:text-white"
              >
                <SlCalender />
                Book Appointment
              </Link>
            </div>
          </div>

          <div className="bg-white p-8 shadow-sm border-b-4 border-[#2b87c6] hover:bg-gray-50">
            <h3 className="mb-2 text-2xl text-[#0284c7]">Contact</h3>
            <div className="mt-5 flex items-center justify-center gap-5">
              <p className="text-2xl font-semibold text-[#0284c7]">
                <MdOutlinePhoneForwarded />
              </p>
              <p className="text-2xl text-slate-600 hover:text-[#0284c7]">+91 70306 70306</p>
            </div>
            <div className="mt-5 border-b border-gray-200" />
            <div className="mt-5 flex items-center justify-between">
              <p className="text-justify text-sm text-gray-500">
                For inquiries, initial guidance, or appointment scheduling, please contact
                us by phone or submit your request through our contact form. Our team will
                assist you at the earliest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
