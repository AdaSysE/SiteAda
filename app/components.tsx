import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="header">
      <Link className="brand-logo" href="/" aria-label="ADA ERP - Início">
        <Image className="brand-mark" src="/brand/simbolo-cor.png" alt="" width={471} height={471} priority />
        <Image className="brand-word" src="/brand/tipografia-cor.png" alt="ADA" width={669} height={158} priority />
      </Link>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/produto">Produto</Link>
        <Link href="/sobre">Sobre a Ada</Link>
        <Link href="/planos">Planos</Link>
        <Link href="/contato">Contato</Link>
      </nav>
      <Link className="header-cta" href="/contato">Garantir Desconto <span>→</span></Link>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <Link className="footer-logo" href="/" aria-label="ADA ERP - Início">
        <Image src="/brand/tipografia-branca.png" alt="ADA" width={669} height={158} />
      </Link>
      <p>ERP feito para e-commerce, desenvolvido para otimizar processos e impulsionar resultados.</p>
      <div>
        <Link href="/produto">Produto</Link>
        <Link href="/sobre">Sobre a Ada</Link>
        <Link href="/planos">Planos</Link>
        <Link href="/contato">Contato</Link>
        <Link href="/privacidade">Política de Privacidade</Link>
        <Link href="/termos-de-uso">Termos de Uso</Link>
        <span className="footer-social">
          <a href="https://www.instagram.com/ada.erp/" target="_blank" rel="noopener noreferrer" aria-label="Instagram da ADA">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
          </a>
          <a href="https://www.linkedin.com/company/ada-erp" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn da ADA">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
          </a>
        </span>
      </div>
      <small>© 2026 ADA ERP. Todos os direitos reservados.</small>
    </footer>
  );
}

export function CTA() {
  return (
    <section className="cta">
      <Image className="tri-watermark" src="/brand/triangulo-roxo.png" alt="" width={710} height={398} style={{ width: 260, height: "auto", right: -40, bottom: -60, top: "auto" }} />
      <div className="cta-info">
        <span>Condições especiais no lançamento</span>
        <h2>Quer ver a ADA funcionando na sua operação?</h2>
        <p>Entre na Lista de Condição Especial e receba 25% de desconto no setup no lançamento.</p>
      </div>
      <div className="cta-action">
        <Link href="/contato">Garantir Desconto <span>→</span></Link>
        <small>Sem compromisso. Nossa equipe entra em contato.</small>
      </div>
    </section>
  );
}

export function ProductVisual({ type = "dashboard" }: { type?: string }) {
  if (type === "invoice") {
    return (
      <div className="ui-window">
        <div className="ui-top"><i /><i /><i /><span>Faturamento</span></div>
        <div className="invoice-card">
          <div className="doc-icon">NF</div>
          <div><small>Nota fiscal eletrônica</small><b>NF-e 000.018.425</b><span className="approved">Autorizada</span></div>
        </div>
        <div className="ui-lines"><span /><span /><span /><span /></div>
        <button className="fake-button">Visualizar DANFE</button>
      </div>
    );
  }
  if (type === "launch") {
    return (
      <div className="ui-window">
        <div className="ui-top"><i /><i /><i /><span>Lista de Condição Especial</span></div>
        <div className="metric-row">
          <div><small>Lançamento previsto</small><b>Dez/2026</b></div>
          <div><small>Desconto no setup</small><b>25% OFF</b></div>
        </div>
        <div className="ui-lines"><span /><span /><span /></div>
        <button className="fake-button">Garantir minha vaga →</button>
      </div>
    );
  }
  if (type === "orders" || type === "stock") {
    const rows = type === "stock"
      ? [["Camiseta Essential", "128 un.", "Disponível"], ["Tênis Urban", "64 un.", "Disponível"], ["Mochila Move", "18 un.", "Estoque baixo"]]
      : [["ADA-1028", "Mercado Livre", "Faturado"], ["ADA-1029", "Shopee", "Em separação"], ["ADA-1030", "Amazon", "Novo pedido"]];
    return (
      <div className="ui-window">
        <div className="ui-top"><i /><i /><i /><span>{type === "stock" ? "Posição de estoque" : "Pedidos de venda"}</span></div>
        <div className="table-head"><span>{type === "stock" ? "Produto" : "Número"}</span><span>{type === "stock" ? "Saldo" : "Canal"}</span><span>Status</span></div>
        {rows.map((r, i) => (
          <div className="table-row" key={i}><b>{r[0]}</b><span>{r[1]}</span><em>{r[2]}</em></div>
        ))}
      </div>
    );
  }
  return (
    <div className="ui-window">
      <div className="ui-top"><i /><i /><i /><span>Visão gerencial</span></div>
      <div className="metric-row">
        <div><small>Faturamento</small><b>R$ 284.920</b><em>+12,8%</em></div>
        <div><small>Pedidos</small><b>1.248</b><em>+8,4%</em></div>
      </div>
      <div className="chart">
        <span style={{ height: "34%" }} /><span style={{ height: "48%" }} /><span style={{ height: "42%" }} /><span style={{ height: "65%" }} /><span style={{ height: "58%" }} /><span style={{ height: "82%" }} /><span style={{ height: "74%" }} />
      </div>
      <div className="chart-labels"><span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span><span>Sáb</span><span>Dom</span></div>
    </div>
  );
}

