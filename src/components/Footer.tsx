// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "motion/react";

// const pages = [
//   {
//     name: "Home",
//     href: "/",
//   },
//   {
//     name: "About",
//     href: "/about",
//   },
//   {
//     name: "Services",
//     href: "/service",
//   },
//   {
//     name: "Projects",
//     href: "/projects",
//   },
//   {
//     name: "Contact",
//     href: "/contact",
//   },
// ];

// const socials = [
//   {
//     name: "Instagram",
//     href: "https://instagram.com",
//   },
//   {
//     name: "LinkedIn",
//     href: "https://linkedin.com",
//   },
//   {
//     name: "Facebook",
//     href: "https://facebook.com",
//   },
// ];

// export default function Footer() {
//   return (
//     <footer
//       className="bg-[#111] text-white   border-t
//         border-white/5"
//     >
//       {/* ================= MAIN FOOTER ================= */}

//       <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
//         {/* Top */}

//         <div className="grid gap-14 lg:grid-cols-12">
//           {/* ================= BRAND ================= */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 20,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             viewport={{
//               once: true,
//             }}
//             transition={{
//               duration: 0.7,
//             }}
//             className="lg:col-span-5"
//           >
//             {/* Logo */}

//             <Link href="/" className="inline-block">
//               <Image
//                 src="/logo.png"
//                 alt="Company Logo"
//                 width={90}
//                 height={90}
//                 className="
//                   h-[65px]
//                   w-[65px]
//                   object-contain

//                 "
//               />
//               <h1 className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
//                 Super Nexus
//               </h1>
//             </Link>

//             {/* Brand description */}

//             <p
//               className="
//               mt-8
//               max-w-sm
//               text-sm
//               leading-relaxed
//               text-white/45
//             "
//             >
//               Building enduring spaces through thoughtful construction, real
//               estate and development.
//             </p>

//             {/* Address */}

//             <div className="mt-10">
//               <p
//                 className="
//                 mb-3
//                 text-[9px]
//                 uppercase
//                 tracking-[0.22em]
//                 text-white/30
//               "
//               >
//                 Visit Us
//               </p>

//               <address
//                 className="
//                 max-w-xs
//                 not-italic
//                 text-sm
//                 leading-relaxed
//                 text-white/65
//               "
//               >
//                 123 Business Avenue,
//                 <br />
//                 Gurugram, Haryana
//                 <br />
//                 India — 122001
//               </address>
//             </div>
//           </motion.div>

//           {/* ================= PAGES ================= */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 20,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             viewport={{
//               once: true,
//             }}
//             transition={{
//               duration: 0.7,
//               delay: 0.1,
//             }}
//             className="lg:col-span-3"
//           >
//             <p
//               className="
//               mb-7
//               text-[9px]
//               uppercase
//               tracking-[0.22em]
//               text-white/30
//             "
//             >
//               Pages
//             </p>

//             <nav className="flex flex-col items-start">
//               {pages.map((page) => (
//                 <Link
//                   key={page.name}
//                   href={page.href}
//                   className="
//                     group
//                     relative
//                     py-2
//                     text-sm
//                     text-white/65
//                     transition-colors
//                     duration-300
//                     hover:text-white
//                   "
//                 >
//                   {page.name}

//                   <span
//                     className="
//                     absolute
//                     bottom-1
//                     left-0
//                     h-px
//                     w-0
//                     bg-white
//                     transition-all
//                     duration-300
//                     group-hover:w-full
//                   "
//                   />
//                 </Link>
//               ))}
//             </nav>
//           </motion.div>

//           {/* ================= SOCIAL ================= */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 20,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             viewport={{
//               once: true,
//             }}
//             transition={{
//               duration: 0.7,
//               delay: 0.2,
//             }}
//             className="lg:col-span-4"
//           >
//             <p
//               className="
//               mb-7
//               text-[9px]
//               uppercase
//               tracking-[0.22em]
//               text-white/30
//             "
//             >
//               Follow Us
//             </p>

//             <div className="flex flex-col items-start">
//               {socials.map((social) => (
//                 <a
//                   key={social.name}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="
//                     group
//                     flex
//                     items-center
//                     gap-3
//                     py-2
//                     text-sm
//                     text-white/65
//                     transition-colors
//                     duration-300
//                     hover:text-white
//                   "
//                 >
//                   <span>{social.name}</span>

