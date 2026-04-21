import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, MapPin, Clock, ChevronRight, Flame, Truck, Leaf, Users, Star, MessageCircle, ArrowRight } from 'lucide-react';

const WA_LINK = 'https://wa.me/5582999999999?text=Ol%C3%A1!%20Quero%20fazer%20um%20pedido%20%F0%9F%8D%95';
const WA_MENU = 'https://wa.me/5582999999999?text=Ol%C3%A1!%20Quero%20ver%20o%20card%C3%A1pio%20completo';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7 }
};

const stagger = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { delay, duration: 0.5 }
});

const TESTIMONIALS = [
  { name: 'Thiago M.', text: 'Melhor pizza da cidade, sem zueira. Massa fina, queijo derretendo... pedi 2 e acabou em 10 min.', stars: 5 },
  { name: 'Ana Clara S.', text: 'Entrega super rápida! Chegou quentinha e a calabresa tava divina. Virei cliente fiel.', stars: 5 },
  { name: 'Roberto L.', text: 'Levei a família pra conhecer, ambiente aconchegante e a pizza é incomparável. Nota 10!', stars: 5 },
  { name: 'Camila R.', text: 'Pedi pelo WhatsApp, atendimento nota mil. Pizza chegou em 25 min, perfeita!', stars: 5 },
];

const DIFFERENTIALS = [
  { icon: Flame, title: 'Forno a Lenha', desc: 'Sabor autêntico com massa assada no forno tradicional.' },
  { icon: Truck, title: 'Entrega Rápida', desc: 'Sua pizza quentinha na porta de casa em minutos.' },
  { icon: Leaf, title: 'Ingredientes Frescos', desc: 'Selecionamos os melhores ingredientes todos os dias.' },
  { icon: Users, title: 'Ambiente Familiar', desc: 'Espaço aconchegante pra você curtir com quem ama.' },
];

const MENU_ITEMS = [
  { name: 'Margherita', desc: 'Molho de tomate, mussarela de búfala, manjericão fresco e azeite.', price: 'R$ 38', image: '/pizza_hero.png' },
  { name: 'Calabresa Especial', desc: 'Calabresa artesanal, cebola roxa caramelizada e azeitonas pretas.', price: 'R$ 35', image: '/pizza_pepperoni.png' },
  { name: 'Quatro Queijos', desc: 'Mussarela, parmesão, gorgonzola e catupiry gratinado.', price: 'R$ 42', image: '/pizza_hero.png' },
  { name: 'Frango com Catupiry', desc: 'Frango desfiado temperado, catupiry cremoso e milho.', price: 'R$ 36', image: '/pizza_pepperoni.png' },
  { name: 'Portuguesa', desc: 'Presunto, ovo, cebola, azeitona, ervilha e mussarela.', price: 'R$ 38', image: '/pizza_hero.png' },
  { name: 'Napolitana', desc: 'Tomate fatiado, mussarela, parmesão, alho e oregano.', price: 'R$ 40', image: '/pizza_pepperoni.png' },
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

export default function Pizzaria() {
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
    <div className="min-h-screen font-sans overflow-x-hidden bg-[#0C0A08]">

      {/* NAVBAR */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0C0A08]/95 backdrop-blur-xl shadow-lg shadow-black/30' : 'bg-transparent'}`}>
        <div className="max-w-[1400px] mx-auto px-5 lg:px-12 flex items-center justify-between h-[64px]">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2">
            <span className="text-2xl">🍕</span>
            <span className="text-white font-black text-sm tracking-tight">Demonstração Pizzaria</span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            {['inicio', 'cardapio', 'sobre', 'contato'].map((id) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-[12px] text-white/40 hover:text-orange-400 transition-colors uppercase tracking-[0.15em]">
                {id === 'inicio' ? 'Início' : id === 'cardapio' ? 'Cardápio' : id === 'sobre' ? 'Sobre' : 'Contato'}
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
                {['inicio', 'cardapio', 'sobre', 'contato'].map((id) => (
                  <button key={id} onClick={() => scrollTo(id)} className="text-sm text-white/50 hover:text-orange-400 text-left py-3 border-b border-white/5">
                    {id === 'inicio' ? 'Início' : id === 'cardapio' ? 'Cardápio' : id === 'sobre' ? 'Sobre' : 'Contato'}
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

      {/* ═══════════════════════════════════════════
          1. HERO
          ═══════════════════════════════════════════ */}
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

      {/* ═══════════════════════════════════════════
          2. SOCIAL PROOF
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-5 lg:px-12 bg-[#0F0D0A]">
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

      {/* ═══════════════════════════════════════════
          3. DIFFERENTIALS
          ═══════════════════════════════════════════ */}
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

      {/* ═══════════════════════════════════════════
          4. MENU PREVIEW
          ═══════════════════════════════════════════ */}
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

      {/* ═══════════════════════════════════════════
          5. PROMOTION
          ═══════════════════════════════════════════ */}
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

      {/* ═══════════════════════════════════════════
          6. GALLERY
          ═══════════════════════════════════════════ */}
      <section className="py-20 px-5 lg:px-12 bg-[#0F0D0A]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-[2.5rem] font-black tracking-tight text-white">Conheça a Demonstração Pizzaria 📸</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {['/pizza_hero.png', '/pizza_pepperoni.png', '/pizza_restaurant.png', '/pizza_restaurant.png', '/pizza_hero.png', '/pizza_pepperoni.png'].map((img, i) => (
              <motion.div key={i} {...stagger(i * 0.06)} className="relative aspect-square rounded-2xl overflow-hidden group">
                <img src={img} alt="Demonstração Pizzaria" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          7. LOCATION + TRUST
          ═══════════════════════════════════════════ */}
      <section id="contato" className="py-20 md:py-28 px-5 lg:px-12">
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

      {/* ═══════════════════════════════════════════
          8. FINAL CTA
          ═══════════════════════════════════════════ */}
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

      {/* FOOTER */}
      <div className="h-1 bg-gradient-to-r from-orange-600 via-red-500 to-orange-600" />
      <footer className="bg-[#080604] py-6 px-5 text-center">
        <p className="text-[11px] text-white/15">© 2026 Demonstração Pizzaria. Todos os direitos reservados.</p>
      </footer>

      {/* ═══════════════════════════════════════════
          FLOATING WHATSAPP BUTTON
          ═══════════════════════════════════════════ */}
      <motion.a
        href={WA_LINK}
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-xl shadow-green-500/30 hover:bg-green-400 transition-colors"
      >
        <MessageCircle className="w-6 h-6 text-white fill-white" />
      </motion.a>

    </div>
  );
}
