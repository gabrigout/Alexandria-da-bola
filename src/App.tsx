import { useCallback, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent, type WheelEvent as ReactWheelEvent } from 'react'
import {
  ArrowDown, ArrowLeft, ArrowUpRight, BookOpen, CalendarDays, ChevronRight,
  Compass, Globe2, Search, Trophy, Users, X, ZoomIn, ZoomOut, RotateCcw,
} from 'lucide-react'

type Continent = {
  id: string
  name: string
  subtitle: string
  countries: string[]
}

const continents: Continent[] = [
  { id: 'south-america', name: 'América do Sul', subtitle: 'A paixão que atravessa gerações', countries: ['Argentina', 'Brasil', 'Chile', 'Colômbia', 'Peru', 'Uruguai'] },
  { id: 'north-america', name: 'América do Norte', subtitle: 'O jogo em transformação', countries: ['Canadá', 'Estados Unidos', 'México'] },
  { id: 'europe', name: 'Europa', subtitle: 'Raízes, escolas e rivalidades', countries: ['Alemanha', 'Espanha', 'França', 'Inglaterra', 'Itália', 'Portugal'] },
  { id: 'africa', name: 'África', subtitle: 'Talento, identidade e conquistas', countries: ['África do Sul', 'Egito', 'Marrocos', 'Nigéria', 'Senegal'] },
  { id: 'asia', name: 'Ásia', subtitle: 'Novas fronteiras do futebol', countries: ['Arábia Saudita', 'Coreia do Sul', 'Japão'] },
  { id: 'oceania', name: 'Oceania', subtitle: 'O futebol do outro lado do mundo', countries: ['Austrália', 'Nova Zelândia'] },
  { id: 'antarctica', name: 'Antártida', subtitle: 'Um território sem acervo futebolístico', countries: [] },
]

const milestones = [
  { year: 1863, label: 'As regras do jogo', note: 'A Football Association é fundada em Londres e estabelece um código comum para o futebol.' },
  { year: 1872, label: 'O primeiro encontro', note: 'Escócia e Inglaterra disputam em Glasgow aquele que é reconhecido como o primeiro jogo internacional.' },
  { year: 1904, label: 'Uma federação mundial', note: 'Nasce a FIFA, organização que passaria a coordenar o futebol internacional.' },
  { year: 1930, label: 'A primeira Copa', note: 'O Uruguai recebe a primeira Copa do Mundo e conquista o título diante de sua torcida.' },
  { year: 1958, label: 'O mundo conhece Pelé', note: 'O Brasil conquista sua primeira Copa do Mundo, na Suécia, com uma geração histórica.' },
  { year: 1970, label: 'O tri no México', note: 'A seleção brasileira conquista o tricampeonato e leva definitivamente a Taça Jules Rimet.' },
  { year: 1991, label: 'Uma nova era', note: 'A primeira Copa do Mundo Feminina é disputada na China.' },
  { year: 2002, label: 'O pentacampeonato', note: 'O Brasil vence a Alemanha no Japão e na Coreia do Sul e conquista sua quinta Copa.' },
  { year: 2022, label: 'Uma final para a história', note: 'A Argentina conquista a Copa do Mundo do Catar em uma final memorável.' },
]

type GeoPosition = [number, number, ...number[]]
type GeoGeometry = { type: 'Polygon' | 'MultiPolygon'; coordinates: GeoPosition[][] | GeoPosition[][][] }
type GeoFeature = { type: 'Feature'; properties: Record<string, string | number | null>; geometry: GeoGeometry }
type GeoData = { type: 'FeatureCollection'; features: GeoFeature[] }
type MapCountry = { name: string; continent: string; code: string; d: string; bounds: [number, number, number, number] }

const MAP_URL = 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson'
const MAP_W = 1200
const MAP_H = 600
const mapContinents = ['América do Norte', 'América do Sul', 'Europa', 'África', 'Ásia', 'Oceania']

function continentName(raw: string) {
  const names: Record<string, string> = {
    'North America': 'América do Norte', 'South America': 'América do Sul',
    'Europe': 'Europa', 'Africa': 'África', 'Asia': 'Ásia', 'Oceania': 'Oceania',
    'Seven seas (open ocean)': 'Oceanos',
  }
  return names[raw] ?? raw
}

