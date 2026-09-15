"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const postcards = [
  {
    src: "/images/community.webp",
    alt: "IEEE RVCE students and faculty gathered together at a branch event",
    caption: "Good company. Great possibilities.",
    note: "From our branch archive, 2020",
    position: "50% 59%",
  },
  {
    src: "/images/postcard-recognition.webp",
    alt: "IEEE RVCE representatives receiving recognition at an IEEE Bangalore Section gathering",
    caption: "Well earned. Better shared.",
    note: "IEEE Bangalore Section, 2021",
    position: "50% 60%",
  },
  {
    src: "/images/postcard-workshop.webp",
    alt: "A large group of RVCE workshop participants and faculty together in a classroom",
    caption: "Learning is better together.",
    note: "From our branch archive",
    position: "50% 57%",
  },
  {
    src: "/images/postcard-conference.webp",
    alt: "Speakers and organisers at the CSITSS 2024 inauguration at RV College of Engineering",
    caption: "Ideas worth bringing together.",
    note: "CSITSS, 2024",
    position: "50% 55%",
  },
];

export default function PostcardStack() {
  const [order, setOrder] = useState([0, 1, 2, 3]);
  const [leaving, setLeaving] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const busy = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  const cycle = () => {
    if (busy.current) return;
    const advance = () => {
      setOrder((current) => [...current.slice(1), current[0]]);
      setAnnouncement(
        `${postcards[order[1]].caption} ${postcards[order[1]].note}`,
      );
      setLeaving(false);
      busy.current = false;
      timer.current = null;
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      advance();
      return;
    }
    busy.current = true;
    setLeaving(true);
    timer.current = setTimeout(advance, 460);
  };

  return (
    <figure className="postcard-stack" aria-label="Postcards from IEEE RVCE">
      <button
        type="button"
        className={`postcard-deck${leaving ? " is-cycling" : ""}`}
        onClick={cycle}
        aria-label="Show the next postcard"
        aria-describedby={`postcard-caption-${order[0]}`}
      >
        {order.map((id, depth) => {
          const card = postcards[id];
          return (
            <span
              className={`welcome-photo postcard depth-${depth}`}
              key={id}
              aria-hidden={depth !== 0}
            >
              <span className="photo-tape" aria-hidden="true" />
              <span className="welcome-photo-frame">
                <Image
                  src={card.src}
                  alt={depth === 0 ? card.alt : ""}
                  fill
                  sizes="(max-width:760px) 90vw, 650px"
                  preload={id === 0}
                  style={{ objectPosition: card.position }}
                  draggable={false}
                />
              </span>
              <span className="postcard-caption" id={`postcard-caption-${id}`}>
                <span>{card.caption}</span>
                <small>{card.note}</small>
              </span>
            </span>
          );
        })}
      </button>
      <span
        className="sr-only"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {announcement}
      </span>
    </figure>
  );
}
