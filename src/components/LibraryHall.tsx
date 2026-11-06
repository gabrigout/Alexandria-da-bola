import { useEffect, useMemo, useRef, useState } from 'react'
import type { CSSProperties, KeyboardEvent as ReactKeyboardEvent } from 'react'
import { ArrowLeft, ArrowUpRight, BookOpen, Search, X } from 'lucide-react'
import DeskGlobe from './DeskGlobe'
import type { GlobeCountry } from './DeskGlobe'
import { confederationShelves, leagueVolumes } from '../data/leagues'
import type { LeagueVolume } from '../data/leagues'

type SectionId = 'ligas' | 'copas' | 'clubes' | 'lendas' | 'selecoes' | 'linha-do-tempo' | 'atlas'

const sectionBooks: Array<{ id: SectionId; title: string; tag: string; tone: string; height: number; ready: boolean }> = [
  { id: 'ligas', title: 'Ligas', tag: 'I', tone: '#7a1f1c', height: 96, ready: true },
  { id: 'copas', title: 'Copas', tag: 'II', tone: '#1f3a2c', height: 88, ready: false },
  { id: 'clubes', title: 'Clubes', tag: 'III', tone: '#2a2a44', height: 92, ready: false },
  { id: 'lendas', title: 'Lendas', tag: 'IV', tone: '#4a2e14', height: 100, ready: false },
  { id: 'selecoes', title: 'Seleções', tag: 'V', tone: '#1d3046', height: 90, ready: false },
  { id: 'linha-do-tempo', title: 'Linha do tempo', tag: 'VI', tone: '#3b1f33', height: 94, ready: false },
  { id: 'atlas', title: 'Atlas', tag: 'VII', tone: '#203436', height: 86, ready: false },
]

// lombadas decorativas (sem texto) para preencher a estante
const fillerBooks = Array.from({ length: 22 }, (_, index) => ({
  height: 70 + ((index * 37) % 28),
  width: 14 + ((index * 13) % 9),
  tone: ['#1c1712', '#2a2118', '#14110d', '#30261a', '#221a12'][index % 5],
  lean: index % 9 === 4 ? -6 : 0,
}))

function readableInk(hex: string): string {
  const value = hex.replace('#', '')
  const r = parseInt(value.slice(0, 2), 16); const g = parseInt(value.slice(2, 4), 16); const b = parseInt(value.slice(4, 6), 16)
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.6 ? '#14110d' : '#f6efe2'
}

function usePointerParallax<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  useEffect(() => {
    const element = ref.current
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let frame = 0
    const move = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect()
      const px = ((event.clientX - rect.left) / rect.width) * 2 - 1
      const py = ((event.clientY - rect.top) / rect.height) * 2 - 1
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        element.style.setProperty('--px', Math.max(-1, Math.min(1, px)).toFixed(3))
        element.style.setProperty('--py', Math.max(-1, Math.min(1, py)).toFixed(3))
      })
    }
    const reset = () => { element.style.setProperty('--px', '0'); element.style.setProperty('--py', '0') }
    element.addEventListener('pointermove', move)
    element.addEventListener('pointerleave', reset)
    return () => { element.removeEventListener('pointermove', move); element.removeEventListener('pointerleave', reset); cancelAnimationFrame(frame) }
  }, [])
  return ref
}

type Props = {
  onOpenBundesliga: () => void
  onOpenArchive: (category: 'todas' | 'liga' | 'copa' | 'clube' | 'jogador') => void
  onOpenTimeline: () => void
  onOpenAtlas: () => void
  onGlobeCountry: (country: GlobeCountry) => void
}

