// "use client";

// import Image from "next/image";
// import { motion } from "motion/react";
// import image from "../../assets/hero.jpg";

// export default function Vision() {
//   return (
//     <section className="bg-[#f6f5f2] px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
//       <div className="mx-auto max-w-7xl">
//         <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
//           {/* Image */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               scale: 0.96,
//             }}
//             whileInView={{
//               opacity: 1,
//               scale: 1,
//             }}
//             viewport={{
//               once: true,
//             }}
//             transition={{
//               duration: 0.9,
//             }}
//             className="
//               relative
//               aspect-[4/5]
//               overflow-hidden
//               lg:col-span-5
//             "
//           >
//             <Image
//               src={image}
//               alt="Architecture and construction"
//               fill
//               className="object-cover"
//             />
//           </motion.div>

//           {/* Content */}

//           <div className="lg:col-span-6 lg:col-start-7">
//             <span className="text-[10px] uppercase tracking-[0.25em] text-black/35">
//               05 — Our Vision
//             </span>

//             <motion.h2
//               initial={{
//                 opacity: 0,
//                 y: 40,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               viewport={{
//                 once: true,
//               }}
//               transition={{
//                 duration: 0.8,
//               }}
//               className="
//                 mt-8
//                 text-5xl
//                 font-light
//                 leading-[0.95]
//                 tracking-[-0.05em]
//                 sm:text-6xl
//                 lg:text-[6rem]
//               "
//             >
//               Built with
//               <br />
//               purpose.
//             </motion.h2>

//             <p
//               className="
//               mt-10
//               max-w-lg
//               text-lg
//               font-light
//               leading-relaxed
//               text-black/60
//             "
//             >
//               We believe great spaces are not simply built. They are carefully
//               planned, thoughtfully designed and created with a clear vision for
//               the future.
//             </p>

//             {/* Principles */}

//             <div className="mt-14 space-y-6">
//               {[
//                 "Quality in every detail",
//                 "Precision in every stage",
//                 "Value for generations",
//               ].map((item, index) => (
//                 <motion.div
//                   key={item}
//                   initial={{
//                     opacity: 0,
//                     x: -20,
//                   }}
//                   whileInView={{
//                     opacity: 1,
//                     x: 0,
//                   }}
//                   viewport={{
//                     once: true,
//                   }}
//                   transition={{
//                     delay: index * 0.1,
//                   }}
//                   className="
//                     flex
//                     items-center
//                     gap-5
//                     border-b
//                     border-black/10
//                     pb-5
//                   "
//                 >
//                   <span className="text-[10px] text-black/30">
//                     0{index + 1}
//                   </span>

//                   <span className="text-sm">{item}</span>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "motion/react";
import {
  ShieldCheck,
  Clock3,
  FileCheck2,
  Users,
  ThumbsUp,
  ArrowUpRight,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Quality Construction",
    description:
      "High-quality materials and construction standards across every project.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "On-Time Delivery",
    description:
      "Careful planning and execution to keep projects moving on schedule.",
    icon: Clock3,
  },
  {
    number: "03",
    title: "Transparent Process",
    description:
      "Clear communication and transparent processes from start to finish.",
    icon: FileCheck2,
  },
  {
    number: "04",
    title: "Experienced Team",
    description:
      "Skilled professionals bringing knowledge and precision to every stage.",
    icon: Users,
  },
  {
    number: "05",
    title: "Client Satisfaction",
    description:
      "Long-term relationships built through trust, reliability and results.",
    icon: ThumbsUp,
  },
];

export default function Vision() {
  return (
    <section className="bg-[#f6f5f2] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center"
        >
          {/* Label */}
          <div className="flex items-center justify-center gap-3">
            <span className="h-[2px] w-7 bg-[#006FFD]" />

            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#071b2d]/50">
              Why Choose Us
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              mt-3
              text-3xl
              font-bold
              tracking-[-0.04em]
              text-[#071b2d]
              sm:text-4xl
              lg:text-[3rem]
            "
          >
            Your Trusted Infrastructure Partner
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-xl
              text-sm
              leading-relaxed
              text-[#071b2d]/55
            "
          >
            We combine quality, experience and responsible execution to create
            spaces that deliver lasting value.
          </p>
        </motion.div>

        {/* =====================================================
            REASONS
        ====================================================== */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.number}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <motion.div
                  whileHover={{
                    y: -5,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  className="
                    group
                    relative
                    h-full
                    border
                    border-[#071b2d]/10
                    bg-white
                    p-5
                    transition-all
                    duration-500
                    hover:border-[#071b2d]/20
                    hover:shadow-[0_12px_30px_rgba(7,27,45,0.08)]
                    sm:p-6
                  "
                >
                  {/* Number */}
                  <span
                    className="
                      absolute
                      right-5
                      top-5
                      text-[9px]
                      font-medium
                      tracking-[0.1em]
                      text-[#071b2d]/25
                    "
                  >
                    {reason.number}
                  </span>

                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#071b2d]/15
                      text-[#071b2d]
                    "
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </motion.div>

                  {/* Title */}
                  <h3
                    className="
                      mt-6
                      text-sm
                      font-bold
                      tracking-[-0.02em]
                      text-[#071b2d]
                    "
                  >
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-2
                      text-[10px]
                      leading-[1.6]
                      text-[#071b2d]/55
                    "
                  >
                    {reason.description}
                  </p>

                  {/* Arrow */}
                  <div className="mt-6 flex items-center justify-between">
                    <span className="h-[2px] w-7 bg-[#006FFD]/70 transition-all duration-500 group-hover:w-12" />

                    <motion.span
                      whileHover={{
                        x: 3,
                      }}
                      className="
                        text-[#071b2d]/40
                        transition-colors
                        duration-300
                        group-hover:text-[#006FFD]
                      "
                    >
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.7} />
                    </motion.span>
                  </div>

                  {/* Bottom hover line */}
                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[2px]
                      w-0
                      bg-[#006FFD]
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
