"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import image from "../../assets/hero.jpg";

export default function ServicesCTA() {
  return (
    <section className="bg-[#071b2d] px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto min-h-[360px] max-w-7xl overflow-hidden"
      >
        <Image
          src={image}
          alt="SuperNexus project"
          fill
          className="object-cover transition-transform duration-[1200ms] hover:scale-105"
        />

        <div className="absolute inset-0 bg-[#071b2d]/85" />

        <div className="relative flex min-h-[360px] flex-col justify-center px-7 py-12 sm:px-12 lg:px-16">
          <span className="mb-6 h-[2px] w-8 bg-[#006FFD]" />

          <p className="text-[9px] uppercase tracking-[0.22em] text-white/40">
            Have a Project in Mind?
          </p>

          <h2 className="mt-4 max-w-2xl text-4xl font-light leading-[1] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Let's build
            <br />
            <span className="text-white/40">something lasting.</span>
          </h2>

          <p className="mt-6 max-w-lg text-sm leading-7 text-white/50">
            Tell us about your requirements and let's explore the right solution
            for your project.
          </p>

          <Link
            href="/contact"
            className="group mt-8 inline-flex w-fit items-center gap-3 bg-[#006FFD] px-6 py-3.5 text-[9px] font-medium uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-white hover:text-[#071b2d]"
          >
            Contact Us
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </Link>

          {/* Architectural detail */}
          <div className="pointer-events-none absolute bottom-0 right-0 hidden h-44 w-60 opacity-20 lg:block">
            <div className="absolute bottom-0 right-0 h-36 w-20 border-x border-t border-white/30" />

            <div className="absolute bottom-0 right-16 h-28 w-16 border-x border-t border-white/30" />

            <div className="absolute bottom-0 right-32 h-20 w-12 border-x border-t border-white/30" />
          </div>
        </div>

        <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#006FFD]" />
      </motion.div>
    </section>
  );
}

// "use client";

// import Link from "next/link";
// import { motion } from "motion/react";
// import { ArrowUpRight } from "lucide-react";

// export default function ServicesCTA() {
//   return (
//     <section className="bg-[#071b2d] px-6 py-24 text-white md:px-10 md:py-32">
//       <div className="mx-auto max-w-7xl">
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="grid items-end gap-10 md:grid-cols-[1fr_auto]"
//         >
//           <div>
//             <span className="text-xs uppercase tracking-[0.25em] text-[#006FFD]">
//               Let&apos;s Build Together
//             </span>

//             <h2 className="mt-6 max-w-3xl text-5xl font-light leading-[0.95] tracking-[-0.04em] md:text-7xl">
//               Have a project
//               <br />
//               <span className="text-[#006FFD]">in mind?</span>
//             </h2>
//           </div>

//           <Link
//             href="/contact"
//             className="group inline-flex items-center gap-4"
//           >
//             <span className="text-sm uppercase tracking-[0.15em]">
//               Start a Conversation
//             </span>

//             <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#006FFD] text-white transition-transform duration-300 group-hover:translate-x-1">
//               <ArrowUpRight size={21} />
//             </span>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
