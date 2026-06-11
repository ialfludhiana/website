import Image from "next/image";
import Link from "next/link";
import { PiAirplaneTakeoffThin } from "react-icons/pi";
import { FaRoute, FaEye, FaGem, FaBullseye } from "react-icons/fa";
import { TbFileCertificate } from "react-icons/tb";
import { SlPlane } from "react-icons/sl";
import { GrStar } from "react-icons/gr";
import { Navbar } from "@/components/navbar";
import TestimonialLogos from "@/components/testimonial-logos";
import SiteFooter from "@/components/site-footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ialf.in";

export const metadata = {
  title: "About IALF Immigration Consultants Ludhiana",
  description:
    "Learn about IALF Immigration — experienced Canada visa and immigration consultants based in Ludhiana, Punjab with years of expertise helping clients achieve their immigration goals.",
  alternates: {
    canonical: `${SITE_URL}/about`
  },
  openGraph: {
    title: "About • IALF",
    description:
      "Government-licensed immigration and visa consultancy helping students, professionals, and families achieve their overseas goals.",
    url: `${SITE_URL}/about`,
    images: [
      {
        url: `${SITE_URL}/header.png`,
        width: 1200,
        height: 630,
        alt: "About • IALF"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "About • IALF",
    description:
      "Government-licensed immigration and visa consultancy helping students, professionals, and families achieve their overseas goals.",
    images: [`${SITE_URL}/header.png`]
  }
};

const missionCards = [
  {
    title: "Mission",
    color: "from-teal-500 to-teal-400",
    icon: FaRoute,
    shadow: "shadow-teal-100",
    num: "01",
    blurb:
      "We provide clear, honest, and ethical guidance tailored to every unique immigration profile, ensuring transparency throughout the journey."
  },
  {
    title: "Vision",
    color: "from-orange-500 to-amber-400",
    icon: FaEye,
    shadow: "shadow-amber-100",
    num: "02",
    blurb:
      "To empower aspiring immigrants and students to achieve their global goals with trusted guidance and unwavering commitment."
  },
  {
    title: "Value",
    color: "from-rose-500 to-pink-500",
    icon: FaGem,
    shadow: "shadow-rose-100",
    num: "03",
    blurb:
      "Transparency, reliability, and client-first processes form our foundation, respecting privacy and delivering dependable results."
  },
  {
    title: "Goals",
    color: "from-blue-600 to-sky-500",
    icon: FaBullseye,
    shadow: "shadow-sky-100",
    num: "04",
    blurb:
      "To maximize success rates with tailored program selections and adaptive strategies that align with evolving immigration policies."
  }
];

export default function AboutPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: `${SITE_URL}/about`
      }
    ]
  };

  return (
    <main className="px-0">
      <Navbar />
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(breadcrumbLd)}
      </script>

      <div className="relative h-[170px] w-full overflow-hidden bg-sky-500/70">
        <Image src="/header.png" alt="IALF Header" fill className="object-cover opacity-60" priority />
        <div className="absolute left-10 top-1/2 -translate-y-1/2 transform text-white md:left-40">
          <h1 className="mb-1 text-3xl font-bold drop-shadow md:text-4xl">About • IALF</h1>
          <div className="text-sm font-normal text-white/80">
            Home <span className="mx-1 text-white/50">/</span> About
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-2 lg:grid-cols-[minmax(0,1fr)_320px]">
        <article className="prose prose-slate max-w-none dark:prose-invert lg:col-span-1 lg:col-start-1 lg:row-start-1">
          <div>
            <div className="mt-10 flex items-center gap-2">
              <Image src="/favicon.png" alt="IALF favicon" width={32} height={32} className="h-8 w-8" />
              <p className="flex items-end text-xl text-slate-900 dark:text-slate-100">Immigration & Visa Consultancy</p>
            </div>
            <div className="ml-10 mt-1 w-44 border-t-2 border-slate-900 dark:border-slate-200" />
          </div>

          <p className="mb-4 mt-10 text-justify">
            IALF is a government-licensed immigration and visa consultancy dedicated to helping students, professionals, and families pursue
            life-changing opportunities overseas. With a team of highly experienced consultants, we specialize in navigating complex immigration
            pathways across Canada and other leading destinations.
          </p>
          <p className="mb-4 text-justify">
            At IALF, we understand that every client&apos;s journey is unique. Whether your goal is to achieve academic excellence, secure permanent
            residency, expand entrepreneurial ventures, or reunite with loved ones, our personalized guidance ensures you receive the right support
            at every stage. From selecting the most suitable program to drafting statements of purpose, completing application forms, preparing for
            interviews, and ensuring accurate documentation &mdash; we are with you at every step.
          </p>
          <p className="text-justify">
            Our consultants bring years of expertise in student visas, visitor visas, work permits, family sponsorships, business and investor
            immigration, and permanent residency programs. With up-to-date knowledge of immigration policies and procedures, we provide reliable
            solutions to increase your chances of success.
          </p>
          <p className="mt-3 text-justify">
            Client trust and confidentiality are at the heart of our services. We handle each case with integrity, professionalism, and respect
            for privacy. Over the years, IALF has earned a reputation as a trusted partner for individuals and families aspiring to build brighter
            futures abroad.
          </p>
          <p className="mb-10 mt-1 text-justify">
            With IALF by your side, your immigration journey becomes simpler, smoother, and more secure.
          </p>

          <div id="directors-note" className="mt-2">
            <div className="mb-1 flex items-end">
              <div>
                <p className="flex items-end text-xl text-slate-900 dark:text-slate-100">Director&apos;s Note</p>
                <div className="mt-1 w-30 border-t-2 border-slate-900 dark:border-slate-200" />
              </div>
              <SlPlane className="ml-3 text-2xl text-[#0284c7] dark:text-slate-100" />
            </div>

            <div className="mt-5 flex justify-between gap-3">
              <div className="w-[63%]">
                <p className="text-justify text-slate-700 dark:text-slate-300">
                  With more than two decades of dedicated service in the immigration sector, I have had the privilege of guiding thousands of aspiring students, professionals, and families as they embark on journeys to new countries and new opportunities. The landscape of immigration is constantly evolving, but the core values of integrity, transparency, and genuine care remain unchanged in our practice.
                </p>
                <p className="mt-3 text-justify text-slate-700 dark:text-slate-300">
                  At IALF, my commitment is to ensure that every client receives personalized support tailored to their individual ambitions and circumstances. Having witnessed the transformative power of global mobility, I strive to foster trust and confidence through every stage &mdash; from initial consultation to final settlement.
                </p>
                <p className="mt-3 text-justify text-slate-700 dark:text-slate-300">
                  Thank you for trusting IALF with your dreams. Our experience is your advantage, and our team is honored to help light the way toward brighter futures abroad.
                </p>
                <div className="mt-4 flex items-center text-slate-900 dark:text-slate-100">
                  <p className="font-semibold uppercase">Parminder Singh</p>
                  <p className="text-gray-500">, Managing Director</p>
                </div>
              </div>
              <div className="max-w-[35%] flex-1">
                <Image src="/parminder.jpg" alt="Managing Director" width={500} height={400} className="h-72 w-full object-cover grayscale" />
                <div className="relative h-20 bg-gray-100 py-2 px-5 text-right">
                  <div className="flex items-center justify-end gap-16">
                    <Image src="/stamp1.png" alt="" width={120} height={120} className="h-32 -mt-10 w-auto" />
                    <Image src="/signatures.png" alt="" width={140} height={80} className="h-24 -mt-8 w-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <aside className="mt-24 lg:col-span-1 lg:col-start-2 lg:row-start-1">
          <div className="w-full px-4 dark:border-slate-700 dark:bg-slate-800">
            <div className="mt-3 space-y-3">
              {[
                {
                  title: "Study in Canada - Info Session",
                  subtitle: "University of Northern British Columbia",
                  image: "/unbc.jpg",
                  href: "#"
                },
                {
                  title: "IELTS Tips - Live Session",
                  subtitle: "British Council",
                  image: "/bc.jpg",
                  href: "#"
                },
                {
                  title: "Study in Canada - Live Workshop",
                  subtitle: "Great Plains College",
                  image: "/great-plains.jpg",
                  href: "#"
                }
              ].map((item) => (
                <Link key={item.title} href={item.href} className="block overflow-hidden border border-slate-200 dark:border-slate-700">
                  <div className="h-32 w-full bg-slate-100">
                    <Image src={item.image} alt={item.title} width={400} height={200} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-2">
                    <div className="truncate text-xs font-medium text-slate-900 dark:text-slate-100">{item.title}</div>
                    <div className="text-[11px] text-slate-500">{item.subtitle}</div>
                  </div>
                </Link>
              ))}

              <div className="border border-t-4 border-orange-400 p-4">
                <p className="mb-5 text-right">Client Review</p>
                <p className="text-justify text-sm">
                  I am incredibly grateful to the entire team for their expert guidance and unwavering support throughout my journey to
                  becoming a permanent resident. Their professionalism and dedication made all the difference.
                </p>
                <p className="mt-3 text-right text-sm font-semibold">Arun Kumar Gir</p>
                <p className="flex items-center justify-end gap-2 text-sm text-orange-400">
                  <GrStar />
                  <GrStar />
                  <GrStar />
                  <GrStar />
                  <GrStar />
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <section className="mx-auto mt-10 max-w-7xl px-6">
        <div>
          <div className="mb-5 flex items-center gap-3 text-slate-900 dark:text-slate-100">
            <TbFileCertificate className="text-3xl text-[#0284c7]" />
            <p className="text-xl">Privacy and Ethics Commitment</p>
          </div>
          <div className="flex">
            <div className="ml-10 -mt-5 w-40 border-t-2 border-slate-900 dark:border-slate-200" />
          </div>
          <p className="mb-3 text-justify text-slate-700 dark:text-slate-300">
            At IALF, we recognize that immigration and visa processes involve highly sensitive personal information. Protecting the privacy and confidentiality of our clients is fundamental to our values and operational practices.
          </p>
          <p className="mb-3 text-justify text-slate-700 dark:text-slate-300">
            Our commitment to ethical conduct guides every interaction. We operate with transparency, honesty, and integrity, providing accurate information and realistic expectations throughout your immigration journey.
          </p>
          <p className="text-justify text-slate-700 dark:text-slate-300">
            By choosing IALF, you entrust us with your dreams and data with the confidence that your privacy will be respected and your case handled with the highest ethical standards.
          </p>
        </div>
      </section>

      <div className="mt-20 px-6 lg:px-32">
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-4">
          {missionCards.map(({ title, color, icon: Icon, shadow, num, blurb }) => (
            <div key={title} className={`relative border border-slate-100 rounded-xl bg-white p-5 pt-10 shadow ${shadow} dark:border-slate-700 dark:bg-slate-800`}>
              <div className="absolute -top-6 left-5 flex items-center">
                <div className={`grid h-12 w-12 place-items-center rounded-full bg-gradient-to-r ${color} text-white shadow-md`}>
                  <Icon className="text-lg" />
                </div>
                <div className={`ml-3 h-2 w-10 rounded-full bg-gradient-to-r ${color}`} />
              </div>
              <div className="mt-2 text-[10px] tracking-widest text-slate-400">IALF</div>
              <div className="text-lg text-slate-900 dark:text-slate-100">{title}</div>
              <p className="mt-2 text-justify text-xs leading-relaxed text-slate-600 dark:text-slate-300">{blurb}</p>
              <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400">
                <span />
                <span className="font-semibold">{num}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 mb-10 flex items-center justify-between px-6 lg:px-32">
        <div className="mt-6 w-[95%]">
          <hr />
        </div>
        <div>
          <PiAirplaneTakeoffThin className="text-3xl text-gray-300" />
        </div>
      </div>

      <div className="mt-6">
        <TestimonialLogos />
      </div>
      <SiteFooter />
    </main>
  );
}
