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
    <div className="space-y-12">
      {/* Search / Filter bar */}
      <div className="flex flex-wrap items-center gap-4 bg-white p-4 shadow-sm border border-gray-100 rounded-sm">
        <span className="text-sm font-bold text-brand-navy/60 uppercase tracking-wider mr-4">
          Filtrar por Distrito:
        </span>
        <button
          onClick={() => setFilter("todos")}
          className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-sm transition-all ${
            filter === "todos"
              ? "bg-brand-navy text-white"
              : "bg-gray-100 text-brand-navy hover:bg-gray-200"
          }`}
        >
          Todos
        </button>
        {uniqueDistricts.map((d) => (
          <button
            key={d}
            onClick={() => setFilter(d)}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-sm transition-all ${
              filter === d
                ? "bg-brand-navy text-white"
                : "bg-gray-100 text-brand-navy hover:bg-gray-200"
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredBuildings.map((building) => (
          <div
            key={building.id}
            className="group block bg-white border border-gray-100 rounded-sm overflow-hidden hover:shadow-xl transition-all duration-500"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop" // Placeholder for building images
                alt={building.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {building.type === "referencial" && (
                <div className="absolute top-4 left-4 bg-brand-navy/80 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm backdrop-blur-sm">
                  Referencial
                </div>
              )}
            </div>
            <div className="p-6">
              <span className="text-brand-amber text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">
                {building.distrito || "Lima"}
              </span>
              <h3 className="font-montserrat font-bold text-brand-navy text-lg group-hover:text-brand-amber transition-colors">
                {building.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
      
      {filteredBuildings.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          No se encontraron edificios en este distrito.
        </div>
      )}
    </div>
  );
}
