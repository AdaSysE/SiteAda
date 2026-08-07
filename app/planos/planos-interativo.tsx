"use client";

import { useRef, useState } from "react";

type Plan = { name: string; fit: string; popular?: boolean; items: string[] };

const plans: Plan[] = [
  {
    name: "ADA Básico",
    fit: "Para operações que estão estruturando e centralizando sua gestão.",
    items: ["1 empresa (CNPJ)", "5 usuários", "2 aplicativos de conexão", "1.000 NF-e autorizadas/mês"],
  },
  {
    name: "ADA Profissional",
    fit: "Para operações em crescimento, com mais usuários e integrações.",
    popular: true,
    items: ["2 empresas (CNPJ)", "10 usuários", "5 aplicativos de conexão", "3.000 NF-e autorizadas/mês"],
  },
  {
    name: "ADA Avançado",
    fit: "Para operações com maior volume, múltiplas empresas e mais conexões.",
    items: ["5 empresas (CNPJ)", "20 usuários", "10 aplicativos de conexão", "5.000 NF-e autorizadas/mês"],
  },
];

const steps = [
  { n: "01", title: "Conhecemos sua operação" },
  { n: "02", title: "Apresentamos a ADA de acordo com suas necessidades" },
  { n: "03", title: "Definimos o plano e a implantação" },
  { n: "04", title: "Preparamos sua empresa para entrar em operação" },
];

export default function PlanosInterativo() {
  const [selectedPlan, setSelectedPlan] = useState("");
  const formRef = useRef<HTMLDivElement>(null);

  function scrollToForm() {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleSelectPlan(name: string) {
    setSelectedPlan(name);
    scrollToForm();
  }

  return (
    <>
      <section className="pricing-grid" id="planos-grid">
        {plans.map((p) => (
          <article className={p.popular ? "popular" : ""} key={p.name}>
            {p.popular && <span className="popular-tag">Recomendado</span>}
            <small>Plano</small>
            <h2>{p.name}</h2>
            <div className="plan-fit">
              <span>Indicado para</span>
              <p>{p.fit}</p>
            </div>
            <ul>{p.items.map((i) => <li key={i}>✓ {i}</li>)}</ul>
            <div className="included">
              <b>Incluído</b>
              <span>✓ Todos os módulos da ADA</span>
              <span>✓ API da ADA</span>
              <span>✓ Atualizações e melhorias</span>
              <span>✓ Suporte via WhatsApp</span>
              <span>✓ Infraestrutura e hospedagem</span>
            </div>
            <button type="button" onClick={() => handleSelectPlan(p.name)}>Solicitar uma proposta →</button>
          </article>
        ))}
      </section>

      <section className="implantation-band">
        <span className="section-label light">Implantação</span>
        <h2>Implantação personalizada para sua operação</h2>
        <p>Cada empresa possui processos, integrações e necessidades diferentes. Por isso, nossa implantação é planejada de acordo com a realidade da sua operação, incluindo configuração do ambiente, parametrização, migração inicial, treinamento e acompanhamento da entrada em operação.</p>
        <button type="button" onClick={scrollToForm}>Conversar com um especialista</button>
      </section>

      <section className="faq price-faq">
        <div>
          <span className="section-label">Dúvidas sobre os planos</span>
          <h2>O que está incluído?</h2>
        </div>
        <div className="questions">
          <details open>
            <summary>A implantação está dentro da mensalidade?<span>+</span></summary>
            <p>Não. A implantação é contratada separadamente porque envolve configuração, migração orientada e validação dos fluxos da operação.</p>
          </details>
          <details>
            <summary>Como funciona o excedente de NF-e?<span>+</span></summary>
            <p>Caso o limite mensal do plano seja ultrapassado, será cobrado um valor adicional somente por cada NF-e autorizada excedente. O valor por nota será informado na proposta comercial.</p>
          </details>
          <details>
            <summary>Posso mudar de plano depois?<span>+</span></summary>
            <p>Sim. O plano pode acompanhar o crescimento da sua operação.</p>
          </details>
          <details>
            <summary>O que é considerado um aplicativo de conexão?<span>+</span></summary>
            <p>Um aplicativo de conexão liga uma empresa cadastrada na ADA a um hub, integrador ou sistema externo. Vários marketplaces podem compartilhar o mesmo aplicativo quando seus pedidos são enviados pelo mesmo integrador para a mesma empresa na ADA.</p>
            <p>Se os marketplaces precisarem enviar pedidos para empresas diferentes no ERP, será necessário um aplicativo para cada empresa, mesmo que todos utilizem o mesmo integrador.</p>
          </details>
        </div>
      </section>

      <section className="steps-section">
        <span className="section-label">Processo comercial</span>
        <h2>Como funciona</h2>
        <div className="steps">
          {steps.map((s) => (
            <article key={s.n}>
              <b>{s.n}</b>
              <p>{s.title}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="plan-lead" id="solicitar-proposta" ref={formRef}>
        <span className="section-label">Fale com a ADA</span>
        <h2>Solicitar apresentação da ADA</h2>
        <p>Conte um pouco sobre a sua operação. Nossa equipe entra em contato para apresentar a ADA e montar uma proposta de plano e implantação sob medida.</p>
        <form>
          <div className="form-row">
            <label>Nome<input placeholder="Seu nome" /></label>
            <label>Empresa<input placeholder="Nome da empresa" /></label>
          </div>
          <div className="form-row">
            <label>E-mail corporativo<input type="email" placeholder="voce@empresa.com.br" /></label>
            <label>WhatsApp<input placeholder="(00) 00000-0000" /></label>
          </div>
          <div className="form-row">
            <label>Pedidos por mês (aproximado)<input placeholder="Ex.: 1.500" /></label>
            <label>Quantidade de usuários<input placeholder="Ex.: 8" /></label>
          </div>
          <label>Sistemas ou marketplaces utilizados<input placeholder="Ex.: Mercado Livre, Shopee, Bling" /></label>
          <label>Plano de interesse
            <select value={selectedPlan} onChange={(e) => setSelectedPlan(e.target.value)}>
              <option value="" disabled>Selecione um plano</option>
              <option value="ADA Básico">ADA Básico</option>
              <option value="ADA Profissional">ADA Profissional</option>
              <option value="ADA Avançado">ADA Avançado</option>
              <option value="Ainda não sei">Ainda não sei / preciso de orientação</option>
            </select>
          </label>
          <label>Conte um pouco sobre a sua operação<textarea rows={5} placeholder="Fluxos, integrações, particularidades do seu negócio" /></label>
          <button type="button">Solicitar apresentação da ADA</button>
        </form>
      </section>
    </>
  );
}
