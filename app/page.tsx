import Link from "next/link";
import { CTA, Footer, Header, ProductVisual } from "./components";
import { HeroSlider } from "./hero-slider";

const features: [string, string, string][] = [
  ["01", "Comercial", "Pedidos de diferentes canais em um fluxo centralizado."],
  ["02", "Estoque", "Saldos, depósitos e movimentações conectados às vendas."],
  ["03", "Faturamento", "NF-e integrada às informações comerciais e fiscais."],
  ["04", "Financeiro", "Contas, fluxo de caixa e resultados em uma só visão."],
];

export default function Home() {
  return (
    <main>
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

      <CTA />
      <Footer />
    </main>
  );
}
