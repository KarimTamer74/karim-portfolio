import { cn } from "@/lib/utils";
import type { SystemStatus } from "@/types";

/* Marks are picked from the self-hosted JetBrains Mono glyph set (● ◔ ✓ ◆)
   so every status glyph renders in the mono face with identical metrics.
   The old ◐ / ✔ fell back to a system face — the "broken letter" bug. */
const STATUS_META: Partial<
  Record<SystemStatus, { word: string; mark: string; className: string }>
> = {
  LIVE: { word: "LIVE", mark: "●", className: "text-live" },
  BUILDING: { word: "IN Development", mark: "◔", className: "text-building" },
  DELIVERED: { word: "DONE", mark: "✓", className: "text-delivered" },
  CURRICULUM: { word: "NTI TRAINING", mark: "◆", className: "text-accent" },
};

export interface StatusStampProps {
  status?: SystemStatus;
  className?: string;
}


export function StatusStamp({
  status,
  className,
}: StatusStampProps): React.ReactElement | null {
  if (!status) return null;
  const meta = STATUS_META[status];
  if (!meta) return null;
  return (
    <span
      className={cn(
        "status inline-flex items-center gap-2 transition-colors duration-150",
        meta.className,
        className,
      )}
    >
      <span aria-hidden>{meta.mark}</span>
      {meta.word}
    </span>
  );
}
