"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductVisual } from "./components";

type Slide = {
  eyebrow: string;
  title: string;
  highlight: string;
  text: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  proof: string[];
  visual: string;
  card: { icon: string; title: string; text: string };
};

const slides: Slide[] = [
  {
    eyebrow: "Lançamento em dezembro de 2026",
    title: "Garanta sua",
    highlight: "Condição Especial.",
    text: "Entre agora na Lista de Condição Especial e garanta 25% de desconto no setup quando a ADA chegar ao mercado.",
    primary: { label: "Garantir Desconto →", href: "/contato" },
    secondary: { label: "Ver planos", href: "/planos" },
    proof: ["✓ 25% de desconto no setup", "✓ Prioridade na implantação", "✓ Condição exclusiva de lançamento"],
    visual: "launch",
    card: { icon: "🎁", title: "Condição Especial", text: "25% off no setup" },
  },
  {
    eyebrow: "ERP especializado em e-commerce",
    title: "Seu e-commerce cresce.",
    highlight: "A gestão acompanha.",
    text: "A ADA conecta pedidos, estoque, compras, NF-e e financeiro para sua operação trabalhar com menos tarefas manuais e mais controle.",
    primary: { label: "Conhecer a ADA →", href: "/produto" },
    secondary: { label: "Ver planos e preços", href: "/planos" },
    proof: ["✓ Implantação acompanhada", "✓ Suporte via WhatsApp", "✓ API incluída"],
    visual: "dashboard",
    card: { icon: "↗", title: "Fluxo integrado", text: "Pedido → NF-e → financeiro" },
  },
  {
    eyebrow: "Automação para o dia a dia",
    title: "Menos trabalho manual,",
    highlight: "mais tempo para crescer.",
    text: "Tarefas repetitivas de pedido, estoque e faturamento acontecem sozinhas — sua equipe foca em vender e atender melhor.",
    primary: { label: "Conhecer a ADA →", href: "/produto" },
    secondary: { label: "Ver planos e preços", href: "/planos" },
    proof: ["✓ Menos retrabalho", "✓ Processos automáticos", "✓ Equipe focada no crescimento"],
    visual: "invoice",
    card: { icon: "⚡", title: "Automático", text: "NF-e emitida sem retrabalho" },
  },
];

const AUTOPLAY_MS = 7000;

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  function goTo(i: number) {
    setActive(i);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_MS);
  }

  return (
    <section className="hero home-hero">
      <button className="hero-arrow prev" aria-label="Slide anterior" onClick={() => goTo((active - 1 + slides.length) % slides.length)}>‹</button>
      <button className="hero-arrow next" aria-label="Próximo slide" onClick={() => goTo((active + 1) % slides.length)}>›</button>

      {slides.map((s, i) => (
        <div className={`hero-slide${i === active ? " is-active" : ""}`} key={s.title} aria-hidden={i !== active}>
          <div className="hero-copy">
            <div className="eyebrow"><i />{s.eyebrow}</div>
            {i === active ? (
              <h1 className="hero-title">{s.title}<br /><strong>{s.highlight}</strong></h1>
            ) : (
              <p className="hero-title" aria-hidden="true">{s.title}<br /><strong>{s.highlight}</strong></p>
            )}
            <p>{s.text}</p>
            <div className="hero-actions">
              <Link className="primary" href={s.primary.href}>{s.primary.label}</Link>
              <Link className="secondary" href={s.secondary.href}>{s.secondary.label}</Link>
            </div>
            <div className="hero-proof">
              {s.proof.map((p) => <span key={p}>{p}</span>)}
            </div>
          </div>
          <div className="hero-visual">
            <Image className="tri-watermark tri-hero" src="/brand/triangulo-roxo.png" alt="" width={710} height={398} />
            <ProductVisual type={s.visual} />
            <div className="floating-card fc-one">
              <span>{s.card.icon}</span>
              <div><b>{s.card.title}</b><small>{s.card.text}</small></div>
            </div>
          </div>
        </div>
      ))}

      <div className="hero-dots">
        {slides.map((s, i) => (
          <button key={s.title} className={i === active ? "is-active" : ""} aria-label={`Ir para slide ${i + 1}`} onClick={() => goTo(i)} />
        ))}
      </div>
    </section>
  );
}
