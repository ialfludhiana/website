export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://ialf.in",
    name: "IALF Immigration",
    alternateName: "IALF Immigration & Visa Consultancy",
    description: "Canada visa and immigration consultants in Ludhiana, Punjab, India",
    url: "https://ialf.in",
    telephone: "+91-7030670306",
    email: "info@ialf.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5th Floor, Hotel Mahal, Opposite Verka Milk Plant, Ferozepur Road",
      addressLocality: "Ludhiana",
      addressRegion: "Punjab",
      postalCode: "141004",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.901,
      longitude: 75.8573,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://facebook.com/@ialfuk",
      "https://instagram.com/ialfludhiana",
      "https://youtube.com/@ialfludhiana",
    ],
    priceRange: "$$",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    areaServed: ["Ludhiana", "Punjab", "India"],
    serviceType: [
      "Canada Student Visa",
      "Canada Permanent Residency",
      "Canada Spousal Sponsorship",
      "Canada Visitor Visa",
      "Canada Startup Visa",
      "Canada Business Visa",
      "IELTS Coaching",
      "PTE Coaching",
      "TEF Canada Coaching",
      "TCF Canada Coaching",
    ],
    hasMap: "https://maps.google.com/?q=IALF+Immigration+Ludhiana",
    image: "https://ialf.in/logo.png",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does Canada immigration consultancy cost in Ludhiana?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "IALF Immigration offers competitive and transparent pricing for all Canada immigration services in Ludhiana. Contact us for a free consultation to get a detailed quote based on your specific immigration needs.",
        },
      },
      {
        "@type": "Question",
        name: "How long does Canada PR take from India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Canada PR processing time through Express Entry typically takes 6–12 months from the date of application. Provincial Nominee Programs (PNP) may take longer. IALF Immigration guides you through the fastest pathway based on your profile.",
        },
      },
      {
        "@type": "Question",
        name: "What is the IELTS score required for Canada immigration?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For Canada Express Entry, a minimum CLB 7 (IELTS 6.0 in each band) is required. Higher scores significantly improve your CRS score. IALF Immigration provides IELTS coaching in Ludhiana to help you achieve your target score.",
        },
      },
      {
        "@type": "Question",
        name: "Can I apply for Canada student visa without IELTS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Some Canadian universities accept PTE, TOEFL, or Duolingo instead of IELTS. IALF Immigration helps you find the right institution and language test based on your profile and immigration goals.",
        },
      },
      {
        "@type": "Question",
        name: "What documents are needed for Canada visitor visa from India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Canada visitor visa requires passport, financial proof, employment documents, invitation letter (if applicable), travel history, and other supporting documents. IALF Immigration in Ludhiana provides complete documentation assistance.",
        },
      },
      {
        "@type": "Question",
        name: "Which is the best immigration consultant in Ludhiana for Canada?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "IALF Immigration is one of the most trusted Canada immigration consultants in Ludhiana with years of experience handling student visas, PR, spousal sponsorship, visitor visas, and refused cases. We offer free initial consultations.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://ialf.in${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
