import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/global/navbar";
import Footer from "@/components/footer";
import { Providers } from "./providers";
import Subscribe from "@/components/subscribe";
import AllSections from "./_components/all-sections";

export const metadata: Metadata = {
  title: "SECTION STUDIO | Music • Art • Fashion • Film • Travel",
  description: "We celebrate African creativity at the intersection of Music, Art, Fashion, Film, and Travel Culture",
  icons: {
    icon: [{url: '/favicon/favicon-32x32.png', type: 'image/png', rel: 'icon'}],
    shortcut: [{url: '/favicon/favicon-32x32.png', type: 'image/png', rel: 'icon'}],
    apple: '/favicon/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon',
      url: '/favicon/apple-touch-icon.png',
    },
  },
  openGraph: {
    images: ['/asset/logo-bg.png'],
  },
  twitter: {
    creator: '@thesectionhq',
    creatorId: '1813659278718242816',
    images: ['/asset/logo-bg.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Vollkorn&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <Providers>
          <Navbar />
          {children}
          <Subscribe />
          <AllSections />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
