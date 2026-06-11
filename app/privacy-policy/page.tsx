import Image from "next/image";
import { Metadata } from "next";
import { Navbar } from "../../components/navbar";
import SiteFooter from "../../components/site-footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ialf.in";
const PAGE_TITLE = "Privacy Policy";

export const metadata = {
  title: `${PAGE_TITLE} • IALF`,
  description:
    "Privacy Policy, Ethics and Commitment.",
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  openGraph: {
    title: `${PAGE_TITLE} • IALF`,
    description:
      "Privacy policy, Ethics and Commitment.",
    url: `${SITE_URL}/privacy-policy`,
    images: [{ url: `${SITE_URL}/header.png`, width: 1200, height: 630, alt: PAGE_TITLE }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} • IALF`,
    description:
      "Privacy Policy, Ethics and Commitment.",
    images: [`${SITE_URL}/header.png`]
  }
};

const cardBase =
  "border border-slate-200 bg-white/90 p-6 shadow-sm";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <div className="relative h-[170px] w-full overflow-hidden bg-sky-500/70">
        <Image src="/header.png" alt="Header" fill className="object-cover opacity-60" sizes="100vw" priority />
        <div className="absolute left-10 top-1/2 -translate-y-1/2 transform text-white md:left-40">
          <h1 className="mb-1 text-3xl font-bold drop-shadow md:text-4xl">{PAGE_TITLE}</h1>
          <div className="text-sm font-normal text-white/80">
            Home <span className="mx-1 text-white/50">/</span> Privacy Policy
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold text-slate-700">Effective Date: 10th March, 2017</p>

            <div className={cardBase}>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Introduction &amp; Commitment</div>
              <p className="mt-1 text-sm text-slate-700">
                At IALF, privacy is not an afterthought — it is a foundational principle.
              </p>
              <p className="mt-1 text-sm text-slate-700">
                Immigration consultancy requires handling highly sensitive personal information, including identity documents,
                financial records, immigration history, and family details. We recognize the seriousness of this responsibility
                and are committed to protecting your personal data with integrity, transparency, and security.
              </p>
              <div className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Our Privacy Commitment</div>
              <p className="mt-1 text-sm text-slate-700">We commit to:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                <li>Collecting only information that is necessary</li>
                <li>Using your data only for legitimate, stated purposes</li>
                <li>Storing information securely</li>
                <li>Never selling, renting, or monetizing your personal data</li>
                <li>Maintaining transparency in how your information is handled</li>
              </ul>
              <p className="mt-2 text-sm text-slate-700">
                Upon completion of services, we retain your information only for the period required by legal, regulatory, or
                contractual obligations. After this period, your data is securely deleted or anonymized.
              </p>
            </div>

            <div className={cardBase}>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Personal Data We Collect</div>
              <p className="mt-1 text-sm text-slate-700">
                Depending on the services you engage us for, we may collect the following categories of information:
              </p>

              <div className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                A. Identity Information – Who You Are
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                <li>Full legal name and aliases</li>
                <li>Date and place of birth</li>
                <li>Nationality and citizenship details</li>
                <li>Passport and travel document details</li>
                <li>Government-issued ID numbers</li>
                <li>Photographs and biometric data (where required for applications)</li>
              </ul>

              <div className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                B. Contact Information – How to Reach You
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                <li>Residential and mailing address</li>
                <li>Phone and mobile numbers</li>
                <li>Email addresses</li>
                <li>Emergency contact details</li>
              </ul>

              <div className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                C. Immigration History – Travel &amp; Visa Records
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                <li>Previous visa applications and outcomes</li>
                <li>Entry and exit records</li>
                <li>Deportation or removal history</li>
                <li>Prior immigration proceedings</li>
                <li>Current immigration status</li>
              </ul>

              <div className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                D. Sensitive Personal Information
              </div>
              <p className="mt-1 text-sm text-slate-700">
                We may collect sensitive data strictly for immigration application purposes, including:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                <li>Criminal history disclosures</li>
                <li>Health and medical information</li>
                <li>Financial records and bank statements</li>
                <li>Employment and educational records</li>
                <li>Family and relationship details</li>
              </ul>
              <p className="mt-2 text-sm text-slate-700">Sensitive data is handled with enhanced security measures.</p>
            </div>

            <div className={cardBase}>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">How We Collect Your Data</div>
              <p className="mt-1 text-sm text-slate-700">We collect information through:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                <li>Direct communication — consultations, forms, emails, phone calls, video meetings</li>
                <li>Documents you voluntarily provide — passports, certificates, financial statements, and official records</li>
                <li>Government portals and immigration systems (where authorized)</li>
              </ul>
              <p className="mt-2 text-sm text-slate-700">We do not collect personal data without your knowledge or consent.</p>
            </div>

            <div className={cardBase}>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">How We Use Your Data</div>
              <p className="mt-1 text-sm text-slate-700">Your data is used exclusively for:</p>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-slate-700">
                <li>Assessing eligibility for immigration pathways</li>
                <li>Preparing and submitting immigration applications</li>
                <li>Communicating with immigration authorities and institutions on your behalf</li>
                <li>Providing case updates and professional advice</li>
                <li>Complying with legal and regulatory obligations</li>
              </ol>
            </div>

            <div className={cardBase}>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Data Sharing &amp; Disclosure</div>
              <p className="mt-1 text-sm text-slate-700">We may share your information only when necessary with:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                <li>Immigration authorities</li>
                <li>Government agencies</li>
                <li>Educational institutions</li>
                <li>Authorized legal or compliance professionals</li>
                <li>Service providers assisting in case processing</li>
              </ul>
              <p className="mt-2 text-sm text-slate-700">
                We ensure that any third party handling your information maintains appropriate confidentiality and data
                protection standards.
              </p>
              <div className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">We Will Never:</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                <li>Sell your personal data</li>
                <li>Use your data for marketing without consent</li>
                <li>Share your information with unrelated third parties</li>
                <li>Use sensitive data beyond your case requirements</li>
              </ul>
            </div>

            <div className={cardBase}>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Data Security</div>
              <p className="mt-1 text-sm text-slate-700">We implement appropriate technical and organizational security measures, including:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                <li>Secure digital storage systems</li>
                <li>Password-protected systems</li>
                <li>Restricted access to authorized personnel only</li>
                <li>Encryption where applicable</li>
                <li>Secure document handling procedures</li>
              </ul>
              <p className="mt-2 text-sm text-slate-700">While we take strong precautions, no system can guarantee 100% security.</p>
            </div>

            <div className={cardBase}>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Data Retention</div>
              <p className="mt-1 text-sm text-slate-700">We retain your information only as long as necessary to:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                <li>Complete your immigration services</li>
                <li>Meet legal, regulatory, or compliance requirements</li>
                <li>Resolve disputes if necessary</li>
              </ul>
              <p className="mt-2 text-sm text-slate-700">Once retention is no longer required, your data is securely deleted or anonymized.</p>
            </div>

            <div className={cardBase}>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Your Rights</div>
              <p className="mt-1 text-sm text-slate-700">Depending on applicable laws, you may have the right to:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                <li>Access your personal data</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your data (subject to legal obligations)</li>
                <li>Withdraw consent where processing is based on consent</li>
                <li>Request a copy of your personal data</li>
              </ul>
              <p className="mt-2 text-sm text-slate-700">Requests may be made by contacting us at the details below.</p>
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-40 mt-10">
            <div className={cardBase}>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Updates to This Policy</div>
              <p className="mt-1 text-sm text-slate-700">
                This Privacy Policy may be updated periodically to reflect changes in legal requirements or business practices.
              </p>
              <p className="mt-2 text-sm text-slate-700">
                Active clients will be notified of material changes via email. The latest version will always be published on
                our website with an updated effective date.
              </p>
            </div>

            <div className={cardBase}>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500"></div>
              <p className="mt-1 text-sm text-slate-700">
                If you have any questions regarding this Privacy Policy or how your data is handled, please contact:
              </p>
              <p className="mt-3 text-sm text-slate-500">
                <b>IALF | Immigration & Visa Consultancy</b>
                <br />
                5th Floor, Hotel Mahal, Opposite Verka Milk Plant, Ferozepur Road, Ludhiana - 141004, Punjab, India
                <br />
                Email: info@ialf.in
                <br />
                Phone: +91 70306 70306
              </p>
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
