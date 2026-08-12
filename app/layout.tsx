import type { Metadata, Viewport } from "next";
import { Montserrat, Inter } from "next/font/google";
import PromoBar from "./promo-bar";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteTitle = "ADA | ERP feito para E-commerce";
const siteDescription =
  "ERP especializado em e-commerce com comercial, estoque, compras, faturamento, financeiro, gestão e integrações.";

export const metadata: Metadata = {
  metadataBase: new URL("https://adasys.com.br"),
  title: {
    default: siteTitle,
    template: "%s | ADA ERP",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "ADA ERP",
    title: siteTitle,
    description: siteDescription,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ADA ERP" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#5B499E",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ADA ERP",
  url: "https://adasys.com.br",
  logo: "https://adasys.com.br/brand/simbolo-cor.png",
  description: siteDescription,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+55-11-96828-3887",
    areaServed: "BR",
    availableLanguage: "pt-BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} ${inter.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <PromoBar />
        {children}
      </body>
    </html>
  );
}
