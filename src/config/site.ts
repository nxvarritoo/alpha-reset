export const siteConfig = {
  brand: 'ALPHA RESET',
  trainer: 'Carlos Giral',
  tagline: 'NUNCA ES TARDE PARA EMPEZAR DE NUEVO.',
  subtitle: 'Entrena con propósito. Construye hábitos que duren. Conviértete en la persona que quieres ser.',
  images: { logo: `${import.meta.env.BASE_URL}images/logo-alpha-reset-transparent.png`, carlos: `${import.meta.env.BASE_URL}images/carlos-giral-transparent.png` },
  contact: { email: '', phone: '', instagram: '', youtube: '' },
  nav: [
    { label: 'Inicio', to: '/' }, { label: 'Sobre Carlos', to: '/sobre-carlos' }, { label: 'Mi método', to: '/metodo' },
    { label: 'Entrenamientos', to: '/entrenamientos' }, { label: 'Hábitos saludables', to: '/habitos' },
    { label: 'Mi espacio', to: '/mi-espacio' }, { label: 'Contacto', to: '/contacto' },
  ],
}
