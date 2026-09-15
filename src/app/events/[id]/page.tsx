import Link from "next/link";
import { notFound } from "next/navigation";
import { events, eventDate } from "@/lib/events";
import { originalSite } from "@/lib/content";
import PageHeading from "@/components/page-heading";
import EventCard from "@/components/event-card";
import { Arrow } from "@/components/icons";
export function generateStaticParams() {
  return events.map((event) => ({ id: event.id }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = events.find((event) => event.id === id);
  return {
    title: event?.title ?? "Event not found",
    description: event?.description,
  };
}
export default async function EventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = events.find((event) => event.id === id);
  if (!event) notFound();
  const related = events
    .filter(
      (item) =>
        item.id !== id &&
        item.topics.some((topic) => event.topics.includes(topic)),
    )
    .slice(0, 3);
  return (
    <main id="main" className="inner-page shell">
      <PageHeading
        eyebrow={event.type}
        parent={{ href: "/events", label: "Events" }}
        title={event.title}
        description={event.description}
      />
      <div className="detail-layout">
        <article className="prose">
          <span className="status-pill">
            From the archive · Registration closed
          </span>
          <h2>About this event</h2>
          <p>{event.description}</p>
          <p>
            This overview preserves the event’s name and dates from the IEEE
            RVCE archive. The original event page contains the branch’s full
            record and any accompanying resources.
          </p>
          <ul className="topic-list">
            {event.topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
          <a
            className="pill-button"
            href={`${originalSite}/events/${event.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Original event record <Arrow diagonal />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </article>
        <aside className="paper-panel">
          <p className="eyebrow">The details</p>
          <dl className="detail-facts">
            <div>
              <dt>When</dt>
              <dd>
                <time dateTime={event.start}>{eventDate(event)}</time>
              </dd>
            </div>
            <div>
              <dt>Format</dt>
              <dd>{event.type}</dd>
            </div>
            <div>
              <dt>Branch</dt>
              <dd>IEEE RVCE, Bengaluru</dd>
            </div>
          </dl>
          <Link
            className="text-link"
            href={`/calendar?month=${event.start.slice(0, 7)}`}
          >
            See it on the calendar <Arrow />
          </Link>
          <Link className="text-link" href="/contact">
            Ask the branch about this event <Arrow />
          </Link>
        </aside>
      </div>
      {related.length > 0 && (
        <section className="page-section">
          <h2 className="editorial-title">Keep exploring.</h2>
          <div className="archive-grid">
            {related.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>
      )}
      <Link className="text-link" href="/events">
        ← Back to all events
      </Link>
    </main>
  );
}
