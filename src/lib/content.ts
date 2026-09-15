export type Society = {
  id: string;
  short: string;
  name: string;
  category:
    | "Technical society"
    | "Technical council"
    | "Affinity group"
    | "Humanitarian group";
  color: string;
  headline: string;
  description: string;
  topics: string[];
  href: string;
};

export const originalSite = "https://www.ieee-rvce.org/#";
export const contactEmail = "ieeervce@rvce.edu.in";

export const societies: Society[] = [
  {
    id: "cs",
    short: "CS",
    name: "Computer Society",
    category: "Technical society",
    color: "#e6bfa5",
    headline: "Ideas become\npossibilities.",
    description:
      "Explore the world of computing, from the foundations of software to the frontiers of artificial intelligence. A place for curious minds to code, collaborate and solve problems together.",
    topics: ["Computing", "Artificial intelligence", "Software"],
    href: `${originalSite}/society/cs`,
  },
  {
    id: "comsoc",
    short: "ComSoc",
    name: "Communications Society",
    category: "Technical society",
    color: "#b9cfd2",
    headline: "A more connected\nworld starts here.",
    description:
      "Discover the systems that bring people and information together. Explore communication networks, wireless technologies and the next generation of connectivity.",
    topics: ["Wireless", "Networks", "Connectivity"],
    href: `${originalSite}/society/comsoc`,
  },
  {
    id: "pes",
    short: "PES",
    name: "Power & Energy Society",
    category: "Technical society",
    color: "#c9d4ad",
    headline: "Powering what\ncomes next.",
    description:
      "Explore how electrical energy is generated, delivered and used. Connect power engineering with the challenge of building a more sustainable future.",
    topics: ["Power systems", "Energy", "Sustainability"],
    href: `${originalSite}/society/pes`,
  },
  {
    id: "sps",
    short: "SPS",
    name: "Signal Processing Society",
    category: "Technical society",
    color: "#cec1d0",
    headline: "Find meaning\nin every signal.",
    description:
      "Discover how signals become information. Explore the ideas behind image, audio and data processing, and their applications in the world around us.",
    topics: ["Signals", "Image & audio", "Data"],
    href: `${originalSite}/society/sps`,
  },
  {
    id: "aps",
    short: "APS",
    name: "Antennas & Propagation Society",
    category: "Technical society",
    color: "#b6cfc1",
    headline: "Ideas that travel\nbeyond boundaries.",
    description:
      "Explore antennas, electromagnetic waves and the ways they travel. Discover the engineering that makes wireless communication possible.",
    topics: ["Antennas", "Electromagnetics", "Propagation"],
    href: `${originalSite}/society/aps`,
  },
  {
    id: "ras",
    short: "RAS",
    name: "Robotics & Automation Society",
    category: "Technical society",
    color: "#e4c791",
    headline: "Give your ideas\na life of their own.",
    description:
      "Bring together sensing, computation and movement. Explore robotics and automation, from the principles of control to intelligent machines.",
    topics: ["Robotics", "Automation", "Control"],
    href: `${originalSite}/society/ras`,
  },
  {
    id: "cas",
    short: "CAS",
    name: "Circuits & Systems Society",
    category: "Technical society",
    color: "#deb9b5",
    headline: "Small circuits.\nExtraordinary potential.",
    description:
      "Explore the building blocks of electronic systems. Discover circuit design, integrated technologies and the connections between theory and implementation.",
    topics: ["Circuits", "VLSI", "Electronic systems"],
    href: `${originalSite}/society/cas`,
  },
  {
    id: "sc",
    short: "Sensors",
    name: "Sensors Council",
    category: "Technical council",
    color: "#bdc7d4",
    headline: "A world worth\nsensing.",
    description:
      "Connect the physical world with the digital one. Explore sensor technologies, measurement and the systems that turn observations into useful information.",
    topics: ["Sensors", "Measurement", "IoT"],
    href: `${originalSite}/society/sc`,
  },
  {
    id: "mtts",
    short: "MTT-S",
    name: "Microwave Theory & Technology Society",
    category: "Technical society",
    color: "#d5c3ca",
    headline: "Explore a higher\nfrequency.",
    description:
      "Discover radio-frequency and microwave engineering. Explore the devices, circuits and techniques behind high-frequency systems.",
    topics: ["Microwaves", "RF design", "High-frequency systems"],
    href: `${originalSite}/society/mtts`,
  },
  {
    id: "aess",
    short: "AESS",
    name: "Aerospace & Electronic Systems Society",
    category: "Technical society",
    color: "#b6cecb",
    headline: "Think beyond\nthe horizon.",
    description:
      "Explore complex electronic systems for aerospace and beyond. Discover the technologies behind navigation, tracking and integrated systems.",
    topics: ["Aerospace", "Navigation", "Electronic systems"],
    href: `${originalSite}/society/aess`,
  },
  {
    id: "wie",
    short: "WIE",
    name: "Women in Engineering",
    category: "Affinity group",
    color: "#c8b9cb",
    headline: "More perspectives.\nGreater possibilities.",
    description:
      "Connect with a community dedicated to women in engineering. Discover opportunities for learning, encouragement and participation in technology.",
    topics: ["Community", "Inclusion", "Engineering"],
    href: `${originalSite}/affinity/wie`,
  },
  {
    id: "sight",
    short: "SIGHT",
    name: "Special Interest Group on Humanitarian Technology",
    category: "Humanitarian group",
    color: "#c4d3b7",
    headline: "Humanity at\nthe heart of technology.",
    description:
      "Explore how engineering can respond to community needs. Connect technical curiosity with a shared purpose: technology that helps people.",
    topics: ["Humanitarian technology", "Community", "Impact"],
    href: `${originalSite}/affinity/sight`,
  },
];

export const highlights = [
  {
    id: "151",
    title: "Hack4Soc 2.0",
    type: "Hackathon",
    date: "03–04 FEB 2024",
    description:
      "A 24-hour challenge bringing student teams together to build for a societal cause.",
    color: "#dfc7ae",
    label: "CODE. COLLABORATE. CREATE.",
    href: `${originalSite}/events/151`,
  },
  {
    id: "153",
    title: "VLSI RoadShow",
    type: "Technical event",
    date: "16–17 MAR 2024",
    description:
      "Exploring the world of very-large-scale integration and electronic design.",
    color: "#c5d7c8",
    label: "FROM LOGIC TO POSSIBILITY.",
    href: `${originalSite}/events/153`,
  },
  {
    id: "149",
    title: "3D Printing Workshop",
    type: "Workshop",
    date: "08–09 MAR 2024",
    description:
      "A hands-on introduction to bringing ideas into the physical world.",
    color: "#dfbca5",
    label: "IMAGINE IT. MAKE IT.",
    href: `${originalSite}/events/149`,
  },
];

export const awards = [
  {
    year: "2024",
    title: "Outstanding Student Chapter Awards",
    detail: "Circuits and Systems Society · Power and Energy Society",
  },
  {
    year: "2023",
    title: "Outstanding Digital Presence",
    detail: "IEEE Bangalore Section · Student Branch Award",
  },
  { year: "2022", title: "Exemplary Student Branch", detail: "IEEE Region 10" },
  {
    year: "2021",
    title: "Global Student Branch Website Contest",
    detail: "Winner",
  },
];
