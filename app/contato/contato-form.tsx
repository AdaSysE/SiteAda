"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { formatWhatsapp } from "../format-whatsapp";
import { WEB3FORMS_ACCESS_KEY, WEB3FORMS_ENDPOINT } from "../web3forms";

export default function ContatoForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [whatsapp, setWhatsapp] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "Novo contato pelo site ADA",
          from_name: "Site ADA",
          replyto: data.email,
        }),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        router.push("/obrigado");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="contact-form-card" id="contato-form">
      <h2>Fale com a ADA</h2>
      <p>Preencha seus dados e diga como podemos ajudar. Você não precisa informar todos os detalhes da sua operação neste primeiro contato.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Nome<input name="nome" placeholder="Seu nome" required /></label>
          <label>Empresa<input name="empresa" placeholder="Nome da empresa" /></label>
        </div>
        <div className="form-row">
          <label>WhatsApp<input name="whatsapp" placeholder="(00) 00000-0000" inputMode="numeric" value={whatsapp} onChange={(e) => setWhatsapp(formatWhatsapp(e.target.value))} /></label>
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
        <label>
          <span>Mensagem <span className="optional">(opcional)</span></span>
          <textarea name="mensagem" rows={3} placeholder="Conte mais, se quiser" />
        </label>
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
    </div>
  );
}
