import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function ButtonLink({ to, children, secondary = false }: { to: string; children: React.ReactNode; secondary?: boolean }) {
  return <Link to={to} className={secondary ? 'btn-secondary' : 'btn-primary'}>{children}<ArrowRight size={16} aria-hidden="true" /></Link>
}
