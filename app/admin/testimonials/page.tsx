import { redirect } from "next/navigation";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { getRows } from "@/lib/google";
import AdminTestimonialsClient from "./admin-testimonials-client";

const SHEET_ID = process.env.GOOGLE_SHEET_TESTIMONIALS_ID!;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

export const metadata = {
  title: "Admin | IALF Immigration",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

interface PageProps {
  searchParams: { pw?: string };
}

export type TestimonialRow = {
  id: string;
  name: string;
  visaType: string;
  comment: string;
  imageUrl: string;
  approved: string;
  submittedAt: string;
};

export default async function AdminTestimonialsPage({ searchParams }: PageProps) {
  const { pw } = searchParams;

  if (!ADMIN_PASSWORD || pw !== ADMIN_PASSWORD) {
    redirect("/admin/testimonials/login");
  }

  const rows = await getRows(SHEET_ID, "Testimonials", "A:G");
  const testimonials: TestimonialRow[] = rows.map((r) => ({
    id: r.id ?? "",
    name: r.name ?? "",
    visaType: r.visa_type ?? "",
    comment: r.comment ?? "",
    imageUrl: r.image_url ?? "",
    approved: r.approved ?? "FALSE",
    submittedAt: r.createdAt ?? "",
  }));

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="relative h-[120px] w-full overflow-hidden bg-slate-800">
        <Image src="/header.png" alt="" fill className="object-cover opacity-20" sizes="100vw" priority />
        <div className="absolute left-10 top-1/2 -translate-y-1/2 transform text-white md:left-20">
          <h1 className="text-2xl font-bold">Admin — Testimonials</h1>
          <p className="text-sm text-white/60">{testimonials.length} total submissions</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <AdminTestimonialsClient testimonials={testimonials} adminPassword={pw!} />
      </div>
    </main>
  );
}
