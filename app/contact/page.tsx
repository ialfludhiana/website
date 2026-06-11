import Image from "next/image";
import ContactForm from "./contact-form";
import Logos from "@/components/testimonial-logos";
import SiteFooter from "@/components/site-footer";
import { Navbar } from "@/components/navbar";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ialf.in";

export const metadata = {
  title: "Contact • IALF",
  description:
    "Get in touch with IALF Immigration & Visa Consultancy for student visas, permanent residency, refused case guidance, and more.",
  alternates: {
    canonical: `${SITE_URL}/contact`
  },
  openGraph: {
    title: "Contact • IALF",
    description:
      "Reach IALF for expert help on student visas, permanent residency, refused cases, and immigration consulting.",
    url: `${SITE_URL}/contact`,
    images: [
      {
        url: `${SITE_URL}/header.png`,
        width: 1200,
        height: 630,
        alt: "Contact IALF"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact • IALF",
    description:
      "Reach IALF for expert help on student visas, permanent residency, refused cases, and immigration consulting.",
    images: [`${SITE_URL}/header.png`]
  }
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="relative h-[170px] w-full overflow-hidden bg-sky-500/70">
        <Image
          src="/header.png"
          alt="Header"
          fill
          className="object-cover opacity-60"
          sizes="100vw"
          priority
        />
        <div className="absolute left-10 top-1/2 -translate-y-1/2 transform text-white md:left-40">
          <h1 className="mb-1 text-3xl font-bold drop-shadow md:text-4xl">Contact Us</h1>
          <div className="text-sm font-normal text-white/80">
            Home <span className="mx-1 text-white/50">/</span> Contact
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mt-8 text-2xl font-light text-[#0284c7]">Get In Touch</h2>
            <div className="mb-10 w-12 rounded-full border border-[#0284c7]" />
            <div className="space-y-10 text-gray-600">
              <div className="flex items-start space-x-4">
                <FaPhone className="mt-1 rotate-90 text-[#0284c7]" />
                <div>
                  <h3 className="font-semibold text-slate-800">Phone</h3>
                  <p>+91 70306 70306</p>
                  <p>+91 161 4064064</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaEnvelope className="mt-1 text-[#0284c7]" />
                <div>
                  <h3 className="font-semibold text-slate-800">Email</h3>
                  <p>info@ialf.in</p>
                  <p>ialf.india@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="mt-1 text-[#0284c7]" />
                <div>
                  <h3 className="font-semibold text-slate-800">Address</h3>
                  <p>IALF Private Limited</p>
                  <p>5th Floor, Hotel Mahal,</p>
                  <p>Opposite Verka Milk Plant,</p>
                  <p>Ferozepur Road, Ludhiana,</p>
                  <p>PIN 141004 Punjab, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#6cc6e8] p-6 text-white/50">
            <h3 className="text-2xl font-semibold text-white">Submit a query</h3>
            <div className="mb-5 mt-2 h-[2px] w-16 bg-white" />
            <ContactForm />
          </div>
        </div>
      </div>

      <Logos />
      <SiteFooter />
    </main>
  );
}
