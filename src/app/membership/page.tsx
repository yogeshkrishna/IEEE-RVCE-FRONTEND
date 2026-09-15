import Link from "next/link";
import PageHeading from "@/components/page-heading";
import { Arrow, Spark } from "@/components/icons";
import { contactEmail, originalSite } from "@/lib/content";
export const metadata = {
  title: "Membership",
  description:
    "Find your community at IEEE RVCE. Explore student membership and how to get started.",
};
export default function MembershipPage() {
  return (
    <main id="main" className="inner-page shell">
      <PageHeading
        eyebrow="A place for you"
        title={
          <>
            Your next chapter
            <br />
            <em>starts with curiosity.</em>
          </>
        }
        description="Meet people who care about what you care about. Explore a new field, share what you know, and make your time at college a little bigger."
      />
      <div className="membership-banner">
        <div>
          <Spark />
          <p className="eyebrow">IEEE RVCE · Student membership</p>
          <h2>
            Come for an interest.
            <br />
            Stay for the people.
          </h2>
          <p>
            Start with the branch’s membership guidance, or talk to us if you’d
            like a hand finding your way.
          </p>
          <a
            className="pill-button"
            href={`${originalSite}/membership`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open branch membership guidance <Arrow diagonal />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
        <div className="membership-note">
          <span>Dear curious mind,</span>
          <p>
            You don’t need to have
            <br />
            it all figured out.
            <br />
            <em>That’s why we’re here.</em>
          </p>
          <span>
            See you around,
            <br />
            IEEE RVCE
          </span>
        </div>
      </div>
      <section className="page-section">
        <h2 className="editorial-title">Find your way in.</h2>
        <ol className="join-steps">
          <li>
            <h3>Explore your interests</h3>
            <p>
              Get to know our technical societies, Sensors Council, WIE and
              SIGHT.
            </p>
            <Link className="text-link" href="/societies">
              Meet the communities <Arrow />
            </Link>
          </li>
          <li>
            <h3>Review membership</h3>
            <p>
              Check eligibility, current fees and the appropriate membership
              options directly with IEEE or the branch.
            </p>
            <a
              className="text-link"
              href="https://www.ieee.org/membership/join/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              IEEE membership <Arrow diagonal />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <h3>Say hello to the branch</h3>
            <p>
              Ask about joining the RVCE community and finding the activities
              that fit you.
            </p>
            <a
              className="text-link"
              href={`mailto:${contactEmail}?subject=IEEE%20RVCE%20membership%20enquiry`}
            >
              Ask about joining <Arrow />
            </a>
          </li>
        </ol>
      </section>
      <section className="faq-section">
        <h2 className="editorial-title">A few things you might wonder.</h2>
        {[
          [
            "Do I need to be an expert?",
            "Curiosity is a good starting point. Explore the community pages and ask the branch about activities that suit your experience.",
          ],
          [
            "How much does membership cost?",
            "Fees depend on the membership option and may change. Check the current amounts with IEEE before joining; society memberships may have separate fees.",
          ],
          [
            "Is joining a society the same as joining IEEE?",
            "IEEE membership and society membership are distinct. Review the membership requirements for each society you’re interested in.",
          ],
          [
            "How do I find the next event?",
            "Our event pages currently show an archive of past activities. Contact the branch or check its official social channels for current announcements.",
          ],
        ].map(([q, a]) => (
          <details key={q}>
            <summary>
              {q}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </section>
    </main>
  );
}
