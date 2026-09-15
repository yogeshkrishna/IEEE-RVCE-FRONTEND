import Link from "next/link";
import type { ReactNode } from "react";
export default function PageHeading({
  eyebrow,
  title,
  description,
  parent,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  parent?: { href: string; label: string };
  children?: ReactNode;
}) {
  return (
    <header className="page-heading">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        {parent && (
          <>
            <Link href={parent.href}>{parent.label}</Link>
            <span aria-hidden="true">/</span>
          </>
        )}
        <span>{eyebrow}</span>
      </nav>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-lede">{description}</p>
      {children}
    </header>
  );
}
