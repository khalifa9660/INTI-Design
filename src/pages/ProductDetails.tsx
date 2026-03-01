import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Check, Star, ShieldCheck, Truck } from "lucide-react";
import { products } from "../data/products";
import { cn } from "../lib/utils";

export function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  const [selectedSize, setSelectedSize] = useState<string>(product?.sizes[0] || "");
  const [selectedFrame, setSelectedFrame] = useState<"sans" | "avec">("sans");
  const [activeImage, setActiveImage] = useState<string>(product?.images[0] || "");

  if (!product) {
    return (
      <div className="min-h-screen bg-[#F5F5F0] text-[#1A1A1A] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-serif mb-4">Œuvre introuvable</h2>
          <Link to="/shop" className="text-[#D32F2F] hover:underline uppercase tracking-widest text-sm">
            Retour à la galerie
          </Link>
        </div>
      </div>
    );
  }

  const basePrice = product.price;
  const sizeMultiplier = product.sizes.indexOf(selectedSize) * 50;
  const framePrice = selectedFrame === "avec" ? 80 : 0;
  const finalPrice = basePrice + sizeMultiplier + framePrice;

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A1A1A] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/shop" className="inline-flex items-center text-[#5A5A5A] hover:text-[#1A1A1A] transition-colors mb-12 uppercase tracking-widest text-xs">
          <ArrowLeft size={16} className="mr-2" />
          Retour à la galerie
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[3/4] bg-white overflow-hidden group cursor-zoom-in"
            >
              <img
                src={activeImage}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              {product.limited && (
                <div className="absolute top-6 left-6 bg-[#D32F2F] text-white text-xs font-bold uppercase tracking-widest px-4 py-2">
                  Édition Limitée
                </div>
              )}
            </motion.div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={cn(
                      "relative w-24 aspect-[3/4] flex-shrink-0 overflow-hidden border-2 transition-colors",
                      activeImage === img ? "border-[#D32F2F]" : "border-transparent opacity-60 hover:opacity-100"
                    )}
                  >
                    <img src={img} alt={`Vue ${idx + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4">
                {product.title}
              </h1>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-light">{finalPrice}€</span>
                <div className="flex items-center text-sm text-[#5A5A5A]">
                  <div className="flex text-[#D32F2F] mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-current" />
                    ))}
                  </div>
                  (12 avis)
                </div>
              </div>
              <p className="text-[#333333] leading-relaxed text-lg font-light">
                {product.description}
              </p>
            </div>

            <div className="space-y-8 mb-12">
              {/* Inspiration */}
              <div className="bg-white p-6 border-l-4 border-[#9C27B0]">
                <h4 className="text-sm uppercase tracking-widest text-[#9C27B0] font-bold mb-2">Inspiration</h4>
                <p className="text-[#5A5A5A] italic font-serif">"{product.inspiration}"</p>
              </div>

              {/* Size Selection */}
              <div>
                <h4 className="text-sm uppercase tracking-widest text-[#5A5A5A] mb-4 flex justify-between">
                  <span>Format</span>
                  <span className="text-xs text-[#888888]">Guide des tailles</span>
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "py-3 px-4 border text-sm transition-all duration-300",
                        selectedSize === size
                          ? "border-[#1A1A1A] bg-[#1A1A1A] text-white font-medium"
                          : "border-black/20 text-[#5A5A5A] hover:border-black/60"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Frame Selection */}
              <div>
                <h4 className="text-sm uppercase tracking-widest text-[#5A5A5A] mb-4">Finition</h4>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setSelectedFrame("sans")}
                    className={cn(
                      "py-4 px-4 border flex flex-col items-center justify-center transition-all duration-300",
                      selectedFrame === "sans"
                        ? "border-[#1A1A1A] bg-black/5"
                        : "border-black/20 text-[#5A5A5A] hover:border-black/60"
                    )}
                  >
                    <span className="font-medium mb-1">Toile seule</span>
                    <span className="text-xs text-[#888888]">Inclus</span>
                  </button>
                  <button
                    onClick={() => setSelectedFrame("avec")}
                    className={cn(
                      "py-4 px-4 border flex flex-col items-center justify-center transition-all duration-300",
                      selectedFrame === "avec"
                        ? "border-[#D32F2F] bg-[#D32F2F]/10"
                        : "border-black/20 text-[#5A5A5A] hover:border-black/60"
                    )}
                  >
                    <span className="font-medium mb-1">Cadre Premium Noir</span>
                    <span className="text-xs text-[#D32F2F]">+80€</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="mt-auto space-y-6">
              <button className="w-full py-5 bg-[#1A1A1A] text-white font-bold uppercase tracking-widest hover:bg-[#D32F2F] hover:text-white transition-all duration-300 hover-glow flex items-center justify-center">
                Ajouter au panier — {finalPrice}€
              </button>
              
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-black/10">
                <div className="flex items-center text-sm text-[#5A5A5A]">
                  <ShieldCheck size={18} className="text-[#D32F2F] mr-3" />
                  Création originale faite à la main
                </div>
                <div className="flex items-center text-sm text-[#5A5A5A]">
                  <Truck size={18} className="text-[#D32F2F] mr-3" />
                  Livraison estimée : 7-10 jours
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
