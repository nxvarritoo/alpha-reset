import { ArrowDown, Compass, RefreshCw, TrendingUp } from 'lucide-react'
import { ButtonLink } from '../components/ButtonLink'
import { SectionHeading } from '../components/SectionHeading'
import { siteConfig } from '../config/site'

const profiles = [
  { icon: Compass, title: 'Empiezas desde cero', text: 'Aprende los fundamentos a tu ritmo y construye una base sólida desde el primer día.' },
  { icon: RefreshCw, title: 'Quieres volver', text: 'Recupera la confianza con un plan realista que se adapte al momento en el que estás.' },
  { icon: TrendingUp, title: 'Quieres progresar', text: 'Deja de improvisar, entiende tus cargas y vuelve a ver avances en tu entrenamiento.' },
]

export function Home() {
  return <>
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(23,185,173,.16),transparent_38%)]" />
      <div className="container-site relative grid min-h-[calc(100vh-5rem)] items-center gap-10 pt-16 lg:grid-cols-[1.05fr_.95fr] lg:pt-0">
        <div className="z-10 pb-12 lg:py-20"><p className="eyebrow">Entrenamiento · Hábitos · Progreso</p><h1 className="font-display text-5xl font-black leading-[.88] tracking-[-.04em] sm:text-7xl xl:text-[5.7rem]">EL CAMBIO<br /><span className="text-teal">EMPIEZA</span><br />CONTIGO.</h1><p className="mt-7 max-w-xl text-base leading-7 text-white/65 sm:text-lg">{siteConfig.subtitle}</p><p className="mt-5 text-sm font-bold text-white">{siteConfig.trainer} · Entrenador</p><div className="mt-9 flex flex-wrap gap-3"><ButtonLink to="/contacto">Empieza tu cambio</ButtonLink><ButtonLink to="/metodo" secondary>Conoce mi método</ButtonLink></div></div>
        <div className="relative flex h-[580px] items-end justify-center self-end lg:h-[calc(100vh-5rem)]"><div className="absolute bottom-10 h-3/4 w-3/4 rounded-full bg-teal/10 blur-3xl" /><img src={siteConfig.images.carlos} alt="Carlos Giral, entrenador de ALPHA RESET" className="relative h-full max-h-[760px] w-auto object-contain object-bottom drop-shadow-[0_30px_50px_rgba(0,0,0,.5)]" /><div className="absolute bottom-8 right-0 rounded-2xl border border-white/10 bg-navy/75 p-4 backdrop-blur sm:right-8"><p className="text-[10px] font-bold uppercase tracking-widest text-teal">Tu punto de partida</p><p className="mt-1 font-black">Empieza. Reinicia. Progresa.</p></div></div>
      </div><a href="#para-ti" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-white/40 hover:text-teal lg:block" aria-label="Ir a la siguiente sección"><ArrowDown /></a>
    </section>
    <section id="para-ti" className="section-pad bg-mist"><div className="container-site"><SectionHeading eyebrow="Un plan para ti" title="NO IMPORTA DÓNDE EMPIEZAS." intro="Lo importante es saber hacia dónde vas y tener un sistema que puedas sostener." /><div className="mt-12 grid gap-5 md:grid-cols-3">{profiles.map(({ icon: Icon, title, text }, i) => <article className="card group" key={title}><span className="mb-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/10 text-teal transition group-hover:bg-teal group-hover:text-navy"><Icon /></span><p className="text-xs font-black text-teal">0{i + 1}</p><h3 className="mt-3 text-2xl font-black">{title}</h3><p className="mt-4 leading-7 text-navy/60">{text}</p></article>)}</div></div></section>
    <section className="section-pad bg-teal"><div className="container-site flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"><div><p className="text-xs font-black uppercase tracking-[.22em] text-navy/55">ALPHA es comienzo. RESET es oportunidad.</p><h2 className="mt-4 max-w-3xl font-display text-4xl font-black leading-none sm:text-6xl">TU SIGUIENTE ETAPA PUEDE EMPEZAR HOY.</h2></div><ButtonLink to="/metodo">Descubre el método</ButtonLink></div></section>
  </>
}
