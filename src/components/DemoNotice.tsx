import { ShieldAlert } from 'lucide-react'

export function DemoNotice() {
  return <div className="flex items-start gap-3 rounded-2xl border border-amber-400/40 bg-amber-50 p-4 text-sm text-amber-950" role="note">
    <ShieldAlert className="mt-0.5 shrink-0" size={19} />
    <p><strong>Entorno de demostración.</strong> No hay autenticación ni servidor seguro. Los datos son ficticios y se guardan únicamente en este navegador. No introduzcas datos personales reales.</p>
  </div>
}
