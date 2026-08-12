import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../components";

export const metadata: Metadata = {
  title: "Obrigado pelo contato",
  description: "Mensagem enviada com sucesso. A equipe ADA entrará em contato em breve.",
  alternates: { canonical: "/obrigado" },
  robots: { index: false, follow: true },
};

export default function Obrigado() {
  return (
    <main>
      <Header />
      <section className="thanks-section">
        <div className="thanks-card">
          <span className="thanks-check">✓</span>
          <h1>Mensagem enviada com sucesso!</h1>
          <p>Obrigado por entrar em contato com a ADA. Em breve nossa equipe vai retornar com mais informações.</p>
          <Link className="primary" href="/">Voltar para o início <span>→</span></Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
