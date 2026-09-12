"use client";

import { motion, type Variants } from "framer-motion";
import Countdown from "@/components/Countdown";
import Marquee from "@/components/Marquee";
import Logo from "@/components/Logo";
import {
  ArrowMark,
  CrossMark,
  Dots,
  RegistrationMark,
} from "@/components/Decorations";
import { WHATSAPP_GROUP_URL, INSTAGRAM_URL } from "@/lib/config";

function fadeUp(delay = 0): Variants {
  return {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay },
    },
  };
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M12.02 2C6.5 2 2.02 6.48 2.02 12c0 1.87.5 3.63 1.4 5.14L2 22l5.01-1.4A9.9 9.9 0 0 0 12.02 22c5.52 0 10-4.48 10-10s-4.48-10-10-10Zm5.85 14.13c-.25.7-1.24 1.28-2.02 1.44-.55.11-1.26.2-3.66-.78-2.99-1.24-4.92-4.27-5.07-4.47-.15-.2-1.21-1.61-1.21-3.07s.75-2.18 1.03-2.48c.25-.27.55-.34.73-.34.18 0 .37.001.53.008.17.007.4-.065.62.48.25.6.85 2.07.92 2.22.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.18-.31.4-.45.53-.15.15-.3.31-.13.6.17.3.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.35 1.45.3.15.47.12.65-.07.18-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.28.1 1.75.83 2.05.98.3.15.5.22.57.35.08.13.08.72-.17 1.42Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="relative flex flex-1 flex-col overflow-hidden">
      {/* decorative field */}
      <RegistrationMark className="pointer-events-none absolute left-[6%] top-[18%] h-8 w-8 text-okao-cream/40 hidden sm:block" />
      <CrossMark className="pointer-events-none absolute right-[9%] top-[12%] h-4 w-4 text-okao-cream/50" />
      <Dots className="pointer-events-none absolute left-[10%] bottom-[30%] h-3 w-14 text-okao-cream/40 hidden md:block" />
      <ArrowMark className="pointer-events-none absolute right-[7%] bottom-[40%] h-6 w-6 text-okao-cream/40 hidden sm:block" />
      <span className="pointer-events-none absolute right-[5%] top-[6%] text-xs tracking-[0.3em] text-okao-cream/40 hidden sm:block">
        01
      </span>

      {/* header */}
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between px-6 py-5 sm:px-10 sm:py-7"
      >
        <span className="font-wordmark text-lg sm:text-xl font-semibold tracking-wide">
          OKAO
        </span>
        <span className="text-[0.65rem] sm:text-xs font-medium tracking-[0.35em] text-okao-cream/80">
          BHADRA, ODISHA
        </span>
      </motion.header>

      {/* hero */}
      <section className="flex flex-col items-center px-6 pt-6 pb-10 text-center sm:pt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Logo className="text-[22vw] leading-[0.85] sm:text-[15vw] md:text-[13rem]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-1 text-2xl sm:text-4xl font-medium tracking-wide"
        >
          ଓକାଓ
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 max-w-xs sm:max-w-none text-base sm:text-xl font-medium tracking-wide text-okao-cream/90"
        >
          Bringing street culture home.
        </motion.p>
      </section>

      {/* launch announcement */}
      <motion.section
        variants={fadeUp(0.55)}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center gap-3 px-6 py-12 text-center sm:py-16"
      >
        <span className="text-xs sm:text-sm font-semibold tracking-[0.4em] text-okao-cream/80">
          WE&rsquo;RE OPENING
        </span>
        <h1 className="text-[clamp(2.2rem,10vw,6rem)] font-extrabold leading-none tracking-tight">
          01 OCTOBER 2026
        </h1>
        <span className="text-sm sm:text-base tracking-[0.3em] text-okao-cream/70">
          01.10.26
        </span>
      </motion.section>

      {/* countdown */}
      <motion.section
        variants={fadeUp(0.75)}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center gap-6 px-6 py-8 text-center"
      >
        <span className="text-[0.65rem] sm:text-xs font-semibold tracking-[0.4em] text-okao-cream/60">
          THE COUNTDOWN BEGINS
        </span>
        <Countdown />
      </motion.section>

      {/* supporting copy */}
      <motion.section
        variants={fadeUp(0.95)}
        initial="hidden"
        animate="show"
        className="px-6 py-10 text-center"
      >
        <p className="mx-auto max-w-md text-lg sm:text-2xl font-semibold leading-snug tracking-tight">
          A NEW STREET CULTURE STORE
          <br />
          IS COMING HOME.
        </p>
      </motion.section>

      {/* CTAs */}
      <motion.section
        variants={fadeUp(1.1)}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center gap-4 px-6 pb-16 pt-4"
      >
        <a
          href={WHATSAPP_GROUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex w-full max-w-xs items-center justify-center gap-2 whitespace-nowrap rounded-full border border-okao-cream bg-okao-cream px-6 sm:px-8 py-4 text-sm sm:text-base font-bold tracking-wide text-okao-orange transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_0_0_rgba(249,237,220,0.25)] active:translate-y-0 sm:w-auto sm:max-w-none"
        >
          <WhatsAppIcon />
          JOIN THE WHATSAPP GROUP
        </a>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex w-full max-w-xs items-center justify-center gap-2 whitespace-nowrap rounded-full border border-okao-cream/70 bg-okao-cream/90 px-6 sm:px-8 py-3.5 text-sm font-semibold tracking-wide text-okao-orange transition-transform duration-200 hover:-translate-y-0.5 hover:bg-okao-cream active:translate-y-0 sm:w-auto sm:max-w-none"
        >
          <InstagramIcon />
          FOLLOW INSTAGRAM
        </a>
      </motion.section>

      <Marquee />
    </main>
  );
}
