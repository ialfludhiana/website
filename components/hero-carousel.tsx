"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    title: "Study Abroad",
    description:
      "Comprehensive support for course selection, country choice, student visa filing, and pathways to permanent residency.",
    buttonText: "Read More",
    image: "/Slide1.png",
    alt: "Study abroad consultants helping students with course selection and student visa guidance",
    url: "/services/student-visa",
  },
  {
    title: "Immigration & Visas",
    description:
      "Settle with your family through permanent residency pathways including points-based programs and entrepreneur immigration routes.",
    buttonText: "Read More",
    image: "/Slide2.png",
    alt: "Immigration and visa consultancy for permanent residency and skilled migration programs",
    url: "/services/permanent-residency",
  },
  {
    title: "Travel Around the World",
    description:
      "Visitor visa and travel planning support to help you explore the world with a smooth end-to-end experience.",
    buttonText: "Read More",
    image: "/Slide3.png",
    alt: "Visitor visa and travel planning services for international travel",
    url: "/services/visitor-visa",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const start = () => {
    stop();
    intervalRef.current = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
  };

  const stop = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      className="relative h-[28rem] w-full overflow-hidden md:h-[32rem]"
      aria-label="Immigration and visa services"
    >
      <p className="sr-only">
        Professional support for study abroad, immigration and permanent residency, and visitor visa services.
      </p>

      {slides.map((slide, idx) => {
        const isActive = current === idx;

        return (
          <div
            key={slide.url}
            className={[
              "absolute inset-0 transition-opacity duration-1000",
              isActive
                ? "opacity-100 z-10 pointer-events-auto"
                : "opacity-0 z-0 pointer-events-none",
            ].join(" ")}
            aria-hidden={!isActive}
          >
            <div className="relative h-full w-full">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={idx === 0}
                sizes="100vw"
                className="object-cover object-center"
              />

              <div className="relative flex h-full w-full items-center justify-start text-white box-border px-6 md:px-60">
                <div className="max-w-xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)]">
                  <h2 className="mb-4 text-2xl font-bold md:text-4xl mt-28">
                    {slide.title}
                  </h2>
                  <p className="mb-6 text-sm md:text-lg">{slide.description}</p>

                  <Link
                    href={slide.url}
                    aria-label={`${slide.buttonText}: ${slide.title}`}
                    className="inline-block rounded border-2 border-white px-5 py-3 text-white transition-colors hover:border-amber-300 hover:text-amber-300"
                  >
                    {slide.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform">
        <div className="flex space-x-2" role="tablist" aria-label="Carousel navigation">
          {slides.map((slide, idx) => (
            <button
              key={slide.url}
              type="button"
              onClick={() => {
                setCurrent(idx);
                start();
              }}
              className={`h-3 w-3 rounded-full ${current === idx ? "bg-[#0284c7]" : "bg-slate-300 dark:bg-slate-600"
                }`}
              aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
              aria-current={current === idx ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
