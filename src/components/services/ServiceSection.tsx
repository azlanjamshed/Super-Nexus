"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Building2,
  Home,
  Layers3,
  MessageCircle,
} from "lucide-react";

type ServiceSectionProps = {
  number: string;
  title: string;
  heading: string;
  highlightedHeading: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
  focus: string[];
  icon: "construction" | "real-estate" | "development" | "consultation";
  dark?: boolean;
};

const icons = {
  construction: Building2,
  "real-estate": Home,
  development: Layers3,
  consultation: MessageCircle,
};

export default function ServiceSection({
  number,
  title,
  heading,
  highlightedHeading,
  description,
  image,
  imageAlt,
  focus,
  icon,
  dark = false,
}: ServiceSectionProps) {
  const Icon = icons[icon];

  const background = dark ? "bg-[#071b2d]" : "bg-[#f6f5f2]";
  const text = dark ? "text-white" : "text-[#071b2d]";
  const muted = dark ? "text-white/55" : "text-[#071b2d]/55";
  const subtle = dark ? "text-white/35" : "text-[#071b2d]/35";
  const border = dark ? "border-white/10" : "border-[#071b2d]/10";

  return (
    <section className={`${background} ${text} py-20 md:py-28`}>
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Top Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className={`mb-12 flex items-center justify-between border-b ${border} pb-5`}
        >
          <div className="flex items-center gap-4">
            <span className="text-xs tracking-[0.25em] text-[#006FFD]">
              {number}
            </span>

            <span className={`text-sm uppercase tracking-[0.18em] ${muted}`}>
              {title}
            </span>
          </div>

          <Icon size={22} strokeWidth={1.4} className="text-[#006FFD]" />
        </motion.div>

        {/* Content */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 ${
                  dark ? "bg-[#071b2d]/10" : "bg-[#071b2d]/5"
                }`}
              />

              {/* Architectural Corners */}
              <span className="absolute left-5 top-5 h-12 w-12 border-l border-t border-[#006FFD]/80" />
              <span className="absolute bottom-5 right-5 h-12 w-12 border-b border-r border-[#006FFD]/80" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="max-w-xl text-4xl font-light leading-[1.05] tracking-[-0.04em] md:text-5xl lg:text-6xl">
              {heading}
              <br />
              <span className="text-[#006FFD]">{highlightedHeading}</span>
            </h2>

            <p
              className={`mt-7 max-w-xl text-sm leading-7 md:text-base ${muted}`}
            >
              {description}
            </p>

            {/* Focus */}
            <div className={`mt-9 border-t ${border}`}>
              {focus.map((item, index) => (
                <div
                  key={item}
                  className={`flex items-center justify-between border-b ${border} py-4`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-xs ${subtle}`}>0{index + 1}</span>

                    <span className="text-sm md:text-base">{item}</span>
                  </div>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.5}
                    className="text-[#006FFD]"
                  />
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-3 text-sm uppercase tracking-[0.15em]"
            >
              <span className="border-b border-[#006FFD] pb-1">
                Discuss a Project
              </span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#006FFD] text-white transition-transform duration-300 group-hover:translate-x-1">
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
