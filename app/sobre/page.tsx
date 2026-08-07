import type { Metadata } from "next";
import { AboutHero, CTA, Footer, Header } from "../components";

export const metadata: Metadata = {
  title: "Sobre a ADA",
  description: "Conheça a origem da ADA, o ERP feito para e-commerce a partir de mais de 13 anos de experiência no setor.",
};

export default function Sobre() {
  return (
    <main>
      <Header />
      <AboutHero
        label="Sobre a ADA"
        title="Experiência de operação transformada em"
        highlight="produto."
        text="A ADA nasceu de anos vivendo os desafios do e-commerce e de mais de três anos construindo um ERP pensado para resolvê-los de verdade."
      />

      <section className="story">
        <div>
          <span className="section-label">Nossa origem</span>
          <h2>Não começamos pela tecnologia. Começamos pela operação.</h2>
        </div>
        <div>
          <p>A ADA presta uma homenagem a Ada Lovelace, pioneira da programação. Mas a origem do produto está no cotidiano do e-commerce brasileiro: pedidos em diferentes canais, estoque que precisa acompanhar a venda, faturamento fiscal e financeiro que não podem trabalhar separados.</p>
          <p>O sistema combina mais de 13 anos de experiência no setor com 7 anos de desenvolvimento para e-commerce. Essa bagagem orienta cada decisão do produto e evita que a tecnologia seja tratada como um fim em si mesma.</p>
        </div>
      </section>

      <section className="timeline">
        <article>
          <b>01</b>
          <span>Experiência</span>
          <h3>O problema foi vivido antes de ser programado</h3>
          <p>Anos acompanhando operações de e-commerce mostraram onde o retrabalho realmente nasce.</p>
        </article>
        <article>
          <b>02</b>
          <span>Construção</span>
          <h3>Mais de três anos desenvolvendo a base</h3>
          <p>Módulo por módulo, a ADA ganhou profundidade comercial, operacional, financeira e fiscal.</p>
        </article>
        <article>
          <b>03</b>
          <span>Agora</span>
          <h3>Reta final e preparação para o lançamento</h3>
          <p>Validações, regressão e homologação dos fluxos críticos antes das primeiras implantações.</p>
        </article>
      </section>

      <section className="belief">
        <span className="section-label light">No que acreditamos</span>
        <blockquote>&ldquo;Um bom ERP não deveria chamar atenção. Deveria simplesmente deixar a operação fluir.&rdquo;</blockquote>
        <div>
          <p><b>Operação antes da aparência</b><br />Funcionalidades precisam economizar trabalho no fim do processo.</p>
          <p><b>Integração sem aprisionamento</b><br />A API permite que a ADA complemente hubs e ferramentas já usadas.</p>
          <p><b>Proximidade com o cliente</b><br />Implantação e suporte fazem parte do produto, não são etapas secundárias.</p>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
