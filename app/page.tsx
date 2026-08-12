import type { Metadata } from "next";
import Link from "next/link";
import { CTA, FAQ, Footer, Header, ProductVisual, type FaqItem } from "./components";
import { HeroSlider } from "./hero-slider";

const title = "ADA | ERP feito para E-commerce";
const description =
  "ERP especializado em e-commerce com comercial, estoque, compras, faturamento, financeiro, gestão e integrações.";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title,
    description,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ADA ERP" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

const features: [string, string, string][] = [
  ["01", "Comercial", "Pedidos de diferentes canais em um fluxo centralizado."],
  ["02", "Estoque", "Saldos, depósitos e movimentações conectados às vendas."],
  ["03", "Faturamento", "NF-e integrada às informações comerciais e fiscais."],
  ["04", "Financeiro", "Contas, fluxo de caixa e resultados em uma só visão."],
];

const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ADA ERP",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://adasys.com.br",
  description,
  featureList: ["Comercial", "Estoque", "Compras", "Faturamento e NF-e", "Financeiro", "Gestão e relatórios"],
};

const faqItems: FaqItem[] = [
  {
    question: "O que é a ADA?",
    answer: "A ADA é um ERP especializado em e-commerce, com os módulos de Comercial, Estoque, Compras, Faturamento e NF-e, Financeiro e Gestão conectados em um único fluxo de operação.",
  },
  {
    question: "Para que tipo de operação a ADA é indicada?",
    answer: "Para operações de e-commerce que vendem em múltiplos canais e marketplaces e precisam de pedidos, estoque, faturamento e financeiro conectados, sem retrabalho manual entre sistemas.",
  },
  {
    question: "Quais módulos estão incluídos nos planos?",
    answer: "Todos os planos da ADA incluem os mesmos módulos — Comercial, Estoque, Compras, Faturamento e NF-e, Financeiro e Gestão e relatórios — além de API. Os planos variam pelo número de empresas, usuários, integrações e volume de NF-e.",
  },
  {
    question: "Como funciona o preço da ADA?",
    answer: "A ADA tem três planos (Básico, Profissional e Avançado) com proposta personalizada de acordo com o tamanho e as necessidades da sua operação. Fale com a equipe pela página de Contato para receber uma proposta.",
  },
  {
    question: "Como funciona a implantação?",
    answer: "A implantação é acompanhada pela equipe da ADA: primeiro entendemos a operação, apresentamos o sistema de acordo com as necessidades, definimos o plano e preparamos a empresa para começar a operar.",
  },
  {
    question: "Quando a ADA estará disponível?",
    answer: "O lançamento da ADA está previsto para dezembro de 2026. Quem entrar na Lista de Condição Especial antes do lançamento garante 25% de desconto no setup.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <HeroSlider />

      <section className="flow">
        <p>Uma operação conectada de ponta a ponta</p>
        <div className="flow-line">
          <span>Pedido recebido</span><i>→</i><span>Estoque atualizado</span><i>→</i><span>NF-e autorizada</span><i>→</i><span>Financeiro gerado</span>
        </div>
      </section>

      <section className="home-intro">
        <span className="section-label">Por que a ADA</span>
        <h2>Um ERP não deveria criar trabalho.<br />Deveria deixar a operação fluir.</h2>
        <p>Cada fluxo da ADA parte de uma pergunta simples: isso reduz trabalho manual ou apenas muda o trabalho de lugar?</p>
      </section>

      <section className="feature-grid">
        {features.map((f) => (
          <article key={f[0]}>
            <span>{f[0]}</span>
            <h3>{f[1]}</h3>
            <p>{f[2]}</p>
            <Link href="/produto">Explorar módulo →</Link>
          </article>
        ))}
      </section>

      <section className="split-showcase">
        <div className="module-visual">
          <div className="visual-pattern" />
          <ProductVisual type="orders" />
        </div>
        <div>
          <span className="section-label">Operação primeiro</span>
          <h2>Do pedido à gestão, sem informações perdidas no caminho</h2>
          <p>A ADA foi desenhada a partir da experiência real de quem conhece e-commerce por dentro. Os módulos conversam entre si para que cada etapa continue de onde a anterior parou.</p>
          <ul className="check-list">
            <li>✓ Visão centralizada de pedidos e canais</li>
            <li>✓ Estoque atualizado ao longo do processo</li>
            <li>✓ Faturamento conectado ao financeiro</li>
            <li>✓ Dados confiáveis para decidir</li>
          </ul>
          <Link className="text-link" href="/sobre">Conheça a história da ADA →</Link>
        </div>
      </section>

      <FAQ label="Perguntas frequentes" title="Tudo que você precisa saber sobre a ADA" items={faqItems} />

      <CTA />
      <Footer />
    </main>
  );
}
