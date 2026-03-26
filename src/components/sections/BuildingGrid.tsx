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
    <div className="space-y-12 animate-fade-in-up">
      {/* Search / Filter bar */}
      <div className="flex flex-wrap items-center gap-4 bg-white p-6 shadow-premium border border-gray-100 rounded-sm">
        <div className="flex items-center gap-3 mr-4">
          <div className="w-1 h-6 bg-brand-amber"></div>
          <span className="text-sm font-bold text-brand-navy uppercase tracking-widest">
            Distrito:
          </span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter("todos")}
            className={`px-5 py-2 text-xs font-black uppercase tracking-widest rounded-sm border transition-all duration-300 ${
              filter === "todos"
                ? "bg-brand-navy border-brand-navy text-white shadow-md transform -translate-y-0.5"
                : "bg-transparent border-gray-200 text-brand-navy/60 hover:bg-brand-gray hover:border-brand-navy/20"
            }`}
          >
            Todos
          </button>
          {uniqueDistricts.map((d) => (
            <button
              key={d}
              onClick={() => setFilter(d)}
              className={`px-5 py-2 text-xs font-black uppercase tracking-widest rounded-sm border transition-all duration-300 ${
                filter === d
                  ? "bg-brand-navy border-brand-navy text-white shadow-md transform -translate-y-0.5"
                  : "bg-transparent border-gray-200 text-brand-navy/60 hover:bg-brand-gray hover:border-brand-navy/20"
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
            className="group block bg-white border border-gray-100 rounded-sm overflow-hidden shadow-premium hover:shadow-hover transition-all duration-500 animate-fade-in-up"
            style={{ animationDelay: `${0.1 * idx}s` }}
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={`https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&id=${building.id}`} 
                alt={building.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-colors duration-500"></div>
              
              {building.type === "referencial" && (
                <div className="absolute top-4 left-4 bg-brand-amber text-brand-navy text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-sm shadow-lg">
                  Gestión Activa
                </div>
              )}
            </div>
            
            <div className="p-8 border-t-4 border-transparent group-hover:border-brand-amber transition-all duration-500">
              <span className="text-brand-amber text-[10px] font-black uppercase tracking-[0.2em] mb-3 block">
                {building.distrito || "Lima Metropolitana"}
              </span>
              <h3 className="font-montserrat font-bold text-brand-navy text-xl group-hover:text-brand-amber transition-colors leading-tight">
                {building.name}
              </h3>
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