export default function LibraryHall({ onOpenBundesliga, onOpenArchive, onOpenTimeline, onOpenAtlas, onGlobeCountry }: Props) {
  const [view, setView] = useState<'sala' | 'ligas'>('sala')
  const [notice, setNotice] = useState<string | null>(null)
  const roomRef = usePointerParallax<HTMLDivElement>()

  const openSection = (id: SectionId) => {
    setNotice(null)
    if (id === 'ligas') { setView('ligas'); return }
    if (id === 'linha-do-tempo') { onOpenTimeline(); return }
    if (id === 'atlas') { onOpenAtlas(); return }
    const category = id === 'copas' ? 'copa' : id === 'clubes' ? 'clube' : id === 'lendas' ? 'jogador' : 'todas'
    const label = sectionBooks.find((book) => book.id === id)?.title ?? ''
    setNotice(`O corredor de ${label} ainda está sendo construído.`)
    if (id !== 'selecoes') onOpenArchive(category)
  }

  return (
    <section className="library" id="biblioteca" aria-labelledby="library-title">
      {view === 'sala' ? (
        <div className="library-room" ref={roomRef}>
          <div className="room-wall" aria-hidden="true">
            <i className="room-panel room-panel-left" /><i className="room-panel room-panel-right" />
            <i className="room-window" />
          </div>
          <div className="room-lamp" aria-hidden="true"><i className="lamp-cord" /><i className="lamp-shade" /><i className="lamp-glow" /></div>

          <div className="room-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> A BIBLIOTECA DO FUTEBOL</div>
            <h1 id="library-title">Escolha um <em>livro.</em></h1>
            <p>Cada volume da estante abre uma ala do acervo. O globo da mesa leva ao atlas de cada país.</p>
          </div>

          <div className="bookcase" role="group" aria-label="Estante principal: seções do acervo">
            <div className="bookcase-top" aria-hidden="true">
              <span className="bookcase-plaque">ALEXANDRIA</span>
            </div>
            <div className="bookcase-shelf">
              {fillerBooks.slice(0, 5).map((book, index) => <i key={`a${index}`} className="filler-book" style={{ height: `${book.height}%`, width: book.width, background: book.tone }} />)}
              {sectionBooks.map((book) => (
                <button
                  key={book.id}
                  type="button"
                  className={'section-book' + (book.ready ? ' is-ready' : '')}
                  style={{ '--tone': book.tone, height: `${book.height}%` } as CSSProperties}
                  onClick={() => openSection(book.id)}
                  aria-label={`${book.title}${book.ready ? '' : ' (corredor em construção)'}`}
                >
                  <span className="section-book-tag">{book.tag}</span>
                  <span className="section-book-title">{book.title}</span>
                  <span className="section-book-band" />
                </button>
              ))}
              {fillerBooks.slice(5, 9).map((book, index) => <i key={`b${index}`} className="filler-book" style={{ height: `${book.height}%`, width: book.width, background: book.tone, transform: `rotate(${book.lean}deg)` }} />)}
            </div>
            <div className="bookcase-shelf bookcase-shelf-low" aria-hidden="true">
              {fillerBooks.slice(9).map((book, index) => <i key={`c${index}`} className="filler-book" style={{ height: `${book.height - 6}%`, width: book.width + 2, background: book.tone, transform: `rotate(${book.lean}deg)` }} />)}
              <i className="shelf-box" />
            </div>
            <div className="bookcase-base" aria-hidden="true" />
          </div>

          <div className="room-desk">
            <DeskGlobe onSelect={(country) => { onGlobeCountry(country); onOpenAtlas() }} />
            <div className="desk-top" aria-hidden="true" />
          </div>

          <div className="room-floor" aria-hidden="true" />
          {notice ? <p className="room-notice" role="status">{notice}</p> : null}
        </div>
      ) : (
        <LeagueCorridor onBack={() => setView('sala')} onOpenBundesliga={onOpenBundesliga} />
      )}
    </section>
  )
}

