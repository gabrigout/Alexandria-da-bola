import { useCallback, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import {
  ArrowDown, ArrowLeft, ArrowUpRight, BookOpen, CalendarDays, ChevronRight,
  Compass, Globe2, Search, Trophy, Users, X,
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

function createFallbackEarthTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 2048
  canvas.height = 1024
  const context = canvas.getContext('2d')
  if (!context) return new THREE.Texture()

  const gradient = context.createLinearGradient(0, 0, 0, canvas.height)
  gradient.addColorStop(0, '#153e5d')
  gradient.addColorStop(0.5, '#0d4964')
  gradient.addColorStop(1, '#102c49')
  context.fillStyle = gradient
  context.fillRect(0, 0, canvas.width, canvas.height)

  context.strokeStyle = 'rgba(174, 207, 217, .12)'
  context.lineWidth = 2
  for (let latitude = 0; latitude <= 180; latitude += 15) {
    const y = (latitude / 180) * canvas.height
    context.beginPath()
    context.moveTo(0, y)
    context.lineTo(canvas.width, y)
    context.stroke()
  }
  for (let longitude = 0; longitude <= 360; longitude += 15) {
    const x = (longitude / 360) * canvas.width
    context.beginPath()
    context.moveTo(x, 0)
    context.lineTo(x, canvas.height)
    context.stroke()
  }

  const project = (points: [number, number][]) => {
    context.beginPath()
    points.forEach(([longitude, latitude], index) => {
      const x = ((longitude + 180) / 360) * canvas.width
      const y = ((90 - latitude) / 180) * canvas.height
      if (index === 0) context.moveTo(x, y)
      else context.lineTo(x, y)
    })
    context.closePath()
    const land = context.createLinearGradient(0, 150, 0, 850)
    land.addColorStop(0, '#8e9a72')
    land.addColorStop(0.45, '#6c865d')
    land.addColorStop(1, '#a18f68')
    context.fillStyle = land
    context.fill()
    context.strokeStyle = 'rgba(218, 205, 157, .55)'
    context.lineWidth = 3
    context.stroke()
  }

  project([[-168, 70], [-145, 72], [-125, 55], [-110, 50], [-95, 48], [-82, 25], [-97, 15], [-111, 28], [-118, 33], [-130, 48], [-150, 58]])
  project([[-80, 10], [-67, 8], [-51, -2], [-44, -21], [-55, -42], [-70, -55], [-78, -35], [-82, -10]])
  project([[-11, 70], [32, 72], [55, 55], [42, 35], [25, 32], [10, 37], [-10, 48]])
  project([[-17, 35], [12, 38], [37, 24], [49, 8], [38, -17], [25, -34], [12, -35], [-3, -20], [-16, 5]])
  project([[40, 68], [80, 76], [120, 63], [160, 55], [178, 40], [143, 18], [121, 8], [105, 5], [78, 25], [56, 35]])
  project([[112, -11], [133, -10], [154, -25], [145, -40], [123, -44], [113, -30]])
  project([[-50, 82], [-25, 80], [-22, 60], [-43, 58], [-55, 70]])
  context.fillStyle = 'rgba(231, 237, 222, .75)'
  context.fillRect(0, 0, canvas.width, 30)
  context.fillRect(0, canvas.height - 24, canvas.width, 24)

  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  return texture
}

function findContinent(longitude: number, latitude: number) {
  if (latitude < -60) return continents[6]
  if (latitude < -8 && longitude > 105 && longitude < 180) return continents[5]
  if (latitude > 34 && latitude < 73 && longitude > -15 && longitude < 62) return continents[2]
  if (latitude > -38 && latitude < 38 && longitude > -20 && longitude < 53) return continents[3]
  if (latitude > 5 && latitude < 84 && longitude > -170 && longitude < -48) return continents[1]
  if (latitude > -58 && latitude < 16 && longitude > -86 && longitude < -30) return continents[0]
  if (latitude > -12 && latitude < 80 && longitude > 25 && longitude < 180) return continents[4]
  return null
}

function WorldGlobe({ onSelect }: { onSelect: (continent: Continent) => void }) {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' })
    } catch {
      mount.dataset.webgl = 'unavailable'
      return
    }

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100)
    camera.position.set(0, 0, 4.7)

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5))
    renderer.setClearColor(0x000000, 0)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.12
    mount.appendChild(renderer.domElement)

    const globeGroup = new THREE.Group()
    scene.add(globeGroup)

    const earthGeometry = new THREE.SphereGeometry(1.48, 96, 64)
    const earthMaterial = new THREE.MeshStandardMaterial({
      map: createFallbackEarthTexture(),
      roughness: 0.92,
      metalness: 0,
      emissive: new THREE.Color('#102237'),
      emissiveIntensity: 0.16,
    })
    const earth = new THREE.Mesh(earthGeometry, earthMaterial)
    globeGroup.add(earth)

    const textureLoader = new THREE.TextureLoader()
    let cloudsMesh: THREE.Mesh<THREE.SphereGeometry, THREE.MeshPhongMaterial> | null = null
    textureLoader.load(
      'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg',
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace
        texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 4)
        earthMaterial.map?.dispose()
        earthMaterial.map = texture
        earthMaterial.needsUpdate = true
      },
      undefined,
      () => {
        // A procedural map remains visible when the external texture is unavailable.
      },
    )
    textureLoader.load(
      'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_normal_2048.jpg',
      (texture) => {
        earthMaterial.normalMap = texture
        earthMaterial.normalScale.set(0.48, -0.48)
        earthMaterial.needsUpdate = true
      },
      undefined,
      () => {},
    )
    textureLoader.load(
      'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_clouds_1024.png',
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace
        const cloudGeometry = new THREE.SphereGeometry(1.505, 64, 48)
        const cloudMaterial = new THREE.MeshPhongMaterial({
          map: texture, transparent: true, opacity: 0.17, depthWrite: false,
        })
        cloudsMesh = new THREE.Mesh(cloudGeometry, cloudMaterial)
        globeGroup.add(cloudsMesh)
      },
      undefined,
      () => {},
    )

    scene.add(new THREE.AmbientLight(0xe4efff, 1.75))
    const keyLight = new THREE.DirectionalLight(0xffe8c7, 2.6)
    keyLight.position.set(-3.5, 2.4, 4.5)
    scene.add(keyLight)
    const rimLight = new THREE.DirectionalLight(0x7eaddb, 1.1)
    rimLight.position.set(3.5, -1.5, -3)
    scene.add(rimLight)

    const atmosphereGeometry = new THREE.SphereGeometry(1.55, 64, 48)
    const atmosphereMaterial = new THREE.ShaderMaterial({
      transparent: true,
      side: THREE.BackSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexShader: 'varying vec3 vNormal; void main() { vNormal = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
      fragmentShader: 'varying vec3 vNormal; void main() { float intensity = pow(0.72 - max(dot(normalize(vNormal), vec3(0.0, 0.0, 1.0)), 0.0), 3.0); gl_FragColor = vec4(0.25, 0.52, 0.78, intensity * 0.34); }',
    })
    globeGroup.add(new THREE.Mesh(atmosphereGeometry, atmosphereMaterial))

    const haloGeometry = new THREE.TorusGeometry(1.86, 0.006, 8, 180)
    const haloMaterial = new THREE.MeshBasicMaterial({ color: '#b28a50', transparent: true, opacity: 0.24 })
    const halo = new THREE.Mesh(haloGeometry, haloMaterial)
    halo.rotation.x = Math.PI * 0.38
    halo.rotation.y = -0.2
    globeGroup.add(halo)

    const raycaster = new THREE.Raycaster()
    const pointer = new THREE.Vector2()
    const activePointers = new Map<number, { x: number; y: number }>()
    let previousDistance = 0
    let moved = false
    let startPoint = { x: 0, y: 0 }
    let frame = 0

    const getPinchDistance = () => {
      const points = [...activePointers.values()]
      if (points.length < 2) return 0
      return Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y)
    }

    const onPointerDown = (event: PointerEvent) => {
      event.preventDefault()
      renderer.domElement.setPointerCapture(event.pointerId)
      activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY })
      startPoint = { x: event.clientX, y: event.clientY }
      moved = false
      previousDistance = getPinchDistance()
    }

    const onPointerMove = (event: PointerEvent) => {
      if (!activePointers.has(event.pointerId)) return
      const previous = activePointers.get(event.pointerId)!
      activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY })

      if (activePointers.size === 1) {
        const deltaX = event.clientX - previous.x
        const deltaY = event.clientY - previous.y
        if (Math.hypot(event.clientX - startPoint.x, event.clientY - startPoint.y) > 6) moved = true
        globeGroup.rotation.y += deltaX * 0.005
        globeGroup.rotation.x = THREE.MathUtils.clamp(globeGroup.rotation.x + deltaY * 0.005, -0.8, 0.8)
      } else {
        const distance = getPinchDistance()
        if (previousDistance > 0 && distance > 0) {
          camera.position.z = THREE.MathUtils.clamp(camera.position.z - (distance - previousDistance) * 0.006, 3.3, 7.2)
          moved = true
        }
        previousDistance = distance
      }
    }

    const onPointerUp = (event: PointerEvent) => {
      if (!activePointers.has(event.pointerId)) return
      const didMove = moved || Math.hypot(event.clientX - startPoint.x, event.clientY - startPoint.y) > 7
      if (!didMove && activePointers.size === 1) {
        const rect = renderer.domElement.getBoundingClientRect()
        pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
        pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
        raycaster.setFromCamera(pointer, camera)
        const hit = raycaster.intersectObject(earth, false)[0]
        if (hit?.uv) {
          const longitude = (hit.uv.x * 360) - 180
          const latitude = (0.5 - hit.uv.y) * 180
          const continent = findContinent(longitude, latitude)
          if (continent) onSelect(continent)
        }
      }
      activePointers.delete(event.pointerId)
      previousDistance = getPinchDistance()
      if (activePointers.size === 0) moved = false
      if (renderer.domElement.hasPointerCapture(event.pointerId)) renderer.domElement.releasePointerCapture(event.pointerId)
    }

    const onWheel = (event: WheelEvent) => {
      event.preventDefault()
      camera.position.z = THREE.MathUtils.clamp(camera.position.z + event.deltaY * 0.002, 3.3, 7.2)
    }

    renderer.domElement.addEventListener('pointerdown', onPointerDown)
    renderer.domElement.addEventListener('pointermove', onPointerMove)
    renderer.domElement.addEventListener('pointerup', onPointerUp)
    renderer.domElement.addEventListener('pointercancel', onPointerUp)
    renderer.domElement.addEventListener('wheel', onWheel, { passive: false })

    const resize = () => {
      const width = Math.max(mount.clientWidth, 1)
      const height = Math.max(mount.clientHeight, 1)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height, false)
    }
    const observer = new ResizeObserver(resize)
    observer.observe(mount)
    resize()

    const animate = () => {
      frame = requestAnimationFrame(animate)
      if (activePointers.size === 0) globeGroup.rotation.y += 0.00055
      if (cloudsMesh) cloudsMesh.rotation.y += 0.00072
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      renderer.domElement.removeEventListener('pointerdown', onPointerDown)
      renderer.domElement.removeEventListener('pointermove', onPointerMove)
      renderer.domElement.removeEventListener('pointerup', onPointerUp)
      renderer.domElement.removeEventListener('pointercancel', onPointerUp)
      renderer.domElement.removeEventListener('wheel', onWheel)
      earthGeometry.dispose()
      earthMaterial.map?.dispose()
      earthMaterial.normalMap?.dispose()
      earthMaterial.dispose()
      if (cloudsMesh) {
        cloudsMesh.geometry.dispose()
        cloudsMesh.material.map?.dispose()
        cloudsMesh.material.dispose()
      }
      atmosphereGeometry.dispose()
      atmosphereMaterial.dispose()
      haloGeometry.dispose()
      haloMaterial.dispose()
      renderer.dispose()
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
    }
  }, [onSelect])

  return <div className="globe-canvas" ref={mountRef} aria-label="Globo terrestre interativo. Arraste para girar e use o gesto de pinça para aproximar." />
}

export default function App() {
  const [selectedContinent, setSelectedContinent] = useState<Continent | null>(null)
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
  const [selectedYear, setSelectedYear] = useState<number | null>(null)
  const [query, setQuery] = useState('')
  const selectedMilestone = milestones.find((item) => item.year === selectedYear)
  const filtered = milestones.filter((item) => String(item.year).includes(query) || item.label.toLowerCase().includes(query.toLowerCase()))

  const handleContinentSelect = useCallback((continent: Continent) => {
    setSelectedContinent(continent)
    setSelectedCountry(null)
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

        <div className="globe-stage">
          <div className="globe-aura" />
          <div className="globe-halo" />
          <WorldGlobe onSelect={handleContinentSelect} />
          <div className="globe-caption"><span className="caption-dot" /> TERRA · ACERVO GLOBAL</div>
          <div className="globe-instruction"><Compass size={13} /> ARRASTE PARA GIRAR · PINÇA PARA APROXIMAR</div>
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
        <span className="footer-copy">© 2026 · THE FOOTBALL MEMORY ARCHIVE</span>
      </footer>
    </main>
  )
}
