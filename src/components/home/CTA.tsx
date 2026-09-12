// "use client";

// import Link from "next/link";
// import { motion } from "motion/react";

// export default function CTA() {
//   return (
//     <section className="bg-[#111] px-5 py-28 text-white sm:px-8 sm:py-36 lg:px-10 lg:py-48">
//       <div className="mx-auto max-w-7xl">
//         <span className="text-[10px] uppercase tracking-[0.25em] text-white/35">
//           06 — Start a conversation
//         </span>

//         <motion.h2
//           initial={{
//             opacity: 0,
//             y: 50,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//           }}
//           transition={{
//             duration: 0.9,
//           }}
//           className="
//             mt-10
//             max-w-6xl
//             text-5xl
//             font-light
//             leading-[0.9]
//             tracking-[-0.05em]
//             sm:text-7xl
//             lg:text-[8rem]
//           "
//         >
//           Let's build
//           <br />
//           something lasting.
//         </motion.h2>

//         <div className="mt-14">
//           <Link
//             href="/contact"
//             className="group inline-flex items-center gap-5"
//           >
//             <span
//               className="
//               flex
//               h-14
//               items-center
//               rounded-full
//               border
//               border-white/20
//               px-7
//               text-xs
//               uppercase
//               tracking-[0.15em]
//               transition-all
//               duration-500
//               group-hover:bg-white
//               group-hover:text-black
//             "
//             >
//               Contact Us
//             </span>

//             <span
//               className="
//               flex
//               h-14
//               w-14
//               items-center
//               justify-center
//               rounded-full
//               border
//               border-white/20
//               transition-all
//               duration-500
//               group-hover:translate-x-2
//             "
//             >
//               ↗
//             </span>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

import image from "../../assets/hero.jpg";

export default function CTA() {
  return (
    <section className="px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* =====================================================
            CTA BANNER
        ====================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            min-h-[300px]
            overflow-hidden
            bg-[#071b2d]
            sm:min-h-[340px]
            lg:min-h-[360px]
          "
        >
          {/* =================================================
              BACKGROUND IMAGE
          ================================================== */}
          <motion.div
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0"
          >
            <Image
              src={image}
              alt="Construction and architecture"
              fill
              className="
                object-cover
                object-center
              "
            />
          </motion.div>

          {/* =================================================
              NAVY OVERLAY
          ================================================== */}
          <div className="absolute inset-0 bg-[#071b2d]/85" />

          {/* Subtle gradient */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#071b2d]
              via-[#071b2d]/80
              to-[#071b2d]/40
            "
          />

          {/* =================================================
              CONTENT
          ================================================== */}
          <div
            className="
              relative
              z-10
              flex
              h-full
              min-h-[300px]
              flex-col
              justify-center
              px-6
              py-10

              sm:min-h-[340px]
              sm:px-10
              sm:py-12

              lg:min-h-[360px]
              lg:px-12
            "
          >
            <div
              className="
                flex
                flex-col
                gap-8

                lg:flex-row
                lg:items-center
                lg:justify-between
                lg:gap-12
              "
            >
              {/* =================================================
                  LEFT CONTENT
              ================================================== */}
              <div className="max-w-2xl">
                {/* Label */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.15,
                  }}
                  className="flex items-center gap-3"
                >
                  <span className="h-[2px] w-7 bg-[#006FFD]" />

                  <span
                    className="
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.2em]
                      text-white/60
                    "
                  >
                    Let's Build Together
                  </span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    mt-4
                    text-3xl
                    font-bold
                    leading-[1]
                    tracking-[-0.04em]
                    text-white

                    sm:text-4xl

                    lg:text-[3.25rem]
                  "
                >
                  Have a Project in Mind?
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3,
                  }}
                  className="
                    mt-4
                    max-w-lg
                    text-xs
                    leading-relaxed
                    text-white/60

                    sm:text-sm
                  "
                >
                  Get in touch with our team and let's create something
                  exceptional.
                </motion.p>
              </div>

              {/* =================================================
                  CONTACT BUTTON
              ================================================== */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: 25,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.35,
                }}
                className="shrink-0"
              >
                <Link href="/contact" className="group inline-block">
                  <motion.div
                    whileHover={{
                      scale: 1.04,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-full
                      bg-[#006FFD]
                      px-6
                      py-3
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.08em]
                      text-white
                      shadow-lg
                      shadow-black/20
                      transition-colors
                      duration-300
                      hover:bg-[#0056cc]

                      sm:px-7
                      sm:py-3.5
                    "
                  >
                    <span>Contact Us</span>

                    <motion.span
                      whileHover={{
                        x: 4,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="text-sm"
                    >
                      →
                    </motion.span>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* =================================================
              DECORATIVE BOTTOM LINE
          ================================================== */}
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
            className="
              absolute
              bottom-0
              left-0
              h-[2px]
              w-full
              origin-left
              bg-[#006FFD]
            "
          />
        </motion.div>
      </div>
    </section>
  );
}
