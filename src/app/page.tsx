import Link from "next/link";
import hero from "../assets/hero.jpg";
import Intro from "@/components/home/Intro";
import Services from "@/components/home/Services";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Stats from "@/components/home/Stats";
import Vision from "@/components/home/ Vision";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <main>
      {/* HERO */}

      <section className="relative min-h-[100svh] overflow-hidden">
        {/* ================= BACKGROUND IMAGE ================= */}

        <div className="absolute inset-0">
          <img
            src={hero.src}
            alt="Architecture"
            className="
        h-full
        w-full
        object-cover
        object-center
      "
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Extra bottom gradient for text readability */}
          <div
            className="
        absolute
        inset-x-0
        bottom-0
        h-1/2
        bg-gradient-to-t
        from-black/50
        to-transparent
      "
          />
        </div>

        {/* ================= CONTENT ================= */}

        <div
          className="
      relative
      z-10
      flex
      min-h-[100svh]
      flex-col
      justify-end

      px-5
      pb-8
      pt-28

      sm:px-8
      sm:pb-10
      sm:pt-32

      md:pb-12

      lg:px-10
      lg:pb-14
    "
        >
          <div className="w-full max-w-7xl mx-auto">
            {/* Small Label */}

            <p
              className="
          mb-5

          text-[9px]
          uppercase
          tracking-[0.22em]

          text-white/70
font-bold
          sm:mb-6
          sm:text-[10px]
          sm:tracking-[0.25em]
        "
            >
              Construction · Real Estate · Development
            </p>

            {/* ================= HEADING ================= */}

            <h1
              className="
          max-w-[900px]

          text-[3.5rem]
          font-light
          leading-[0.9]
          tracking-[-0.055em]

          sm:text-[5rem]

          md:text-[6.5rem]

          lg:text-[8rem]

          xl:text-[9rem]
          text-white
        "
            >
              Building
              <br />
              tomorrow.
            </h1>

            {/* ================= BOTTOM CONTENT ================= */}

            <div
              className="
          mt-8

          flex
          flex-col
          gap-8

          sm:mt-10
          sm:gap-7

          md:flex-row
          md:items-end
          md:justify-between

          lg:mt-12
        "
            >
              {/* Description */}

              <p
                className="
            max-w-[330px]

            text-xs
            leading-[1.7]

            text-white/70

            sm:max-w-md
            sm:text-sm
            sm:leading-relaxed
          "
              >
                Creating enduring spaces through thoughtful construction,
                development and design.
              </p>

              {/* Projects Button */}

              {/* <Link
                href="/projects"
                className="
            group

            inline-flex
            w-fit
            items-center
            gap-3

            text-[10px]
            uppercase
            tracking-[0.16em]

            sm:gap-4
            sm:text-xs
            text-white
          "
              >
                <span>View Projects</span>

                <span
                  className="
              flex
              h-9
              w-9
              items-center
              justify-center

              rounded-full

              border
              border-white/40

              transition-all
              duration-500

              group-hover:bg-white
              group-hover:text-black

              sm:h-10
              sm:w-10
            "
                >
                  ↗
                </span>
              </Link> */}
            </div>
          </div>
        </div>

        {/* ================= SCROLL INDICATOR ================= */}

        {/* <div
          className="
      absolute
      bottom-7
      right-5

      hidden
      items-center
      gap-3

      text-[9px]
      uppercase
      tracking-[0.2em]

      text-white/50

      sm:flex
      sm:right-8

      lg:right-10
    "
        >
          <span>Scroll</span>

          <span className="h-px w-8 bg-white/30 lg:w-10" />
        </div> */}
      </section>
      <Intro />
      <Services />
      <FeaturedProjects />
      <Stats />
      <Vision />
      <CTA />
    </main>
  );
}
