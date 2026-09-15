import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "@fontsource-variable/manrope";
import "@fontsource-variable/dm-sans";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/fraunces/wght-italic.css";
import "./palette.css";
import "./globals.css";
import "./light.css";

export const metadata: Metadata = {
  title: "IEEE RVCE — A place for curious minds.",
  description:
    "Discover the IEEE Student Branch at RV College of Engineering, Bengaluru. Explore our societies, technical activities and a community advancing technology for humanity.",
  icons: { icon: "/images/rvce-mark.png" },
  openGraph: {
    title: "IEEE RVCE — A place for curious minds.",
    description:
      "Many disciplines. One shared purpose. Explore IEEE at RV College of Engineering.",
    type: "website",
    locale: "en_IN",
  },
};
export const viewport: Viewport = {
  themeColor: "#faf9f5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Grammarly adds body attributes before hydration. Limit tolerance to this node. */}
      <body suppressHydrationWarning>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
