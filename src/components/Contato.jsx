import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';
import { fadeUp } from './shared';

export default function Contato() {
  return (
    <section id="contato" className="py-20 md:py-28 px-5 lg:px-12 bg-[#0F0D0A]">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div {...fadeUp}>
          <span className="text-orange-400 text-[11px] uppercase tracking-[0.25em] font-medium mb-4 block">Onde estamos</span>
          <h2 className="text-3xl md:text-[2.5rem] font-black tracking-tight text-white mb-6">
            Venha nos visitar 📍
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3 text-white/50 text-[14px]">
              <MapPin className="w-5 h-5 text-orange-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-white font-semibold">Santana do Ipanema, AL</p>
                <p className="text-white/35 text-[13px]">Rua Principal, 123 - Centro</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-white/50 text-[14px]">
              <Clock className="w-5 h-5 text-orange-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-white font-semibold">Terça a Domingo</p>
                <p className="text-white/35 text-[13px]">18h às 23h</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-white/50 text-[14px]">
              <Phone className="w-5 h-5 text-orange-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-white font-semibold">(82) 99999-9999</p>
                <p className="text-white/35 text-[13px]">WhatsApp disponível</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeUp}>
          <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#1A1710] border border-white/5 flex items-center justify-center">
            <img src="/pizza_restaurant.png" alt="Demonstração Pizzaria" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
