"use client";

import { useState } from "react";
import { siteContent } from "@/lib/data/content";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!resp.ok) {
        const errData = await resp.json();
        throw new Error(errData.message || "Error al enviar el mensaje");
      }

      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  }

  if (status === "success") {
    return (
      <div className="bg-brand-gray p-12 text-center rounded-sm border border-brand-amber/20 animate-in fade-in zoom-in duration-500">
        <div className="w-16 h-16 bg-brand-amber text-brand-navy rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-brand-navy mb-4">¡Mensaje Enviado!</h3>
        <p className="text-gray-600 mb-8">
          Gracias por contactarnos. Un especialista de nuestra área comercial se comunicará con usted en menos de 24 horas.
        </p>
        <button 
          onClick={() => setStatus("idle")}
          className="text-brand-navy font-bold uppercase tracking-widest text-xs underline underline-offset-4"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-brand-navy/60">Nombre Completo *</label>
          <input
            required
            type="text"
            id="name"
            name="name"
            placeholder="Ej: Juan Pérez"
            className="w-full bg-brand-gray border border-gray-100 p-4 rounded-sm focus:border-brand-amber focus:ring-1 focus:ring-brand-amber outline-none transition-all"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-brand-navy/60">Correo Electrónico *</label>
          <input
            required
            type="email"
            id="email"
            name="email"
            placeholder="juan@ejemplo.com"
            className="w-full bg-brand-gray border border-gray-100 p-4 rounded-sm focus:border-brand-amber focus:ring-1 focus:ring-brand-amber outline-none transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-brand-navy/60">Teléfono / WhatsApp *</label>
          <input
            required
            type="tel"
            id="phone"
            name="phone"
            placeholder="+51 987 654 321"
            className="w-full bg-brand-gray border border-gray-100 p-4 rounded-sm focus:border-brand-amber focus:ring-1 focus:ring-brand-amber outline-none transition-all"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="building" className="text-xs font-bold uppercase tracking-widest text-brand-navy/60">Edificio / Condominio</label>
          <input
            type="text"
            id="building"
            name="building"
            placeholder="Nombre del edificio"
            className="w-full bg-brand-gray border border-gray-100 p-4 rounded-sm focus:border-brand-amber focus:ring-1 focus:ring-brand-amber outline-none transition-all"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-brand-navy/60">¿En qué podemos ayudarle? *</label>
        <textarea
          required
          id="message"
          name="message"
          rows={5}
          placeholder="Escriba su consulta aquí..."
          className="w-full bg-brand-gray border border-gray-100 p-4 rounded-sm focus:border-brand-amber focus:ring-1 focus:ring-brand-amber outline-none transition-all resize-none"
        ></textarea>
      </div>

      {status === "error" && (
        <div className="bg-red-50 text-red-600 p-4 rounded-sm text-sm font-medium border border-red-100">
          {errorMsg}
        </div>
      )}

      <button
        disabled={status === "sending"}
        type="submit"
        className={`w-full bg-brand-navy text-white py-5 rounded-sm font-bold text-lg shadow-lg transition-all ${
          status === "sending" ? "opacity-70 cursor-not-allowed" : "hover:bg-brand-navy/90 active:scale-[0.99]"
        }`}
      >
        {status === "sending" ? "Enviando..." : siteContent.global.ctaMaster}
      </button>
      
      <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest">
        Sus datos están protegidos según nuestra política de privacidad.
      </p>
    </form>
  );
}
