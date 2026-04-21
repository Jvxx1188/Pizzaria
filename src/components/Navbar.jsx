import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import { WA_LINK } from './shared';

const NAV_ITEMS = [
  { id: 'inicio', label: 'Início' },
  { id: 'contato', label: 'Contato' },
  { id: 'cardapio', label: 'Cardápio' },
  { id: 'avaliacoes', label: 'Avaliações' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0C0A08]/95 backdrop-blur-xl shadow-lg shadow-black/30' : 'bg-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-5 lg:px-12 flex items-center justify-between h-[64px]">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2">
          <span className="text-2xl">🍕</span>
          <span className="text-white font-black text-sm tracking-tight">Demonstração Pizzaria</span>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map(({ id, label }) => (
            <button key={id} onClick={() => scrollTo(id)} className="text-[12px] text-white/40 hover:text-orange-400 transition-colors uppercase tracking-[0.15em]">
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <motion.a href={WA_LINK} target="_blank" rel="noreferrer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500 text-white text-[12px] font-bold rounded-full hover:bg-orange-400 transition-all shadow-lg shadow-orange-500/25">
            <Phone className="w-3.5 h-3.5" /> Pedir Agora
          </motion.a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden w-10 h-10 flex items-center justify-center text-white/50">
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0C0A08]/98 backdrop-blur-xl border-t border-white/5 overflow-hidden">
            <div className="flex flex-col p-5 gap-1">
              {NAV_ITEMS.map(({ id, label }) => (
                <button key={id} onClick={() => scrollTo(id)} className="text-sm text-white/50 hover:text-orange-400 text-left py-3 border-b border-white/5">
                  {label}
                </button>
              ))}
              <a href={WA_LINK} target="_blank" rel="noreferrer"
                className="mt-3 flex items-center justify-center gap-2 px-5 py-3 bg-orange-500 text-white text-sm font-bold rounded-full">
                🍕 Pedir Agora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
