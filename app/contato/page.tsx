import type { Metadata } from "next";
import Link from "next/link";
import { ContactHero, Footer, Header } from "../components";
import ContatoForm from "./contato-form";

const title = "Contato";
const description = "Fale com a equipe da ADA e entenda como o ERP pode ajudar a sua operação de e-commerce.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contato" },
  openGraph: {
    type: "website",
    url: "/contato",
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

export default function Contato() {
  return (
    <main>
      <Header />
      <ContactHero
        label="Contato"
        title="Vamos entender"
        highlight="a sua operação."
        text="Conte um pouco sobre sua empresa. A partir dessas informações, entraremos em contato para conhecer suas necessidades e mostrar como a ADA pode fazer parte da sua operação."
      >
        <ContatoForm />
      </ContactHero>

      <section className="reasons-section">
        <span className="section-label">Fale com a ADA</span>
        <h2>Comece pelo que você precisa saber.</h2>
        <p>Você não precisa ter todas as informações da sua operação em mãos para falar com a gente. Entre em contato para tirar dúvidas, conhecer a ADA, entender como funcionam os planos ou solicitar uma proposta.</p>
        <div className="reasons-grid">
          <article>
            <h3>Tirar uma dúvida</h3>
            <p>Fale com a equipe sobre o sistema, funcionalidades, integrações ou contratação.</p>
          </article>
          <article>
            <h3>Conhecer a ADA</h3>
            <p>Agende uma apresentação para ver como o sistema funciona na prática.</p>
          </article>
          <article>
            <h3>Solicitar uma proposta</h3>
            <p>Receba informações sobre os planos, a implantação e as condições comerciais.</p>
          </article>
        </div>
        <Link className="primary" href="#contato-form">Falar com a ADA <span>→</span></Link>
      </section>

      <section className="support-band">
        <div className="support-band-inner">
          <div>
            <span className="section-label">Atendimento próximo</span>
            <h2>Você será acompanhado desde o primeiro contato.</h2>
            <p>Da apresentação à implantação, o contato é conduzido por uma equipe que conhece a ADA e entende os desafios de uma operação de e-commerce. Assim, cada etapa é planejada de acordo com a realidade da sua empresa.</p>
          </div>
          <ul className="check-list">
            <li>✓ Conversa direcionada à sua operação</li>
            <li>✓ Planejamento da implantação</li>
            <li>✓ Treinamento da equipe</li>
            <li>✓ Acompanhamento da entrada em operação</li>
            <li>✓ Suporte via WhatsApp</li>
            <li>✓ E-mail: <a href="mailto:comercial@adasys.com.br">comercial@adasys.com.br</a></li>
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}
