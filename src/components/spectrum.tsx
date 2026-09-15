"use client";

import { useEffect, useRef, useState } from "react";

// A lightweight parametric signal sculpture; no video, WebGL or third-party runtime.
export default function Spectrum() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduce = media.matches;
    setReduced(reduce);
    let frame = 0,
      visible = true,
      time = 0,
      last = 0,
      width = 0,
      height = 0;
    const cursor = { x: 0, y: 0 },
      current = { x: 0, y: 0 };
    const draw = () => {
      if (!width || !height) return;
      ctx.clearRect(0, 0, width, height);
      const scale = Math.min(width, height) / 650;
      const tilt = 0.67 + current.y * 0.13;
      const yaw = -0.38 + current.x * 0.16;
      const rotation = -0.38 + Math.sin(time * 0.16) * 0.07;
      const project = (u: number, v: number) => {
        const r = 78 + Math.sin(u * 3 + time * 0.24) * 7;
        const R = 179;
        const x = (R + r * Math.cos(v)) * Math.cos(u);
        const y = (R + r * Math.cos(v)) * Math.sin(u);
        const z = r * Math.sin(v);
        const yy = y * Math.cos(tilt) - z * Math.sin(tilt);
        const zz = y * Math.sin(tilt) + z * Math.cos(tilt);
        const xx = x * Math.cos(yaw) + zz * Math.sin(yaw);
        const depth = -x * Math.sin(yaw) + zz * Math.cos(yaw);
        const p = 830 / (830 - depth);
        return {
          x:
            width / 2 +
            (xx * Math.cos(rotation) - yy * Math.sin(rotation)) * scale * p,
          y:
            height / 2 +
            (xx * Math.sin(rotation) + yy * Math.cos(rotation)) * scale * p,
          z: depth,
        };
      };
      const lines = Array.from({ length: 100 }, (_, i) => ({
        u: (i / 100) * Math.PI * 2,
        z: project((i / 100) * Math.PI * 2, 0).z,
      })).sort((a, b) => a.z - b.z);
      for (const { u, z } of lines) {
        const hue = 168 + (Math.sin(u + time * 0.06) + 1) * 76;
        ctx.beginPath();
        for (let j = 0; j <= 100; j++) {
          const p = project(u, (j / 100) * Math.PI * 2);
          if (j === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.strokeStyle = `hsla(${hue}, 88%, ${66 + ((z + 220) / 440) * 13}%, ${0.45 + ((z + 220) / 440) * 0.5})`;
        ctx.lineWidth = scale * 1.35;
        ctx.stroke();
      }
    };
    const loop = (now: number) => {
      frame = 0;
      if (!visible || document.hidden || paused || reduce) return;
      if (now - last >= 33) {
        time += 0.025;
        current.x += (cursor.x - current.x) * 0.035;
        current.y += (cursor.y - current.y) * 0.035;
        draw();
        last = now;
      }
      frame = requestAnimationFrame(loop);
    };
    const start = () => {
      if (!frame && !paused && !reduce && visible && !document.hidden)
        frame = requestAnimationFrame(loop);
    };
    const resize = new ResizeObserver(([entry]) => {
      width = entry.contentRect.width;
      height = entry.contentRect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
      setReady(true);
      start();
    });
    resize.observe(canvas);
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
    });
    intersection.observe(canvas);
    const preference = () => {
      reduce = media.matches;
      setReduced(reduce);
      draw();
      start();
    };
    const move = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      cursor.x = (event.clientX - rect.left) / rect.width - 0.5;
      cursor.y = (event.clientY - rect.top) / rect.height - 0.5;
    };
    const leave = () => {
      cursor.x = 0;
      cursor.y = 0;
    };
    canvas.addEventListener("pointermove", move);
    canvas.addEventListener("pointerleave", leave);
    media.addEventListener("change", preference);
    document.addEventListener("visibilitychange", start);
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      intersection.disconnect();
      media.removeEventListener("change", preference);
      document.removeEventListener("visibilitychange", start);
      canvas.removeEventListener("pointermove", move);
      canvas.removeEventListener("pointerleave", leave);
    };
  }, [paused]);

  return (
    <div className="spectrum-scene">
      <div className="spectrum-halo" />
      <span className="scene-coordinate coordinate-top">
        FIG. 01 / CONNECTED POSSIBILITIES
      </span>
      <svg
        className={`spectrum-fallback ${ready ? "is-ready" : ""}`}
        viewBox="0 0 650 650"
        fill="none"
        stroke="#aa93eb"
        aria-hidden="true"
      >
        {Array.from({ length: 30 }, (_, i) => (
          <ellipse
            key={i}
            cx="325"
            cy="325"
            rx={210}
            ry={80 + i * 4}
            transform={`rotate(${i * 6} 325 325)`}
            opacity=".5"
          />
        ))}
      </svg>
      <canvas ref={canvasRef} aria-hidden="true" />
      <span className="scene-cross cross-one">+</span>
      <span className="scene-cross cross-two">+</span>
      <div className="scene-note">
        <span className="tiny-line" /> MANY DISCIPLINES.
        <br />
        <span className="note-indent">ONE SHARED PURPOSE.</span>
      </div>
      {!reduced && (
        <button
          className="motion-control"
          onClick={() => setPaused(!paused)}
          aria-label={
            paused ? "Play artwork animation" : "Pause artwork animation"
          }
          aria-pressed={paused}
        >
          {paused ? (
            <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="m5 3 8 5-8 5Z" />
            </svg>
          ) : (
            <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M4 3h3v10H4zm5 0h3v10H9z" />
            </svg>
          )}
          <span>{paused ? "Play motion" : "Pause motion"}</span>
        </button>
      )}
    </div>
  );
}
