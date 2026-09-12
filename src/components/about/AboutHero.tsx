"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";
import image from "../../assets/hero.jpg";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#f6f5f2] text-white">
      <div className="mx-auto grid min-h-[72vh] max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-20">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-[#2563eb]" />

            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#071b2d]/60">
              About SuperNexus
            </span>
          </div>

          <h1 className="max-w-3xl text-5xl font-light leading-[0.95] text-[#071b2d] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Building with
            <br />
            <span className="text-[#2563eb]">Purpose.</span>
            <br />
            Creating for the
            <br />
            <span className="text-[#2563eb]">Future.</span>
          </h1>

          <p className="mt-8 max-w-xl text-sm leading-7 text-[#071b2d]/70 sm:text-base">
            SuperNexus Infra Pvt. Ltd. is a construction, real estate and
            development company focused on creating quality spaces, reliable
            infrastructure and lasting value.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link
              href="#who-we-are"
              className="group inline-flex items-center gap-3 border border-white/20 px-5 py-3 text-[10px] font-medium uppercase tracking-[0.16em] transition-all duration-300 text-white bg-[#006FFD] hover:bg-[#0056c4] "
            >
              Discover Our Story
              <ArrowDownRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </Link>

            <span className="text-[9px] uppercase tracking-[0.18em] text-white/30">
              Construction · Real Estate · Development
            </span>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1 }}
          className="relative h-[420px] overflow-hidden sm:h-[500px] lg:h-[580px]"
        >
          <Image
            src={image}
            alt="SuperNexus infrastructure project"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[#071b2d]/20" />

          {/* Blue architectural accent */}
          <div className="absolute bottom-0 left-0 h-20 w-20 border-l border-b border-[#2563eb]/70" />

          <div className="absolute right-5 top-5 h-12 w-12 border-r border-t border-white/20" />
        </motion.div>
      </div>

      {/* Background detail */}
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full border border-white/5" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-44 w-44 rounded-full border border-white/5" />
    </section>
  );
}
