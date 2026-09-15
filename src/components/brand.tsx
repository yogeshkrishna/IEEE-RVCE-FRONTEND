"use client";

import Image from "next/image";
import { useColorTheme } from "./theme-provider";

export default function Brand({ onNavigate }: { onNavigate?: () => void }) {
  const { blue, toggle } = useColorTheme();
  return (
    <div className="brand">
      <button
        type="button"
        className="brand-shield"
        onClick={toggle}
        aria-label={blue ? "Use green color theme" : "Use blue color theme"}
        aria-pressed={blue}
      >
        <Image
          src="/images/rvce-mark.png"
          width={43}
          height={43}
          alt="RV shield"
        />
      </button>
      <a
        href="#home"
        className="brand-type"
        aria-label="IEEE RVCE home"
        onClick={onNavigate}
      >
        IEEE <span>RVCE</span>
        <small>STUDENT BRANCH</small>
      </a>
    </div>
  );
}
