import PageHeading from "@/components/page-heading";
import SectionNav from "@/components/section-nav";
import CommunityDirectory from "@/components/community-directory";
export const metadata = { title: "Societies & communities" };
export default function SocietiesPage() {
  return (
    <main id="main" className="inner-page shell">
      <PageHeading
        eyebrow="Find your people"
        title={
          <>
            Different interests.
            <br />
            <em>Better together.</em>
          </>
        }
        description="Nine technical societies, the Sensors Council, WIE and SIGHT. Find a familiar interest—or discover something you never knew you’d love."
      />
      <SectionNav group="communities" />
      <CommunityDirectory />
    </main>
  );
}
