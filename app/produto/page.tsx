import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTA, Footer, Header, ProductHero, ProductVisual } from "../components";

export const metadata: Metadata = {
  title: "Produto",
  description: "Comercial, estoque, faturamento e NF-e, financeiro, compras e gestão: conheça os módulos da ADA.",
};

type Mod = [string, string, string, string[], string];

const mods: Mod[] = [
  ["Comercial", "Do pedido ao faturamento", "Centralize pedidos, clientes e canais de venda em um fluxo único.", ["Pedidos de venda centralizados", "Tabelas e regras de preço", "Visão por canal e marketplace", "Logística"], "orders"],
  ["Estoque", "Estoque confiável em todos os canais", "Controle saldos, movimentações e disponibilidade por depósito, empresa e produto.", ["Múltiplos depósitos e empresas", "Entradas, saídas e transferências", "Inventário", "Kits e componentes"], "stock"],
  ["Faturamento e NF-e", "Fiscal integrado à operação", "Transforme pedidos em faturamento com informações comerciais e fiscais conectadas.", ["Emissão e acompanhamento de NF-e", "Regras fiscais por operação", "Envio de XML e DANFE", "Emissão de Etiqueta de Despacho e Danfe Simplificado"], "invoice"],
  ["Financeiro", "Números que acompanham a operação", "Contas a pagar e receber, fluxo de caixa e resultados organizados.", ["Contas a pagar e receber", "Fluxo de caixa e balancete", "Planos de contas e centros de custo", "Relatórios financeiros detalhados"], "dashboard"],
  ["Compras", "Reposição com mais controle", "Acompanhe fornecedores, pedidos, recebimentos e custos conectados ao estoque.", ["Pedidos e recebimentos de compra", "Histórico de fornecedores", "Notas de Entrada", "Divergências de recebimento"], "orders"],
  ["Gestão e relatórios", "Informação para decidir", "Transforme dados da rotina em uma leitura clara da operação.", ["Dashboards", "Indicadores operacionais e financeiros", "Filtros avançados", "Exportação de dados"], "dashboard"],
];

export default function Produto() {
  return (
    <main>
      <Header />
      <ProductHero
        label="Produto"
        title="Toda a operação em"
        highlight="um único fluxo."
        text="Conheça os módulos que conectam vendas, estoque, compras, faturamento e financeiro sem espalhar o trabalho entre sistemas."
      />

      <section className="flow">
        <p>Do clique ao resultado</p>
        <div className="flow-line">
          <span>Pedido</span><i>→</i><span>Estoque</span><i>→</i><span>Faturamento</span><i>→</i><span>Financeiro</span>
        </div>
      </section>

      <section className="modules">
        {mods.map((m, i) => (
          <article className={`module ${i % 2 ? "reverse" : ""}`} key={m[0]}>
            <div className="module-copy">
              <span className="module-number">0{i + 1}</span>
              <small>{m[1]}</small>
              <h2>{m[0]}</h2>
              <p>{m[2]}</p>
              <ul>{m[3].map((b) => <li key={b}><span>✓</span>{b}</li>)}</ul>
              <Link href="/contato">Quero conhecer este módulo →</Link>
            </div>
            <div className="module-visual">
              <div className="visual-pattern" />
              <ProductVisual type={m[4]} />
            </div>
          </article>
        ))}
      </section>

      <section className="integration">
        <div>
          <span className="section-label light">Integrações</span>
          <h2>A ADA complementa o seu ecossistema</h2>
          <p>Conecte a ADA aos hubs e integradores que sua operação já utiliza. Por meio da API, esses parceiros podem integrar marketplaces, plataformas de e-commerce, pagamentos, logística e outros sistemas ao ERP.</p>
          <Link href="/contato">Conversar sobre integrações →</Link>
        </div>
        <div className="orbit">
          <span className="ada-core"><Image src="/brand/simbolo-cor.png" alt="ADA" width={471} height={471} /></span>
          <span className="orb o1">Hub</span>
          <span className="orb o2">Loja</span>
          <span className="orb o3">Frete</span>
          <span className="orb o4">BI</span>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
