"use client";

import Link from "next/link";
import {
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
} from "react";
import { societies } from "@/lib/content";
import { themeColor } from "@/lib/theme-color";
import { Arrow, DisciplineGraphic } from "./icons";

export default function SocietyExplorer() {
  const [selected, setSelected] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const society = societies[selected];
  const onKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % societies.length;
    else if (event.key === "ArrowLeft")
      next = (index - 1 + societies.length) % societies.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = societies.length - 1;
    else return;
    event.preventDefault();
    setSelected(next);
    tabs.current[next]?.focus();
  };
  return (
    <section
      id="societies"
      className="societies-section shell"
      aria-labelledby="societies-title"
    >
      <div className="section-title-row">
        <div className="section-heading">
          <span className="eyebrow">Find your people</span>
          <h2 id="societies-title">
            A spectrum of interests.
            <br />
            <span className="muted">A world of possibility.</span>
          </h2>
        </div>
        <p>
          Find the community that shares your curiosity.
          <br />
          Then see where it takes you.
        </p>
      </div>
      <div
        className="explorer"
        style={
          { "--society-color": themeColor(society.color) } as CSSProperties
        }
      >
        <div className="explorer-top">
          <span>Our societies & communities</span>
          <span>
            Follow your curiosity <span aria-hidden="true">↙</span>
          </span>
        </div>
        <div
          role="tablist"
          aria-label="Societies and communities"
          className="society-tabs"
        >
          {societies.map((item, index) => (
            <button
              key={item.id}
              ref={(el) => {
                tabs.current[index] = el;
              }}
              type="button"
              role="tab"
              id={`tab-${item.id}`}
              aria-selected={index === selected}
              aria-controls="society-panel"
              tabIndex={index === selected ? 0 : -1}
              className={`society-tab ${index === selected ? "selected" : ""}`}
              onClick={() => setSelected(index)}
              onKeyDown={(event) => onKeyDown(event, index)}
              style={{ "--tab-color": themeColor(item.color) } as CSSProperties}
            >
              <span className="tab-marker" />
              <span>{item.short}</span>
            </button>
          ))}
        </div>
        <div
          id="society-panel"
          role="tabpanel"
          aria-labelledby={`tab-${society.id}`}
          tabIndex={0}
          className="society-panel"
        >
          <div key={`${society.id}-visual`} className="society-visual">
            <div className="visual-top">
              <span>IEEE {society.short}</span>
            </div>
            <DisciplineGraphic variant={selected} />
            <div className="society-monogram">{society.short}</div>
            <span className="visual-bottom">RV College of Engineering</span>
          </div>
          <div className="society-description" key={society.id}>
            <span className="society-category">{society.category}</span>
            <h3>{society.name}</h3>
            <p className="society-headline">{society.headline}</p>
            <p className="society-body">{society.description}</p>
            <ul className="topic-list">
              {society.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
            <Link href={`/societies/${society.id}`} className="society-link">
              Discover {society.short} <Arrow diagonal />
            </Link>
          </div>
        </div>
        <div className="explorer-bottom">
          <span>Different strengths. One IEEE RVCE.</span>
          <span className="keyboard-hint">
            ← → <span>to explore</span>
          </span>
          <Link href="/membership">
            Become a member <Arrow diagonal />
          </Link>
        </div>
      </div>
      <noscript>
        <div className="no-script-societies">
          <p>Explore all societies and communities:</p>
          {societies.map((item) => (
            <Link key={item.id} href={`/societies/${item.id}`}>
              {item.name} ↗
            </Link>
          ))}
        </div>
      </noscript>
    </section>
  );
}
