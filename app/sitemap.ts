import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ialf.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { url: `${BASE_URL}/`, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/about`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/contact`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/gallery/testimonials`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/gallery/events-seminars`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/gallery/videos`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/services/student-visa`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/services/permanent-residency`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/services/spousal-sponsorship`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/services/startup-visa`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/services/visitor-visa`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/services/business-visa`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/tests/ielts`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/tests/pte`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/tests/tef`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/tests/tcf`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/tests/delf-dalf`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/submit-testimonial`, priority: 0.5, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/terms`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/privacy-policy`, priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return staticRoutes.map(({ url, priority, changeFrequency }) => ({
    url,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
