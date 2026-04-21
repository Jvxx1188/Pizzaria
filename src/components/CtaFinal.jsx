import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { fadeUp, WA_LINK } from './shared';

export default function CtaFinal() {
  return (
    <section className="py-20 md:py-28 px-5 lg:px-12 bg-[#0F0D0A]">
      <div className="max-w-xl mx-auto text-center">
        <motion.div {...fadeUp}>
          <span className="text-5xl mb-6 block">😋</span>
          <h2 className="text-3xl md:text-[2.8rem] font-black tracking-tight text-white mb-4 leading-tight">
            Bateu a fome?<br />A gente resolve.
          </h2>
          <p className="text-white/35 text-[14px] max-w-md mx-auto mb-10 leading-relaxed">
            É só chamar no WhatsApp e sua pizza sai na hora. Simples assim.
          </p>
          <motion.a href={WA_LINK} target="_blank" rel="noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-orange-500 text-white text-base font-black rounded-full hover:bg-orange-400 transition-all shadow-xl shadow-orange-500/30">
            🍕 Chamar no WhatsApp <ChevronRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
