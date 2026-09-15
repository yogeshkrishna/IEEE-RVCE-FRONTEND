"use client";
import { useSearchParams } from "next/navigation";
import { events } from "@/lib/events";
import EventCard from "./event-card";
export default function EventDirectory() {
  const params = useSearchParams();
  const query = params.get("q") ?? "";
  const requestedYear = params.get("year") ?? "all";
  const year = events.some((event) => event.start.slice(0, 4) === requestedYear)
    ? requestedYear
    : "all";
  const requestedType = params.get("type") ?? "all";
  const type = events.some((event) => event.type === requestedType)
    ? requestedType
    : "all";
  const sort = params.get("sort") === "oldest" ? "oldest" : "newest";
  const update = (key: string, value: string) => {
    const next = new URLSearchParams(params.toString());
    if (!value || value === "all" || (key === "sort" && value === "newest"))
      next.delete(key);
    else next.set(key, value);
    const search = next.toString();
    window.history.replaceState(
      null,
      "",
      search ? `?${search}` : window.location.pathname,
    );
  };
  const filtered = events
    .filter(
      (event) =>
        (year === "all" || event.start.startsWith(year)) &&
        (type === "all" || event.type === type) &&
        `${event.title} ${event.description} ${event.topics.join(" ")}`
          .toLowerCase()
          .includes(query.trim().toLowerCase()),
    )
    .sort((a, b) =>
      sort === "oldest"
        ? a.start.localeCompare(b.start)
        : b.start.localeCompare(a.start),
    );
  return (
    <section aria-label="Browse events">
      <div className="filter-bar">
        <label className="search-field">
          Search the archive
          <input
            type="search"
            placeholder="Try robotics, Git or a workshop…"
            value={query}
            onChange={(event) => update("q", event.target.value)}
          />
        </label>
        <label>
          Year
          <select
            value={year}
            onChange={(event) => update("year", event.target.value)}
          >
            <option value="all">All years</option>
            {[...new Set(events.map((event) => event.start.slice(0, 4)))].map(
              (year) => (
                <option key={year}>{year}</option>
              ),
            )}
          </select>
        </label>
        <label>
          Format
          <select
            value={type}
            onChange={(event) => update("type", event.target.value)}
          >
            <option value="all">All formats</option>
            {[...new Set(events.map((event) => event.type))]
              .sort()
              .map((type) => (
                <option key={type}>{type}</option>
              ))}
          </select>
        </label>
        <label>
          Sort
          <select
            value={sort}
            onChange={(event) => update("sort", event.target.value)}
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        </label>
      </div>
      <div className="results-line">
        <p role="status">
          {filtered.length} {filtered.length === 1 ? "event" : "events"} in this
          selection
        </p>
        <button
          className="quiet-button"
          onClick={() =>
            window.history.replaceState(null, "", window.location.pathname)
          }
        >
          Clear filters
        </button>
      </div>
      {filtered.length ? (
        <div className="archive-grid">
          {filtered.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <span aria-hidden="true">↗</span>
          <h2>A different search might help.</h2>
          <p>
            Try a broader keyword, another year, or clear your filters to see
            the archive.
          </p>
        </div>
      )}
    </section>
  );
}
