import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Truck, Leaf, Users } from 'lucide-react';
import { fadeUp, stagger } from './shared';

const DIFFERENTIALS = [
  { icon: Flame, title: 'Forno a Lenha', desc: 'Sabor autêntico com massa assada no forno tradicional.' },
  { icon: Truck, title: 'Entrega Rápida', desc: 'Sua pizza quentinha na porta de casa em minutos.' },
  { icon: Leaf, title: 'Ingredientes Frescos', desc: 'Selecionamos os melhores ingredientes todos os dias.' },
  { icon: Users, title: 'Ambiente Familiar', desc: 'Espaço aconchegante pra você curtir com quem ama.' },
];

export default function Diferenciais() {
  return (
    <section id="sobre" className="py-20 md:py-28 px-5 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <motion.div {...fadeUp} className="text-center mb-14">
          <h2 className="text-3xl md:text-[2.5rem] font-black tracking-tight text-white">Por que a Demonstração Pizzaria? 🔥</h2>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {DIFFERENTIALS.map((d, i) => {
            const Icon = d.icon;
            return (
              <motion.div key={i} {...stagger(i * 0.08)}
                className="bg-[#1A1710] rounded-2xl p-6 border border-white/5 text-center">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-white font-bold text-[15px] mb-1.5">{d.title}</h3>
                <p className="text-white/30 text-[12px] leading-relaxed">{d.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
