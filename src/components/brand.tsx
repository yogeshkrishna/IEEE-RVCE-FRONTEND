"use client";

import Link from "next/link";
import Image from "next/image";

export default function Brand({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <Link
      className="brand"
      href="/"
      aria-label="IEEE RVCE home"
      onClick={onNavigate}
    >
      <Image
        src="/images/rvce-mark.png"
        width={43}
        height={43}
        alt="RV shield"
      />
      <span className="brand-type">
        IEEE <span>RVCE</span>
        <small>STUDENT BRANCH</small>
      </span>
    </Link>
  );
}
