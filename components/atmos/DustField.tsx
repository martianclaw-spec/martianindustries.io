"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  r: number;
  /** Horizontal drift in px per second. Wind runs left to right. */
  vx: number;
  /** Vertical drift in px per second. Slightly upward, like suspended dust. */
  vy: number;
  alpha: number;
};

/**
 * Suspended regolith drifting on a thin atmosphere.
 *
 * Deliberately restrained: a low particle count, sub-pixel sizes, and alpha
 * under 0.5 so it reads as texture rather than snow. The canvas is purely
 * decorative, sits behind content in a pointer-events-none layer, and never
 * affects layout.
 *
 * Three things keep it cheap. Particle count scales with area but is hard
 * capped, the loop stops entirely while the tab is hidden, and users who ask
 * for reduced motion get a single static frame instead of an animation.
 */
export function DustField({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let last = 0;

    const seed = () => {
      // One particle per ~14000 device-independent pixels, capped so a large
      // desktop viewport never pays more than a small mobile one plus change.
      const target = Math.min(90, Math.round((width * height) / 14000));
      particles = Array.from({ length: target }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 0.4 + Math.random() * 1.1,
        vx: 4 + Math.random() * 10,
        vy: -(1 + Math.random() * 4),
        alpha: 0.06 + Math.random() * 0.3,
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      if (width === 0 || height === 0) return;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        // Warm regolith, not white. Larger motes skew slightly toward rust.
        ctx.fillStyle =
          p.r > 1.1
            ? `rgba(201, 168, 136, ${p.alpha})`
            : `rgba(217, 122, 82, ${p.alpha * 0.8})`;
        ctx.fill();
      }
    };

    const step = (now: number) => {
      const dt = last ? Math.min((now - last) / 1000, 0.05) : 0;
      last = now;

      for (const p of particles) {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        // Wrap rather than respawn, so density stays perfectly constant.
        if (p.x - p.r > width) {
          p.x = -p.r;
          p.y = Math.random() * height;
        }
        if (p.y + p.r < 0) {
          p.y = height + p.r;
          p.x = Math.random() * width;
        }
      }

      draw();
      frame = requestAnimationFrame(step);
    };

    const start = () => {
      if (frame || reduceMotion) return;
      last = 0;
      frame = requestAnimationFrame(step);
    };

    const stop = () => {
      if (!frame) return;
      cancelAnimationFrame(frame);
      frame = 0;
    };

    const onVisibility = () => (document.hidden ? stop() : start());

    resize();
    draw();
    if (!reduceMotion) start();

    const observer = new ResizeObserver(() => {
      resize();
      draw();
    });
    observer.observe(canvas);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className={className} />;
}
