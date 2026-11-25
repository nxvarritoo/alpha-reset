import { siteConfig } from '../config/site'

export function Logo({ className = '' }: { className?: string }) {
  return <span className={`inline-flex ${className}`}><img src={siteConfig.images.logo} alt="ALPHA RESET" className="h-full w-full object-contain" /></span>
}
