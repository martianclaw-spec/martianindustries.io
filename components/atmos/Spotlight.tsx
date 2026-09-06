"use client";

import { useEffect, useRef } from "react";

/**
 * A survey grid that lights up under the pointer.
 *
 * Writes the cursor position onto the element as --mx and --my, which the
 * .grid-bright mask in globals.css reads. Updates are coalesced into one
 * animation frame, so a burst of pointermove events costs a single style
 * write per frame rather than one per event.
 *
 * Skipped entirely for coarse pointers and for reduced-motion users. In both
 * cases the custom properties never resolve, the mask stays off screen, and
 * the base grid underneath is all that renders.
 */
export function Spotlight({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const host = el.parentElement ?? el;
    let frame = 0;
    let x = 0;
    let y = 0;

    const write = () => {
      frame = 0;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    };

    const onMove = (e: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
      if (!frame) frame = requestAnimationFrame(write);
    };

    const onLeave = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      el.style.removeProperty("--mx");
      el.style.removeProperty("--my");
    };

    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <div ref={ref} aria-hidden className={className} />;
}
