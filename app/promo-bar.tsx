"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const DISMISS_KEY = "ada-promo-dismissed";

export default function PromoBar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (localStorage.getItem(DISMISS_KEY) === "1") {
      setVisible(false);
    }
  }, []);

  if (!visible) return null;

  function handleClose() {
    setVisible(false);
    localStorage.setItem(DISMISS_KEY, "1");
  }

  return (
    <div className="promo-bar">
      <div className="promo-bar-inner">
        <p className="promo-bar-text">
          <span className="promo-bar-full">
            Condição de lançamento: <span className="promo-bar-badge">25% de desconto</span> na implantação da ADA.
          </span>
          <span className="promo-bar-short">
            <span className="promo-bar-badge">25% OFF</span> na implantação da ADA
          </span>
        </p>
        <Link className="promo-bar-cta" href="/contato#contato-form">Entrar na lista <span>→</span></Link>
      </div>
      <button type="button" className="promo-bar-close" aria-label="Fechar aviso de desconto" onClick={handleClose}>×</button>
    </div>
  );
}
