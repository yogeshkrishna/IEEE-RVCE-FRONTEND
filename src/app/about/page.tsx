import Image from "next/image";
import Link from "next/link";
import PageHeading from "@/components/page-heading";
import SectionNav from "@/components/section-nav";
import { Arrow, Spark } from "@/components/icons";
export const metadata = {
  title: "Our branch",
  description:
    "Get to know the IEEE Student Branch at RV College of Engineering, Bengaluru, established in 2017.",
};
export default function AboutPage() {
  return (
    <main id="main" className="inner-page shell">
      <PageHeading
        eyebrow="Our branch"
        title={
          <>
            Good things start
            <br />
            <em>with curious people.</em>
          </>
        }
        description="We’re the IEEE Student Branch at RV College of Engineering, Bengaluru. Since 2017, we’ve brought different disciplines together around a simple idea: learning is better when it’s shared."
      />
      <SectionNav group="branch" />
      <div className="story-layout">
        <figure className="story-photo">
          <Image
            src="/images/community.webp"
            width={1100}
            height={720}
            sizes="(max-width: 760px) 100vw, 55vw"
            alt="IEEE RVCE branch members gathered on campus in 2020"
          />
          <figcaption>A moment from the branch archive, 2020.</figcaption>
        </figure>
        <div className="prose">
          <p className="eyebrow">A local community. A global perspective.</p>
          <h2>
            Beyond your
            <br />
            timetable.
          </h2>
          <p>
            A workshop can open up a field you’ve never tried. A conversation
            with a researcher can change the questions you ask. Working with
            another student can turn an idea into something real.
          </p>
          <p>
            IEEE RVCE connects students with researchers, academics and industry
            professionals through technical talks, workshops and shared
            activities.
          </p>
          <Link className="text-link" href="/societies">
            Find your community <Arrow />
          </Link>
        </div>
      </div>
      <section className="page-section">
        <h2 className="editorial-title">Many ways to belong.</h2>
        <div className="values-grid">
          {[
            [
              "Learn by doing",
              "Make space for experiments, practical skills and questions that don’t fit into a lecture.",
            ],
            [
              "Meet across disciplines",
              "Find students who see the same problem from a different angle. Build something together.",
            ],
            [
              "Put people first",
              "Connect engineering to the communities it serves, with inclusion and a shared sense of purpose.",
            ],
          ].map(([title, copy]) => (
            <article className="paper-panel" key={title}>
              <Spark />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <div className="invitation-panel">
        <div>
          <p className="eyebrow">There’s a place for you here</p>
          <h2>
            Bring your questions.
            <br />
            <em>We’ll start there.</em>
          </h2>
        </div>
        <Link className="pill-button" href="/membership">
          Explore membership <Arrow />
        </Link>
      </div>
    </main>
  );
}
