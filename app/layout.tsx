import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const siteUrl = "https://andreialbu03.github.io";
const title = "Andrei Albu | Software Engineer";
const description =
  "Personal portfolio of Andrei Albu - Software Engineer at Deloitte specializing in cloud infrastructure, API development, and applied AI/LLM systems.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Andrei Albu",
    images: [{ url: "/images/pfp.jpg", width: 800, height: 800, alt: "Andrei Albu" }],
    type: "profile",
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/images/pfp.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <script
          // Synchronously set theme class from localStorage before React hydrates
          dangerouslySetInnerHTML={{
            __html: `(() => { try { const t = localStorage.getItem('theme'); if (t === 'dark') document.documentElement.classList.add('dark'); else document.documentElement.classList.remove('dark'); } catch(e){} })();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Andrei Albu",
              url: siteUrl,
              jobTitle: "Software Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Deloitte",
              },
              sameAs: [
                "https://github.com/andreialbu03",
                "https://www.linkedin.com/in/andrei-albu-cs/",
                "https://devpost.com/andrei-albu03",
              ],
            }),
          }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
