import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://rajbprajapati.github.io";

export const viewport: Viewport = {
  themeColor: "#060913",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${portfolioData.personal.name} | Backend & Distributed Systems Engineer | Tech Lead`,
    template: `%s | ${portfolioData.personal.name}`,
  },
  description:
    "Backend & Distributed Systems Engineer with 5+ years shipping production platforms across power-grid simulation, IoT, and bioinformatics. Multi-cloud certified (AWS Solutions Architect, GCP Cloud Developer, GCP Data Engineer).",
  keywords: [
    "Raj B Prajapati",
    "Raj Prajapati",
    "Backend Engineer",
    "Distributed Systems Engineer",
    "Tech Lead",
    "AWS Certified Solutions Architect",
    "GCP Professional Cloud Developer",
    "GCP Professional Data Engineer",
    "Power Systems Simulation",
    "GridLAB-D",
    "Kotlin",
    "Python",
    "Elasticsearch",
    "DA-IICT",
    "Infocusp Innovations",
  ],
  authors: [{ name: portfolioData.personal.name, url: siteUrl }],
  creator: portfolioData.personal.name,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: siteUrl,
    title: `${portfolioData.personal.name} | Backend & Distributed Systems Engineer`,
    description:
      "Architecting distributed engines, cutting cloud spend by 80%, and scaling simulation throughput 10x. Multi-cloud certified across AWS & GCP.",
    siteName: `${portfolioData.personal.name} Portfolio`,
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: `${portfolioData.personal.name} - Backend & Distributed Systems Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.personal.name} | Distributed Systems & Cloud Engineer`,
    description:
      "Backend & Distributed Systems Engineer with 5+ years shipping production platforms. Triple cloud certified (AWS + GCP).",
    creator: "@r11_raj",
    images: ["/profile.jpg"],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioData.personal.name,
    alternateName: "Raj Prajapati",
    jobTitle: "Software Engineer 3 & Tech Lead",
    worksFor: {
      "@type": "Organization",
      name: "Infocusp Innovations LLP",
      location: "Ahmedabad, India",
    },
    url: siteUrl,
    image: `${siteUrl}/profile.jpg`,
    email: portfolioData.personal.email,
    telephone: portfolioData.personal.phone,
    address: {
      "@type": "PostalAddress",
      addressRegion: "Gujarat",
      addressCountry: "India",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Dhirubhai Ambani Institute of Information and Communication Technology (DA-IICT)",
      },
      {
        "@type": "EducationalOrganization",
        name: "Parul University",
      },
      {
        "@type": "EducationalOrganization",
        name: "Wrocław University of Science and Technology",
      },
    ],
    hasCredential: portfolioData.certifications.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      name: c.title,
      recognizedBy: {
        "@type": "Organization",
        name: c.issuer,
      },
      validFrom: c.date,
    })),
    sameAs: [
      portfolioData.personal.socialLinks.linkedin,
      portfolioData.personal.socialLinks.github,
      portfolioData.personal.socialLinks.twitter,
      portfolioData.personal.socialLinks.youtube,
    ],
    knowsAbout: [
      "Distributed Systems",
      "Microservices Architecture",
      "Event-Driven Architecture",
      "Cloud Architecture (AWS & GCP)",
      "High-Throughput Ingestion Pipelines",
      "Elasticsearch Cluster Upgrades",
      "Power-Grid Simulation & Decarbonization",
      "Kotlin",
      "Python",
      "FastAPI",
      "Docker",
      "Terraform",
    ],
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('theme');
                  if (t === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#060913] dark:text-slate-100 antialiased font-sans selection:bg-cyan-500/25 selection:text-cyan-600 dark:selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
