import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { fadeUp, stagger } from './shared';

const TESTIMONIALS = [
  { name: 'Thiago M.', text: 'Melhor pizza da cidade, sem zueira. Massa fina, queijo derretendo... pedi 2 e acabou em 10 min.', stars: 5 },
  { name: 'Ana Clara S.', text: 'Entrega super rápida! Chegou quentinha e a calabresa tava divina. Virei cliente fiel.', stars: 5 },
  { name: 'Roberto L.', text: 'Levei a família pra conhecer, ambiente aconchegante e a pizza é incomparável. Nota 10!', stars: 5 },
  { name: 'Camila R.', text: 'Pedi pelo WhatsApp, atendimento nota mil. Pizza chegou em 25 min, perfeita!', stars: 5 },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-orange-400 text-orange-400" />
      ))}
    </div>
  );
}

export default function Avaliacoes() {
  return (
    <section id="avaliacoes" className="py-20 md:py-28 px-5 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <motion.div {...fadeUp} className="text-center mb-12">
          <span className="text-orange-400 text-[11px] uppercase tracking-[0.25em] font-medium mb-3 block">O que dizem de nós</span>
          <h2 className="text-3xl md:text-[2.5rem] font-black tracking-tight text-white">Quem prova, repete ❤️</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={i} {...stagger(i * 0.08)} whileHover={{ y: -4 }}
              className="bg-[#1A1710] rounded-2xl p-6 border border-white/5 hover:border-orange-500/15 transition-all">
              <StarRating count={t.stars} />
              <p className="text-white/40 text-[13px] leading-relaxed mt-4 mb-5 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-500/15 flex items-center justify-center text-[11px] font-bold text-orange-400">
                  {t.name.charAt(0)}
                </div>
                <span className="text-white/60 text-sm font-medium">{t.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
