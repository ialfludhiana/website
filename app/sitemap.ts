import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ialf.in";
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/student-visa`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/permanent-residency`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/spousal-sponsorship`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/visitor-visa`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/startup-visa`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/services/business-visa`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/tests/ielts`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/tests/pte`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/tests/tef`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/tests/tcf`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/tests/delf-dalf`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/gallery/testimonials`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/gallery/events-seminars`, lastModified, changeFrequency: "weekly", priority: 0.6 },
    { url: `${baseUrl}/gallery/videos`, lastModified, changeFrequency: "weekly", priority: 0.6 },
    { url: `${baseUrl}/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/privacy-policy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
