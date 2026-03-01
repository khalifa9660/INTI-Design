import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Star } from "lucide-react";
import { products } from "../data/products";

export function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A1A1A]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/manga-art-hero/1920/1080?blur=2"
            alt="Hero Art"
            className="w-full h-full object-cover opacity-40 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F5F5F0]/80 via-[#F5F5F0]/60 to-[#F5F5F0]" />
          
          {/* Subtle light particles effect (CSS only via radial gradient) */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/5 via-transparent to-transparent opacity-50 pointer-events-none" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tighter mb-6 leading-tight"
          >
            L'Art Manga <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D32F2F] to-[#9C27B0]">
              Réinventé
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-xl text-[#5A5A5A] mb-10 max-w-2xl mx-auto font-light tracking-wide"
          >
            Des créations originales inspirées par les plus grandes œuvres, peintes avec passion et précision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Link
              to="/shop"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#1A1A1A] text-white font-medium uppercase tracking-widest text-sm hover:bg-[#D32F2F] hover:text-white transition-all duration-300 hover-glow group"
            >
              Découvrir la collection
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight mb-4">
              Œuvres <span className="text-[#D32F2F]">Majeures</span>
            </h2>
            <p className="text-[#5A5A5A] max-w-md">
              Une sélection de nos pièces les plus emblématiques, où chaque coup de pinceau raconte une histoire.
            </p>
          </div>
          <Link
            to="/shop"
            className="hidden md:inline-flex items-center text-sm uppercase tracking-widest text-[#5A5A5A] hover:text-[#1A1A1A] transition-colors mt-6 md:mt-0 group"
          >
            Voir toute la galerie
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <Link to={`/product/${product.id}`} className="block overflow-hidden relative bg-white aspect-[3/4]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <p className="text-sm text-white line-clamp-2 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {product.description}
                  </p>
                  <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md text-white text-xs uppercase tracking-widest text-center border border-white/20 hover:bg-white hover:text-black transition-colors">
                    Voir l'œuvre
                  </span>
                </div>
                {product.limited && (
                  <div className="absolute top-4 left-4 bg-[#D32F2F] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                    Édition Limitée
                  </div>
                )}
              </Link>
              <div className="mt-6 flex justify-between items-start">
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
        
        <div className="mt-12 text-center md:hidden">
          <Link
            to="/shop"
            className="inline-flex items-center text-sm uppercase tracking-widest text-[#1A1A1A] border border-black/20 px-6 py-3 hover:bg-[#1A1A1A] hover:text-white transition-colors"
          >
            Voir toute la galerie
          </Link>
        </div>
      </section>

      {/* Testimonial / Quote Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#9C27B0]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="flex justify-center space-x-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-[#D32F2F] fill-[#D32F2F]" size={20} />
            ))}
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-medium leading-tight mb-8">
            "Une qualité exceptionnelle. Les détails et l'énergie qui se dégagent de la toile sont incroyables. C'est plus qu'un tableau, c'est une véritable pièce de collection."
          </h2>
          <p className="text-[#5A5A5A] uppercase tracking-widest text-sm">
            — Thomas R., Collectionneur
          </p>
        </div>
      </section>
    </div>
  );
}
