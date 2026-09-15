import Link from "next/link";
import type { CSSProperties } from "react";
import { Arrow, DisciplineGraphic } from "./icons";
import { themeColor } from "@/lib/theme-color";
import { eventDate, type BranchEvent } from "@/lib/events";
export default function EventCard({ event }: { event: BranchEvent }) {
  return (
    <article
      className="archive-card"
      style={{ "--card-color": themeColor(event.color) } as CSSProperties}
    >
      <Link
        href={`/events/${event.id}`}
        className="archive-art"
        aria-label={`Read about ${event.title}`}
      >
        <span>{event.type}</span>
        <DisciplineGraphic variant={Number(event.id) % 12} />
        <strong>
          {event.title === "Hack4Soc 2.0" ? "hack4soc." : event.topics[0]}
        </strong>
        <span>
          {event.start.slice(0, 4)}
          <Arrow />
        </span>
      </Link>
      <div className="archive-card-copy">
        <time dateTime={event.start}>{eventDate(event)}</time>
        <h2>
          <Link href={`/events/${event.id}`}>{event.title}</Link>
        </h2>
        <p>{event.description}</p>
        <Link className="text-link" href={`/events/${event.id}`}>
          Read the overview <Arrow />
        </Link>
      </div>
    </article>
  );
}
