import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL("https://profile.shirokodev.site/"),
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
    google: "0OtymWYNjcT0a_R2_ULRMuZrJa1-ZJmd-o8QWTDV64k",
    other: {
      "dmca-site-verification": "TE9xajJCR2V2d2tsVVhMRUZ2SWdwdz090",
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
        url: "/avatar.webp",
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
    images: "/avatar.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning translate='no' lang="en">
      {children}
    </html>
  )
}
