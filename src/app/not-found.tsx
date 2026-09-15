import { Arrow } from "@/components/icons";
export default function NotFound() {
  return (
    <main className="not-found shell">
      <span className="eyebrow">IEEE RVCE / 404</span>
      <h1>
        A little
        <br />
        off course.
      </h1>
      <p>That page isn’t here. There’s plenty to explore at the branch.</p>
      <a href="/" className="button button-primary">
        Back to the homepage <Arrow />
      </a>
    </main>
  );
}
