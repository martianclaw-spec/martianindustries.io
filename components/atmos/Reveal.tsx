"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/**
 * Settles its children into place as they enter the viewport.
 *
 * Reveals once and then disconnects, so scrolling back up does not replay the
 * animation and the observer does not linger. The transition itself lives in
 * globals.css under .reveal, which is also where reduced-motion neutralises it,
 * so there is a single place that governs whether the site animates.
 */
export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  /** Stagger in milliseconds, for revealing a row of cards in sequence. */
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Anything already on screen at load should not wait for a scroll event.
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    // A page that loads in a hidden or zero-size window (a background tab, a
    // minimised window, a screenshotter) has nothing for the observer to
    // intersect, so it would never fire and the content would stay invisible.
    // Skip the animation in that case and just show it.
    if (document.visibilityState === "hidden" || window.innerHeight === 0) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? "is-in" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
