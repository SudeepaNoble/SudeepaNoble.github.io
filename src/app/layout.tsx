import type { Metadata, Viewport } from "next";
// Self-hosted variable fonts (via @fontsource) instead of next/font/google —
// this keeps builds fully offline-reliable and avoids a runtime dependency
// on fonts.googleapis.com.
import "@fontsource-variable/fraunces/opsz.css";
import "@fontsource-variable/inter/opsz.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { themeInitScript } from "@/lib/theme-script";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  metadataBase: new URL("https://sudeepanoble.github.io"),
  title: "Sudeepa's About",
  description: profile.seo.description,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: profile.seo.title,
    description: profile.seo.description,
    type: "website",
    url: "/",
    siteName: profile.name,
    images: [{ url: "/icon.png", width: 512, height: 512, alt: "Sudeepa Kolli portrait" }],
  },
  twitter: {
    card: "summary_large_image",
    title: profile.seo.title,
    description: profile.seo.description,
    images: ["/icon.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF7F0" },
    { media: "(prefers-color-scheme: dark)", color: "#131019" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: profile.name,
              url: "https://sudeepanoble.github.io/",
              email: "sudeepanoble@gmail.com",
              jobTitle: "AI Product Manager & Builder",
              sameAs: [
                "https://www.linkedin.com/in/sudeepanoble/",
                "https://x.com/i_sudeepa",
                "https://github.com/SudeepaNoble",
                "https://sudeepa-kolli.medium.com",
              ],
            }),
          }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
