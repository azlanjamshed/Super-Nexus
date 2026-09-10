"use client";

import Link from "next/link";
import { motion } from "motion/react";

const services = [
  {
    number: "01",
    title: "Construction",
    description:
      "End-to-end construction solutions delivered with precision, quality and attention to every detail.",
    href: "/services/construction",
  },
  {
    number: "02",
    title: "Real Estate",
    description:
      "Strategic real estate development focused on creating sustainable long-term value.",
    href: "/services/real-estate",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Residential and commercial developments designed around people, place and purpose.",
    href: "/services/development",
  },
];

export default function Services() {
  return (
    <section className="bg-[#111] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">
        {/* Header */}

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/35">
              02 — Expertise
            </span>

            <h2
              className="
              mt-8
              text-5xl
              font-light
              tracking-[-0.05em]
              sm:text-7xl
              lg:text-[7rem]
            "
            >
              What we do.
            </h2>
          </div>

          <p
            className="
            max-w-md
            self-end
            text-sm
            leading-relaxed
            text-white/45
          "
          >
            From the first idea to the final structure, our expertise spans
            construction, development and real estate.
          </p>
        </div>

        {/* Services */}

        <div className="mt-20 border-t border-white/10">
          {services.map((service) => (
            <Link
              key={service.number}
              href={service.href}
              className="group block"
            >
              <motion.div
                whileHover={{ x: 8 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className="
                  grid
                  gap-6
                  border-b
                  border-white/10
                  py-8
                  sm:py-10
                  lg:grid-cols-[80px_1fr_1fr_auto]
                  lg:items-center
                "
              >
                <span className="text-[10px] text-white/30">
                  {service.number}
                </span>

                <h3
                  className="
                  text-3xl
                  font-light
                  tracking-[-0.03em]
                  sm:text-5xl
                "
                >
                  {service.title}
                </h3>

                <p
                  className="
                  max-w-sm
                  text-sm
                  leading-relaxed
                  text-white/40
                "
                >
                  {service.description}
                </p>

                <span
                  className="
                  hidden
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  text-sm
                  transition-all
                  duration-500
                  group-hover:bg-white
                  group-hover:text-black
                  lg:flex
                "
                >
                  ↗
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