//                   <span
//                     className="
//                     text-white/30
//                     transition-all
//                     duration-300
//                     group-hover:translate-x-1
//                     group-hover:text-white
//                   "
//                   >
//                     ↗
//                   </span>
//                 </a>
//               ))}
//             </div>

//             {/* Email */}

//             <div className="mt-10">
//               <p
//                 className="
//                 mb-3
//                 text-[9px]
//                 uppercase
//                 tracking-[0.22em]
//                 text-white/30
//               "
//               >
//                 Get in touch
//               </p>

//               <a
//                 href="mailto:info@company.com"
//                 className="
//                   group
//                   inline-flex
//                   items-center
//                   gap-3
//                   text-sm
//                   text-white/65
//                   transition-colors
//                   duration-300
//                   hover:text-white
//                 "
//               >
//                 info@company.com
//                 <span
//                   className="
//                   transition-transform
//                   duration-300
//                   group-hover:translate-x-1
//                 "
//                 >
//                   ↗
//                 </span>
//               </a>
//             </div>
//           </motion.div>
//         </div>

//         {/* ================= DIVIDER ================= */}

//         <div
//           className="
//           mt-16
//           border-t
//           border-white/10
//           pt-6
//           sm:mt-20
//         "
//         >
//           <div
//             className="
//             flex
//             flex-col
//             gap-4
//             text-[9px]
//             uppercase
//             tracking-[0.15em]
//             text-white/30

//             sm:flex-row
//             sm:items-center
//             sm:justify-between
//           "
//           >
//             <p>© {new Date().getFullYear()} Super Nexus</p>

//             <p>Construction · Real Estate · Development</p>

//             <Link
//               href="/privacy"
//               className="transition-colors hover:text-white/60"
//             >
//               Privacy Policy
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* ================= LARGE BRAND TEXT ================= */}

//       {/* <div
//         className="
//         overflow-hidden
//         border-t
//         border-white/5
//         px-5
//         sm:px-8
//         lg:px-10
//       "
//       >
//         <div
//           className="
//           mx-auto
//           max-w-7xl
//           overflow-hidden
//         "
//         >
//           <motion.p
//             initial={{
//               opacity: 0,
//               y: 30,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             viewport={{
//               once: true,
//             }}
//             transition={{
//               duration: 0.8,
//             }}
//             className="
//               whitespace-nowrap
//               pb-[-10px]
//               text-[18vw]
//               font-light
//               leading-[1.5]
//               tracking-[-0.05em]
//               text-white/[0.035]
//             "
//           >
//             Super Nexus
//           </motion.p>
//         </div>
//       </div> */}
//     </footer>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";

const pages = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Our Services",
    href: "/services",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  // {
  //   name: "Why Us",
  //   href: "/why-us",
  // },
  {
    name: "Contact",
    href: "/contact",
  },
];

const socials = [
  // {
  //   name: "LinkedIn",
  //   short: "in",
  //   href: "https://linkedin.com",
  // },
  {
    name: "Instagram",
    short: "ig",
    href: "https://instagram.com",
  },
  {
    name: "Facebook",
    short: "f",
    href: "https://facebook.com",
  },
  // {
  //   name: "YouTube",
  //   short: "yt",
  //   href: "https://youtube.com",
  // },
];

