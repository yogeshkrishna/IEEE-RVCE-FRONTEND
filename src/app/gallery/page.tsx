import Image from "next/image";
import PageHeading from "@/components/page-heading";
import SectionNav from "@/components/section-nav";
export const metadata = { title: "Photo album" };
const photos = [
  ["community.webp", "Together on campus", "Branch group photograph · 2020"],
  [
    "postcard-recognition.webp",
    "A moment of recognition",
    "Award presentation · 2021",
  ],
  [
    "postcard-workshop.webp",
    "Learning, together",
    "Workshop group · Branch archive",
  ],
  [
    "postcard-conference.webp",
    "Ideas in good company",
    "Conference inauguration · CSITSS 2024",
  ],
];
export default function GalleryPage() {
  return (
    <main id="main" className="inner-page shell">
      <PageHeading
        eyebrow="Our photo album"
        title={
          <>
            The moments
            <br />
            <em>we keep.</em>
          </>
        }
        description="A few photographs from the branch archive. The people, conversations and shared experiences behind IEEE RVCE."
      />
      <SectionNav group="branch" />
      <div className="photo-grid">
        {photos.map(([file, title, caption]) => (
          <figure key={file}>
            <a
              href={`/images/${file}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open full photograph: ${title} (opens in a new tab)`}
            >
              <Image
                src={`/images/${file}`}
                width={1100}
                height={740}
                sizes="(max-width: 760px) 100vw, 50vw"
                alt={title}
              />
            </a>
            <figcaption>
              <h2>{title}</h2>
              <p>{caption}</p>
              <span>Open full photograph ↗</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </main>
  );
}
