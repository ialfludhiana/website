import type { Metadata } from "next";
import "./globals.css";
import { buildCanonicalUrl } from "@/lib/seo";
import Script from "next/script";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ialf.in";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "IALF | Immigration & Visa Consultancy",
    template: "%s | IALF | Immigration & Visa Consultancy"
  },
  description:
    "IALF Immigration & Visa Consultancy — trusted guidance for student visas, permanent residency, spousal sponsorship, and visitor visas.",
  openGraph: {
    title: "IALF | Immigration & Visa Consultancy",
    description:
      "Trusted immigration and visa consultancy for students and families pursuing opportunities abroad.",
    url: buildCanonicalUrl(),
    siteName: "IALF | Immigration & Visa Consultancy",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "IALF Immigration & Visa Consultancy"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png"
  },
  alternates: {
    canonical: "https://ialf.in"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const organizationJson = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "IALF Immigration & Visa Consultancy",
    url: "https://ialf.in",
    logo: "https://ialf.in/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-7030670306",
      contactType: "customer support"
    }
  };

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "IALF Immigration & Visa Consultancy",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5th Floor, Hotel Mahal, Opposite Verka Milk Plant, Ferozepur Road",
      addressLocality: "Ludhiana",
      addressRegion: "Punjab",
      postalCode: "141004",
      addressCountry: "IN"
    },
    telephone: "+91-7030670306"
  };

  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <Script
          id="ld-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJson) }}
        />
        <Script
          id="ld-localbusiness"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJson) }}
        />
        {children}
      </body>
    </html>
  );
}
