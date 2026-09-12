// "use client";

// import Link from "next/link";
// import { motion } from "motion/react";

// export default function Intro() {
//   return (
//     <section className="bg-[#f6f5f2] px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
//       <div className="mx-auto max-w-7xl">
//         {/* Section label */}

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="flex items-center gap-4"
//         >
//           <span className="h-px w-8 bg-black/30" />

//           <span className="text-[10px] uppercase tracking-[0.25em] text-black/40">
//             01 — About Us
//           </span>
//         </motion.div>

//         {/* Main heading */}

//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 0.9,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="
//             mt-10
//             max-w-6xl
//             text-4xl
//             font-light
//             leading-[0.95]
//             tracking-[-0.05em]
//             sm:text-6xl
//             lg:text-[6.5rem]
//           "
//         >
//           Building spaces.
//           <br />
//           Creating value.
//         </motion.h2>

//         {/* Bottom content */}

//         <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-end">
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{
//               duration: 0.7,
//               delay: 0.15,
//             }}
//             className="
//               max-w-xl
//               text-lg
//               font-light
//               leading-relaxed
//               tracking-[-0.01em]
//               text-black/65
//               sm:text-xl
//             "
//           >
//             We are a construction and real estate company dedicated to creating
//             thoughtfully planned spaces that combine quality, functionality and
//             lasting value.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{
//               duration: 0.7,
//               delay: 0.25,
//             }}
//             className="lg:justify-self-end"
//           >
//             <Link
//               href="/about"
//               className="
//                 group
//                 inline-flex
//                 items-center
//                 gap-4
//                 border-b
//                 border-black/20
//                 pb-2
//                 text-xs
//                 uppercase
//                 tracking-[0.15em]
//                 transition-colors
//                 hover:border-black
//               "
//             >
//               <span>Discover Our Story</span>

//               <span className="transition-transform duration-300 group-hover:translate-x-1">
//                 ↗
//               </span>
//             </Link>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "motion/react";
import image from "../../assets/2.jpg";
import Link from "next/link";

export default function Intro() {
  return (
    <section className="bg-[#f6f5f2] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-stretch lg:gap-16">
          {/* =================================================
              LEFT CONTENT
          ================================================== */}
          <div className="flex flex-col justify-between">
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <span className="h-[2px] w-7 bg-[#006FFD]" />

              <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#071b2d]/60">
                01 — About Us
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-4
                max-w-xl
                text-[2.5rem]
                font-bold
                leading-[0.95]
                tracking-[-0.045em]
                text-[#071b2d]
                sm:text-5xl
                lg:text-[3.5rem]
              "
            >
              Build Today.
              <br />
              <span className="text-[#006FFD]">For a Better Tomorrow.</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="
                mt-5
                max-w-xl
                text-sm
                leading-[1.65]
                text-[#071b2d]/70
                sm:text-[15px]
              "
            >
              Supernexus Infra Pvt. Ltd. is a dynamic and forward-thinking
              company engaged in Construction, Real Estate and IT (Multiple
              Work). We are committed to delivering high-quality projects that
              combine innovation, sustainability and trust.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="mt-6"
            >
              <Link href="/about">
                <motion.span
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="
        inline-flex
        items-center
        gap-3
        rounded-full
        bg-[#006FFD]
        px-5
        py-2.5
        text-[10px]
        font-semibold
        uppercase
        tracking-[0.08em]
        text-white
        shadow-sm
        transition-colors
        duration-300
        hover:bg-[#0056c4]
      "
                >
                  <span>Discover Our Story</span>

                  <motion.span className="text-sm" whileHover={{ x: 3 }}>
                    →
                  </motion.span>
                </motion.span>
              </Link>
            </motion.div>
            {/* =================================================
                VISION + MISSION
            ================================================== */}
            <div className="mt-8 grid gap-7 grid-cols-2  sm:gap-0">
              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.15,
                }}
                className="flex gap-4 sm:border-r sm:border-[#071b2d]/15 sm:pr-7"
              >
                {/* Icon */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#071b2d]/25">
                  <span className="text-sm text-[#071b2d]">✦</span>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#071b2d]">
                    Our Vision
                  </h3>

                  <p className="mt-1.5 max-w-[190px] text-[11px] leading-[1.55] text-[#071b2d]/60">
                    To be a leading infrastructure company known for quality,
                    innovation and integrity.
                  </p>
                </div>
              </motion.div>

              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.25,
                }}
                className="flex gap-4 sm:pl-7"
              >
                {/* Icon */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#071b2d]/25">
                  <span className="text-sm text-[#071b2d]">◈</span>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#071b2d]">
                    Our Mission
                  </h3>

                  <p className="mt-1.5 max-w-[190px] text-[11px] leading-[1.55] text-[#071b2d]/60">
                    To create sustainable spaces and long-term value for our
                    clients and communities.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* =================================================
              RIGHT IMAGE
          ================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative min-h-[280px] overflow-hidden rounded-[3px] sm:min-h-[380px] lg:min-h-[430px]"
          >
            <Image
              src={image}
              alt="Quality construction for a stronger future"
              fill
              className="object-cover"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071b2d]/85 via-[#071b2d]/10 to-transparent" />

            {/* Image text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.4,
              }}
              className="absolute bottom-6 left-6 max-w-sm text-white sm:bottom-8 sm:left-8"
            >
              <h3 className="text-xl font-semibold leading-tight tracking-[-0.02em] sm:text-2xl">
                Quality Construction
                <br />
                for a Stronger Future
              </h3>

              <span className="mt-4 block h-[2px] w-10 bg-[#006FFD]" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
