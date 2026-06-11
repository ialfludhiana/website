import type { Metadata } from "next";
import Script from "next/script";

import { Navbar } from "@/components/navbar";
import HeroCarousel from "@/components/hero-carousel";
import InfoCards from "@/components/info-cards";
import ServicesCards from "@/components/services-cards";
import About from "@/components/about";
import Process from "@/components/process";
import NewsSection from "@/components/news-section";
import SiteFooter from "@/components/site-footer";
import Testimonials from "@/components/testimonials";
import TestimonialLogos from "@/components/testimonial-logos";
import AppointmentSection from "@/components/appointment-section";

const SITE_URL = "https://ialf.in";

const services = [
  { name: "Student Visa", url: `${SITE_URL}/#services` },
  { name: "Permanent Residency", url: `${SITE_URL}/#services` },
  { name: "Spousal Sponsorship", url: `${SITE_URL}/#services` },
  { name: "Visitor & Business Visas", url: `${SITE_URL}/#services` },
];

const processSteps = [
  { name: "Consultation", url: `${SITE_URL}/#process` },
  { name: "Assessment", url: `${SITE_URL}/#process` },
  { name: "Submission", url: `${SITE_URL}/#process` },
  { name: "Approval", url: `${SITE_URL}/#process` },
  { name: "Worldwide Help", url: `${SITE_URL}/#process` },
];

const contactPoint = {
  "@context": "https://schema.org",
  "@type": "ContactPoint",
  telephone: "+91-7030670306",
  contactType: "customer support",
  areaServed: "IN",
  availableLanguage: ["en", "hi", "pa"],
  url: `${SITE_URL}/#appointment`,
};

export const metadata: Metadata = {
  title: "IALF Immigration & Visa Consultancy | Trusted Visa Experts",
  description:
    "IALF offers student visa, permanent residency, spousal sponsorship, and business/visitor visa support with transparent guidance and expert case handling.",
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title: "IALF Immigration & Visa Consultancy | Trusted Visa Experts",
    description:
      "Comprehensive immigration support including student visas, PR, spousal sponsorship, and business/visitor visas.",
    url: `${SITE_URL}/`,
    siteName: "IALF Immigration & Visa Consultancy",
    images: [
      {
        url: `${SITE_URL}/logo.png`,
        width: 512,
        height: 512,
        alt: "IALF Immigration & Visa Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IALF Immigration & Visa Consultancy | Trusted Visa Experts",
    description:
      "Student visas, PR, spousal sponsorship, and visitor/business visa guidance with trusted experts.",
    images: [`${SITE_URL}/logo.png`],
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <Navbar />
      <h1 className="sr-only">
        IALF Immigration and Visa Consultancy Services in India
      </h1>

      <HeroCarousel />
      <InfoCards />
      <ServicesCards />
      <About />
      <Process />
      {/* <NewsSection /> */}
      <AppointmentSection />
      <Testimonials />
      <TestimonialLogos />
      <SiteFooter />

      <Script
        id="services-itemlist"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: services.map((service, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: service.name,
              url: service.url,
            })),
          }),
        }}
      />
      <Script
        id="process-itemlist"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: processSteps.map((step, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: step.name,
              url: step.url,
            })),
          }),
        }}
      />
      <Script
        id="contactpoint-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPoint),
        }}
      />
    </main>
  );
}
