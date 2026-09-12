"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";

import image from "../../assets/hero.jpg";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#f6f5f2] text-[#071b2d]">
      <div className="mx-auto grid min-h-[65vh] max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-20">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-[#006FFD]" />

            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#071b2d]/60">
              Contact SuperNexus
            </span>
          </div>

          <h1 className="max-w-3xl text-5xl font-light leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Let's Build
            <br />
            <span className="text-[#006FFD]">Something</span>
            <br />
            Meaningful.
          </h1>

          <p className="mt-8 max-w-xl text-sm leading-7 text-[#071b2d]/65 sm:text-base">
            Have a project in mind or looking for the right development partner?
            Tell us what you're building and let's start a conversation.
          </p>

          <a
            href="#contact-form"
            className="group mt-9 inline-flex items-center gap-3 bg-[#006FFD] px-5 py-3.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[#0056c4]"
          >
            Get In Touch
            <ArrowDownRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1 group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </a>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1 }}
          className="relative h-[400px] overflow-hidden sm:h-[480px] lg:h-[540px]"
        >
          <Image
            src={image}
            alt="SuperNexus project"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[#071b2d]/20" />

          <div className="absolute bottom-0 left-0 h-20 w-20 border-b border-l border-[#006FFD]" />

          <div className="absolute right-5 top-5 h-12 w-12 border-r border-t border-white/30" />
        </motion.div>
      </div>
    </section>
  );
}
