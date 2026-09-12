import Image from "next/image";
import { OKAO_LOGO } from "@/lib/config";

export default function Logo({ className = "" }: { className?: string }) {
  if (OKAO_LOGO) {
    return (
      <Image
        src={OKAO_LOGO}
        alt="OKAO"
        width={772}
        height={231}
        priority
        className="h-auto w-[82vw] max-w-[420px] sm:w-[60vw] sm:max-w-[620px] md:max-w-[760px]"
      />
    );
  }

  // Placeholder wordmark until the approved OKAO logo asset is dropped in.
  // Swap OKAO_LOGO in src/lib/config.ts to replace this automatically.
  return (
    <span
      className={`font-wordmark font-semibold tracking-tight ${className}`}
    >
      OKAO
    </span>
  );
}
