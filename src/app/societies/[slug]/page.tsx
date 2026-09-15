import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { societies } from "@/lib/content";
import { events } from "@/lib/events";
import { themeColor } from "@/lib/theme-color";
import PageHeading from "@/components/page-heading";
import EventCard from "@/components/event-card";
import { Arrow, DisciplineGraphic } from "@/components/icons";
export function generateStaticParams() {
  return societies.map((s) => ({ slug: s.id }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = societies.find((s) => s.id === slug);
  return {
    title: s?.name ?? "Community not found",
    description: s?.description,
  };
}
export default async function SocietyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const society = societies.find((s) => s.id === slug);
  if (!society) notFound();
  const related = events
    .filter((e) => e.topics.some((t) => society.topics.includes(t)))
    .slice(0, 3);
  return (
    <main id="main" className="inner-page shell">
      <PageHeading
        eyebrow={society.short}
        parent={{ href: "/societies", label: "Communities" }}
        title={society.name}
        description={society.headline.replace("\n", " ")}
      />
      <div
        className="society-detail"
        style={{ "--card-color": themeColor(society.color) } as CSSProperties}
      >
        <div className="society-detail-art">
          <DisciplineGraphic variant={societies.indexOf(society)} />
          <strong>{society.short}</strong>
          <span>RV College of Engineering</span>
        </div>
        <div className="prose">
          <p className="eyebrow">{society.category}</p>
          <h2>A shared curiosity.</h2>
          <p>{society.description}</p>
          <ul className="topic-list">
            {society.topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
          <div className="action-row">
            <Link className="pill-button" href="/membership">
              Find your way in <Arrow />
            </Link>
            <a
              className="text-link"
              href={society.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Original chapter page <Arrow diagonal />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
      <section className="page-section">
        <p className="eyebrow">Follow the interest</p>
        <h2 className="editorial-title">
          A little further into {society.short}.
        </h2>
        <p className="archive-note">
          {related.length
            ? "Related topics from the branch archive. These are recommendations by subject, not a list of this chapter’s hosted events."
            : "Explore the branch archive for more technical talks, workshops and community activities."}
        </p>
        {related.length > 0 ? (
          <div className="archive-grid">
            {related.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <Link className="pill-button" href="/events">
            Explore events <Arrow />
          </Link>
        )}
      </section>
      <Link className="text-link" href="/societies">
        ← All communities
      </Link>
    </main>
  );
}
