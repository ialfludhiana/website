import Image from "next/image";
import { Metadata } from "next";
import { Navbar } from "../../components/navbar";
import SiteFooter from "../../components/site-footer";

const cardBase = "border border-slate-200 bg-white/90 p-6 shadow-sm";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ialf.in";
const PAGE_TITLE = "Terms & Conditions";

export const metadata = {
  title: `${PAGE_TITLE} • IALF`,
  description:
    "Terms, Conditions and Commitments.",
  alternates: { canonical: `${SITE_URL}/terms` },
  openGraph: {
    title: `${PAGE_TITLE} • IALF`,
    description:
      "Terms & Conditions, Ethics and Commitment.",
    url: `${SITE_URL}/terms`,
    images: [{ url: `${SITE_URL}/header.png`, width: 1200, height: 630, alt: PAGE_TITLE }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} • IALF`,
    description:
      "Terms & Conditions, Ethics and Commitment.",
    images: [`${SITE_URL}/header.png`]
  }
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />


      <div className="relative h-[170px] w-full overflow-hidden bg-sky-500/70">
        <Image src="/header.png" alt="" fill className="object-cover opacity-60" sizes="100vw" priority />
        <div className="absolute left-10 top-1/2 -translate-y-1/2 transform text-white md:left-40">
          <h1 className="mb-1 text-3xl font-bold drop-shadow md:text-4xl">{PAGE_TITLE}</h1>
          <div className="text-sm font-normal text-white/80">
            Home <span className="mx-1 text-white/50">/</span> Terms & Conditions
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
          <div className="space-y-6">
            <div className={cardBase}>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Introduction</div>
              <p className="mt-1 text-sm text-slate-700">
                IALF Immigration and Visa Consultancy is a registered consultancy firm providing immigration advisory, visa application assistance, document preparation guidance, and related services. We are committed to ethical practice, professional standards, and transparent client relationships.
              </p>
              <p className="mt-1 text-sm text-slate-700">
                These Terms apply to all services rendered, whether in person, online, via email, phone, or any digital platform operated by IALF.
              </p>
            </div>

            <div className={cardBase}>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Scope of Services</div>
              <p className="mt-1 text-sm text-slate-700">IALF provides consultancy services including, but not limited to:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                <li>Assessment of immigration eligibility and pathway options</li>
                <li>Advice on visa categories, requirements, and documentation</li>
                <li>Assistance in preparing and organizing application materials</li>
                <li>Review of documents prior to submission</li>
              </ul>
              <div className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Important Note</div>
              <p className="mt-1 text-sm text-slate-700">
                IALF provides consultancy and advisory services only. We do not provide legal representation unless a licensed immigration lawyer is specifically engaged. Clients requiring legal representation will be referred appropriately.
              </p>
            </div>

            <div className={cardBase}>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Transparency Obligations</div>
              <p className="mt-1 text-sm text-slate-700">
                IALF upholds a strict standard of transparency in all dealings. Both the Client and the Consultant share mutual obligations to ensure open, honest, and complete communication.
              </p>

              <div className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Client Transparency</div>
              <div className="mt-1 text-sm font-semibold text-slate-800">Client Must Disclose</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                <li>Accurate personal and biographical information</li>
                <li>Complete and truthful immigration and travel history</li>
                <li>Any prior visa refusals, deportations, or bans</li>
                <li>Criminal record or legal proceedings (past or pending)</li>
                <li>Genuine purpose and intent of the application</li>
                <li>All family and dependent information as required</li>
                <li>Financial information relevant to the application</li>
              </ul>

              <div className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Consultant Transparency</div>
              <div className="mt-1 text-sm font-semibold text-slate-800">IALF Must Disclose</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                <li>Honest assessment of client&apos;s immigration prospects</li>
                <li>All applicable fees, charges, and disbursements</li>
                <li>Realistic timelines and processing expectations</li>
                <li>Potential risks and challenges in the application</li>
                <li>Any conflicts of interest that may arise</li>
                <li>Updates on application progress promptly</li>
                <li>Changes in immigration law affecting the case</li>
              </ul>

              <div className="mt-3 text-xs font-semibold uppercase tracking-wide text-red-500">Zero Tolerance Policy</div>
              <p className="mt-1 text-sm text-red-400">
                IALF maintains a zero-tolerance policy for misrepresentation, document fraud, or submission of false information. Any such conduct will result in immediate termination of services, forfeiture of fees paid, and may be reported to the relevant immigration authority.
              </p>
            </div>

            <div className={cardBase}>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Client Responsibilities</div>
              <p className="mt-1 text-sm text-slate-700">Clients engaging IALF agree to fulfil the following responsibilities:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                <li>Provide all requested documentation promptly and in the form specified by IALF.</li>
                <li>Notify IALF immediately of any changes in personal circumstances that may affect the application (e.g., change of address, employment, relationship status, criminal matters).</li>
                <li>Review and verify the accuracy of all documents.</li>
                <li>Pay all agreed fees within specified timelines. Late payments may delay service delivery.</li>
                <li>Attend all required appointments, interviews, or biometric sessions as scheduled.</li>
                <li>Communicate exclusively through the designated IALF case manager to maintain accurate records.</li>
                <li>Not engage another consultant or representative for the same matter without informing IALF in writing.</li>
                <li>Retain personal copies of all documents.</li>
              </ul>
            </div>

            <div className={cardBase}>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Consultant Responsibilities</div>
              <p className="mt-1 text-sm text-slate-700">IALF and its consultants are committed to:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                <li>Acting in the Client&apos;s best interest at all times</li>
                <li>Maintaining up-to-date knowledge of immigration laws and policies</li>
                <li>Providing honest and realistic assessments — including negative prospects</li>
                <li>Keeping all client information strictly confidential</li>
                <li>Maintaining detailed records of all case-related communications and decisions</li>
                <li>Referring clients to licensed legal practitioners when legal representation is required</li>
                <li>Complying with all professional, ethical, and regulatory standards applicable to immigration consultants</li>
              </ul>
              <div className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Our Commitment</div>
              <p className="mt-1 text-sm text-slate-700">
                IALF consultants will never advise or assist a client in making a false, misleading, or fraudulent immigration application. We will decline acceptance of a case where such conduct is suspected or requested.
              </p>
            </div>


            <div className={cardBase}>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Disclaimer of Outcome Guarantees</div>
              <p className="mt-1 text-sm text-slate-700 font-semibold">No Guarantee of Outcome</p>
              <p className="mt-1 text-sm text-slate-700">
                IALF does not and cannot guarantee the success of any visa or immigration application. All decisions rest solely with the relevant immigration authority or government body. Any consultant who guarantees a visa outcome is acting unethically and contrary to our policies.
              </p>
              <p className="mt-1 text-sm text-slate-700">
                IALF provides professional guidance to strengthen applications, but immigration outcomes are determined by sovereign authorities whose decisions are final. We advise clients based on the best available information at the time, recognizing that immigration rules are subject to change without notice.
              </p>
            </div>

            <div className={cardBase}>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Confidentiality</div>
              <p className="mt-1 text-sm text-slate-700">
                IALF treats all Client information as strictly confidential. Information disclosed to us will only be used for the purpose of providing our services. We will not disclose Client information to any third party without written consent except where:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                <li>Required by law or a competent regulatory or governmental authority</li>
                <li>Necessary to submit the application to immigration authorities</li>
                <li>Required to engage authorized third-party service providers (e.g., translators, medical examiners) who are bound by equivalent confidentiality obligations</li>
              </ul>
              <p className="mt-2 text-sm text-slate-700">
                Clients similarly agree to treat any proprietary information, processes, or strategies disclosed by IALF as confidential and not to share them with third parties.
              </p>
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-20">
            <div className={cardBase}>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Intellectual Property</div>
              <p className="mt-1 text-sm text-slate-700">
                All materials, templates, guides, checklists, and resources produced by IALF remain the intellectual property of IALF. Clients are granted a limited, non-transferable license to use such materials solely for their own immigration application purposes. Reproduction, redistribution, or commercial use of IALF materials without written permission is prohibited.
              </p>
            </div>

            <div className={cardBase}>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Termination of Services</div>
              <p className="mt-1 text-sm text-slate-700">Either party may terminate the service agreement with written notice. IALF reserves the right to immediately terminate services if a Client:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                <li>Provides false, misleading, or fraudulent information</li>
                <li>Requests IALF to act in an illegal or unethical manner</li>
                <li>Fails to pay agreed fees after reasonable notice</li>
                <li>Behaves in an abusive or threatening manner toward staff</li>
                <li>Engages another consultant for the same matter without disclosure</li>
              </ul>
              <p className="mt-2 text-sm text-slate-700">
                Upon termination, IALF will provide the Client with all documents and a summary of work completed. Fees paid for completed work will not be refunded.
              </p>
            </div>

            <div className={cardBase}>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Limitation of Liability</div>
              <p className="mt-1 text-sm text-slate-700">
                To the maximum extent permitted by applicable law, IALF&apos;s liability to a Client shall not exceed the total consultancy fees paid by the Client for the specific matter in question. IALF is not liable for:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                <li>Delays caused by government processing times or policy changes</li>
                <li>Errors resulting from inaccurate or incomplete information provided by the Client</li>
                <li>Third-party service provider actions (translation, biometrics, courier, etc.)</li>
                <li>Consequential, incidental, or indirect losses including loss of employment, income, or travel opportunities</li>
                <li>Visa refusals arising from immigration authority discretion</li>
              </ul>
            </div>

            <div className={cardBase}>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Governing Law &amp; Dispute Resolution</div>
              <p className="mt-1 text-sm text-slate-700">
                These Terms are governed by the laws of the jurisdiction in which IALF is registered. In the event of a dispute, the parties agree to first attempt resolution through good-faith negotiation. If unresolved, disputes shall be referred to mediation before any legal proceedings are initiated. Any legal proceedings shall be brought in the courts of IALF&apos;s registered jurisdiction.
              </p>
            </div>

            <div className={cardBase}>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Amendments</div>
              <p className="mt-1 text-sm text-slate-700">
                IALF reserves the right to update or amend these Terms at any time. Updated Terms will be published on our website and, where material changes are made, Clients with active cases will be notified via email. Continued use of our services following notification constitutes acceptance of the revised Terms.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
