import { ArrowLeft, BarChart3, Dumbbell, History, LayoutDashboard, Users } from 'lucide-react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Logo } from '../components/Logo'

export function DashboardLayout({ trainer = false }: { trainer?: boolean }) {
  const items = trainer ? [{ to: '/demo/entrenador', label: 'Clientes', icon: Users }] : [
    { to: '/mi-espacio', label: 'Resumen', icon: LayoutDashboard }, { to: '/mi-espacio/rutina', label: 'Mi rutina', icon: Dumbbell },
    { to: '/mi-espacio/progreso', label: 'Mi progreso', icon: BarChart3 }, { to: '/mi-espacio/historial', label: 'Historial', icon: History },
  ]
  return <div className="min-h-screen bg-mist lg:grid lg:grid-cols-[250px_1fr]">
    <aside className="bg-navy p-5 text-white lg:min-h-screen lg:p-7">
      <div className="flex items-center justify-between lg:block"><Logo className="h-11 w-40 drop-shadow-[0_0_1px_rgba(255,255,255,.8)]" /><Link to="/" className="text-white/50 hover:text-teal lg:hidden" aria-label="Volver a la web"><ArrowLeft /></Link></div>
      <p className="mt-7 text-[10px] font-black uppercase tracking-[.24em] text-teal">{trainer ? 'Panel entrenador · Demo' : 'Mi espacio · Demo'}</p>
      <nav className="mt-4 flex gap-2 overflow-x-auto lg:grid" aria-label="Panel">
        {items.map(({ to, label, icon: Icon }) => <NavLink end={to === '/mi-espacio' || trainer} key={to} to={to} className={({ isActive }) => `flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition ${isActive ? 'bg-teal text-navy' : 'text-white/65 hover:bg-white/5 hover:text-white'}`}><Icon size={18} />{label}</NavLink>)}
      </nav>
      <Link to="/" className="mt-8 hidden items-center gap-2 text-xs font-bold text-white/45 hover:text-teal lg:flex"><ArrowLeft size={15} /> Volver a la web</Link>
    </aside>
    <main className="min-w-0 p-5 sm:p-8 lg:p-10"><Outlet /></main>
  </div>
}
