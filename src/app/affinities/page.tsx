import PageHeading from "@/components/page-heading";
import SectionNav from "@/components/section-nav";
import CommunityDirectory from "@/components/community-directory";
export const metadata = { title: "WIE & SIGHT" };
export default function AffinitiesPage() {
  return (
    <main id="main" className="inner-page shell">
      <PageHeading
        eyebrow="Community with purpose"
        title={
          <>
            More perspectives.
            <br />
            <em>More possibility.</em>
          </>
        }
        description="Meet Women in Engineering and the Special Interest Group on Humanitarian Technology. Two communities that put people at the centre of engineering."
      />
      <SectionNav group="communities" />
      <CommunityDirectory affinitiesOnly />
    </main>
  );
}
