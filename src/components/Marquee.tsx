const ITEM = "OKAO • ଓକାଓ • ";

// Repeated enough times that a single copy is always wider than the
// viewport (including ultra-wide monitors) — the 50% translateX loop
// only reads as seamless when both halves overflow the visible area.
const repeated = ITEM.repeat(40);

export default function Marquee({
  invert = false,
  durationSeconds = 22,
  border = "border-t",
}: {
  invert?: boolean;
  durationSeconds?: number;
  border?: "border-t" | "border-b";
}) {
  return (
    <div
      className={`w-full overflow-hidden py-4 sm:py-5 ${border} ${
        invert
          ? "border-okao-orange/20 bg-okao-cream"
          : "border-okao-cream/30"
      }`}
      aria-hidden="true"
    >
      <div
        className="marquee-track flex w-max whitespace-nowrap"
        style={{ animationDuration: `${durationSeconds}s` }}
      >
        <span
          className={`shrink-0 pr-4 text-sm sm:text-base font-semibold tracking-[0.15em] ${
            invert ? "text-okao-orange/90" : "text-okao-cream/80"
          }`}
        >
          {repeated}
        </span>
        <span
          className={`shrink-0 pr-4 text-sm sm:text-base font-semibold tracking-[0.15em] ${
            invert ? "text-okao-orange/90" : "text-okao-cream/80"
          }`}
        >
          {repeated}
        </span>
      </div>
    </div>
  );
}
