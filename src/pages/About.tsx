import { motion } from "motion/react";
import { Instagram, Palette, PenTool, Zap, Star } from "lucide-react";
import { cn } from "../lib/utils";

export function About() {
  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A1A1A] pt-32 pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-white relative overflow-hidden">
              <img
                src="https://picsum.photos/seed/artist-portrait/800/1000?grayscale"
                alt="L'Artiste"
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F5F5F0] via-transparent to-transparent opacity-80" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#D32F2F]/20 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-[#9C27B0]/20 rounded-full blur-[80px] pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-8">
              L'Artiste
            </h1>
            <p className="text-xl text-[#5A5A5A] font-light leading-relaxed mb-6">
              "Chaque œuvre raconte une histoire."
            </p>
            <div className="space-y-6 text-[#5A5A5A] leading-relaxed font-light">
              <p>
                Passionné par la culture japonaise et l'animation depuis mon plus jeune âge, j'ai toujours été fasciné par la capacité des mangakas à transmettre des émotions intenses à travers de simples traits d'encre.
              </p>
              <p>
                Mon parcours artistique a commencé par la reproduction de mes scènes préférées, avant d'évoluer vers une réinterprétation personnelle. Je cherche à capturer l'essence même des personnages : leur détermination, leurs doutes, et l'énergie brute des combats qui les transcendent.
              </p>
              <p>
                Aujourd'hui, je fusionne les techniques traditionnelles de peinture avec l'esthétique dynamique du manga pour créer des toiles qui vibrent et résonnent avec ceux qui partagent cette passion.
              </p>
            </div>

            <div className="mt-12 flex items-center space-x-6">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#1A1A1A] text-white font-medium uppercase tracking-widest text-sm hover:bg-[#D32F2F] hover:text-white transition-all duration-300 hover-glow group"
              >
                <Instagram className="mr-3" size={18} />
                Suivre sur Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-6">
              Le Processus <span className="text-[#D32F2F]">Créatif</span>
            </h2>
            <p className="text-[#5A5A5A] max-w-2xl mx-auto font-light">
              De l'étincelle d'inspiration à la toile finale, découvrez les étapes qui donnent vie à chaque création.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-black/10 to-transparent" />

            {[
              {
                icon: <PenTool size={32} className="text-[#D32F2F]" />,
                title: "01. Croquis",
                desc: "Recherche de dynamisme et de composition. L'énergie brute est capturée sur le papier.",
              },
              {
                icon: <Zap size={32} className="text-[#9C27B0]" />,
                title: "02. Encrage",
                desc: "Définition des contrastes et des lignes de force. Le noir profond vient structurer l'œuvre.",
              },
              {
                icon: <Palette size={32} className="text-[#D32F2F]" />,
                title: "03. Couleur",
                desc: "Application des teintes et des atmosphères. La lumière et l'ombre donnent du volume.",
              },
              {
                icon: <Star size={32} className="text-[#9C27B0]" />,
                title: "04. Finition",
                desc: "Détails, effets de brillance et vernis protecteur. L'œuvre est prête à être exposée.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-[#F5F5F0] border border-black/10 flex items-center justify-center mb-8 relative z-10 group-hover:border-[#D32F2F] transition-colors duration-500">
                  {step.icon}
                </div>
                <h3 className="text-xl font-serif font-bold tracking-wider mb-4">{step.title}</h3>
                <p className="text-[#5A5A5A] font-light text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Backstage Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4">
              Dans <span className="text-[#9C27B0]">l'Atelier</span>
            </h2>
            <p className="text-[#5A5A5A] max-w-md font-light">
              Un aperçu de l'envers du décor, là où la magie opère.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {[
            "https://picsum.photos/seed/atelier-1/600/600?grayscale",
            "https://picsum.photos/seed/atelier-2/600/800?grayscale",
            "https://picsum.photos/seed/atelier-3/600/600?grayscale",
            "https://picsum.photos/seed/atelier-4/600/800?grayscale",
            "https://picsum.photos/seed/atelier-5/600/600?grayscale",
          ].map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative overflow-hidden group bg-white",
                index === 1 || index === 3 ? "row-span-2" : "aspect-square"
              )}
            >
              <img
                src={img}
                alt="Backstage"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110 mix-blend-luminosity group-hover:mix-blend-normal"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
