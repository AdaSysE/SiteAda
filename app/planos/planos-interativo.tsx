"use client";

import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { formatWhatsapp } from "../format-whatsapp";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/adasyserp@gmail.com";

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
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [whatsapp, setWhatsapp] = useState("");
  const formRef = useRef<HTMLDivElement>(null);

  function scrollToForm() {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleSelectPlan(name: string) {
    setSelectedPlan(name);
    scrollToForm();
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok && json.success !== "false") {
        router.push("/obrigado");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label>Nome<input name="nome" placeholder="Seu nome" required /></label>
            <label>Empresa<input name="empresa" placeholder="Nome da empresa" /></label>
          </div>
          <div className="form-row">
            <label>WhatsApp<input name="whatsapp" placeholder="(00) 00000-0000" inputMode="numeric" value={whatsapp} onChange={(e) => setWhatsapp(formatWhatsapp(e.target.value))} /></label>
            <label>E-mail<input name="email" type="email" placeholder="voce@email.com" required /></label>
          </div>
          <label>Plano de interesse
            <select name="plano" value={selectedPlan} onChange={(e) => setSelectedPlan(e.target.value)} required>
              <option value="" disabled>Selecione um plano</option>
              <option>ADA Básico</option>
              <option>ADA Profissional</option>
              <option>ADA Avançado</option>
              <option>Ainda não sei / preciso de orientação</option>
            </select>
          </label>
          <label>
            <span>Mensagem <span className="optional">(opcional)</span></span>
            <textarea name="mensagem" rows={3} placeholder="Conte mais, se quiser" />
          </label>
          <input type="hidden" name="_subject" value="Novo interesse em plano pelo site ADA" />
          <input type="hidden" name="_cc" value="lucas.amim@hotmail.com" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Enviando..." : "Enviar mensagem"} <span>→</span>
          </button>
          {status === "error" && (
            <p className="form-error">Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.</p>
          )}
          <p className="form-disclaimer">
            Ao enviar, você concorda em receber o contato da equipe ADA. Seus dados serão utilizados somente para dar continuidade ao seu atendimento. Leia nossa{" "}
            <Link href="/privacidade">Política de Privacidade</Link>.
          </p>
        </form>
      </section>
    </>
  );
}
