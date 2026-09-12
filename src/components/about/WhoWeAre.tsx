// "use client";

// import Image from "next/image";
// import { motion } from "motion/react";
// import { ArrowUpRight } from "lucide-react";
// import image from "../../assets/hero.jpg";

// export default function WhoWeAre() {
//   return (
//     <section
//       id="who-we-are"
//       className="bg-[#f6f5f2] py-20 text-[#071b2d] sm:py-24 lg:py-28"
//     >
//       <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
//         <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
//           {/* Image */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.8 }}
//             className="relative h-[420px] overflow-hidden sm:h-[520px]"
//           >
//             <Image
//               src={image}
//               alt="SuperNexus construction project"
//               fill
//               className="object-cover transition-transform duration-700 hover:scale-105"
//             />

//             <div className="absolute bottom-0 left-0 h-24 w-24 border-l border-b border-[#2563eb]" />

//             <div className="absolute right-5 top-5 bg-[#071b2d] px-4 py-3 text-white">
//               <p className="text-[8px] uppercase tracking-[0.2em] text-white/50">
//                 SuperNexus
//               </p>

//               <p className="mt-1 text-xs font-medium">Built to Last</p>
//             </div>
//           </motion.div>

//           {/* Content */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="mb-6 flex items-center gap-3">
//               <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#2563eb]">
//                 01 — Who We Are
//               </span>

//               <span className="h-px w-8 bg-[#071b2d]/20" />
//             </div>

//             <h2 className="max-w-xl text-4xl font-light leading-[1.05] tracking-[-0.04em] sm:text-5xl">
//               More Than Construction.
//               <br />
//               <span className="text-[#071b2d]/45">We Build Possibilities.</span>
//             </h2>

//             <div className="mt-8 max-w-xl space-y-5 text-sm leading-7 text-[#071b2d]/60">
//               <p>
//                 At SuperNexus Infra Pvt. Ltd., we believe every project is more
//                 than a structure. It is an opportunity to create something
//                 meaningful, functional and built to last.
//               </p>

//               <p>
//                 From construction and real estate to development and project
//                 planning, we bring together thoughtful planning, quality
//                 execution and a commitment to delivering dependable results.
//               </p>

//               <p>
//                 Our approach is built around understanding our clients,
//                 maintaining transparency throughout the process and creating
//                 spaces that deliver lasting value.
//               </p>
//             </div>

//             <div className="mt-9 flex items-center gap-4 border-t border-[#071b2d]/10 pt-6">
//               <span className="text-[9px] uppercase tracking-[0.16em] text-[#071b2d]/40">
//                 Quality
//               </span>

//               <span className="h-3 w-px bg-[#071b2d]/15" />

//               <span className="text-[9px] uppercase tracking-[0.16em] text-[#071b2d]/40">
//                 Trust
//               </span>

//               <span className="h-3 w-px bg-[#071b2d]/15" />

//               <span className="text-[9px] uppercase tracking-[0.16em] text-[#071b2d]/40">
//                 Progress
//               </span>
//             </div>

//             <div className="mt-8">
//               <div className="inline-flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.15em] text-[#071b2d]">
//                 Building for tomorrow
//                 <ArrowUpRight
//                   className="h-4 w-4 text-[#2563eb]"
//                   strokeWidth={1.5}
//                 />
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import image from "../../assets/2.jpg";

export default function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="bg-[#071b2d] py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative h-[420px] overflow-hidden sm:h-[500px] lg:h-[560px]"
          >
            <Image
              src={image}
              alt="SuperNexus construction project"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-[#071b2d]/15" />

            {/* Architectural corner */}
            <div className="absolute bottom-0 left-0 h-20 w-20 border-b border-l border-[#2563eb]" />

            <div className="absolute right-5 top-5 h-12 w-12 border-r border-t border-white/20" />

            {/* Small label */}
            <div className="absolute bottom-5 right-5 border border-white/15 bg-[#071b2d]/80 px-4 py-3 backdrop-blur-sm">
              <p className="text-[8px] uppercase tracking-[0.2em] text-white/40">
                SuperNexus
              </p>

              <p className="mt-1 text-[11px] text-white/80">Built to Last</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            {/* Section label */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#2563eb]" />

              <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-white/40">
                01 — Who We Are
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-xl text-4xl font-light leading-[1.05] tracking-[-0.04em] sm:text-5xl">
              More Than Construction.
              <br />
              <span className="text-white/40">We Build Possibilities.</span>
            </h2>

            {/* Description */}
            <div className="mt-8 max-w-xl space-y-5 text-sm leading-7 text-white/55">
              <p>
                At SuperNexus Infra Pvt. Ltd., we believe every project is more
                than a structure. It is an opportunity to create something
                meaningful, functional and built to last.
              </p>

              <p>
                From construction and real estate to development and project
                planning, we bring together thoughtful planning, quality
                execution and a commitment to delivering dependable results.
              </p>

              <p>
                Our approach is built around understanding our clients,
                maintaining transparency throughout the process and creating
                spaces that deliver lasting value.
              </p>
            </div>

            {/* Principles */}
            <div className="mt-9 grid grid-cols-3 border-y border-white/10 py-5">
              <div>
                <p className="text-[9px] uppercase tracking-[0.16em] text-white/35">
                  Quality
                </p>

                <span className="mt-2 block h-[2px] w-5 bg-[#2563eb]" />
              </div>

              <div className="border-l border-white/10 pl-4">
                <p className="text-[9px] uppercase tracking-[0.16em] text-white/35">
                  Trust
                </p>

                <span className="mt-2 block h-[2px] w-5 bg-[#2563eb]" />
              </div>

              <div className="border-l border-white/10 pl-4">
                <p className="text-[9px] uppercase tracking-[0.16em] text-white/35">
                  Progress
                </p>

                <span className="mt-2 block h-[2px] w-5 bg-[#2563eb]" />
              </div>
            </div>

            {/* Bottom link */}
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.25 }}
              className="mt-8"
            >
              <a
                href="#values"
                className="group inline-flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-white"
              >
                What Drives Us
                <ArrowUpRight
                  className="h-4 w-4 text-[#2563eb] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  strokeWidth={1.5}
                />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
