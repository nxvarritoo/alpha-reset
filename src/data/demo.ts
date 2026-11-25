import type { Client, Routine, Session } from '../types'

export const demoRoutines: Routine[] = [
  { id: 'routine-a', day: 'Lunes', name: 'Fuerza · Tren inferior', duration: '50 min', exercises: [
    { id: 'sentadilla', name: 'Sentadilla goblet', sets: 4, reps: '8', weight: 18, rest: '90 s', notes: 'Mantén el tronco estable y controla la bajada.' },
    { id: 'peso-muerto', name: 'Peso muerto rumano', sets: 3, reps: '10', weight: 30, rest: '90 s', notes: 'Lleva la cadera atrás y conserva la espalda neutra.' },
    { id: 'zancadas', name: 'Zancadas', sets: 3, reps: '10/lado', weight: 8, rest: '60 s', notes: 'Paso firme y movimiento controlado.' },
  ]},
  { id: 'routine-b', day: 'Miércoles', name: 'Fuerza · Tren superior', duration: '45 min', exercises: [
    { id: 'press', name: 'Press con mancuernas', sets: 4, reps: '8', weight: 14, rest: '90 s', notes: 'Deja dos repeticiones en reserva.' },
    { id: 'remo', name: 'Remo en polea', sets: 3, reps: '12', weight: 28, rest: '75 s', notes: 'Pausa breve al final del tirón.' },
    { id: 'press-militar', name: 'Press militar', sets: 3, reps: '10', weight: 10, rest: '75 s', notes: 'Evita arquear la zona lumbar.' },
  ]},
  { id: 'routine-c', day: 'Viernes', name: 'Full body · Técnica', duration: '40 min', exercises: [
    { id: 'bisagra', name: 'Bisagra con kettlebell', sets: 3, reps: '12', weight: 16, rest: '60 s', notes: 'Prioriza la técnica.' },
    { id: 'flexiones', name: 'Flexiones inclinadas', sets: 3, reps: '10', weight: 0, rest: '60 s', notes: 'Cuerpo alineado.' },
    { id: 'farmer', name: 'Paseo del granjero', sets: 4, reps: '30 s', weight: 18, rest: '45 s', notes: 'Camina erguido.' },
  ]},
]

export const demoSessions: Session[] = [
  { id: 's1', date: '2026-11-20', routine: 'Fuerza · Tren inferior', completed: true, exercises: [{ name: 'Sentadilla goblet', weight: 18, reps: '4×8' }, { name: 'Peso muerto rumano', weight: 30, reps: '3×10' }] },
  { id: 's2', date: '2026-11-18', routine: 'Fuerza · Tren superior', completed: true, exercises: [{ name: 'Press con mancuernas', weight: 14, reps: '4×8' }, { name: 'Remo en polea', weight: 28, reps: '3×12' }] },
  { id: 's3', date: '2026-11-13', routine: 'Full body · Técnica', completed: true, exercises: [{ name: 'Bisagra con kettlebell', weight: 16, reps: '3×12' }] },
]

export const demoClients: Client[] = [
  { id: 'c1', name: 'Lucía Demo', goal: 'Ganar fuerza y constancia', routineId: 'routine-a', completion: 82 },
  { id: 'c2', name: 'Marcos Demo', goal: 'Retomar el entrenamiento', routineId: 'routine-b', completion: 67 },
  { id: 'c3', name: 'Elena Demo', goal: 'Mejorar técnica básica', routineId: 'routine-c', completion: 91 },
]