const regionNames = new Intl.DisplayNames(['pt-BR'], { type: 'region' })
const countryNamesByCode: Record<string, string> = {
  XK: 'Kosovo', TW: 'Taiwan', PS: 'Palestina', EH: 'Saara Ocidental',
  '00': 'Território não identificado',
}
function countryNameInPortuguese(properties: Record<string, string | number | null>) {
  const code = String(properties.ISO_A2 ?? '')
  if (code && code !== '-99' && /^[A-Z]{2}$/.test(code)) {
    const localized = regionNames.of(code)
    if (localized && localized !== code) return localized
  }
  const known = countryNamesByCode[code]
  if (known) return known
  return String(properties.NAME_PT ?? properties.NAME ?? properties.ADMIN ?? 'País')
}

function makeCountryPath(geometry: GeoGeometry) {
  const polygons = geometry.type === 'Polygon'
    ? [geometry.coordinates as GeoPosition[][]]
    : geometry.coordinates as GeoPosition[][][]
  let d = ''
  let minX = MAP_W, minY = MAP_H, maxX = 0, maxY = 0
  const project = (point: GeoPosition) => {
    const x = ((point[0] + 180) / 360) * MAP_W
    const y = ((90 - point[1]) / 180) * MAP_H
    minX = Math.min(minX, x); maxX = Math.max(maxX, x)
    minY = Math.min(minY, y); maxY = Math.max(maxY, y)
    return [x, y] as const
  }
  for (const polygon of polygons) {
    for (const ring of polygon) {
      if (!ring.length) continue
      ring.forEach((point, index) => {
        const [x, y] = project(point)
        d += (index === 0 ? 'M' : 'L') + x.toFixed(2) + ',' + y.toFixed(2)
      })
      d += 'Z'
    }
  }
  return { d, bounds: [minX, minY, maxX, maxY] as [number, number, number, number] }
}

