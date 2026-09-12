// "use client";

// import { motion } from "motion/react";
// import Link from "next/link";
// import { ArrowDownRight } from "lucide-react";

// export default function ServicesIntro() {
//   return (
//     <section className="bg-[#f6f5f2] text-[#071b2d]">
//       <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
//         <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
//           {/* Heading */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="mb-6 flex items-center gap-3">
//               <span className="h-px w-8 bg-[#006FFD]" />

//               <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#071b2d]/45">
//                 Our Services
//               </span>
//             </div>

//             <h1 className="max-w-4xl text-5xl font-light leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
//               Building Solutions
//               <br />
//               <span className="text-[#071b2d]/40">For What Comes Next.</span>
//             </h1>
//           </motion.div>

//           {/* Intro */}
//           <motion.div
//             initial={{ opacity: 0, x: 25 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.15 }}
//             className="lg:border-l lg:border-[#071b2d]/10 lg:pl-8"
//           >
//             <p className="max-w-md text-sm leading-7 text-[#071b2d]/55">
//               From construction and real estate to development and project
//               planning, SuperNexus brings together practical expertise,
//               thoughtful planning and disciplined execution.
//             </p>

//             <Link
//               href="#construction"
//               className="group mt-7 inline-flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.16em]"
//             >
//               Explore Our Services
//               <ArrowDownRight
//                 className="h-4 w-4 text-[#006FFD] transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
//                 strokeWidth={1.5}
//               />
//             </Link>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "motion/react";

export default function ServicesIntro() {
  return (
    <section className="bg-[#f6f5f2] px-6 py-24 text-[#071b2d] md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-8 bg-[#006FFD]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#071b2d]/60">
              SERVICES
            </span>
          </div>

          <h1 className="max-w-5xl text-5xl font-light leading-[0.95] tracking-[-0.05em] md:text-7xl lg:text-8xl">
            Expertise that
            <br />
            <span className="text-[#006FFD]">moves ideas forward.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-sm leading-7 text-[#071b2d]/60 md:text-base">
            From construction and real estate to development and consultation,
            we provide practical solutions designed around quality, purpose and
            long-term value.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