export function AboutHero({ label, title, highlight, text }: { label: string; title: string; highlight?: string; text: string }) {
  return (
    <section className="about-hero">
      <div className="about-hero-bg">
        <Image className="tri-1" src="/brand/triangulo-branco.png" alt="" width={710} height={398} />
      </div>
      <div className="about-hero-copy">
        <span className="eyebrow"><i />{label}</span>
        <h1>{title} {highlight && <strong>{highlight}</strong>}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

function GrowthVisual() {
  return (
    <div className="growth-visual">
      <Image className="gv-tri gv-tri-1" src="/brand/triangulo-branco.png" alt="" width={710} height={398} />
      <Image className="gv-tri gv-tri-2" src="/brand/triangulo-branco.png" alt="" width={710} height={398} />
      <Image className="gv-tri gv-tri-3" src="/brand/triangulo-branco.png" alt="" width={710} height={398} />
      <svg className="gv-lines" viewBox="0 0 760 540" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polyline points="55,438 315,303 558,166" stroke="#ffffff" strokeOpacity=".3" strokeWidth="1.5" strokeDasharray="2 7" strokeLinecap="round" />
        <circle cx="185" cy="370" r="2.5" fill="#fff" opacity=".5" />
        <circle cx="437" cy="235" r="2.5" fill="#fff" opacity=".5" />
        <circle cx="150" cy="90" r="1.6" fill="#fff" opacity=".35" />
        <circle cx="640" cy="360" r="1.6" fill="#fff" opacity=".3" />
        <circle cx="70" cy="180" r="1.6" fill="#fff" opacity=".3" />
        <circle cx="55" cy="438" r="8" fill="#fff" opacity=".12" />
        <circle cx="55" cy="438" r="3" fill="#fff" opacity=".85" />
        <circle cx="315" cy="303" r="8" fill="#fff" opacity=".12" />
        <circle cx="315" cy="303" r="3" fill="#fff" opacity=".85" />
        <circle cx="558" cy="166" r="9" fill="#fff" opacity=".14" />
        <circle cx="558" cy="166" r="3.4" fill="#fff" opacity=".9" />
      </svg>
    </div>
  );
}

export function PlanosHero({ label, title, highlight, text, cta, ctaHref }: { label: string; title: string; highlight?: string; text: string; cta: string; ctaHref: string }) {
  return (
    <section className="planos-hero">
      <div className="planos-hero-bg">
        <GrowthVisual />
      </div>
      <div className="planos-hero-copy">
        <span className="eyebrow"><i />{label}</span>
        <h1>
          {title}
          <br />
          {highlight && (
            <strong>
              {highlight.split("\n").map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </strong>
          )}
        </h1>
        <p>{text}</p>
        <Link className="primary" href={ctaHref}>{cta} <span>→</span></Link>
      </div>
    </section>
  );
}

export function PageHero({ label, title, highlight, text }: { label: string; title: string; highlight?: string; text: string }) {
  return (
    <section className="page-hero">
      <Image className="tri-watermark" src="/brand/triangulo-roxo.png" alt="" width={710} height={398} style={{ width: 360, height: "auto", left: "50%", top: -40, transform: "translateX(-50%)" }} />
      <span className="eyebrow"><i />{label}</span>
      <h1>{title} {highlight && <strong>{highlight}</strong>}</h1>
      <p>{text}</p>
    </section>
  );
}

export function ProductHero({ label, title, highlight, text }: { label: string; title: string; highlight?: string; text: string }) {
  return (
    <section className="product-hero">
      <Image className="tri-watermark" src="/brand/triangulo-roxo.png" alt="" width={710} height={398} style={{ width: 300, height: "auto", right: -50, top: -30 }} />
      <div className="product-hero-copy">
        <span className="eyebrow"><i />{label}</span>
        <h1>{title} {highlight && <strong>{highlight}</strong>}</h1>
        <p>{text}</p>
        <div className="hero-actions">
          <Link className="primary" href="/planos">Ver planos e preços <span>→</span></Link>
          <Link className="secondary" href="/contato">Falar com a equipe</Link>
        </div>
        <div className="hero-proof">
          <span>✓ Todos os módulos incluídos</span>
          <span>✓ API incluída em todos os planos</span>
          <span>✓ Implantação acompanhada</span>
        </div>
      </div>
      <div className="product-hero-visual">
        <div className="stack-card stack-back"><ProductVisual type="invoice" /></div>
        <div className="stack-card stack-front"><ProductVisual type="dashboard" /></div>
      </div>
    </section>
  );
}

const ADA_WHATSAPP_NUMBER = "5511968283887";

export function ContactHero({ label, title, highlight, text, children }: { label: string; title: string; highlight?: string; text: string; children: ReactNode }) {
  return (
    <section className="contact-hero">
      <Image className="tri-watermark" src="/brand/triangulo-roxo.png" alt="" width={710} height={398} style={{ width: 460, height: "auto", right: -140, bottom: -80, top: "auto" }} />
      <div className="contact-hero-copy">
        <span className="eyebrow"><i />{label}</span>
        <h1>{title} {highlight && <strong>{highlight}</strong>}</h1>
        <p>{text}</p>
        <div className="hero-proof">
          <span>✓ Atendimento via WhatsApp</span>
          <span>✓ Apresentação personalizada da ADA</span>
          <span>✓ Proposta de acordo com a sua estrutura</span>
        </div>
        <a className="whatsapp-link" href={`https://wa.me/${ADA_WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
          Prefere falar diretamente? <strong>Chame a ADA no WhatsApp →</strong>
        </a>
      </div>
      <div className="contact-hero-form">
        {children}
      </div>
    </section>
  );
}

export type FaqItem = { question: string; answer: string };

export function FAQ({ label, title, items, className }: { label: string; title: string; items: FaqItem[]; className?: string }) {
  return (
    <section className={`faq${className ? ` ${className}` : ""}`}>
      <div>
        <span className="section-label">{label}</span>
        <h2>{title}</h2>
      </div>
      <div className="questions">
        {items.map((item) => (
          <details key={item.question}>
            <summary>{item.question}<span>+</span></summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
