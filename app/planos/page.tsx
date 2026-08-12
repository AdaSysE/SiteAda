import type { Metadata } from "next";
import { Footer, Header, PlanosHero } from "../components";
import PlanosInterativo from "./planos-interativo";

const title = "Planos";
const description = "Conheça os planos da ADA e solicite uma proposta personalizada para a sua operação de e-commerce.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/planos" },
  openGraph: {
    type: "website",
    url: "/planos",
    title: `${title} | ADA ERP`,
    description,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ADA ERP" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ADA ERP`,
    description,
    images: ["/og-image.png"],
  },
};

export default function Precos() {
  return (
    <main>
      <Header />
      <PlanosHero
        label="Planos"
        title="Planos que acompanham"
        highlight={"o crescimento\nda sua operação."}
        text="Todos os planos incluem os módulos e a API da ADA. Conhecemos sua operação para indicar a estrutura ideal e preparar uma proposta personalizada."
        cta="Conhecer os planos"
        ctaHref="#planos-grid"
      />

      <PlanosInterativo />

      <Footer />
    </main>
  );
}