function FlatWorldMap({ onSelect }: { onSelect: (country: MapCountry) => void }) {
  const [countries, setCountries] = useState<MapCountry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [view, setView] = useState({ x: 0, y: 0, w: MAP_W, h: MAP_H })
  const [activeContinent, setActiveContinent] = useState<string | null>(null)
  const dragRef = useRef<{ x: number; y: number; viewX: number; viewY: number } | null>(null)

  useEffect(() => {
    let cancelled = false
    fetch(MAP_URL)
      .then((response) => { if (!response.ok) throw new Error('Map unavailable'); return response.json() as Promise<GeoData> })
      .then((data) => {
        if (cancelled) return
        const mapped = data.features.map((feature) => {
          const result = makeCountryPath(feature.geometry)
          return {
            name: countryNameInPortuguese(feature.properties),
            continent: continentName(String(feature.properties.CONTINENT ?? '')),
            code: String(feature.properties.ADM0_A3 ?? feature.properties.ISO_A3 ?? ''),
            d: result.d, bounds: result.bounds,
          }
        }).filter((country) => country.d && country.continent !== 'Oceanos')
        setCountries(mapped)
        setLoading(false)
      })
      .catch(() => { if (!cancelled) { setError(true); setLoading(false) } })
    return () => { cancelled = true }
  }, [])

  const zoomTo = (bounds: [number, number, number, number]) => {
    const [x1, y1, x2, y2] = bounds
    const width = Math.max(x2 - x1, 12) * 2.5
    const height = Math.max(y2 - y1, 12) * 2.5
    const w = Math.min(MAP_W, Math.max(width, height * 2))
    const h = w / 2
    setView({ x: Math.max(0, Math.min(MAP_W - w, (x1 + x2) / 2 - w / 2)), y: Math.max(0, Math.min(MAP_H - h, (y1 + y2) / 2 - h / 2)), w, h })
  }
  const zoomBy = (factor: number) => setView((old) => {
    const w = Math.max(75, Math.min(MAP_W, old.w * factor))
    const h = w / 2
    return { x: Math.max(0, Math.min(MAP_W - w, old.x + (old.w - w) / 2)), y: Math.max(0, Math.min(MAP_H - h, old.y + (old.h - h) / 2)), w, h }
  })
  const reset = () => { setView({ x: 0, y: 0, w: MAP_W, h: MAP_H }); setActiveContinent(null) }
  const selectContinent = (name: string) => {
    setActiveContinent(name)
    const matching = countries.filter((country) => country.continent === name)
    if (matching.length) zoomTo([
      Math.min(...matching.map((item) => item.bounds[0])),
      Math.min(...matching.map((item) => item.bounds[1])),
      Math.max(...matching.map((item) => item.bounds[2])),
      Math.max(...matching.map((item) => item.bounds[3])),
    ])
  }
  const chooseCountry = (country: MapCountry) => { zoomTo(country.bounds); onSelect(country) }
  const onWheel = (event: ReactWheelEvent<SVGSVGElement>) => { event.preventDefault(); zoomBy(event.deltaY > 0 ? 1.18 : .84) }
  const onPointerDown = (event: ReactPointerEvent<SVGSVGElement>) => {
    if ((event.target as Element).closest('.country-shape')) return
    dragRef.current = { x: event.clientX, y: event.clientY, viewX: view.x, viewY: view.y }
    event.currentTarget.setPointerCapture(event.pointerId)
  }
  const onPointerMove = (event: React.PointerEvent<SVGSVGElement>) => {
    const drag = dragRef.current
    if (!drag) return
    const rect = event.currentTarget.getBoundingClientRect()
    const dx = (event.clientX - drag.x) / rect.width * view.w
    const dy = (event.clientY - drag.y) / rect.height * view.h
    setView((old) => ({ ...old, x: Math.max(0, Math.min(MAP_W - old.w, drag.viewX - dx)), y: Math.max(0, Math.min(MAP_H - old.h, drag.viewY - dy)) }))
  }

  return (
    <div className="atlas-shell">
      <div className="atlas-topline"><span><i /> ATLAS INTERATIVO · FRONTEIRAS NACIONAIS</span><span>{loading ? 'CARREGANDO CARTOGRAFIA' : countries.length + ' TERRITÓRIOS MAPEADOS'}</span></div>
      <div className="atlas-map-frame">
        <svg className="atlas-map" viewBox={view.x + ' ' + view.y + ' ' + view.w + ' ' + view.h} role="group" aria-label="Mapa-múndi interativo. Selecione qualquer país ou aproxime para explorar." onWheel={onWheel} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={() => { dragRef.current = null }} onPointerCancel={() => { dragRef.current = null }}>
          <defs><pattern id="atlas-grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#b59a70" strokeOpacity=".09" strokeWidth=".7" /></pattern></defs>
          <rect x="0" y="0" width={MAP_W} height={MAP_H} fill="url(#atlas-grid)" />
          {countries.map((country) => <path key={country.code + '-' + country.name} className={'country-shape ' + (activeContinent === country.continent ? 'continent-active' : '')} d={country.d} role="button" tabIndex={0} aria-label={'Abrir ' + country.name} onClick={() => chooseCountry(country)} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') chooseCountry(country) }} />)}
        </svg>
        {loading && <div className="atlas-message">Preparando o atlas...</div>}
        {error && <div className="atlas-message atlas-error">Não foi possível carregar a cartografia. Verifique a conexão e tente novamente.</div>}
        <div className="atlas-controls">
          <button onClick={() => zoomBy(.72)} aria-label="Aproximar mapa"><ZoomIn size={16} /></button>
          <button onClick={() => zoomBy(1.38)} aria-label="Afastar mapa"><ZoomOut size={16} /></button>
          <button onClick={reset} aria-label="Ver mundo inteiro"><RotateCcw size={15} /></button>
        </div>
        <div className="atlas-scale">N ↑ <span>PROJEÇÃO EQUIRETANGULAR</span></div>
      </div>
      <div className="continent-tabs" aria-label="Selecionar continente">
        <button className={!activeContinent ? 'active' : ''} onClick={reset}>Mundo inteiro</button>
        {mapContinents.map((name) => <button key={name} className={activeContinent === name ? 'active' : ''} onClick={() => selectContinent(name)}>{name}</button>)}
      </div>
      <div className="atlas-footnote"><Compass size={13} /> TOQUE EM QUALQUER PAÍS · USE A RODA OU OS CONTROLES PARA APROXIMAR · ARRASTE PARA MOVER</div>
    </div>
  )
}

export default function App() {
  const [selectedContinent, setSelectedContinent] = useState<Continent | null>(null)
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
  const [selectedYear, setSelectedYear] = useState<number | null>(null)
  const [query, setQuery] = useState('')
  const selectedMilestone = milestones.find((item) => item.year === selectedYear)
  const filtered = milestones.filter((item) => String(item.year).includes(query) || item.label.toLowerCase().includes(query.toLowerCase()))

  const handleCountrySelect = useCallback((country: MapCountry) => {
    const continent = continents.find((item) => item.name === country.continent) ?? { id: country.continent, name: country.continent, subtitle: 'Explore a história do futebol neste continente', countries: [] }
    setSelectedContinent(continent)
    setSelectedCountry(country.name)
  }, [])

  const openTimeline = () => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })
  const openCollection = () => document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <main className="site-shell">
      <div className="grain" aria-hidden="true" />
      <header className="topbar">
        <a className="brand" href="#" onClick={() => { setSelectedContinent(null); setSelectedCountry(null); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          <span className="brand-mark">A</span>
          <span className="brand-name">ALEXANDRIA<span>.</span></span>
        </a>
        <nav className="main-nav" aria-label="Navegação principal">
          <button onClick={openCollection}>Explorar</button>
          <button onClick={openCollection}>Competições</button>
          <button onClick={openCollection}>Lendas</button>
          <button onClick={openTimeline}>Linha do tempo</button>
        </nav>
        <button className="menu-button" onClick={openCollection}>
          <BookOpen size={15} strokeWidth={1.6} /> <span>Explorar acervo</span>
        </button>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hall-atmosphere" aria-hidden="true">
          <div className="hall-dome" />
          <div className="hall-arch hall-arch-one" />
          <div className="hall-arch hall-arch-two" />
          <div className="hall-shelf shelf-left" />
          <div className="hall-shelf shelf-right" />
          <div className="hall-column column-left"><i /><b /><span /></div>
          <div className="hall-column column-right"><i /><b /><span /></div>
          <div className="hall-floor" />
          <div className="hall-light" />
        </div>

        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> A BIBLIOTECA DO FUTEBOL</div>
          <h1 id="hero-title">O futebol tem<br />um mundo de<br /><em>histórias.</em></h1>
          <p className="hero-description">Cada continente guarda partidas, personagens e conquistas que ajudaram a construir o jogo. Explore o globo e descubra onde cada história começa.</p>
          <button className="discover-button" onClick={openCollection}>
            <span>Começar a explorar</span><ArrowDown size={16} />
          </button>
          <div className="hero-index"><span>01</span><i /><span>MUNDO · 7 CONTINENTES</span></div>
        </div>

        <div className="globe-stage atlas-stage">
          <div className="globe-aura" />
          <div className="globe-halo" />
          <FlatWorldMap onSelect={handleCountrySelect} />
        </div>

        {selectedContinent && (
          <aside className="explore-panel" aria-live="polite">
            <button className="panel-close" onClick={() => { setSelectedContinent(null); setSelectedCountry(null) }} aria-label="Fechar seleção"><X size={16} /></button>
            <div className="panel-kicker"><span className="caption-dot" /> CONTINENTE SELECIONADO</div>
            {selectedCountry ? (
              <>
                <div className="panel-breadcrumb">Mundo <ChevronRight size={12} /> {selectedContinent.name} <ChevronRight size={12} /> <b>{selectedCountry}</b></div>
                <h3>{selectedCountry}</h3>
                <p>O próximo nível do acervo começa aqui: história nacional, competições, clubes, seleções, jogadores e partidas marcantes.</p>
                <div className="country-preview">
                  <span><Trophy size={14} /> Competições e títulos</span>
                  <span><Users size={14} /> Clubes, seleções e lendas</span>
                  <span><BookOpen size={14} /> História e partidas</span>
                </div>
                <button className="panel-action" onClick={openCollection}>Ver estrutura do acervo <ArrowUpRight size={14} /></button>
              </>
            ) : (
              <>
                <div className="panel-breadcrumb">Mundo <ChevronRight size={12} /> <b>{selectedContinent.name}</b></div>
                <h3>{selectedContinent.name}</h3>
                <p>{selectedContinent.subtitle}. Escolha um país para visualizar a próxima camada da biblioteca.</p>
                {selectedContinent.countries.length ? (
                  <div className="country-list">
                    {selectedContinent.countries.map((country) => (
                      <button key={country} onClick={() => setSelectedCountry(country)}>{country}<ChevronRight size={13} /></button>
                    ))}
                  </div>
                ) : <p className="empty-note">Não há países disponíveis nesta seleção demonstrativa.</p>}
              </>
            )}
          </aside>
        )}
      </section>

      <section className="collection-section" id="collection">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> UM UNIVERSO PARA DESCOBRIR</div>
            <h2>Escolha por onde<br />a história <em>começa.</em></h2>
          </div>
          <p>Do panorama mundial aos detalhes<br />que fizeram o futebol ser o que é.</p>
        </div>
        <div className="collection-grid">
          <button className="collection-card card-world" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Globe2 size={20} /><span className="card-number">01 / MUNDO</span><strong>Países e continentes</strong><small>Explore a geografia do futebol</small><ArrowUpRight size={16} />
          </button>
          <button className="collection-card" onClick={openTimeline}>
            <Trophy size={20} /><span className="card-number">02 / COMPETIÇÕES</span><strong>Torneios e títulos</strong><small>As disputas que marcaram épocas</small><ArrowUpRight size={16} />
          </button>
          <button className="collection-card" onClick={openTimeline}>
            <Users size={20} /><span className="card-number">03 / PERSONAGENS</span><strong>Lendas do jogo</strong><small>Jogadores, técnicos e protagonistas</small><ArrowUpRight size={16} />
          </button>
          <button className="collection-card" onClick={openTimeline}>
            <CalendarDays size={20} /><span className="card-number">04 / TEMPO</span><strong>Linha do tempo</strong><small>Momentos que mudaram o futebol</small><ArrowUpRight size={16} />
          </button>
        </div>
      </section>

      <section className="archive-section" id="timeline">
        <div className="section-heading timeline-heading">
          <div><div className="eyebrow"><span className="eyebrow-line" /> REGISTROS EM DESTAQUE</div><h2>O tempo também é um <em>mapa.</em></h2></div>
          <p>Alguns marcos para começar a viagem.<br />O acervo histórico será aprofundado por etapas.</p>
        </div>
        <div className="timeline">
          <div className="timeline-meta"><span>LINHA DO TEMPO</span><span>1863 — 2026 <ArrowUpRight size={12} /></span></div>
          <div className="timeline-track">
            {milestones.map((item) => (
              <button key={item.year} className={`year-point ${selectedYear === item.year ? 'active' : ''}`} onClick={() => setSelectedYear(item.year)}>
                <span className="point-dot" /><span className="point-year">{item.year}</span><span className="point-label">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="archive-bottom">
          <div className="archive-search">
            <Search size={16} />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar um ano ou acontecimento..." aria-label="Buscar ano ou acontecimento" />
            {query && <button onClick={() => setQuery('')} aria-label="Limpar busca"><X size={14} /></button>}
          </div>
          <div className="archive-hint"><BookOpen size={13} /> <span>SELECIONE UM MARCO PARA ABRIR O REGISTRO</span></div>
        </div>
        {query && (
          <div className="search-results">
            {filtered.length ? filtered.map((item) => <button key={item.year} onClick={() => setSelectedYear(item.year)}><span>{item.year}</span>{item.label}<ArrowUpRight size={14} /></button>) : <p>Nenhum marco encontrado neste recorte.</p>}
          </div>
        )}
      </section>

      {selectedYear !== null && (
        <div className="record-overlay" role="dialog" aria-modal="true" aria-label={`Registro de ${selectedYear}`} onClick={() => setSelectedYear(null)}>
          <div className="record-panel" onClick={(event) => event.stopPropagation()}>
            <button className="close-record" onClick={() => setSelectedYear(null)} aria-label="Fechar registro"><X size={18} /></button>
            <div className="eyebrow"><span className="eyebrow-line" /> REGISTRO DO ACERVO · {selectedMilestone ? 'MARCO HISTÓRICO' : 'ANO SELECIONADO'}</div>
            <div className="record-year">{selectedYear}</div>
            <h2>{selectedMilestone?.label ?? 'Uma página em branco na história.'}</h2>
            <p>{selectedMilestone?.note ?? 'Este ano foi selecionado na linha do tempo. O registro histórico detalhado será incorporado ao acervo em uma próxima etapa.'}</p>
            <div className="record-divider" />
            <div className="record-meta"><span><CalendarDays size={14} /> ARQUIVO CRONOLÓGICO</span><span><Globe2 size={13} /> REGISTRO EM CONSTRUÇÃO</span></div>
            <button className="back-button" onClick={() => setSelectedYear(null)}><ArrowLeft size={15} /> Voltar à biblioteca</button>
          </div>
        </div>
      )}

      <footer className="footer">
        <div className="footer-brand">ALEXANDRIA<span>.</span></div>
        <p>A memória do futebol, preservada em movimento.</p>
        <span className="footer-copy">© 2026 · A MEMÓRIA DO FUTEBOL</span>
      </footer>
    </main>
  )
}
