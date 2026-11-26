import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Logo } from '../components/Logo'
import { siteConfig } from '../config/site'

export function PublicLayout() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [location.pathname])
  return <div className="min-h-screen">
    <a href="#contenido" className="fixed left-3 top-3 z-[60] -translate-y-24 rounded-lg bg-white px-4 py-2 font-bold text-navy shadow transition focus:translate-y-0">Saltar al contenido</a>
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/95 text-navy backdrop-blur">
      <div className="container-site flex h-20 items-center justify-between gap-4">
        <Link to="/" aria-label="ALPHA RESET, inicio"><Logo className="h-11 w-36 sm:w-44" /></Link>
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Navegación principal">
          {siteConfig.nav.map((item) => <NavLink key={item.to} to={item.to} className={({ isActive }) => `text-xs font-bold transition hover:text-teal ${isActive ? 'text-teal' : 'text-navy/70'}`}>{item.label}</NavLink>)}
        </nav>
        <button className="rounded-lg p-2 text-navy xl:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="menu-movil" aria-label={open ? 'Cerrar menú' : 'Abrir menú'}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav id="menu-movil" className="container-site grid gap-1 border-t border-navy/10 py-4 xl:hidden" aria-label="Navegación móvil">
        {siteConfig.nav.map((item) => <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className={({ isActive }) => `rounded-xl px-4 py-3 text-sm font-bold ${isActive ? 'bg-teal text-navy' : 'text-navy/75'}`}>{item.label}</NavLink>)}
      </nav>}
    </header>
    <main id="contenido"><Outlet /></main>
    <footer className="border-t border-navy/10 bg-white py-14 text-navy">
      <div className="container-site grid gap-10 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div><Logo className="h-14 w-52" /><p className="mt-5 max-w-md text-sm leading-6 text-navy/55">Ayudo a personas normales a construir hábitos extraordinarios mediante entrenamiento, disciplina y constancia.</p></div>
        <div><p className="text-xs font-black uppercase tracking-widest text-teal">Descubre</p><div className="mt-4 grid gap-2 text-sm text-navy/65"><Link to="/sobre-carlos">Mi historia</Link><Link to="/metodo">El método ALPHA RESET</Link><Link to="/entrenamientos">Entrenamiento</Link><Link to="/contacto">Contacto</Link></div></div>
        <div><p className="text-xs font-black uppercase tracking-widest text-teal">Tu espacio</p><div className="mt-4 grid gap-2 text-sm text-navy/65"><Link to="/mi-espacio">Mi espacio</Link><Link to="/demo/entrenador">Panel entrenador</Link></div></div>
      </div>
      <div className="container-site mt-12 border-t border-navy/10 pt-6 text-xs text-navy/40">© {new Date().getFullYear()} ALPHA RESET · Carlos Giral</div>
    </footer>
  </div>
}
