"use client";
import { useState, type CSSProperties } from "react";
import Link from "next/link";
import { societies } from "@/lib/content";
import { themeColor } from "@/lib/theme-color";
import { Arrow, DisciplineGraphic } from "./icons";
export default function CommunityDirectory({
  affinitiesOnly = false,
}: {
  affinitiesOnly?: boolean;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const source = societies.filter(
    (s) => !affinitiesOnly || s.id === "wie" || s.id === "sight",
  );
  const filtered = source.filter(
    (s) =>
      (category === "all" || s.category === category) &&
      `${s.short} ${s.name} ${s.topics.join(" ")}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  return (
    <section aria-label="Community directory">
      {!affinitiesOnly && (
        <>
          <div className="filter-bar community-filters">
            <label className="search-field">
              Find your interests
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Try computing, energy or robotics…"
              />
            </label>
            <label>
              Community type
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="all">All communities</option>
                {[...new Set(societies.map((s) => s.category))].map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="results-line">
            <p role="status">
              {filtered.length}{" "}
              {filtered.length === 1 ? "community" : "communities"} to explore
            </p>
            <button
              className="quiet-button"
              onClick={() => {
                setQuery("");
                setCategory("all");
              }}
            >
              Clear filters
            </button>
          </div>
        </>
      )}
      <div className="community-grid">
        {filtered.map((s) => (
          <Link
            className="community-card"
            href={`/societies/${s.id}`}
            key={s.id}
            style={{ "--card-color": themeColor(s.color) } as CSSProperties}
          >
            <div className="community-art">
              <span>{s.short}</span>
              <DisciplineGraphic variant={societies.indexOf(s)} />
            </div>
            <div className="community-card-copy">
              <small>{s.category}</small>
              <h2>{s.name}</h2>
              <p>{s.topics.join(" · ")}</p>
              <span className="text-link">
                Meet {s.short} <Arrow />
              </span>
            </div>
          </Link>
        ))}
      </div>
      {!filtered.length && (
        <div className="empty-state">
          <h2>There’s room for your curiosity.</h2>
          <p>
            Try another keyword or clear the filters to meet all twelve
            communities.
          </p>
        </div>
      )}
    </section>
  );
}
