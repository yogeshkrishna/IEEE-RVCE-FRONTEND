import { Suspense } from "react";
import PageHeading from "@/components/page-heading";
import SectionNav from "@/components/section-nav";
import EventDirectory from "@/components/event-directory";
import EventCard from "@/components/event-card";
import { events } from "@/lib/events";
import { originalSite } from "@/lib/content";
export const metadata = {
  title: "Events",
  description:
    "Explore workshops, hackathons and technical talks from the IEEE RVCE event archive.",
};
export default function EventsPage() {
  return (
    <main id="main" className="inner-page shell">
      <PageHeading
        eyebrow="Life beyond lectures"
        title={
          <>
            A little learning.
            <br />
            <em>A lot of doing.</em>
          </>
        }
        description="Workshops that turn into skills. Conversations that spark an idea. Explore moments from our branch’s event archive."
      />
      <SectionNav group="events" />
      <p className="archive-note">
        Selected events from 2022–2024. These are past events; registration is
        closed.
      </p>
      <Suspense
        fallback={
          <div className="archive-grid">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        }
      >
        <EventDirectory />
      </Suspense>
      <p className="archive-note">
        Looking further back?{" "}
        <a
          className="inline-link"
          href={`${originalSite}/events`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Browse the complete original archive ↗
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </p>
    </main>
  );
}
