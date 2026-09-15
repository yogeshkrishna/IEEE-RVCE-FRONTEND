import PageHeading from "@/components/page-heading";
import SectionNav from "@/components/section-nav";
import { awards } from "@/lib/content";
import { Spark } from "@/components/icons";
export const metadata = { title: "Recognition" };
const history = [
  ...awards,
  {
    year: "2021",
    title: "Student Branch Website Contest",
    detail: "Second runner-up · IEEE Region 10 SAC",
  },
  {
    year: "2021",
    title: "Membership Development Committee Award",
    detail: "IEEE Bangalore Section",
  },
  {
    year: "2020",
    title: "Outstanding Medium Student Branch",
    detail: "IEEE Bangalore Section",
  },
  {
    year: "2020",
    title: "Outstanding CS Student Chapter",
    detail: "IEEE CS Bangalore Chapter",
  },
  {
    year: "2020",
    title: "Membership Development Challenge",
    detail: "Third position",
  },
];
export default function AwardsPage() {
  return (
    <main id="main" className="inner-page shell">
      <PageHeading
        eyebrow="A little recognition"
        title={
          <>
            Built here.
            <br />
            <em>Recognised beyond.</em>
          </>
        }
        description="A record of the care, commitment and curiosity our volunteers put into the branch. Every recognition belongs to the people behind it."
      />
      <SectionNav group="branch" />
      <div className="recognition-paper">
        {history.map((award, index) => (
          <article className="award" key={index}>
            <span className="award-year">{award.year}</span>
            <div>
              <h2>{award.title}</h2>
              <p>{award.detail}</p>
            </div>
            <Spark />
          </article>
        ))}
      </div>
      <p className="archive-note">
        Historical branch and chapter awards, as listed on the original IEEE
        RVCE website.
      </p>
    </main>
  );
}
