"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Marquee from "@/components/Marquee";
import Logo from "@/components/Logo";
import FloatingIcons from "@/components/FloatingIcons";
import {
  ArrowMark,
  CrossMark,
  Dots,
  RegistrationMark,
} from "@/components/Decorations";
import { WHATSAPP_GROUP_URL, INSTAGRAM_URL } from "@/lib/config";

function fadeUp(delay = 0, reduceMotion = false): Variants {
  if (reduceMotion) {
    return {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { duration: 0.4, delay: delay / 3 } },
    };
  }
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
  const reduceMotion = useReducedMotion();

  return (
    <main className="relative flex flex-1 flex-col overflow-hidden">
      <Marquee durationSeconds={80} border="border-b" />

      <FloatingIcons />

      {/* decorative field */}
      <RegistrationMark className="pointer-events-none absolute left-[6%] top-[18%] h-8 w-8 text-okao-cream/40 hidden sm:block" />
      <CrossMark className="pointer-events-none absolute right-[9%] top-[12%] h-4 w-4 text-okao-cream/50 hidden sm:block" />
      <Dots className="pointer-events-none absolute left-[10%] bottom-[30%] h-3 w-14 text-okao-cream/40 hidden sm:block" />
      <ArrowMark className="pointer-events-none absolute right-[7%] bottom-[40%] h-6 w-6 text-okao-cream/40 hidden sm:block" />
      <span className="pointer-events-none absolute right-[5%] top-[6%] text-xs tracking-[0.3em] text-okao-cream/40 hidden sm:block">
        01
      </span>

      {/* hero */}
      <section className="flex flex-col items-center px-6 pt-10 pb-8 text-center sm:pt-14">
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
          transition={{ duration: reduceMotion ? 0.4 : 0.8, ease: "easeOut" }}
        >
          <Logo className="text-[22vw] leading-[0.85] sm:text-[15vw] md:text-[13rem]" />
        </motion.div>

        <motion.p
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: reduceMotion ? 0.1 : 0.25 }}
          className="mt-4 max-w-xs sm:max-w-none text-base sm:text-xl font-medium tracking-wide text-okao-cream/90"
        >
          Bringing street culture home.
        </motion.p>

        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: reduceMotion ? 0.15 : 0.35 }}
          className="mt-4 flex items-center gap-1.5 text-[0.65rem] font-semibold tracking-[0.35em] text-okao-cream/70 sm:text-xs"
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0" fill="currentColor" aria-hidden="true">
            <path d="M12 2c-4.42 0-8 3.58-8 8 0 5.25 6.5 11.19 7.06 11.7a1.5 1.5 0 0 0 1.88 0C13.5 21.19 20 15.25 20 10c0-4.42-3.58-8-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
          </svg>
          BHADRAK, ODISHA
        </motion.div>
      </section>

      {/* launch announcement */}
      <motion.section
        variants={fadeUp(0.45, !!reduceMotion)}
        initial="hidden"
        animate="show"
        className="relative overflow-hidden px-6 pb-4 pt-20 text-center sm:pb-8 sm:pt-16"
      >
        {/* arc sweep with pin markers, echoing a dial/compass */}
        <svg
          aria-hidden="true"
          viewBox="0 0 800 200"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-x-0 top-0 block h-[110px] w-full text-okao-cream/35 sm:h-[140px]"
          fill="none"
        >
          <path d="M20 170 Q400 -30 780 120" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="120" cy="140" r="5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="400" cy="52" r="5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="660" cy="108" r="5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-[13%] top-[46px] block -rotate-6 whitespace-nowrap text-[0.55rem] font-medium uppercase tracking-[0.15em] text-okao-cream/45 sm:left-[15%] sm:top-[62px] sm:text-[0.6rem] sm:tracking-[0.2em]"
        >
          Mark the date
        </span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[2px] block -translate-x-1/2 rotate-1 whitespace-nowrap text-[0.55rem] font-medium uppercase tracking-[0.15em] text-okao-cream/45 sm:top-[6px] sm:text-[0.6rem] sm:tracking-[0.2em]"
        >
          Set your clock
        </span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-[82%] top-[32px] block -translate-x-1/2 rotate-6 whitespace-nowrap text-[0.55rem] font-medium uppercase tracking-[0.15em] text-okao-cream/45 sm:left-[82.5%] sm:top-[42px] sm:text-[0.6rem] sm:tracking-[0.2em]"
        >
          Don&rsquo;t be late
        </span>

        <div className="relative z-10">
          <span className="text-xs font-semibold tracking-[0.5em] text-okao-cream/70 sm:text-sm">
            WE&rsquo;RE OPENING
          </span>

          <h1 className="mt-4 text-[clamp(2.4rem,10vw,6.5rem)] font-extrabold leading-[0.95] tracking-tight">
            <span className="block sm:inline">SOON</span>{" "}
            <span className="block text-okao-cream/40 sm:inline">THIS MONTH</span>
          </h1>
        </div>
      </motion.section>

      {/* CTAs */}
      <motion.section
        variants={fadeUp(0.85, !!reduceMotion)}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center gap-4 px-6 pb-16 pt-6"
      >
        <a
          href={WHATSAPP_GROUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex w-full max-w-xs items-center justify-center gap-2 whitespace-nowrap rounded-full border border-okao-cream bg-okao-cream px-6 sm:px-8 py-4 text-sm sm:text-base font-bold tracking-wide text-okao-orange transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_0_0_rgba(249,237,220,0.25)] active:translate-y-0 sm:w-auto sm:max-w-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-okao-cream focus-visible:ring-offset-2 focus-visible:ring-offset-okao-orange"
        >
          <WhatsAppIcon />
          JOIN THE WHATSAPP GROUP
        </a>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex w-full max-w-xs items-center justify-center gap-2 whitespace-nowrap rounded-full border border-okao-cream/70 bg-okao-cream/90 px-6 sm:px-8 py-3.5 text-sm font-semibold tracking-wide text-okao-orange transition-transform duration-200 hover:-translate-y-0.5 hover:bg-okao-cream active:translate-y-0 sm:w-auto sm:max-w-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-okao-cream focus-visible:ring-offset-2 focus-visible:ring-offset-okao-orange"
        >
          <InstagramIcon />
          FOLLOW INSTAGRAM
        </a>
      </motion.section>
    </main>
  );
}
