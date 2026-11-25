import { ArrowUpRight, Clock3 } from 'lucide-react'
import { useState } from 'react'
import { SectionHeading } from '../components/SectionHeading'
import { articles } from '../data/content'

export function Habits() {
  const categories = ['Todos', ...new Set(articles.map((item) => item.category))]
  const [active, setActive] = useState('Todos')
  const shown = active === 'Todos' ? articles : articles.filter((item) => item.category === active)
  return <><section className="section-pad bg-white"><div className="container-site"><SectionHeading eyebrow="Más allá del entrenamiento" title="HÁBITOS QUE SUMAN." intro="Ideas generales para organizarte, recuperarte y construir una relación sostenible con el proceso." /><div className="mt-10 flex gap-2 overflow-x-auto pb-3">{categories.map((category) => <button key={category} onClick={() => setActive(category)} className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-bold ${active === category ? 'bg-teal text-navy' : 'bg-mist text-navy/60'}`}>{category}</button>)}</div><div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{shown.map((article, index) => <article className="card flex min-h-72 flex-col" key={article.id}><div className="flex items-center justify-between"><span className="text-xs font-black uppercase tracking-wider text-teal">{article.category}</span><span className="font-display text-4xl text-navy/10">0{index + 1}</span></div><h2 className="mt-8 text-2xl font-black">{article.title}</h2><p className="mt-3 leading-7 text-navy/60">{article.excerpt}</p><div className="mt-auto flex items-center justify-between pt-8 text-xs font-bold text-navy/45"><span className="flex gap-1"><Clock3 size={14} />{article.readTime}</span><span className="flex items-center gap-1 text-teal">Próximamente <ArrowUpRight size={14} /></span></div></article>)}</div><p className="mt-10 rounded-2xl bg-mist p-5 text-sm leading-6 text-navy/55"><strong className="text-navy">Nota importante:</strong> este contenido es educativo y general. No sustituye la valoración ni el consejo individual de profesionales sanitarios o de nutrición.</p></div></section></>
}
