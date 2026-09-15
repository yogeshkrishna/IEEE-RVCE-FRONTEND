import Brand from "@/components/brand";
import { themeColor } from "@/lib/theme-color";
import type { CSSProperties } from "react";
import Navigation from "@/components/navigation";
import Welcome from "@/components/welcome";
import SocietyExplorer from "@/components/society-explorer";
import Reveal from "@/components/reveal";
import { Arrow, DisciplineGraphic, Spark } from "@/components/icons";
import { awards, contactEmail, highlights, originalSite } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Navigation />
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
              <a
                href={`${originalSite}/about`}
                target="_blank"
                rel="noopener noreferrer"
                className="fact-link"
              >
                Get to know IEEE RVCE <Arrow diagonal />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
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
            <a
              href={`${originalSite}/events`}
              className="text-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore the event archive <Arrow diagonal />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
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
                <a
                  href={event.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="event-cover-link"
                  aria-label={`Read about ${event.title} — archived event (opens in a new tab)`}
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
                </a>
                <div className="event-meta">
                  <span>{event.type}</span>
                  <time>{event.date}</time>
                </div>
                <h3>
                  <a
                    href={event.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {event.title}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
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
              <a
                className="recognition-link"
                href={`${originalSite}/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View the branch’s award history <Arrow diagonal />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
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
                <a className="contact-email" href={`mailto:${contactEmail}`}>
                  {contactEmail}
                  <Arrow diagonal />
                </a>
                <a
                  className="text-link membership-link"
                  href={`${originalSite}/membership`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Looking to join IEEE? <Arrow diagonal />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <div className="closing-area">
        <footer className="site-footer shell">
          <div className="footer-top">
            <Brand />
            <address>
              RV College of Engineering
              <br />
              Mysore Road, RV Vidyanikethan Post
              <br />
              Bengaluru 560059, Karnataka, India
            </address>
            <div className="footer-socials">
              <a
                href="https://www.instagram.com/ieee_rvce/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram <Arrow diagonal />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a
                href="https://www.linkedin.com/company/ieee-rvce/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <Arrow diagonal />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a
                href={`${originalSite}/articles`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Articles <Arrow diagonal />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
            <a href="#home" className="back-top" aria-label="Back to top">
              ↑
            </a>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} IEEE RVCE Student Branch</span>
            <span>Advancing technology for humanity.</span>
            <span>Made of curious minds.</span>
          </div>
          <div className="spectrum-rule" aria-hidden="true" />
        </footer>
      </div>
      <Reveal />
    </>
  );
}
