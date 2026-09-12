const ITEM = "OKAO • ଓକାଓ • ";

export default function Marquee() {
  const repeated = ITEM.repeat(8);

  return (
    <div
      className="w-full overflow-hidden border-t border-okao-cream/30 py-4 sm:py-5"
      aria-hidden="true"
    >
      <div className="marquee-track flex w-max whitespace-nowrap">
        <span className="pr-4 text-sm sm:text-base font-semibold tracking-[0.15em] text-okao-cream/80">
          {repeated}
        </span>
        <span className="pr-4 text-sm sm:text-base font-semibold tracking-[0.15em] text-okao-cream/80">
          {repeated}
        </span>
      </div>
    </div>
  );
}
