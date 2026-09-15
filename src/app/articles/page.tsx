import Link from "next/link";
import PageHeading from "@/components/page-heading";
import { Arrow } from "@/components/icons";
import { contactEmail } from "@/lib/content";
export const metadata = { title: "Articles" };
export default function ArticlesPage() {
  return (
    <main id="main" className="inner-page shell">
      <PageHeading
        eyebrow="From our community"
        title={
          <>
            Ideas worth
            <br />
            <em>passing on.</em>
          </>
        }
        description="A space for technical explainers, project stories and the things we learn along the way."
      />
      <div className="article-empty">
        <div className="paper-illustration" aria-hidden="true">
          <span>
            A thought.
            <br />A question.
            <br />
            <em>A beginning.</em>
          </span>
          <i />
          <i />
          <i />
        </div>
        <div className="prose">
          <span className="status-pill">The first page is still unwritten</span>
          <h2>
            Your idea could
            <br />
            start a conversation.
          </h2>
          <p>
            No articles have been published here yet. Have a project, an
            explanation or an experience you’d like to share? Get in touch with
            the branch about contributing.
          </p>
          <a
            className="pill-button"
            href={`mailto:${contactEmail}?subject=Article%20proposal%20for%20IEEE%20RVCE`}
          >
            Propose an article <Arrow />
          </a>
          <p className="small-note">
            Opens your email app. Include your topic, a short outline and how
            you’d like to be credited.
          </p>
        </div>
      </div>
      <div className="invitation-panel">
        <div>
          <p className="eyebrow">While you’re here</p>
          <h2>
            See what we’ve
            <br />
            been learning.
          </h2>
        </div>
        <Link className="pill-button" href="/events">
          Explore the event archive <Arrow />
        </Link>
      </div>
    </main>
  );
}
