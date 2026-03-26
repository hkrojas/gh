"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { siteContent } from "@/lib/data/content";

const contactSchema = z.object({
  name: z.string().min(3, "El nombre es muy corto"),
  email: z.string().email("Correo inválido"),
  building: z.string().optional(),
  district: z.string().optional(),
  message: z.string().min(10, "Por favor detaille un poco más su consulta"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="section-spacing bg-white reveal-on-scroll">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row bg-white shadow-trust rounded-[28px] overflow-hidden border border-border-soft animate-in fade-in slide-in-from-bottom-8 duration-700">
          {/* Info Side - Deep Institutional Navy */}
          <div className="w-full lg:w-2/5 bg-brand-navy p-10 md:p-14 text-white relative flex flex-col justify-center">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <span className="text-brand-amber text-[10px] font-bold uppercase tracking-[0.2em] mb-4 block">Contacto Ejecutivo</span>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6 leading-tight">
                Iniciemos la evaluación de su edificio
              </h2>
              <p className="text-white/70 mb-10 leading-relaxed text-sm">
                Complete el formulario y coordinaremos una visita técnica inicial para diagnosticar el estado operativo y financiero de su comunidad.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-white/5 rounded-[12px] flex items-center justify-center text-brand-amber transition-colors group-hover:bg-brand-amber group-hover:text-brand-navy">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-0.5">Escríbanos</p>
                    <p className="text-sm font-semibold">{siteContent.global.contactEmail}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-white/5 rounded-[12px] flex items-center justify-center text-brand-amber transition-colors group-hover:bg-brand-amber group-hover:text-brand-navy">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-0.5">Disponibilidad</p>
                    <p className="text-sm font-semibold">Lun - Vie: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-white/10">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Santuario Profesional</p>
                <div className="mt-4 flex gap-3">
                  <div className="h-1 w-8 bg-brand-amber rounded-full"></div>
                  <div className="h-1 w-4 bg-white/20 rounded-full"></div>
                  <div className="h-1 w-4 bg-white/20 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-3/5 bg-white p-10 md:p-14">
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in-95 duration-500">
                <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-brand-navy mb-3">Solicitud Enviada</h3>
                <p className="text-text-secondary mb-8 max-w-sm">Su consulta ha sido recibida prioritariamente. Un asesor de gestión se comunicará con usted en breve.</p>
                <button 
                  onClick={() => setStatus("idle")} 
                  className="text-brand-navy text-sm font-bold hover:text-brand-amber transition-colors underline decoration-brand-amber/30 underline-offset-4"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-navy/60 ml-1">Nombre Completo</label>
                    <input
                      {...register("name")}
                      className={`w-full bg-bg-alt border ${errors.name ? 'border-red-400' : 'border-border-soft'} p-4 rounded-[14px] focus:bg-white focus:border-brand-amber focus:ring-4 focus:ring-brand-amber/5 outline-none transition-all placeholder:text-text-secondary/30`}
                      placeholder="Ej. Juan Pérez"
                    />
                    {errors.name && <p className="text-[10px] font-bold text-red-500 uppercase mt-1.5 ml-1">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-navy/60 ml-1">Correo Corporativo</label>
                    <input
                      {...register("email")}
                      className={`w-full bg-bg-alt border ${errors.email ? 'border-red-400' : 'border-border-soft'} p-4 rounded-[14px] focus:bg-white focus:border-brand-amber focus:ring-4 focus:ring-brand-amber/5 outline-none transition-all placeholder:text-text-secondary/30`}
                      placeholder="juan.perez@empresa.com"
                    />
                    {errors.email && <p className="text-[10px] font-bold text-red-500 uppercase mt-1.5 ml-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-navy/60 ml-1">Edificio / Condominio</label>
                    <input
                      {...register("building")}
                      className={`w-full bg-bg-alt border border-border-soft p-4 rounded-[14px] focus:bg-white focus:border-brand-amber focus:ring-4 focus:ring-brand-amber/5 outline-none transition-all placeholder:text-text-secondary/30`}
                      placeholder="Nombre del inmueble"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-navy/60 ml-1">Distrito / Zona</label>
                    <input
                      {...register("district")}
                      className={`w-full bg-bg-alt border border-border-soft p-4 rounded-[14px] focus:bg-white focus:border-brand-amber focus:ring-4 focus:ring-brand-amber/5 outline-none transition-all placeholder:text-text-secondary/30`}
                      placeholder="Ej. San Isidro"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-brand-navy/60 ml-1">Detalle de Consulta</label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className={`w-full bg-bg-alt border ${errors.message ? 'border-red-400' : 'border-border-soft'} p-4 rounded-[14px] focus:bg-white focus:border-brand-amber focus:ring-4 focus:ring-brand-amber/5 outline-none transition-all placeholder:text-text-secondary/30 resize-none`}
                    placeholder="Describa brevemente los requerimientos de su junta de propietarios..."
                  />
                  {errors.message && <p className="text-[10px] font-bold text-red-500 uppercase mt-1.5 ml-1">{errors.message.message}</p>}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-premium w-full py-5 rounded-[18px] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group transition-all"
                  >
                    {status === "loading" ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        Solicitar Evaluación de Gestión
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>
                  <p className="text-[9px] text-center text-text-secondary/40 mt-4 uppercase tracking-widest font-bold">
                    Respuesta operativa garantizada en menos de 24 horas hábiles
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
