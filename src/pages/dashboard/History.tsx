import { CheckCircle2 } from 'lucide-react'
import { DemoNotice } from '../../components/DemoNotice'
import { demoSessions } from '../../data/demo'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { STORAGE_KEYS } from '../../services/storage'
import type { Session } from '../../types'

export function HistoryPage() {
  const [sessions] = useLocalStorage<Session[]>(STORAGE_KEYS.sessions, demoSessions)
  return <div className="mx-auto max-w-5xl"><DemoNotice /><h1 className="mt-8 text-4xl font-black">Historial</h1><p className="mt-3 text-navy/55">Tus sesiones guardadas en este dispositivo.</p><div className="mt-8 grid gap-4">{sessions.map((session) => <article key={session.id} className="card"><div className="flex flex-wrap items-start justify-between gap-4"><div><p className="text-xs font-black text-teal">{new Date(`${session.date}T12:00:00`).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</p><h2 className="mt-2 text-xl font-black">{session.routine}</h2></div><span className="flex items-center gap-1 rounded-full bg-teal/10 px-3 py-1 text-xs font-bold text-teal"><CheckCircle2 size={14} /> Completado</span></div><div className="mt-5 flex flex-wrap gap-2">{session.exercises.map((exercise) => <span className="rounded-xl bg-mist px-3 py-2 text-xs" key={`${session.id}-${exercise.name}`}><strong>{exercise.name}</strong> · {exercise.reps} · {exercise.weight} kg</span>)}</div>{session.comment && <p className="mt-4 text-sm italic text-navy/50">“{session.comment}”</p>}</article>)}</div></div>
}
