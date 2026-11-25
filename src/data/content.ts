import type { Article, WorkoutPost } from '../types'

export const workouts: WorkoutPost[] = [
  { id: 'base-fuerza', title: 'Tu primera base de fuerza', description: 'Una sesión clara para aprender patrones básicos y empezar con seguridad.', category: 'Principiantes', difficulty: 'Inicial', duration: '35 min', image: 'linear-gradient(135deg,#17B9AD,#071629)' },
  { id: 'full-body', title: 'Full body en casa', description: 'Entrena todo el cuerpo con poco material y una estructura fácil de seguir.', category: 'En casa', difficulty: 'Inicial', duration: '30 min', image: 'linear-gradient(135deg,#0B1F36,#17B9AD)' },
  { id: 'progresion', title: 'Cómo progresar tus cargas', description: 'Aprende cuándo subir peso, repeticiones o series sin improvisar.', category: 'Progresión', difficulty: 'Intermedio', duration: '8 min lectura', image: 'linear-gradient(135deg,#17B9AD,#0E5560)' },
  { id: 'tecnica', title: 'Técnica antes que prisa', description: 'Claves sencillas para practicar con control y sacar partido a cada serie.', category: 'Técnica', difficulty: 'Inicial', duration: '12 min', image: 'linear-gradient(135deg,#17304A,#17B9AD)' },
  { id: 'rutina', title: 'Organiza tu semana', description: 'Una guía para distribuir tus sesiones según tu tiempo disponible.', category: 'Organización', difficulty: 'Inicial', duration: '6 min lectura', image: 'linear-gradient(135deg,#071629,#2DD4BF)' },
  { id: 'fuerza', title: 'Fundamentos de fuerza', description: 'Volumen, intensidad y descanso explicados sin complicaciones.', category: 'Fuerza', difficulty: 'Intermedio', duration: '10 min lectura', image: 'linear-gradient(135deg,#102C46,#159A93)' },
]

export const articles: Article[] = [
  { id: 'constancia', title: 'La constancia también se entrena', excerpt: 'Cómo crear una expectativa realista y mantener el rumbo en semanas difíciles.', category: 'Constancia', readTime: '5 min' },
  { id: 'agenda', title: 'Hazle sitio al entrenamiento', excerpt: 'Tres ideas prácticas para organizar sesiones que encajen en tu vida.', category: 'Organización', readTime: '4 min' },
  { id: 'descanso', title: 'Descansar forma parte del plan', excerpt: 'Por qué recuperar bien te ayuda a entrenar con más calidad.', category: 'Descanso', readTime: '6 min' },
  { id: 'alimentacion', title: 'Hábitos de alimentación sostenibles', excerpt: 'Principios generales para tomar mejores decisiones sin caer en extremos.', category: 'Alimentación', readTime: '5 min' },
  { id: 'motivacion', title: 'Cuando la motivación no aparece', excerpt: 'Sistemas sencillos para seguir avanzando sin depender de sentirse inspirado.', category: 'Motivación', readTime: '4 min' },
  { id: 'sostenible', title: 'Un plan que puedas repetir', excerpt: 'La mejor rutina es la que puedes sostener y ajustar con el tiempo.', category: 'Sostenibilidad', readTime: '5 min' },
]
