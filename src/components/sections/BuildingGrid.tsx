"use client";

import { useState } from "react";
import Image from "next/image";
import { buildings, Building } from "@/lib/data/buildings";

export default function BuildingGrid() {
  const [filter, setFilter] = useState<string>("todos");

  const uniqueDistricts = Array.from(
    new Set(buildings.map((b) => b.distrito).filter(Boolean))
  ) as string[];

  const filteredBuildings =
    filter === "todos"
      ? buildings
      : buildings.filter((b) => b.distrito === filter);

  return (
    <div className="space-y-12 reveal-on-scroll active">
      {/* Search / Filter bar - Refined Institutional Style */}
      <div className="flex flex-wrap items-center gap-6 bg-white p-6 md:p-8 shadow-premium border border-border-soft rounded-[22px]">
        <div className="flex items-center gap-3 mr-4">
          <div className="w-1.5 h-8 bg-brand-amber rounded-full"></div>
          <span className="text-sm font-bold text-brand-navy uppercase tracking-[0.2em]">
            Filtrar por Distrito:
          </span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter("todos")}
            className={`px-6 py-2.5 text-xs font-bold uppercase tracking-widest rounded-[14px] border transition-all duration-300 ${
              filter === "todos"
                ? "bg-brand-navy border-brand-navy text-white shadow-lg"
                : "bg-bg-alt border-transparent text-text-secondary hover:bg-bg-main hover:border-border-soft"
            }`}
          >
            Todos
          </button>
          {uniqueDistricts.map((d) => (
            <button
              key={d}
              onClick={() => setFilter(d)}
              className={`px-6 py-2.5 text-xs font-bold uppercase tracking-widest rounded-[14px] border transition-all duration-300 ${
                filter === d
                  ? "bg-brand-navy border-brand-navy text-white shadow-lg"
                  : "bg-bg-alt border-transparent text-text-secondary hover:bg-bg-main hover:border-border-soft"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredBuildings.map((building, idx) => (
          <div
            key={building.id}
            className="group bg-white border border-border-soft rounded-[22px] overflow-hidden shadow-premium hover:shadow-trust transition-all duration-500 animate-in fade-in slide-in-from-bottom-4"
            style={{ animationDelay: `${0.1 * idx}s` }}
          >
            <div className="relative h-60 overflow-hidden">
              <Image
                src={`https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&id=${building.id}`} 
                alt={building.name}
                fill
                className="object-cover transition-transform duration-1200 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-brand-navy/0 transition-colors duration-500"></div>
            </div>
            
            <div className="p-7">
              <span className="text-brand-amber text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">
                {building.distrito || "Lima Metropolitana"}
              </span>
              <h3 className="font-montserrat font-bold text-brand-navy text-xl group-hover:text-brand-amber transition-colors leading-tight">
                {building.name}
              </h3>
              <p className="text-xs text-text-secondary mt-3 leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                Gestión operativa integral y mantenimiento preventivo.
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {filteredBuildings.length === 0 && (
        <div className="text-center py-32 bg-brand-gray rounded-sm border border-dashed border-gray-200">
          <p className="text-brand-navy/40 font-bold uppercase tracking-widest text-sm">
            No se encontraron edificios en este distrito.
          </p>
        </div>
      )}
    </div>
  );
}
