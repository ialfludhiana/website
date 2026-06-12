"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function TestimonialLogos() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/testimonials/public")
      .then((r) => r.json())
      .then((data) => {
        const imgs = ((data.testimonials || []) as { imageUrl: string | null }[])
          .map((t) => t.imageUrl)
          .filter((url): url is string => Boolean(url))
          .slice(0, 40);
        setImages(imgs);
      });
  }, []);

  if (images.length === 0) return null;

  return (
    <div className="w-full overflow-hidden bg-white">
      <section className="w-full px-0">
        <div className="w-full">
          <div className="flex flex-wrap items-center gap-0">
            {images.map((img, idx) => (
              <Image
                key={`${img}-${idx}`}
                src={img}
                alt=""
                width={56}
                height={56}
                className="h-[63.3px] w-[63.3px] object-contain opacity-80 grayscale"
                unoptimized
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
