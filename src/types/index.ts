export type Difficulty = 'Inicial' | 'Intermedio' | 'Avanzado'
export interface WorkoutPost { id: string; title: string; description: string; category: string; difficulty: Difficulty; duration: string; image: string }
export interface Article { id: string; title: string; excerpt: string; category: string; readTime: string }
export interface Exercise { id: string; name: string; sets: number; reps: string; weight: number; rest: string; notes: string }
export interface Routine { id: string; day: string; name: string; duration: string; exercises: Exercise[] }
export interface Session { id: string; date: string; routine: string; completed: boolean; exercises: { name: string; weight: number; reps: string }[]; comment?: string }
export interface Client { id: string; name: string; goal: string; routineId: string; completion: number }
