import PostcardStack from "./postcard-stack";
import { Arrow, Spark } from "./icons";

export default function Welcome() {
  return (
    <section className="welcome shell" id="home" aria-labelledby="hero-title">
      <div className="welcome-intro">
        <p className="welcome-kicker">Hello, we’re IEEE RVCE.</p>
        <h1 id="hero-title">
          A place for
          <br />
          <em>curious minds.</em>
        </h1>
        <p className="welcome-description">
          For the things you want to learn.
          <br className="mobile-break" /> The ideas you want to try.
          <br /> And the people you’ll meet along the way.
        </p>
        <a className="welcome-cta" href="#societies">
          Find your community <Arrow />
        </a>
      </div>
      <div className="welcome-scrapbook">
        <div className="welcome-note note-left">
          <Spark aria-hidden="true" />
          <p>
            Different interests.
            <br />
            <em>Better together.</em>
          </p>
          <svg
            className="hand-arrow"
            viewBox="0 0 100 70"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M8 12c-5 24 25 52 70 31m-20-3 22 3-12 17"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <PostcardStack />
        <div className="welcome-note note-right">
          <span className="note-flower" aria-hidden="true">
            ✳
          </span>
          <p>
            Made of people.
            <br />
            <em>Powered by curiosity.</em>
          </p>
          <a href="#about">
            Get to know us <Arrow diagonal />
          </a>
        </div>
      </div>
      <div className="welcome-signoff">
        <span>RV College of Engineering, Bengaluru</span>
        <span>Advancing technology for humanity.</span>
      </div>
    </section>
  );
}
