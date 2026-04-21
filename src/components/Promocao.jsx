import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeUp, WA_LINK } from './shared';

export default function Promocao() {
  return (
    <section className="py-16 px-5 lg:px-12">
      <div className="max-w-[1000px] mx-auto">
        <motion.div {...fadeUp}
          className="relative bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-8 md:p-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('/pizza_pepperoni.png')] bg-cover bg-center opacity-20 md:opacity-30" />
          <div className="relative z-10 max-w-md">
            <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-white/70 font-bold mb-3 bg-white/15 px-3 py-1 rounded-full">
              🎉 Promoção da Semana
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
              Compre 2 pizzas grandes e ganhe 1 refrigerante 2L!
            </h2>
            <p className="text-white/60 text-[14px] mb-6">Válido de terça a quinta. Aproveite!</p>
            <motion.a href={WA_LINK} target="_blank" rel="noreferrer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-orange-600 text-[13px] font-bold rounded-full hover:bg-white/90 transition-all shadow-lg">
              Quero essa promo! <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
