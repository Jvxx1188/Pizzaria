import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from './shared';

const IMAGES = [
  '/pizza_hero.png',
  '/pizza_pepperoni.png',
  '/pizza_restaurant.png',
  '/pizza_restaurant.png',
  '/pizza_hero.png',
  '/pizza_pepperoni.png',
];

export default function Galeria() {
  return (
    <section className="py-20 px-5 lg:px-12 bg-[#0F0D0A]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div {...fadeUp} className="text-center mb-12">
          <h2 className="text-3xl md:text-[2.5rem] font-black tracking-tight text-white">Conheça a Demonstração Pizzaria 📸</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {IMAGES.map((img, i) => (
            <motion.div key={i} {...stagger(i * 0.06)} className="relative aspect-square rounded-2xl overflow-hidden group">
              <img src={img} alt="Demonstração Pizzaria" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
