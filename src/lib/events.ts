import { highlights } from "./content";
export type BranchEvent = {
  id: string;
  title: string;
  type: string;
  start: string;
  end: string;
  description: string;
  topics: string[];
  color: string;
};
// Names and dates transcribed from the public branch archive, 15 September 2026.
// Descriptions are short editorial summaries, not full event reports.
export const events: BranchEvent[] = [
  {
    id: "153",
    title: "VLSI RoadShow",
    type: "Technical event",
    start: "2024-03-16",
    end: "2024-03-17",
    description: highlights[1].description,
    topics: ["VLSI", "Electronic systems"],
    color: "#c5d7c8",
  },
  {
    id: "149",
    title: "3D Printing Workshop",
    type: "Workshop",
    start: "2024-03-08",
    end: "2024-03-09",
    description: highlights[2].description,
    topics: ["Design", "Prototyping"],
    color: "#dfbca5",
  },
  {
    id: "150",
    title: "Crack the Career Code: LinkedIn and Beyond",
    type: "Career session",
    start: "2024-03-04",
    end: "2024-03-04",
    description:
      "A session on professional presence, LinkedIn and the path from college to a career.",
    topics: ["Careers", "Community"],
    color: "#cec1d0",
  },
  {
    id: "152",
    title: "From Logic to Layout: The RTL to GDSII Flow",
    type: "Technical talk",
    start: "2024-02-06",
    end: "2024-02-06",
    description:
      "An introduction to the path from digital logic to the physical layout of an integrated circuit.",
    topics: ["VLSI", "Circuits"],
    color: "#c9d4ad",
  },
  {
    id: "151",
    title: "Hack4Soc 2.0",
    type: "Hackathon",
    start: "2024-02-03",
    end: "2024-02-04",
    description: highlights[0].description,
    topics: ["Software", "Humanitarian technology"],
    color: "#dfc7ae",
  },
  {
    id: "154",
    title: "Exploring Large Language Models!",
    type: "Technical talk",
    start: "2024-01-11",
    end: "2024-01-11",
    description:
      "A technical session exploring large language models and the world of artificial intelligence.",
    topics: ["Artificial intelligence", "Computing"],
    color: "#b9cfd2",
  },
  {
    id: "148",
    title: "STEM IoT Workshop",
    type: "Workshop",
    start: "2023-11-25",
    end: "2023-11-29",
    description:
      "A STEM and Internet of Things workshop recorded at Viveka PU College, Udupi.",
    topics: ["IoT", "Community"],
    color: "#c4d3b7",
  },
  {
    id: "147",
    title: "Antenna and DSP Techniques for Physical Layer Security",
    type: "Technical talk",
    start: "2023-06-14",
    end: "2023-06-14",
    description:
      "Exploring physical-layer security through antennas and digital signal processing.",
    topics: ["Antennas", "Signals", "Wireless"],
    color: "#b6cfc1",
  },
  {
    id: "146",
    title: "Crack the Code: Google and Beyond",
    type: "Career session",
    start: "2023-06-09",
    end: "2023-06-09",
    description:
      "A session connecting coding with careers in software development.",
    topics: ["Software", "Careers"],
    color: "#e6bfa5",
  },
  {
    id: "134",
    title: "Introduction to MMIC and Design Methodology",
    type: "Technical talk",
    start: "2023-03-13",
    end: "2023-03-13",
    description:
      "An introduction to monolithic microwave integrated circuits and design methods.",
    topics: ["Microwaves", "RF design"],
    color: "#d5c3ca",
  },
  {
    id: "135",
    title: "H.E.R.A — Health. Empowerment. Reassurance. Acknowledge.",
    type: "Community event",
    start: "2023-03-09",
    end: "2023-03-09",
    description:
      "A community event centred on health, empowerment and reassurance.",
    topics: ["Community", "Inclusion"],
    color: "#c8b9cb",
  },
  {
    id: "138",
    title: "Control System Fundamentals using MATLAB",
    type: "Workshop",
    start: "2023-01-23",
    end: "2023-01-25",
    description: "Exploring control system fundamentals through MATLAB.",
    topics: ["Control", "Automation"],
    color: "#e4c791",
  },
  {
    id: "136",
    title: "MEMS: Past, Present and Future",
    type: "Technical talk",
    start: "2022-12-20",
    end: "2022-12-20",
    description:
      "A look at microelectromechanical systems and sensor fabrication.",
    topics: ["Sensors", "Electronic systems"],
    color: "#bdc7d4",
  },
  {
    id: "122",
    title: "Hack4Soc: Where Humanity Meets Technology",
    type: "Hackathon",
    start: "2022-08-28",
    end: "2022-08-29",
    description:
      "An archived hackathon connecting technical ideas with humanitarian challenges.",
    topics: ["Humanitarian technology", "Software"],
    color: "#dfc7ae",
  },
  {
    id: "126",
    title: "Git Set Go — Git Workshop",
    type: "Workshop",
    start: "2022-07-27",
    end: "2022-07-28",
    description:
      "An introduction to Git, GitHub and version control for collaborative software development.",
    topics: ["Software", "Computing"],
    color: "#e6bfa5",
  },
];
export function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T12:00:00Z`));
}
export function eventDate(event: BranchEvent) {
  return event.start === event.end
    ? formatDate(event.start)
    : `${formatDate(event.start)} – ${formatDate(event.end)}`;
}
