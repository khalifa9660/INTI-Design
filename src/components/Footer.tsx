import { Link } from "react-router-dom";
import { Instagram, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#F5F5F0] border-t border-black/5 py-12 mt-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="text-3xl font-serif font-bold tracking-wider text-[#1A1A1A] mb-6 block">
            INTI<span className="text-[#D32F2F]">.</span>
          </Link>
          <p className="text-[#5A5A5A] max-w-sm leading-relaxed mb-8">
            L'Art Manga Réinventé. Des créations originales inspirées par les plus grandes œuvres, peintes avec passion et précision.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-[#5A5A5A] hover:text-[#1A1A1A] transition-colors hover-glow-purple rounded-full p-2 bg-black/5">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-[#5A5A5A] hover:text-[#1A1A1A] transition-colors hover-glow-purple rounded-full p-2 bg-black/5">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-[#5A5A5A] hover:text-[#1A1A1A] transition-colors hover-glow-purple rounded-full p-2 bg-black/5">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-[#1A1A1A] font-serif uppercase tracking-widest text-sm mb-6">Boutique</h4>
          <ul className="space-y-4">
            <li>
              <Link to="/shop" className="text-[#5A5A5A] hover:text-[#D32F2F] transition-colors text-sm">
                Toutes les œuvres
              </Link>
            </li>
            <li>
              <Link to="/shop?filter=limited" className="text-[#5A5A5A] hover:text-[#D32F2F] transition-colors text-sm">
                Éditions Limitées
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-[#5A5A5A] hover:text-[#D32F2F] transition-colors text-sm">
                L'Artiste
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#1A1A1A] font-serif uppercase tracking-widest text-sm mb-6">Informations</h4>
          <ul className="space-y-4">
            <li>
              <a href="#" className="text-[#5A5A5A] hover:text-[#1A1A1A] transition-colors text-sm">
                Livraison & Retours
              </a>
            </li>
            <li>
              <a href="#" className="text-[#5A5A5A] hover:text-[#1A1A1A] transition-colors text-sm">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-[#5A5A5A] hover:text-[#1A1A1A] transition-colors text-sm">
                Mentions Légales
              </a>
            </li>
            <li>
              <a href="#" className="text-[#5A5A5A] hover:text-[#1A1A1A] transition-colors text-sm">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center">
        <p className="text-[#888888] text-xs uppercase tracking-widest mb-4 md:mb-0">
          © 2026 INTI Design. Tous droits réservés.
        </p>
        <div className="flex space-x-4">
          <span className="text-[#888888] text-xs uppercase tracking-widest">Paiement Sécurisé</span>
        </div>
      </div>
    </footer>
  );
}
