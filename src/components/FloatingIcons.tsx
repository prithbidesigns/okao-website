"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

function TeeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
      <path d="M8.5 3 4 6.2l2 3.4 2.2-1.3V21h7.6V8.3L18 9.6l2-3.4L15.5 3l-2 1.8h-3L8.5 3Z" />
    </svg>
  );
}

function HoodieIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
      <path d="M12 2.2a3.8 3.8 0 0 0-3.8 3.8v1L4.3 9l1 3 2.9-1V21h7.6V11l2.9 1 1-3L15.8 7v-1A3.8 3.8 0 0 0 12 2.2Z" />
      <path d="M9.2 13.8h5.6" />
    </svg>
  );
}

function CapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
      <path d="M4 14.2a8 8 0 0 1 16 0Z" />
      <path d="M14.4 14.2h7l-2.2 2.4H14" />
      <path d="M12 8.5v1.4" />
    </svg>
  );
}

function SneakerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
      <path d="M2.5 17.8h19v-1.6l-3.8-1-2.7 1.6-3.6-1.8-2.6 1-1.7-2.6-1.9.9 1.3 3.5H2.5Z" />
    </svg>
  );
}

function JeansIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
      <path d="M7.2 2.8h9.6l.9 18.4h-3.8l-1-10-1 10H8.1l.9-18.4Z" />
      <path d="M7.4 6.6h9.2" />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
      <path d="M12.3 3H19v6.7L9.7 19 3 12.3 12.3 3Z" />
      <circle cx="15.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function HangerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4.5a1.6 1.6 0 1 1 1.6 1.6" />
      <path d="M12 6.1v2" />
      <path d="M12 8.1 3 15.4a1.6 1.6 0 0 0 1 2.9h16a1.6 1.6 0 0 0 1-2.9L12 8.1Z" />
      <path d="M6 14.6h12" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
      <path d="M5.5 8h13l1 12.5h-15L5.5 8Z" />
      <path d="M8.5 8V6a3.5 3.5 0 0 1 7 0v2" />
    </svg>
  );
}

function SunglassesIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
      <circle cx="6" cy="13" r="3.2" />
      <circle cx="18" cy="13" r="3.2" />
      <path d="M9.2 12.2h5.6" />
      <path d="M2.5 11 4.2 8.5" />
      <path d="M21.5 11 19.8 8.5" />
    </svg>
  );
}

type Depth = "near" | "mid" | "far";

type FloatingSpec = {
  icon: () => ReactNode;
  top: string;
  left: string;
  drift: "left" | "right";
  depth: Depth;
};

const DEPTH_STYLE: Record<
  Depth,
  { size: string; opacity: string; blur: string; amplitude: number; duration: number; shadow: string }
> = {
  near: {
    size: "h-11 w-11 sm:h-16 sm:w-16",
    opacity: "text-okao-cream/[0.22]",
    blur: "",
    amplitude: 20,
    duration: 5.5,
    shadow: "drop-shadow-[0_10px_14px_rgba(0,0,0,0.28)]",
  },
  mid: {
    size: "h-9 w-9 sm:h-12 sm:w-12",
    opacity: "text-okao-cream/[0.15]",
    blur: "",
    amplitude: 14,
    duration: 7.5,
    shadow: "drop-shadow-[0_6px_10px_rgba(0,0,0,0.2)]",
  },
  far: {
    size: "h-7 w-7 sm:h-9 sm:w-9",
    opacity: "text-okao-cream/[0.09]",
    blur: "blur-[0.5px]",
    amplitude: 9,
    duration: 10,
    shadow: "drop-shadow-[0_3px_6px_rgba(0,0,0,0.15)]",
  },
};

const ICONS: FloatingSpec[] = [
  // top strip, before the logo
  { icon: TeeIcon, top: "6%", left: "10%", drift: "left", depth: "near" },
  { icon: HangerIcon, top: "8%", left: "50%", drift: "right", depth: "far" },
  { icon: CapIcon, top: "5%", left: "87%", drift: "right", depth: "mid" },

  // either side of the big wordmark
  { icon: SneakerIcon, top: "27%", left: "4%", drift: "left", depth: "mid" },
  { icon: BagIcon, top: "30%", left: "91%", drift: "right", depth: "near" },

  // gap between the location line and "WE'RE OPENING"
  { icon: HoodieIcon, top: "49%", left: "48%", drift: "left", depth: "far" },
  { icon: TagIcon, top: "45%", left: "22%", drift: "right", depth: "far" },

  // either side of the date
  { icon: JeansIcon, top: "60%", left: "8%", drift: "left", depth: "mid" },
  { icon: SneakerIcon, top: "58%", left: "88%", drift: "right", depth: "mid" },
  { icon: SunglassesIcon, top: "52%", left: "72%", drift: "left", depth: "far" },
  { icon: CapIcon, top: "66%", left: "30%", drift: "right", depth: "far" },

  // beside the countdown, and in the gap before the CTAs
  { icon: TagIcon, top: "78%", left: "6%", drift: "left", depth: "near" },
  { icon: HangerIcon, top: "86%", left: "62%", drift: "right", depth: "far" },

  // open space below the CTAs
  { icon: BagIcon, top: "97%", left: "38%", drift: "left", depth: "far" },
];

export default function FloatingIcons() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
      {ICONS.map((spec, i) => {
        const Icon = spec.icon;
        const d = DEPTH_STYLE[spec.depth];
        return (
          <motion.div
            key={i}
            className={`absolute ${d.size} ${d.opacity} ${d.blur} ${d.shadow}`}
            style={{
              top: spec.top,
              left: spec.left,
            }}
            initial={{ x: "-50%" }}
            animate={
              reduceMotion
                ? { x: "-50%" }
                : {
                    x: "-50%",
                    y: [0, -d.amplitude, 0],
                    rotate: [0, spec.drift === "left" ? 9 : -9, 0],
                  }
            }
            transition={{
              duration: d.duration,
              delay: i * 0.35,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon />
          </motion.div>
        );
      })}
    </div>
  );
}
