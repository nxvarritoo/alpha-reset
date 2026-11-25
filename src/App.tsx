import { lazy, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { DashboardLayout } from './layouts/DashboardLayout'
import { PublicLayout } from './layouts/PublicLayout'

const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })))
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })))
const Method = lazy(() => import('./pages/Method').then((m) => ({ default: m.Method })))
const Workouts = lazy(() => import('./pages/Workouts').then((m) => ({ default: m.Workouts })))
const Habits = lazy(() => import('./pages/Habits').then((m) => ({ default: m.Habits })))
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })))
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })))
const Overview = lazy(() => import('./pages/dashboard/Overview').then((m) => ({ default: m.Overview })))
const RoutinePage = lazy(() => import('./pages/dashboard/Routine').then((m) => ({ default: m.RoutinePage })))
const Progress = lazy(() => import('./pages/dashboard/Progress').then((m) => ({ default: m.Progress })))
const HistoryPage = lazy(() => import('./pages/dashboard/History').then((m) => ({ default: m.HistoryPage })))
const Trainer = lazy(() => import('./pages/dashboard/Trainer').then((m) => ({ default: m.Trainer })))

export default function App() {
  return <HashRouter><Suspense fallback={<div className="flex min-h-[60vh] items-center justify-center bg-mist font-bold text-navy" role="status">Cargando…</div>}><Routes>
    <Route element={<PublicLayout />}><Route index element={<Home />} /><Route path="sobre-carlos" element={<About />} /><Route path="metodo" element={<Method />} /><Route path="entrenamientos" element={<Workouts />} /><Route path="habitos" element={<Habits />} /><Route path="contacto" element={<Contact />} /><Route path="*" element={<NotFound />} /></Route>
    <Route path="mi-espacio" element={<DashboardLayout />}><Route index element={<Overview />} /><Route path="rutina" element={<RoutinePage />} /><Route path="progreso" element={<Progress />} /><Route path="historial" element={<HistoryPage />} /></Route>
    <Route path="demo/entrenador" element={<DashboardLayout trainer />}><Route index element={<Trainer />} /></Route>
  </Routes></Suspense></HashRouter>
}
