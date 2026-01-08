import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BUSINESS, SERVICE_AREAS } from "@/lib/constants";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://romanbuiltconstruction.com"),
  title: {
    default: `${BUSINESS.name} | Licensed General Contractor in San Diego`,
    template: `%s | ${BUSINESS.name}`,
  },
  description: `${BUSINESS.name} is San Diego's trusted general contractor for residential and commercial construction. Kitchen remodels, bathroom renovations, room additions, custom homes & more. Call ${BUSINESS.phoneFormatted} for a free estimate.`,
  keywords: [
    "general contractor San Diego",
    "construction company San Diego",
    "home remodeling contractor",
    "kitchen remodeling San Diego",
    "bathroom renovation San Diego",
    "room addition contractor",
    "ADU construction San Diego",
    "commercial construction San Diego",
    "custom home builder San Diego",
    ...SERVICE_AREAS.cities.map(city => `general contractor ${city}`)
  ],
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://romanbuiltconstruction.com",
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} | Licensed General Contractor in San Diego`,
    description: `San Diego's trusted general contractor for residential and commercial construction. Quality craftsmanship since ${BUSINESS.founded}. Call ${BUSINESS.phoneFormatted} for a free estimate.`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${BUSINESS.name} - Quality Construction in San Diego`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS.name} | Licensed General Contractor in San Diego`,
    description: `San Diego's trusted general contractor. Kitchen remodels, bathroom renovations, room additions & more. Call ${BUSINESS.phoneFormatted}`,
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual code
  },
  alternates: {
    canonical: "https://romanbuiltconstruction.com",
  },
  other: {
    "geo.region": "US-CA",
    "geo.placename": "San Diego",
    "geo.position": "32.7157;-117.1611",
    ICBM: "32.7157, -117.1611",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#E07A5F" />
      </head>
      <body className={`${montserrat.variable} ${openSans.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
