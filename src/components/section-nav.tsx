"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function SectionNav({
  group,
}: {
  group: "branch" | "communities" | "events";
}) {
  const pathname = usePathname();
  const items =
    group === "branch"
      ? [
          ["/about", "Our story"],
          ["/team", "People"],
          ["/awards", "Recognition"],
          ["/gallery", "Photo album"],
        ]
      : group === "communities"
        ? [
            ["/societies", "All communities"],
            ["/affinities", "WIE & SIGHT"],
          ]
        : [
            ["/events", "Event archive"],
            ["/calendar", "Calendar"],
          ];
  return (
    <nav className="section-nav" aria-label={`${group} pages`}>
      {items.map(([href, label]) => (
        <Link
          key={href}
          href={href}
          aria-current={pathname === href ? "page" : undefined}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
