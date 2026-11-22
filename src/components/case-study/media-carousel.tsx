"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import type { MediaItem } from "@/types";

export function MediaCarousel({
  media,
}: {
  media: readonly MediaItem[];
}): React.ReactElement {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollTo = (i: number): void => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(i, media.length - 1));
    const child = track.children[clamped] as HTMLElement | undefined;
    if (child) {
      track.scrollTo({ left: child.offsetLeft - 24, behavior: "smooth" });
    }
    setIndex(clamped);
  };

  const onScroll = (): void => {
    const track = trackRef.current;
    if (!track) return;
    let nearest = 0;
    let nearestDist = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const dist = Math.abs((child as HTMLElement).offsetLeft - 24 - track.scrollLeft);
      if (dist < nearestDist) {
        nearestDist = dist;
        nearest = i;
      }
    });
    if (nearest !== index) setIndex(nearest);
  };

  return (
    <div>
      <div className="relative">
        <div
          ref={trackRef}
          onScroll={onScroll}
          className="flex snap-x snap-mandatory items-start gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {media.map((item) => (
            <figure key={item.src} className="shrink-0 snap-start">
              <div className="flex h-[320px] items-center justify-center overflow-hidden rounded-[var(--radius-media)] bg-surface sm:h-[420px] lg:h-[480px]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  sizes="(min-width: 1024px) 45vw, 85vw"
                  className="h-full w-auto max-w-[85vw] object-contain sm:max-w-[70vw]"
                />
              </div>
              <figcaption className="mono-note mt-3">{item.caption}</figcaption>
            </figure>
          ))}
        </div>
        {index > 0 ? (
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => scrollTo(index - 1)}
            className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border-default bg-surface-raised text-lg text-primary shadow-lg transition-colors hover:text-accent"
          >
            ←
          </button>
        ) : null}
        {index < media.length - 1 ? (
          <button
            type="button"
            aria-label="Next image"
            onClick={() => scrollTo(index + 1)}
            className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border-default bg-surface-raised text-lg text-primary shadow-lg transition-colors hover:text-accent"
          >
            →
          </button>
        ) : null}
      </div>
      <div className="mt-6 flex justify-center">
        <div className="flex gap-2">
          {media.map((item, i) => (
            <button
              key={item.src}
              type="button"
              aria-label={`Go to image ${i + 1}`}
              onClick={() => scrollTo(i)}
              className="h-1.5 rounded-full transition-all"
              style={{
                width: i === index ? "1.75rem" : "0.5rem",
                background: i === index ? "var(--color-accent)" : "var(--color-border-default)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
