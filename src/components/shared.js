export const WA_LINK = 'https://wa.me/5582999999999?text=Ol%C3%A1!%20Quero%20fazer%20um%20pedido%20%F0%9F%8D%95';
export const WA_MENU = 'https://wa.me/5582999999999?text=Ol%C3%A1!%20Quero%20ver%20o%20card%C3%A1pio%20completo';

export const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7 }
};

export const stagger = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { delay, duration: 0.5 }
});
