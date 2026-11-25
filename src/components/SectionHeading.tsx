export function SectionHeading({ eyebrow, title, intro, light = false }: { eyebrow: string; title: string; intro?: string; light?: boolean }) {
  return <div className="max-w-3xl">
    <p className="eyebrow">{eyebrow}</p>
    <h2 className={`title-xl ${light ? 'text-white' : 'text-navy'}`}>{title}</h2>
    {intro && <p className={`mt-6 max-w-2xl text-lg leading-8 ${light ? 'text-white/65' : 'text-navy/65'}`}>{intro}</p>}
  </div>
}
