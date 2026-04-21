import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { fadeUp, stagger, WA_MENU } from './shared';

const MENU_ITEMS = [
  { name: 'Margherita', desc: 'Molho de tomate, mussarela de búfala, manjericão fresco e azeite.', price: 'R$ 38', image: '/pizza_hero.png' },
  { name: 'Calabresa Especial', desc: 'Calabresa artesanal, cebola roxa caramelizada e azeitonas pretas.', price: 'R$ 35', image: '/pizza_pepperoni.png' },
  { name: 'Quatro Queijos', desc: 'Mussarela, parmesão, gorgonzola e catupiry gratinado.', price: 'R$ 42', image: '/pizza_hero.png' },
  { name: 'Frango com Catupiry', desc: 'Frango desfiado temperado, catupiry cremoso e milho.', price: 'R$ 36', image: '/pizza_pepperoni.png' },
  { name: 'Portuguesa', desc: 'Presunto, ovo, cebola, azeitona, ervilha e mussarela.', price: 'R$ 38', image: '/pizza_hero.png' },
  { name: 'Napolitana', desc: 'Tomate fatiado, mussarela, parmesão, alho e oregano.', price: 'R$ 40', image: '/pizza_pepperoni.png' },
];

export default function Cardapio() {
  return (
    <section id="cardapio" className="py-20 md:py-28 px-5 lg:px-12 bg-[#0F0D0A]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div {...fadeUp} className="text-center mb-14">
          <span className="text-orange-400 text-[11px] uppercase tracking-[0.25em] font-medium mb-3 block">Cardápio</span>
          <h2 className="text-3xl md:text-[2.5rem] font-black tracking-tight text-white">As mais pedidas 🍕</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {MENU_ITEMS.map((item, i) => (
            <motion.div key={i} {...stagger(i * 0.06)} whileHover={{ y: -4 }}
              className="group bg-[#1A1710] rounded-2xl overflow-hidden border border-white/5 hover:border-orange-500/15 transition-all cursor-pointer">
              <div className="relative h-[180px] overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1710] via-transparent to-transparent" />
                <span className="absolute bottom-3 right-3 bg-orange-500 text-white text-[12px] font-bold px-3 py-1 rounded-full">
                  {item.price}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-white font-bold text-[16px] mb-1">{item.name}</h3>
                <p className="text-white/30 text-[12px] leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} className="text-center mt-10">
          <motion.a href={WA_MENU} target="_blank" rel="noreferrer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 border border-orange-500/30 text-orange-400 text-[13px] font-semibold rounded-full hover:bg-orange-500/10 transition-all">
            Ver cardápio completo <ChevronRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