function LeagueCorridor({ onBack, onOpenBundesliga }: { onBack: () => void; onOpenBundesliga: () => void }) {
  const corridorRef = usePointerParallax<HTMLDivElement>()
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<LeagueVolume | null>(null)
  const perRow = useBooksPerRow()
  const term = query.trim().toLocaleLowerCase('pt-BR')
  const shelves = useMemo(() => confederationShelves.map((shelf) => ({
    ...shelf,
    volumes: leagueVolumes.filter((volume) => volume.confederation === shelf.id && (!term || `${volume.name} ${volume.country}`.toLocaleLowerCase('pt-BR').includes(term))),
  })).filter((shelf) => shelf.volumes.length), [term])
  const total = shelves.reduce((sum, shelf) => sum + shelf.volumes.length, 0)

  useEffect(() => {
    const element = scrollRef.current
    if (!element) return
    const wheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return
      const max = element.scrollWidth - element.clientWidth
      if ((event.deltaY > 0 && element.scrollLeft >= max - 1) || (event.deltaY < 0 && element.scrollLeft <= 0)) return
      event.preventDefault()
      element.scrollLeft += event.deltaY
    }
    element.addEventListener('wheel', wheel, { passive: false })
    return () => element.removeEventListener('wheel', wheel)
  }, [])

  useEffect(() => {
    const key = (event: KeyboardEvent) => { if (event.key === 'Escape') { if (selected) setSelected(null); else onBack() } }
    window.addEventListener('keydown', key)
    return () => window.removeEventListener('keydown', key)
  }, [selected, onBack])

  const onShelfKey = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') scrollRef.current?.scrollBy({ left: 320, behavior: 'smooth' })
    if (event.key === 'ArrowLeft') scrollRef.current?.scrollBy({ left: -320, behavior: 'smooth' })
  }

  return (
    <div className="corridor" ref={corridorRef}>
      <div className="corridor-depth" aria-hidden="true"><i className="corridor-ceiling" /><i className="corridor-floor" /><i className="corridor-end" /></div>
      <header className="corridor-header">
        <button type="button" className="corridor-back" onClick={onBack}><ArrowLeft size={15} /> Voltar à sala</button>
        <div>
          <div className="eyebrow"><span className="eyebrow-line" /> CORREDOR I</div>
          <h2>As <em>Ligas</em></h2>
          <p>{total} volumes, um por liga, organizados por confederação. Os livros serão escritos um a um, com fontes, como a Bundesliga.</p>
        </div>
        <label className="corridor-search">
          <Search size={14} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar liga ou país" aria-label="Buscar liga ou país" />
        </label>
      </header>

      <div className="corridor-shelves" ref={scrollRef} tabIndex={0} onKeyDown={onShelfKey} aria-label="Estantes do corredor. Role para o lado para percorrer.">
        {shelves.map((shelf) => (
          <section className="league-bay" key={shelf.id} aria-label={`${shelf.title} (${shelf.subtitle})`}>
            <div className="league-bay-plaque"><span>{shelf.subtitle}</span><strong>{shelf.title}</strong><small>{shelf.volumes.length} {shelf.volumes.length === 1 ? 'volume' : 'volumes'}</small></div>
            <div className="league-bay-rows">
              {chunk(shelf.volumes, perRow).map((row, rowIndex) => (
                <div className="league-row" key={rowIndex}>
                  {row.map((volume, index) => (
                    <button
                      key={volume.id}
                      type="button"
                      className={'league-book' + (volume.name.length > 19 ? ' is-long' : '') + (volume.status === 'em-escrita' ? ' is-written' : '') + (selected?.id === volume.id ? ' is-open' : '')}
                      style={{ '--spine': volume.color, '--band': volume.accent, '--ink': readableInk(volume.color), height: `${84 + ((index * 7 + rowIndex * 5) % 14)}%` } as CSSProperties}
                      onClick={() => setSelected(volume)}
                      aria-label={`${volume.name}, ${volume.country}${volume.status === 'em-escrita' ? ', volume em escrita' : ', volume em branco'}`}
                    >
                      <span className="league-book-band" />
                      <span className="league-book-name">{volume.name}</span>
                      <span className="league-book-country">{volume.country}</span>
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </section>
        ))}
        {!shelves.length ? <p className="corridor-empty">Nenhuma liga encontrada para “{query}”.</p> : null}
      </div>
      <p className="corridor-hint" aria-hidden="true">Role ou arraste para percorrer o corredor →</p>

      {selected ? (
        <aside className="league-volume" style={{ '--spine': selected.color, '--band': selected.accent, '--ink': readableInk(selected.color) } as CSSProperties} aria-live="polite">
          <button type="button" className="panel-close" onClick={() => setSelected(null)} aria-label="Fechar volume"><X size={16} /></button>
          <div className="league-volume-cover"><span>{selected.confederation === 'EXTINTAS' ? 'LIGA EXTINTA' : selected.confederation}</span><strong>{selected.name}</strong><small>{selected.country}</small></div>
          <div className="league-volume-body">
            {selected.status === 'em-escrita' ? (
              <>
                <b className="league-volume-status is-written">Volume em escrita</b>
                <p>{selected.note}</p>
                <button type="button" className="panel-action" onClick={onOpenBundesliga}>Abrir o volume <ArrowUpRight size={14} /></button>
              </>
            ) : (
              <>
                <b className="league-volume-status">Volume em branco</b>
                <p>Esta liga ainda não foi pesquisada. As páginas serão escritas temporada por temporada, com resultados e fontes, no mesmo método da Bundesliga.</p>
              </>
            )}
            <small className="league-volume-note"><BookOpen size={12} /> Cores da lombada {selected.colorBasis === 'cores-nacionais' ? 'baseadas nas cores nacionais' : 'aproximadas da identidade visual da liga'}, ainda a conferir.</small>
          </div>
        </aside>
      ) : null}
    </div>
  )
}

function useBooksPerRow(): number {
  const pick = () => (typeof window !== 'undefined' && window.innerWidth <= 640 ? 7 : 18)
  const [count, setCount] = useState(pick)
  useEffect(() => {
    const resize = () => setCount(pick())
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])
  return count
}

function chunk<T>(items: T[], size: number): T[][] {
  const out: T[][] = []
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size))
  return out
}
