"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import image from "../../assets/3.jpg";

export default function AboutCTA() {
  return (
    <section className="bg-[#071b2d] px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto min-h-[400px] max-w-7xl overflow-hidden"
      >
        {/* Background image */}
        <Image
          src={image}
          alt="SuperNexus project"
          fill
          className="object-cover transition-transform duration-[1200ms] hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#071b2d]/85" />

        {/* Content */}
        <div className="relative flex min-h-[400px] flex-col justify-center px-7 py-12 sm:px-12 lg:px-16">
          {/* Accent */}
          <span className="mb-6 h-[2px] w-8 bg-[#006FFD]" />

          <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-white/40">
            Let's Work Together
          </p>

          <h2 className="mt-4 max-w-2xl text-4xl font-light leading-[1] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Have a vision
            <br />
            <span className="text-white/40">in mind?</span>
          </h2>

          <p className="mt-6 max-w-lg text-sm leading-7 text-white/50">
            Let's turn your ideas into a space built with purpose, quality and
            long-term value.
          </p>

          <Link
            href="/contact"
            className="group mt-8 inline-flex w-fit items-center gap-3 bg-[#006FFD] px-6 py-3.5 text-[9px] font-medium uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-white hover:text-[#071b2d]"
          >
            Start a Conversation
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              strokeWidth={1.5}
            />
          </Link>

          {/* Architectural decoration */}
          <div className="pointer-events-none absolute bottom-0 right-0 hidden h-48 w-64 opacity-20 lg:block">
            <div className="absolute bottom-0 right-0 h-40 w-20 border-x border-t border-white/30" />

            <div className="absolute bottom-0 right-16 h-32 w-16 border-x border-t border-white/30" />

            <div className="absolute bottom-0 right-32 h-24 w-12 border-x border-t border-white/30" />
          </div>
        </div>

        {/* Blue bottom accent */}
        <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#006FFD]" />
      </motion.div>
    </section>
  );
}
