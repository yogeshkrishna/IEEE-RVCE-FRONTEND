import Link from "next/link";
import { themeColor } from "@/lib/theme-color";
import type { CSSProperties } from "react";
import Welcome from "@/components/welcome";
import SocietyExplorer from "@/components/society-explorer";
import Reveal from "@/components/reveal";
import { Arrow, DisciplineGraphic, Spark } from "@/components/icons";
import { awards, contactEmail, highlights } from "@/lib/content";

export default function Home() {
  return (
    <>
      <main id="main">
        <Welcome />

        <section
          className="about-section shell"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="intro-section" data-reveal>
            <div className="section-heading">
              <span className="eyebrow">Our branch</span>
              <h2 id="about-title">
                Different disciplines.
                <br />
                <span className="muted">Shared ambition.</span>
              </h2>
            </div>
            <div className="intro-copy">
              <p>Good things happen when curious people come together.</p>
              <p>
                At IEEE RVCE, students, researchers and industry professionals
                exchange ideas and turn learning into practice. Through
                workshops, technical talks and a growing network of communities,
                we make room for what comes next.
              </p>
            </div>
          </div>
          <div className="community-layout" data-reveal>
            <div className="branch-facts">
              <div className="fact-top">
                <Spark />
                <span>
                  A local community.
                  <br /> A global perspective.
                </span>
              </div>
              <div className="fact">
                <span className="fact-number">2017</span>
                <span>Where our story began</span>
              </div>
              <div className="fact">
                <span className="fact-number">
                  10<span>+2</span>
                </span>
                <span>
                  Technical societies & council,
                  <br />
                  plus WIE and SIGHT
                </span>
              </div>
              <Link href="/about" className="fact-link">
                Get to know IEEE RVCE <Arrow diagonal />
              </Link>
            </div>
          </div>
        </section>

        <SocietyExplorer />

        <section
          className="highlights-section shell"
          id="highlights"
          aria-labelledby="highlights-title"
        >
          <div className="section-title-row" data-reveal>
            <div className="section-heading">
              <span className="eyebrow">Life beyond lectures</span>
              <h2 id="highlights-title">Beyond the classroom.</h2>
            </div>
            <Link href="/events" className="text-link">
              Explore the event archive <Arrow diagonal />
            </Link>
          </div>
          <p className="section-lede" data-reveal>
            A few moments from our story. Many more ideas to come.
          </p>
          <div className="event-grid">
            {highlights.map((event, index) => (
              <article
                className="event-card"
                key={event.id}
                style={
                  { "--event-color": themeColor(event.color) } as CSSProperties
                }
                data-reveal
              >
                <Link
                  href={`/events/${event.id}`}
                  className="event-cover-link"
                  aria-label={`Read about ${event.title} — archived event`}
                >
                  <div className={`event-cover event-cover-${index}`}>
                    <div className="poster-meta">
                      <span>IEEE RVCE</span>
                      <span>From the 2024 archive</span>
                    </div>
                    {index === 0 ? (
                      <div className="hack-poster">
                        <span>
                          hack
                          <span className="poster-star">
                            <Spark />
                          </span>
                        </span>
                        <span>
                          4soc<span className="poster-version">2.0</span>
                        </span>
                      </div>
                    ) : index === 1 ? (
                      <div className="vlsi-poster">
                        <DisciplineGraphic variant={0} />
                        <span>
                          VLSI<span>ROADSHOW</span>
                        </span>
                      </div>
                    ) : (
                      <div className="print-poster">
                        <span>3D</span>
                        <DisciplineGraphic variant={2} />
                        <small>PRINT YOUR POSSIBILITIES.</small>
                      </div>
                    )}
                    <div className="poster-bottom">
                      <span>{event.label}</span>
                      <span className="round-arrow">
                        <Arrow diagonal />
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="event-meta">
                  <span>{event.type}</span>
                  <time>{event.date}</time>
                </div>
                <h3>
                  <Link href={`/events/${event.id}`}>{event.title}</Link>
                </h3>
                <p>{event.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="recognition-section"
          id="recognition"
          aria-labelledby="recognition-title"
        >
          <div className="recognition-inner shell">
            <div className="recognition-intro" data-reveal>
              <span className="eyebrow">A little recognition</span>
              <h2 id="recognition-title">
                Built here.
                <br />
                Recognised
                <br />
                <span>beyond.</span>
              </h2>
              <p>
                Celebrating the commitment of our students, volunteers and
                technical communities.
              </p>
              <Spark className="recognition-spark" />
            </div>
            <div className="award-list" data-reveal>
              {awards.map((award) => (
                <article className="award" key={award.year}>
                  <span className="award-year">{award.year}</span>
                  <div>
                    <h3>{award.title}</h3>
                    <p>{award.detail}</p>
                  </div>
                  <span className="award-star">
                    <Spark />
                  </span>
                </article>
              ))}
              <Link className="recognition-link" href="/awards">
                View the branch’s award history <Arrow diagonal />
              </Link>
            </div>
          </div>
        </section>

        <div className="closing-area">
          <section
            className="contact-section shell"
            id="contact"
            aria-labelledby="contact-title"
          >
            <div className="contact-top" data-reveal>
              <span className="eyebrow">Say hello</span>
              <span className="contact-location">
                Rooted in Bengaluru. Open to the world.
              </span>
            </div>
            <div className="contact-content" data-reveal>
              <h2 id="contact-title">
                Let’s build
                <br />
                <span>what’s next.</span>
                <Spark />
              </h2>
              <div className="contact-copy">
                <p>Have an idea worth sharing?</p>
                <p>
                  Bring your expertise, your questions or your next big
                  challenge. Let’s create something meaningful together.
                </p>
                <Link className="contact-email" href={`mailto:${contactEmail}`}>
                  {contactEmail}
                  <Arrow diagonal />
                </Link>
                <Link className="text-link membership-link" href="/membership">
                  Looking to join IEEE? <Arrow diagonal />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Reveal />
    </>
  );
}
