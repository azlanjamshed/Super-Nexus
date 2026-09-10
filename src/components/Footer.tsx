"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const pages = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/service",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
  },
];

export default function Footer() {
  return (
    <footer
      className="bg-[#111] text-white   border-t
        border-white/5"
    >
      {/* ================= MAIN FOOTER ================= */}

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        {/* Top */}

        <div className="grid gap-14 lg:grid-cols-12">
          {/* ================= BRAND ================= */}

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
            }}
            transition={{
              duration: 0.7,
            }}
            className="lg:col-span-5"
          >
            {/* Logo */}

            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Company Logo"
                width={90}
                height={90}
                className="
                  h-[65px]
                  w-[65px]
                  object-contain
                  
                  
                "
              />
              <h1 className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Super Nexus
              </h1>
            </Link>

            {/* Brand description */}

            <p
              className="
              mt-8
              max-w-sm
              text-sm
              leading-relaxed
              text-white/45
            "
            >
              Building enduring spaces through thoughtful construction, real
              estate and development.
            </p>

            {/* Address */}

            <div className="mt-10">
              <p
                className="
                mb-3
                text-[9px]
                uppercase
                tracking-[0.22em]
                text-white/30
              "
              >
                Visit Us
              </p>

              <address
                className="
                max-w-xs
                not-italic
                text-sm
                leading-relaxed
                text-white/65
              "
              >
                123 Business Avenue,
                <br />
                Gurugram, Haryana
                <br />
                India — 122001
              </address>
            </div>
          </motion.div>

          {/* ================= PAGES ================= */}

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
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="lg:col-span-3"
          >
            <p
              className="
              mb-7
              text-[9px]
              uppercase
              tracking-[0.22em]
              text-white/30
            "
            >
              Pages
            </p>

            <nav className="flex flex-col items-start">
              {pages.map((page) => (
                <Link
                  key={page.name}
                  href={page.href}
                  className="
                    group
                    relative
                    py-2
                    text-sm
                    text-white/65
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  {page.name}

                  <span
                    className="
                    absolute
                    bottom-1
                    left-0
                    h-px
                    w-0
                    bg-white
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                  />
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* ================= SOCIAL ================= */}

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
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="lg:col-span-4"
          >
            <p
              className="
              mb-7
              text-[9px]
              uppercase
              tracking-[0.22em]
              text-white/30
            "
            >
              Follow Us
            </p>

            <div className="flex flex-col items-start">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    py-2
                    text-sm
                    text-white/65
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  <span>{social.name}</span>

                  <span
                    className="
                    text-white/30
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:text-white
                  "
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>

            {/* Email */}

            <div className="mt-10">
              <p
                className="
                mb-3
                text-[9px]
                uppercase
                tracking-[0.22em]
                text-white/30
              "
              >
                Get in touch
              </p>

              <a
                href="mailto:info@company.com"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  text-sm
                  text-white/65
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                info@company.com
                <span
                  className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
                >
                  ↗
                </span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* ================= DIVIDER ================= */}

        <div
          className="
          mt-16
          border-t
          border-white/10
          pt-6
          sm:mt-20
        "
        >
          <div
            className="
            flex
            flex-col
            gap-4
            text-[9px]
            uppercase
            tracking-[0.15em]
            text-white/30

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
          >
            <p>© {new Date().getFullYear()} Super Nexus</p>

            <p>Construction · Real Estate · Development</p>

            <Link
              href="/privacy"
              className="transition-colors hover:text-white/60"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      {/* ================= LARGE BRAND TEXT ================= */}

      {/* <div
        className="
        overflow-hidden
        border-t
        border-white/5
        px-5
        sm:px-8
        lg:px-10
      "
      >
        <div
          className="
          mx-auto
          max-w-7xl
          overflow-hidden
        "
        >
          <motion.p
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
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              whitespace-nowrap
              pb-[-10px]
              text-[18vw]
              font-light
              leading-[1.5]
              tracking-[-0.05em]
              text-white/[0.035]
            "
          >
            Super Nexus
          </motion.p>
        </div>
      </div> */}
    </footer>
  );
}
