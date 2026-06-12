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

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Best Canada Immigration Consultants in Ludhiana, Punjab",
  description:
    "IALF Immigration — #1 Canada visa consultants in Ludhiana. Get expert help for Student Visa, Permanent Residency, Spousal Sponsorship, Visitor Visa. Free consultation available.",
  alternates: { canonical: "https://ialf.in" },
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
