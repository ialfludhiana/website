"use client";

import { useEffect, useState } from "react";
import TestimonialsClient from "./testimonials-client";

type Testimonial = {
  id: string;
  name: string | null;
  comment: string | null;
  imageUrl: string | null;
  visaType: string | null;
};

export default function Testimonials() {
  const [items, setItems] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetch("/api/testimonials/public")
      .then((r) => r.json())
      .then((data) => setItems(data.testimonials || []));
  }, []);

  return <TestimonialsClient items={items} />;
}
