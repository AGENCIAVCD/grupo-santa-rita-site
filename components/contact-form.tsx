"use client";

import { ArrowRight, CheckCircle, WarningCircle } from "@phosphor-icons/react";
import { useRef, useState } from "react";

type FormStatus = { type: "idle" | "sending" | "success" | "error"; message?: string };

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>({ type: "idle" });
  const startedAt = useRef(Date.now());

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setStatus({ type: "sending" });

    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, startedAt: startedAt.current }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Não foi possível enviar agora.");
      form.reset();
      startedAt.current = Date.now();
      setStatus({ type: "success", message: "Mensagem enviada. Nossa equipe entrará em contato." });
    } catch (error) {
      setStatus({ type: "error", message: error instanceof Error ? error.message : "Não foi possível enviar agora." });
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <label><span>Nome *</span><input name="name" autoComplete="name" required minLength={2} placeholder="Seu nome…" /></label>
        <label><span>Empresa *</span><input name="company" autoComplete="organization" required minLength={2} placeholder="Nome da empresa…" /></label>
        <label><span>Telefone / WhatsApp *</span><input name="phone" autoComplete="tel" required inputMode="tel" minLength={8} placeholder="Ex.: (11) 00000-0000…" /></label>
        <label><span>E-mail *</span><input name="email" type="email" autoComplete="email" required spellCheck={false} placeholder="Ex.: voce@empresa.com.br…" /></label>
      </div>
      <label>
        <span>Tipo de operação *</span>
        <select name="operation" required defaultValue="">
          <option value="" disabled>Selecione uma opção</option>
          <option>Armazenagem multitemperatura</option>
          <option>Distribuição</option>
          <option>Cross-docking</option>
          <option>Serviços e atividades extras</option>
          <option>Projeto customizado</option>
          <option>Outra necessidade</option>
        </select>
      </label>
      <label><span>Conte um pouco sobre a operação *</span><textarea name="message" required minLength={10} rows={6} placeholder="Volumes, temperaturas, regiões atendidas ou particularidades…" /></label>
      <label className="honeypot" aria-hidden="true"><span>Não preencha</span><input name="website" tabIndex={-1} autoComplete="off" /></label>
      <div className="form-footer">
        <p>Ao enviar, você autoriza o contato da equipe comercial sobre esta solicitação.</p>
        <button type="submit" disabled={status.type === "sending"}>
          {status.type === "sending" ? "Enviando…" : "Enviar solicitação"}<ArrowRight size={18} weight="bold" />
        </button>
      </div>
      <div className={`form-status ${status.type}`} role="status" aria-live="polite">
        {status.type === "success" ? <CheckCircle size={20} weight="fill" /> : null}
        {status.type === "error" ? <WarningCircle size={20} weight="fill" /> : null}
        {status.message}
      </div>
    </form>
  );
}
