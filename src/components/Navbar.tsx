import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Menu, X, User } from "lucide-react";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Galerie", path: "/shop" },
    { name: "L'Artiste", path: "/about" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-[#F5F5F0]/90 backdrop-blur-md py-4 border-b border-black/5"
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="text-2xl font-serif font-bold tracking-wider text-[#1A1A1A]">
            INTI<span className="text-[#D32F2F]">.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm uppercase tracking-widest transition-colors hover:text-[#D32F2F]",
                  location.pathname === link.path ? "text-[#1A1A1A] font-medium" : "text-[#5A5A5A]"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-6">
            <button className="text-[#5A5A5A] hover:text-[#1A1A1A] transition-colors hidden md:block">
              <User size={20} />
            </button>
            <button className="text-[#5A5A5A] hover:text-[#1A1A1A] transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-[#D32F2F] text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <button
              className="md:hidden text-[#5A5A5A] hover:text-[#1A1A1A] transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-[#F5F5F0] flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b border-black/10">
              <span className="text-2xl font-serif font-bold tracking-wider text-[#1A1A1A]">
                INTI<span className="text-[#D32F2F]">.</span>
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#5A5A5A] hover:text-[#1A1A1A]"
              >
                <X size={28} />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-2xl font-serif uppercase tracking-widest transition-colors",
                    location.pathname === link.path ? "text-[#D32F2F]" : "text-[#1A1A1A]"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-8 flex space-x-6">
                <button className="text-[#5A5A5A] hover:text-[#1A1A1A] flex flex-col items-center">
                  <User size={24} className="mb-2" />
                  <span className="text-xs uppercase tracking-widest">Compte</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
