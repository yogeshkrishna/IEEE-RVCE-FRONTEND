import Link from "next/link";
import Brand from "./brand";
import { Arrow } from "./icons";
export default function Footer() {
  return (
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
            <Link href="/articles">
              Articles <Arrow />
            </Link>
          </div>
          <a href="#page-top" className="back-top" aria-label="Back to top">
            ↑
          </a>
        </div>
        <nav className="footer-page-links" aria-label="Footer navigation">
          {[
            ["/about", "Our branch"],
            ["/societies", "Communities"],
            ["/affinities", "WIE & SIGHT"],
            ["/events", "Events"],
            ["/calendar", "Calendar"],
            ["/team", "People"],
            ["/awards", "Recognition"],
            ["/gallery", "Photo album"],
            ["/membership", "Membership"],
            ["/contact", "Contact"],
          ].map(([href, label]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} IEEE RVCE Student Branch</span>
          <span>Advancing technology for humanity.</span>
          <span>Made of curious minds.</span>
        </div>
        <div className="spectrum-rule" aria-hidden="true" />
      </footer>
    </div>
  );
}
