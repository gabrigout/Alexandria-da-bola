import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { ArrowDown, ArrowLeft, ArrowUpRight, BookOpen, CalendarDays, CircleDot, Command, Search, X } from 'lucide-react'

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

function MemorySphere({ onSelect }: { onSelect: (year: number) => void }) {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(38, mount.clientWidth / mount.clientHeight, 0.1, 100)
    camera.position.set(0, 0, 8.6)

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    const group = new THREE.Group()
    scene.add(group)

    const positions: number[] = []
    const colors: number[] = []
    const sizes: number[] = []
    const count = 2100
    const gold = new THREE.Color('#d6a64d')
    const pale = new THREE.Color('#fff0c5')

    for (let i = 0; i < count; i++) {
      const t = Math.random() * Math.PI * 2
      const u = Math.random() * 2 - 1
      const shell = Math.sqrt(1 - u * u)
      const x = Math.cos(t) * shell
      const y = u
      const z = Math.sin(t) * shell
      // Two softly separated hemispheres create an abstract brain-like silhouette.
      const cleft = Math.abs(x) < 0.075 ? 0.78 : 1
      const px = x * 2.15 * cleft
      const py = y * 1.48 + Math.sin(t * 5) * 0.055
      const pz = z * 1.15
      positions.push(px, py, pz)
      const mix = Math.random() * 0.55
      const c = gold.clone().lerp(pale, mix)
      colors.push(c.r, c.g, c.b)
      sizes.push(0.6 + Math.random() * 1.8)
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
    geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1))

    const material = new THREE.PointsMaterial({
      size: 0.025,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    })
    const points = new THREE.Points(geometry, material)
    group.add(points)

    const haloGeometry = new THREE.BufferGeometry()
    const haloPositions: number[] = []
    for (let i = 0; i < 260; i++) {
      const a = Math.random() * Math.PI * 2
      const r = 2.45 + Math.random() * 0.9
      haloPositions.push(Math.cos(a) * r, (Math.random() - 0.5) * 2.7, Math.sin(a) * r * 0.52)
    }
    haloGeometry.setAttribute('position', new THREE.Float32BufferAttribute(haloPositions, 3))
    const halo = new THREE.Points(haloGeometry, new THREE.PointsMaterial({
      color: '#9d7334', size: 0.012, transparent: true, opacity: 0.45,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }))
    group.add(halo)

    const raycaster = new THREE.Raycaster()
    const pointer = new THREE.Vector2()
    const handleClick = (event: PointerEvent) => {
      const rect = renderer.domElement.getBoundingClientRect()
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
      raycaster.setFromCamera(pointer, camera)
      const hits = raycaster.intersectObject(points)
      if (hits.length) {
        const index = hits[0].index ?? 0
        const year = 1863 + (index % (2026 - 1863 + 1))
        onSelect(year)
      }
    }
    renderer.domElement.addEventListener('pointerdown', handleClick)

    let frame = 0
    let pointerX = 0
    let pointerY = 0
    const handleMove = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect()
      pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 0.18
      pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 0.12
    }
    mount.addEventListener('pointermove', handleMove)

    const animate = () => {
      frame = requestAnimationFrame(animate)
      group.rotation.y += 0.0018
      group.rotation.x += (pointerY - group.rotation.x) * 0.018
      group.rotation.z += (pointerX - group.rotation.z) * 0.018
      renderer.render(scene, camera)
    }
    animate()

    const resize = () => {
      if (!mount) return
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      mount.removeEventListener('pointermove', handleMove)
      renderer.domElement.removeEventListener('pointerdown', handleClick)
      geometry.dispose()
      material.dispose()
      haloGeometry.dispose()
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [onSelect])

  return <div className="memory-sphere" ref={mountRef} aria-label="Cérebro de partículas interativo" />
}

