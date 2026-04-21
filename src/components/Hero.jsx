import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { WA_LINK } from './shared';

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[url('/pizza_hero.png')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0C0A08] via-[#0C0A08]/85 to-[#0C0A08]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A08] via-transparent to-[#0C0A08]/50" />

      <div className="max-w-[1400px] mx-auto px-5 lg:px-12 relative z-10 pt-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-block text-[11px] uppercase tracking-[0.3em] text-orange-400/80 font-medium mb-5">
            🔥 Forno a Lenha • Santana do Ipanema
          </span>
          <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-black leading-[1.05] tracking-tight text-white mb-5 max-w-2xl">
            A pizza que conquista no primeiro pedaço 🍕
          </h1>
          <p className="text-[15px] md:text-base text-white/50 max-w-lg leading-relaxed mb-3">
            Forno a lenha, ingredientes selecionados e entrega rápida em Santana do Ipanema.
          </p>
          <p className="text-orange-400 text-[13px] font-semibold mb-8 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" /> Peça agora e receba quentinha
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <motion.a href={WA_LINK} target="_blank" rel="noreferrer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-orange-500 text-white text-[13px] font-bold tracking-wide rounded-full hover:bg-orange-400 transition-all shadow-lg shadow-orange-500/30">
              Pedir no WhatsApp agora <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.button onClick={() => scrollTo('cardapio')} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/15 text-white/80 text-[13px] font-medium tracking-wide rounded-full hover:bg-white/5 transition-all">
              Ver cardápio
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
