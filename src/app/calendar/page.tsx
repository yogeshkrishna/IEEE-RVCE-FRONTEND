import { Suspense } from "react";
import PageHeading from "@/components/page-heading";
import SectionNav from "@/components/section-nav";
import EventCalendar from "@/components/event-calendar";
export const metadata = { title: "Event calendar" };
export default function CalendarPage() {
  return (
    <main id="main" className="inner-page shell">
      <PageHeading
        eyebrow="The branch calendar"
        title={
          <>
            Make time
            <br />
            <em>for an idea.</em>
          </>
        }
        description="A different way to explore our event archive. Browse by month and open an event to learn more."
      />
      <SectionNav group="events" />
      <p className="archive-note">
        Showing selected past events, beginning with the latest month in this
        archive. This is not a live upcoming-events schedule.
      </p>
      <Suspense fallback={<p>Opening the calendar…</p>}>
        <EventCalendar />
      </Suspense>
    </main>
  );
}
