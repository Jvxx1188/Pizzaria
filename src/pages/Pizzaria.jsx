import React from 'react';

// ═══════════════════════════════════════════════════════
//  TROQUE A ORDEM DOS COMPONENTES ABAIXO PRA MUDAR
//  O LAYOUT DA PÁGINA. É SÓ MOVER AS LINHAS!
// ═══════════════════════════════════════════════════════

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Contato from '../components/Contato';
import Promocao from '../components/Promocao';
import Galeria from '../components/Galeria';
import Diferenciais from '../components/Diferenciais';
import Cardapio from '../components/Cardapio';
import Avaliacoes from '../components/Avaliacoes';
import CtaFinal from '../components/CtaFinal';
import Footer from '../components/Footer';
import WhatsappButton from '../components/WhatsappButton';

export default function Pizzaria() {
  return (
    <div className="min-h-screen font-sans overflow-x-hidden bg-[#0C0A08]">
      <Navbar />

      {/* ═══ SEÇÕES — TROQUE A ORDEM AQUI ═══ */}
      <Hero />
      <Contato />
      <Promocao />
      <Galeria />
      <Diferenciais />
      <Cardapio />
      <Avaliacoes />
      <CtaFinal />
      {/* ═══════════════════════════════════════ */}

      <Footer />
      <WhatsappButton />
    </div>
  );
}
