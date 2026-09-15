import PageHeading from "@/components/page-heading";
import ContactForm from "@/components/contact-form";
import { contactEmail } from "@/lib/content";
export const metadata = {
  title: "Contact",
  description:
    "Get in touch with IEEE RVCE for membership, events and collaborations.",
};
export default function ContactPage() {
  return (
    <main id="main" className="inner-page shell">
      <PageHeading
        eyebrow="Say hello"
        title={
          <>
            Have an idea?
            <br />
            <em>Pull up a chair.</em>
          </>
        }
        description="A question about membership. An idea for a workshop. Something we could build together. We’d love to hear it."
      />
      <div className="contact-page-grid">
        <aside className="contact-details">
          <p className="eyebrow">Rooted in Bengaluru. Open to the world.</p>
          <a className="direct-email" href={`mailto:${contactEmail}`}>
            {contactEmail} ↗
          </a>
          <address>
            RV College of Engineering
            <br />
            Mysore Road, RV Vidyanikethan Post
            <br />
            Bengaluru 560059, Karnataka, India
          </address>
          <a
            className="text-link"
            href="https://www.google.com/maps/search/?api=1&query=RV+College+of+Engineering+Bengaluru"
            target="_blank"
            rel="noopener noreferrer"
          >
            Find the campus ↗
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <div className="contact-socials">
            <a
              href="https://www.instagram.com/ieee_rvce/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram ↗<span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href="https://www.linkedin.com/company/ieee-rvce/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </aside>
        <ContactForm />
      </div>
    </main>
  );
}
