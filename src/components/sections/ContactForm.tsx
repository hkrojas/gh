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
    <section className="section-spacing bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row shadow-premium rounded-sm overflow-hidden animate-fade-in-up">
          {/* Info Side */}
          <div className="w-full lg:w-2/5 bg-brand-navy p-10 md:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-brand-amber opacity-5 skew-x-[-15deg] translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-8">
                Iniciemos la evaluación de su edificio
              </h2>
              <p className="text-white/70 mb-12 leading-relaxed">
                Complete el formulario y nos pondremos en contacto en menos de 24 horas para coordinar una visita técnica inicial.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center text-brand-amber flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-amber mb-1">Escríbanos</p>
                    <p className="font-semibold">{siteContent.global.contactEmail}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center text-brand-amber flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-amber mb-1">Horario de Oficina</p>
                    <p className="font-semibold text-sm">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-3/5 bg-white p-10 md:p-16">
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in-up">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Mensaje Enviado</h3>
                <p className="text-gray-500 mb-8">Gracias por su interés. Un asesor comercial se pondrá en contacto con usted a la brevedad.</p>
                <button 
                  onClick={() => setStatus("idle")} 
                  className="text-brand-navy font-bold hover:text-brand-amber transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-brand-navy/60">Nombre Completo</label>
                    <input
                      {...register("name")}
                      className={`w-full bg-brand-gray border ${errors.name ? 'border-red-500' : 'border-gray-100'} p-4 rounded-sm focus:bg-white focus:border-brand-amber outline-none transition-all shadow-sm`}
                      placeholder="Ej. Juan Pérez"
                    />
                    {errors.name && <p className="text-[10px] font-bold text-red-500 uppercase mt-1">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-brand-navy/60">Correo Electrónico</label>
                    <input
                      {...register("email")}
                      className={`w-full bg-brand-gray border ${errors.email ? 'border-red-500' : 'border-gray-100'} p-4 rounded-sm focus:bg-white focus:border-brand-amber outline-none transition-all shadow-sm`}
                      placeholder="juan@ejemplo.com"
                    />
                    {errors.email && <p className="text-[10px] font-bold text-red-500 uppercase mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-brand-navy/60">Edificio / Condominio</label>
                    <input
                      {...register("building")}
                      className={`w-full bg-brand-gray border ${errors.building ? 'border-red-500' : 'border-gray-100'} p-4 rounded-sm focus:bg-white focus:border-brand-amber outline-none transition-all shadow-sm`}
                      placeholder="Nombre del edificio"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-brand-navy/60">Distrito</label>
                    <input
                      {...register("district")}
                      className={`w-full bg-brand-gray border ${errors.district ? 'border-red-500' : 'border-gray-100'} p-4 rounded-sm focus:bg-white focus:border-brand-amber outline-none transition-all shadow-sm`}
                      placeholder="Ej. Miraflores"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-brand-navy/60">Mensaje o Consulta</label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className={`w-full bg-brand-gray border ${errors.message ? 'border-red-500' : 'border-gray-100'} p-4 rounded-sm focus:bg-white focus:border-brand-amber outline-none transition-all shadow-sm resize-none`}
                    placeholder="Cuéntenos sobre las necesidades de su edificio..."
                  />
                  {errors.message && <p className="text-[10px] font-bold text-red-500 uppercase mt-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-premium w-full flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {status === "loading" ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Solicitar Evaluación de Gestión
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
