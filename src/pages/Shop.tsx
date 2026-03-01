import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { products } from "../data/products";
import { cn } from "../lib/utils";

export function Shop() {
  const [filter, setFilter] = useState<"all" | "limited">("all");

  const filteredProducts = products.filter((p) =>
    filter === "limited" ? p.limited : true
  );

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A1A1A] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-black/10 pb-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-4">
              La <span className="text-[#D32F2F]">Galerie</span>
            </h1>
            <p className="text-[#5A5A5A] max-w-xl text-lg font-light">
              Explorez notre collection complète d'œuvres originales. Chaque pièce est une interprétation unique de l'univers manga, peinte avec passion.
            </p>
          </div>

          {/* Filters */}
          <div className="flex space-x-6 mt-8 md:mt-0">
            <button
              onClick={() => setFilter("all")}
              className={cn(
                "text-sm uppercase tracking-widest pb-2 border-b-2 transition-colors",
                filter === "all"
                  ? "border-[#D32F2F] text-[#1A1A1A]"
                  : "border-transparent text-[#888888] hover:text-[#5A5A5A]"
              )}
            >
              Toutes
            </button>
            <button
              onClick={() => setFilter("limited")}
              className={cn(
                "text-sm uppercase tracking-widest pb-2 border-b-2 transition-colors",
                filter === "limited"
                  ? "border-[#D32F2F] text-[#1A1A1A]"
                  : "border-transparent text-[#888888] hover:text-[#5A5A5A]"
              )}
            >
              Éditions Limitées
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-white aspect-[3/4] mb-6">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                  <p className="text-sm text-white mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 line-clamp-3">
                    {product.description}
                  </p>
                  <span className="inline-block px-6 py-3 bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#D32F2F] hover:text-white transition-colors">
                    Voir l'œuvre
                  </span>
                </div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.limited && (
                    <span className="bg-[#D32F2F] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                      Limitée
                    </span>
                  )}
                  {product.stock < 10 && (
                    <span className="bg-[#9C27B0] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                      Dernières pièces
                    </span>
                  )}
                </div>
              </Link>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-serif font-medium tracking-wide group-hover:text-[#D32F2F] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-[#888888] text-sm mt-1">À partir de {product.price}€</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-32 text-[#888888]">
            Aucune œuvre trouvée pour ce filtre.
          </div>
        )}
      </div>
    </div>
  );
}
