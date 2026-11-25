export const siteConfig = {
  brand: 'ALPHA RESET',
  trainer: 'Carlos Giral',
  tagline: 'EL CAMBIO EMPIEZA CONTIGO.',
  subtitle: 'Deja de entrenar sin rumbo. Aprende a entrenar, construye hábitos y descubre de lo que eres capaz.',
  images: { logo: `${import.meta.env.BASE_URL}images/logo-alpha-reset-transparent.png`, carlos: `${import.meta.env.BASE_URL}images/carlos-giral-transparent.png` },
  contact: { email: '', phone: '', instagram: '', youtube: '' },
  nav: [
    { label: 'Inicio', to: '/' }, { label: 'Sobre Carlos', to: '/sobre-carlos' }, { label: 'Mi método', to: '/metodo' },
    { label: 'Entrenamientos', to: '/entrenamientos' }, { label: 'Hábitos saludables', to: '/habitos' },
    { label: 'Mi espacio', to: '/mi-espacio' }, { label: 'Contacto', to: '/contacto' },
  ],
}
