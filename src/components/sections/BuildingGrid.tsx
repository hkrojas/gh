"use client";

import { useState } from "react";
import Image from "next/image";
import { buildings, Building } from "@/lib/data/buildings";

export default function BuildingGrid() {
  // Removed filter by district as it was not based on real data
  
  return (
    <div className="space-y-16 reveal-on-scroll active">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {buildings.map((building, idx) => (
          <div
            key={building.id}
            className="group bg-white border border-border-soft rounded-[22px] overflow-hidden shadow-premium hover:shadow-trust transition-all duration-500 ease-out animate-in fade-in slide-in-from-bottom-6"
            style={{ animationDelay: `${0.05 * idx}s` }}
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={building.imageUrl} 
                alt={building.name}
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-brand-navy/0 transition-colors duration-500 ease-out"></div>
              
              {/* Referential Tag */}
              <div className="absolute bottom-4 left-4 z-10">
                <span className="bg-brand-navy/80 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-sm border border-white/10 shadow-lg">
                  Imagen Referencial
                </span>
              </div>
            </div>
            
            <div className="p-8">
              <span className="text-brand-amber text-[10px] font-bold uppercase tracking-[0.25em] mb-3 block">
                {building.distrito || "Lima Metropolitana"}
              </span>
              <h3 className="font-montserrat font-bold text-brand-navy text-xl group-hover:text-brand-amber transition-colors duration-300 ease-out leading-tight mb-3">
                {building.name}
              </h3>
              <div className="w-8 h-1 bg-brand-amber/30 rounded-full group-hover:w-16 transition-all duration-500 ease-out"></div>
              <p className="text-[13px] text-text-secondary mt-5 leading-relaxed font-medium opacity-65 group-hover:opacity-100 transition-opacity duration-500 ease-out">
                Administración operativa integral y gestión de activos inmobiliarios.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
