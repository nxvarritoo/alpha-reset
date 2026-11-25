import { CalendarDays, CheckCircle2, Dumbbell, Target } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { DemoNotice } from '../../components/DemoNotice'
import { demoRoutines, demoSessions } from '../../data/demo'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { STORAGE_KEYS } from '../../services/storage'

export function Overview() {
  const [goal, setGoal] = useLocalStorage(STORAGE_KEYS.goal, 'Entrenar 3 días por semana durante 8 semanas')
  const [draft, setDraft] = useState(goal)
  const save = (e: FormEvent) => { e.preventDefault(); setGoal(draft) }
  const stats = [{ icon: CalendarDays, label: 'Esta semana', value: `${demoRoutines.length} sesiones` }, { icon: CheckCircle2, label: 'Completadas', value: `${demoSessions.length} sesiones` }, { icon: Dumbbell, label: 'Próximo entreno', value: 'Lunes · Inferior' }]
  return <div className="mx-auto max-w-6xl"><DemoNotice /><div className="mt-8"><p className="text-sm font-bold text-teal">Hola, Alex Demo</p><h1 className="mt-2 text-4xl font-black">Tu semana, de un vistazo.</h1><p className="mt-3 text-navy/55">Sigue tu plan, registra lo que haces y observa tu evolución.</p></div><div className="mt-8 grid gap-4 md:grid-cols-3">{stats.map(({ icon: Icon, label, value }) => <div className="card" key={label}><Icon className="text-teal" /><p className="mt-8 text-xs font-bold uppercase tracking-wider text-navy/45">{label}</p><p className="mt-2 text-xl font-black">{value}</p></div>)}</div><div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_.9fr]"><div className="rounded-3xl bg-navy p-7 text-white"><p className="text-xs font-black uppercase tracking-widest text-teal">Siguiente sesión</p><h2 className="mt-5 text-3xl font-black">{demoRoutines[0].name}</h2><p className="mt-2 text-white/55">{demoRoutines[0].day} · {demoRoutines[0].duration} · {demoRoutines[0].exercises.length} ejercicios</p><a href="#/mi-espacio/rutina" className="btn-primary mt-8">Ver mi rutina</a></div><form onSubmit={save} className="card"><Target className="text-teal" /><label className="mt-5 block text-sm font-black" htmlFor="goal">Mi objetivo personal</label><textarea id="goal" value={draft} onChange={(e) => setDraft(e.target.value)} className="input mt-3 min-h-24" /><button type="submit" className="mt-4 text-sm font-black text-teal">Guardar objetivo</button>{goal === draft && <p className="mt-2 text-xs text-navy/40">Guardado en este navegador</p>}</form></div></div>
}
