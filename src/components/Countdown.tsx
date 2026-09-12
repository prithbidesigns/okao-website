"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LAUNCH_DATE_ISO } from "@/lib/config";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(): TimeLeft | null {
  const diff = new Date(LAUNCH_DATE_ISO).getTime() - Date.now();
  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 sm:gap-2">
      <div className="relative h-[1em] w-[2.3ch] overflow-hidden text-center tabular-nums leading-none text-[clamp(2.5rem,9vw,5.5rem)] font-extrabold">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: "60%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-60%", opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute inset-0"
          >
            {pad(value)}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-[0.65rem] sm:text-xs tracking-[0.3em] font-medium text-okao-cream/70">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null | undefined>(
    undefined
  );

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- bootstrap the first tick immediately instead of waiting 1s for the interval
    setTimeLeft(getTimeLeft());
    return () => clearInterval(id);
  }, []);

  if (timeLeft === undefined) {
    return <div className="h-[6.5rem] sm:h-[8rem]" aria-hidden />;
  }

  if (timeLeft === null) {
    return (
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[clamp(2.5rem,9vw,4.5rem)] font-extrabold tracking-tight"
      >
        WE&rsquo;RE OPEN.
      </motion.p>
    );
  }

  return (
    <div
      className="grid grid-cols-4 gap-3 sm:gap-8 md:gap-12"
      role="timer"
      aria-live="polite"
      aria-label={`${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes, ${timeLeft.seconds} seconds until launch`}
    >
      <Unit value={timeLeft.days} label="DAYS" />
      <Unit value={timeLeft.hours} label="HOURS" />
      <Unit value={timeLeft.minutes} label="MINUTES" />
      <Unit value={timeLeft.seconds} label="SECONDS" />
    </div>
  );
}
