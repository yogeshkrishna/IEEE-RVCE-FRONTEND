import PageHeading from "@/components/page-heading";
import SectionNav from "@/components/section-nav";
import { originalSite } from "@/lib/content";
export const metadata = { title: "People at the branch" };
const people = [
  ["Dr. Usha J", "Branch Counselor"],
  ["Nishant V H", "Chair"],
  ["Pranav V Jambur", "Vice Chair"],
  ["Vijayalaxmi Ashok Patil", "Secretary"],
  ["Shreekara H", "Joint Secretary"],
  ["Manodnya Korishetty", "Treasurer"],
  ["Samanvitha L", "Joint Treasurer"],
  ["Sathish Dath D S", "Webmaster"],
  ["Hitarth Mehra", "Design Lead"],
  ["Yadamreddy Navaneeth", "Design Lead"],
  ["Kavin Krishnan C", "MDC Chair"],
  ["Pratham G Bhat", "MDC Secretary"],
  ["Suneesh Bare", "MDC Secretary"],
];
export default function TeamPage() {
  return (
    <main id="main" className="inner-page shell">
      <PageHeading
        eyebrow="The people behind it"
        title={
          <>
            Made of people.
            <br />
            <em>Made possible together.</em>
          </>
        }
        description="The volunteers and faculty who help connect our communities and keep the branch moving."
      />
      <SectionNav group="branch" />
      <p className="archive-note">
        Executive committee as listed on the original branch website, checked 15
        September 2026. The source does not specify this committee’s term.
      </p>
      <div className="people-grid">
        {people.map(([name, role]) => (
          <article className="person-card" key={name}>
            <span className="person-initials" aria-hidden="true">
              {name
                .replace("Dr. ", "")
                .split(" ")
                .slice(0, 2)
                .map((s) => s[0])
                .join("")}
            </span>
            <div>
              <p>{role}</p>
              <h2>{name}</h2>
            </div>
          </article>
        ))}
      </div>
      <div className="invitation-panel">
        <div>
          <p className="eyebrow">The people who came before</p>
          <h2>
            Always part
            <br />
            of the story.
          </h2>
          <p>
            Explore previous committees from 2018–2025 in the original branch
            directory.
          </p>
        </div>
        <a
          className="pill-button"
          href={`${originalSite}/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit the alumni archive ↗
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </main>
  );
}