export default function Footer() {
  return (
    <footer className="bg-[#071b2d] text-white">
      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-0">
          {/* =================================================
              BRAND
          ================================================== */}
          <motion.div
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              lg:col-span-4
              lg:border-r
              lg:border-white/10
              lg:pr-10
            "
          >
            {/* Logo */}
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="SuperNexus Infra Pvt. Ltd."
                width={220}
                height={80}
                priority
                className="
                  h-[52px]
                  w-auto
                  object-contain
                "
              />
            </Link>

            {/* Description */}
            <p
              className="
                mt-5
                max-w-sm
                text-[11px]
                leading-[1.7]
                text-white/55
              "
            >
              Supernexus Infra Pvt. Ltd. — Building modern infrastructure and
              creating lasting value through innovation, quality and trust.
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-2.5">
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  whileHover={{
                    y: -3,
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/15
                    text-[9px]
                    font-semibold
                    lowercase
                    text-white/60
                    transition-all
                    duration-300
                    hover:border-[#006FFD]
                    hover:bg-[#006FFD]
                    hover:text-white
                  "
                >
                  {social.short}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* =================================================
              QUICK LINKS
          ================================================== */}
          <motion.div
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="
              lg:col-span-2
              lg:border-r
              lg:border-white/10
              lg:px-8
            "
          >
            <p
              className="
                mb-5
                text-[9px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-white/40
              "
            >
              Quick Links
            </p>

            <nav className="flex flex-col items-start">
              {pages.map((page) => (
                <Link
                  key={page.name}
                  href={page.href}
                  className="
                    group
                    relative
                    py-1
                    text-[11px]
                    text-white/60
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  {page.name}

                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-px
                      w-0
                      bg-[#006FFD]
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* =================================================
              CONTACT
          ================================================== */}
          <motion.div
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="
              lg:col-span-3
              lg:border-r
              lg:border-white/10
              lg:px-8
            "
          >
            <p
              className="
                mb-5
                text-[9px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-white/40
              "
            >
              Contact Us
            </p>

            <div className="space-y-3">
              {/* Location */}
              <div className="flex gap-3">
                <MapPin
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-white/50"
                  strokeWidth={1.8}
                />

                <p className="text-[10px] leading-relaxed text-white/60">
                  Kasia, Kushinagar,
                  <br />
                  Uttar Pradesh, India
                </p>
              </div>

              {/* Email */}
              <a
                href="mailto:info@supernexusinfra.com"
                className="
                  flex
                  items-center
                  gap-3
                  text-[10px]
                  text-white/60
                  transition-colors
                  hover:text-white
                "
              >
                <Mail className="h-3.5 w-3.5 text-white/50" strokeWidth={1.8} />
                info@supernexusinfra.com
              </a>

              {/* Phone */}
              <a
                href="tel:+918840792065"
                className="
                  flex
                  items-center
                  gap-3
                  text-[10px]
                  text-white/60
                  transition-colors
                  hover:text-white
                "
              >
                <Phone
                  className="h-3.5 w-3.5 text-white/50"
                  strokeWidth={1.8}
                />
                +91 8840792065
              </a>
            </div>
          </motion.div>

          {/* =================================================
              BRAND MESSAGE
          ================================================== */}
          <motion.div
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="
              relative
              overflow-hidden
              lg:col-span-3
              lg:px-8
            "
          >
            {/* Red accent */}
            <span className="mb-5 block h-[2px] w-8 bg-[#006FFD]" />

            <h3
              className="
                max-w-[180px]
                text-2xl
                font-light
                leading-[1.05]
                tracking-[-0.04em]
                text-white
                sm:text-3xl
              "
            >
              Together
              <br />
              We Build
              <br />
              <span className="text-white/45">The Future.</span>
            </h3>

            {/* CTA */}
            <Link
              href="/contact"
              className="
                group
                mt-6
                inline-flex
                items-center
                gap-2
                text-[9px]
                font-medium
                uppercase
                tracking-[0.12em]
                text-white/60
                transition-colors
                hover:text-white
              "
            >
              Start a Conversation
              <ArrowUpRight
                className="
                  h-3.5
                  w-3.5
                  text-[#006FFD]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </Link>

            {/* Decorative architectural lines */}
            <div
              className="
                pointer-events-none
                absolute
                -bottom-10
                right-0
                hidden
                h-36
                w-44
                opacity-20
                lg:block
              "
            >
              <div className="absolute bottom-0 right-0 h-24 w-12 border-x border-t border-white/30" />

              <div className="absolute bottom-0 right-10 h-32 w-14 border-x border-t border-white/30" />

              <div className="absolute bottom-0 right-24 h-16 w-10 border-x border-t border-white/30" />
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM DIVIDER
        ====================================================== */}
        <div className="mt-10 border-t border-white/10 pt-5">
          <div
            className="
              flex
              flex-col
              gap-3
              text-[8px]
              uppercase
              tracking-[0.12em]
              text-white/35

              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            {/* Copyright */}
            <p>
              © {new Date().getFullYear()} Supernexus Infra Pvt. Ltd. All Rights
              Reserved.
            </p>

            {/* Legal */}
            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>

              <span className="h-3 w-px bg-white/15" />

              <Link
                href="/terms"
                className="transition-colors hover:text-white"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
