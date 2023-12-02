import type { Metadata } from "next";
import "./globals.css";
import { config } from "dotenv";
config();

export const metadata: Metadata = {
  metadataBase: new URL("https://me.shirokodev.site/"),
  title: "Shiroko's Profile",
  description: "Hey guys! Welcome to my website:3",
  applicationName: "Personal Portfolio",
  authors: {
    url: "https://www.facebook.com/sunaookamishirokodev",
    name: "Sunaookami Shiroko",
  },
  generator: "NextJS TailwinCSS TypeScript",
  keywords: ["Shiroko", "Shiroko Dev", "Sunaookami Shiroko", "Personal Website", "Personal Portfolio", "Profile"],
  referrer: "origin-when-cross-origin",
  verification: {
    google: String(process.env.GOOGLE_KEY),
    other: {
      "dmca-site-verification": String(process.env.DMCA_KEY),
    },
  },
  publisher: "Sunaookami Shiroko",
  creator: "Sunaookami Shiroko",
  formatDetection: {
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Shiroko's Profile",
    description: "Hey guys! Welcome to my website:3",
    url: "https://profile.shirokodev.site/",
    siteName: "profile.shirokodev.site",
    locale: "vi_VN",
    countryName: "Vietnam",
    images: [
      {
        url: "/seo.gif",
        alt: "Shiroko Background SEO",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shiroko's Profile",
    description: "Hey guys! Welcome to my website:3",
    site: "profile.shirokodev.site",
    creator: "@shirokoxdev",
    images: "/seo.gif",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning translate="no" lang="en">
      {children}
    </html>
  );
}
