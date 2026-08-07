import type { Metadata } from "next";
import Link from "next/link";
import { ContactHero, Footer, Header } from "../components";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a equipe da ADA e entenda como o ERP pode ajudar a sua operação de e-commerce.",
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
        <div className="contact-form-card" id="contato-form">
          <h2>Fale com a ADA</h2>
          <p>Preencha seus dados e diga como podemos ajudar. Você não precisa informar todos os detalhes da sua operação neste primeiro contato.</p>
          <form action="https://formsubmit.co/adasyserp@gmail.com" method="POST">
            <div className="form-row">
              <label>Nome<input name="nome" placeholder="Seu nome" required /></label>
              <label>Empresa<input name="empresa" placeholder="Nome da empresa" /></label>
            </div>
            <div className="form-row">
              <label>WhatsApp<input name="whatsapp" placeholder="(00) 00000-0000" /></label>
              <label>E-mail<input name="email" type="email" placeholder="voce@email.com" required /></label>
            </div>
            <label>Motivo do contato
              <select name="motivo" defaultValue="" required>
                <option value="" disabled>Selecione uma opção</option>
                <option>Quero conhecer a ADA</option>
                <option>Quero entender os planos e valores</option>
                <option>Quero solicitar uma proposta</option>
                <option>Quero tirar uma dúvida</option>
                <option>Quero falar sobre migração</option>
                <option>Outro assunto</option>
              </select>
            </label>
            <label>Mensagem <span className="optional">(opcional)</span>
              <textarea name="mensagem" rows={3} placeholder="Conte mais, se quiser" />
            </label>
            <input type="hidden" name="_next" value="https://adasys.com.br/obrigado" />
            <input type="hidden" name="_cc" value="lucas.amim@hotmail.com" />
            <input type="hidden" name="_subject" value="Novo contato pelo site ADA" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <button type="submit">Enviar mensagem <span>→</span></button>
            <p className="form-disclaimer">
              Ao enviar, você concorda em receber o contato da equipe ADA. Seus dados serão utilizados somente para dar continuidade ao seu atendimento. Leia nossa{" "}
              <Link href="/privacidade">Política de Privacidade</Link>.
            </p>
          </form>
        </div>
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
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}
