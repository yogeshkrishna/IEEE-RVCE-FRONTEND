"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { events, eventDate } from "@/lib/events";
const latestMonth = events
  .reduce((latest, event) => (event.start > latest ? event.start : latest), "")
  .slice(0, 7);
export default function EventCalendar() {
  const params = useSearchParams();
  const raw = params.get("month") ?? latestMonth;
  const month = /^(20\d{2})-(0[1-9]|1[0-2])$/.test(raw) ? raw : latestMonth;
  const [year, number] = month.split("-").map(Number);
  const first = new Date(Date.UTC(year, number - 1, 1));
  const count = new Date(Date.UTC(year, number, 0)).getUTCDate();
  const offset = (first.getUTCDay() + 6) % 7;
  const label = new Intl.DateTimeFormat("en-IN", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(first);
  const monthEvents = events.filter(
    (e) => e.start <= `${month}-${count}` && e.end >= `${month}-01`,
  );
  const change = (value: string) => {
    const next = new URLSearchParams(params.toString());
    next.set("month", value);
    window.history.pushState(null, "", `?${next}`);
  };
  const shift = (delta: number) => {
    const date = new Date(Date.UTC(year, number - 1 + delta, 1));
    change(
      `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, "0")}`,
    );
  };
  return (
    <section aria-label="Event calendar">
      <div className="calendar-toolbar">
        <div className="action-row">
          <button
            className="circle-button"
            aria-label="Previous month"
            disabled={month === "2000-01"}
            onClick={() => shift(-1)}
          >
            ←
          </button>
          <h2 aria-live="polite">{label}</h2>
          <button
            className="circle-button"
            aria-label="Next month"
            disabled={month === "2099-12"}
            onClick={() => shift(1)}
          >
            →
          </button>
        </div>
        <label>
          Jump to month
          <input
            aria-label="Jump to month"
            type="month"
            min="2000-01"
            max="2099-12"
            value={month}
            onChange={(e) => {
              if (/^(20\d{2})-(0[1-9]|1[0-2])$/.test(e.target.value))
                change(e.target.value);
            }}
          />
        </label>
        <button className="quiet-button" onClick={() => change(latestMonth)}>
          Latest in archive
        </button>
      </div>
      <div className="calendar-grid" role="table" aria-label={label}>
        <div className="calendar-week" role="row">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <div role="columnheader" key={day}>
              {day}
            </div>
          ))}
        </div>
        {Array.from({ length: Math.ceil((count + offset) / 7) }, (_, week) => (
          <div className="calendar-week" role="row" key={week}>
            {Array.from({ length: 7 }, (_, index) => {
              const day = week * 7 + index - offset + 1;
              const valid = day > 0 && day <= count;
              const date = `${month}-${String(day).padStart(2, "0")}`;
              const items = valid
                ? monthEvents.filter((e) => e.start <= date && e.end >= date)
                : [];
              return (
                <div
                  role="cell"
                  className={`calendar-day ${valid ? "" : "outside"} ${items.length ? "has-event" : ""}`}
                  key={index}
                >
                  {valid && (
                    <>
                      <time dateTime={date}>{day}</time>
                      {items.map((e) => (
                        <Link
                          href={`/events/${e.id}`}
                          key={e.id}
                          aria-label={`${e.title}, ${day} ${label}`}
                        >
                          <span className="calendar-event-title">
                            {e.title}
                          </span>
                          <span className="calendar-dot" aria-hidden="true">
                            •
                          </span>
                        </Link>
                      ))}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="calendar-agenda">
        <h3>In {label}</h3>
        {monthEvents.length ? (
          monthEvents.map((event) => (
            <Link
              className="agenda-item"
              key={event.id}
              href={`/events/${event.id}`}
            >
              <time dateTime={event.start}>{eventDate(event)}</time>
              <strong>{event.title}</strong>
              <span aria-hidden="true">↗</span>
            </Link>
          ))
        ) : (
          <p role="status">
            No events from the selected archive fall in this month. Try March
            2024 or return to the latest archived month.
          </p>
        )}
      </div>
    </section>
  );
}
