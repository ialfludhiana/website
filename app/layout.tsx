import type { Metadata } from "next";
import "./globals.css";
import { LocalBusinessSchema, FAQSchema } from "@/components/structured-data";

export const metadata: Metadata = {
  metadataBase: new URL("https://ialf.in"),
  title: {
    default: "IALF Immigration | Canada Visa & Immigration Consultants in Ludhiana",
    template: "%s | IALF Immigration Ludhiana",
  },
  description:
    "IALF Immigration — trusted Canada visa and immigration consultants in Ludhiana, Punjab. Expert guidance for Student Visa, PR, Spousal Sponsorship, Visitor Visa, Startup Visa and IELTS/PTE preparation.",
  keywords: [
    "Canada immigration consultants Ludhiana",
    "Canada visa consultants Punjab",
    "student visa Canada Ludhiana",
    "PR Canada consultants",
    "IELTS coaching Ludhiana",
    "spousal sponsorship Canada",
    "immigration consultants Punjab India",
    "best immigration consultant Ludhiana",
    "Canada PR from India",
    "visitor visa Canada",
  ],
  authors: [{ name: "IALF Immigration", url: "https://ialf.in" }],
  creator: "IALF Immigration",
  publisher: "IALF Immigration",
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ialf.in",
    siteName: "IALF Immigration",
    title: "IALF Immigration | Canada Visa & Immigration Consultants in Ludhiana",
    description:
      "Trusted Canada visa and immigration consultants in Ludhiana, Punjab. Student Visa, PR, Spousal Sponsorship, Visitor Visa and more.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "IALF Immigration Consultants Ludhiana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IALF Immigration | Canada Visa Consultants Ludhiana",
    description:
      "Expert Canada immigration consultants in Ludhiana. Student Visa, PR, Spousal Sponsorship and more.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "ADD_GOOGLE_SEARCH_CONSOLE_CODE_HERE",
  },
  alternates: {
    canonical: "https://ialf.in",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <LocalBusinessSchema />
        <FAQSchema />
        {children}
      </body>
    </html>
  );
}