export default function App() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null)
  const [query, setQuery] = useState('')
  const selectedMilestone = milestones.find((item) => item.year === selectedYear)
  const filtered = milestones.filter((item) => String(item.year).includes(query) || item.label.toLowerCase().includes(query.toLowerCase()))

  return (
    <main className="site-shell">
      <div className="grain" />
      <header className="topbar">
        <a className="brand" href="#" onClick={() => setSelectedYear(null)}>
          <span className="brand-mark">A</span>
          <span className="brand-name">ALEXANDRIA<span>.</span></span>
        </a>
        <div className="topbar-center"><span className="status-dot" /> THE FOOTBALL MEMORY ARCHIVE</div>
        <button className="menu-button" onClick={() => document.getElementById('archive')?.scrollIntoView({ behavior: 'smooth' })}>
          <BookOpen size={15} strokeWidth={1.6} /> <span>Explorar arquivo</span>
        </button>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> UM ACERVO. MAIS DE UM SÉCULO DE HISTÓRIAS.</div>
          <h1>Toda história<br />deixa <em>vestígios.</em></h1>
          <p className="hero-description">No futebol, cada ano conta uma história. Entre no arquivo e descubra os momentos, personagens e conquistas que construíram o jogo.</p>
          <button className="discover-button" onClick={() => document.getElementById('archive')?.scrollIntoView({ behavior: 'smooth' })}>
            <span>Entrar na biblioteca</span><ArrowDown size={16} />
          </button>
          <div className="hero-index"><span>01</span><i /> <span>1863 — 2026</span></div>
        </div>

        <div className="artifact-wrap">
          <div className="artifact-label label-top"><span>FIG. 001</span><span>MEMÓRIA COLETIVA</span></div>
          <div className="artifact-glow" />
          <MemorySphere onSelect={setSelectedYear} />
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="artifact-caption"><span className="caption-dot" /> <span>163 ANOS DE FUTEBOL</span></div>
          <div className="artifact-label label-bottom"><span>TOQUE NOS PONTOS PARA EXPLORAR</span><span>✳</span></div>
        </div>
      </section>

      <section className="archive-section" id="archive">
        <div className="section-heading">
          <div><div className="eyebrow"><span className="eyebrow-line" /> NAVEGUE PELA MEMÓRIA</div><h2>O tempo é o nosso <em>índice.</em></h2></div>
          <p>Uma linha do tempo viva.<br />Um universo de histórias para descobrir.</p>
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
          <div className="archive-hint"><Command size={13} /> <span>SELECIONE UM MARCO PARA ABRIR O REGISTRO</span></div>
        </div>

        {query && (
          <div className="search-results">
            {filtered.length ? filtered.map((item) => <button key={item.year} onClick={() => setSelectedYear(item.year)}><span>{item.year}</span>{item.label}<ArrowUpRight size={14} /></button>) : <p>Nenhum marco encontrado neste recorte.</p>}
          </div>
        )}
      </section>

      {selectedYear !== null && (
        <div className="record-overlay" role="dialog" aria-modal="true" aria-label={`Registro de ${selectedYear}`}>
          <div className="record-panel">
            <button className="close-record" onClick={() => setSelectedYear(null)} aria-label="Fechar registro"><X size={18} /></button>
            <div className="eyebrow"><span className="eyebrow-line" /> REGISTRO DO ACERVO · {selectedMilestone ? 'MARCO HISTÓRICO' : 'ANO SELECIONADO'}</div>
            <div className="record-year">{selectedYear}</div>
            <h2>{selectedMilestone?.label ?? 'Uma página em branco na história.'}</h2>
            <p>{selectedMilestone?.note ?? 'Este ano foi selecionado na linha do tempo. O registro histórico detalhado será incorporado ao acervo em uma próxima etapa.'}</p>
            <div className="record-divider" />
            <div className="record-meta"><span><CalendarDays size={14} /> ARQUIVO CRONOLÓGICO</span><span><CircleDot size={13} /> REGISTRO EM CONSTRUÇÃO</span></div>
            <button className="back-button" onClick={() => setSelectedYear(null)}><ArrowLeft size={15} /> Voltar à biblioteca</button>
          </div>
        </div>
      )}

      <footer className="footer">
        <div className="footer-brand">ALEXANDRIA<span>.</span></div>
        <p>A memória do futebol, preservada em movimento.</p>
        <span className="footer-copy">© 2026 · THE FOOTBALL MEMORY ARCHIVE</span>
      </footer>
    </main>
  )
}