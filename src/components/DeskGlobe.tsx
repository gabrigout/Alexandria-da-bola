import { useEffect, useRef, useState } from 'react'

// Globo de mesa em canvas: projeção ortográfica, traço dourado, giro lento e arrasto.
// Usa o mesmo GeoJSON (Natural Earth 1:110m) do atlas plano.
export const WORLD_GEOJSON_URL = 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson'

type Ring = Array<[number, number]>
export type GlobeCountry = { name: string; properties: Record<string, unknown>; polygons: Ring[][] }

let worldPromise: Promise<GlobeCountry[]> | null = null
function loadWorld(): Promise<GlobeCountry[]> {
  if (!worldPromise) {
    worldPromise = fetch(WORLD_GEOJSON_URL)
      .then((response) => { if (!response.ok) throw new Error('mapa indisponível'); return response.json() })
      .then((data: { features: Array<{ properties: Record<string, unknown>; geometry: { type: string; coordinates: unknown } }> }) =>
        data.features.map((feature) => {
          const polygons = (feature.geometry.type === 'Polygon'
            ? [feature.geometry.coordinates]
            : feature.geometry.coordinates) as Ring[][]
          const name = String(feature.properties.NAME_PT ?? feature.properties.NAME ?? feature.properties.ADMIN ?? '')
          return { name, properties: feature.properties, polygons }
        }))
      .catch((error) => { worldPromise = null; throw error })
  }
  return worldPromise
}

const RAD = Math.PI / 180
const TILT = -18 * RAD

function inRing(lon: number, lat: number, ring: Ring): boolean {
  let inside = false
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i]; const [xj, yj] = ring[j]
    if ((yi > lat) !== (yj > lat) && lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) inside = !inside
  }
  return inside
}

function findCountry(world: GlobeCountry[], lon: number, lat: number): GlobeCountry | undefined {
  return world.find((country) => country.polygons.some((polygon) => inRing(lon, lat, polygon[0]) && !polygon.slice(1).some((hole) => inRing(lon, lat, hole))))
}

export default function DeskGlobe({ onSelect }: { onSelect: (country: GlobeCountry) => void }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const worldRef = useRef<GlobeCountry[]>([])
  const rotRef = useRef(-10 * RAD)
  const dragRef = useRef<{ x: number; rot: number; moved: boolean } | null>(null)
  const hoverRef = useRef<GlobeCountry | null>(null)
  const [hoverName, setHoverName] = useState('')
  const [status, setStatus] = useState<'carregando' | 'pronto' | 'erro'>('carregando')

  useEffect(() => {
    let alive = true
    loadWorld().then((world) => { if (alive) { worldRef.current = world; setStatus('pronto') } }).catch(() => alive && setStatus('erro'))
    return () => { alive = false }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frame = 0; let last = 0; let visible = true
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting })
    observer.observe(canvas)

    const draw = (time: number) => {
      frame = requestAnimationFrame(draw)
      if (!visible || time - last < 33) return
      const dt = last ? time - last : 16
      last = time
      if (!dragRef.current && !reduce) rotRef.current += dt * 0.00012
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const size = canvas.clientWidth
      if (canvas.width !== Math.round(size * dpr)) { canvas.width = Math.round(size * dpr); canvas.height = Math.round(size * dpr) }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const R = size / 2 - 2; const cx = size / 2; const cy = size / 2
      ctx.clearRect(0, 0, size, size)

      const sphere = ctx.createRadialGradient(cx - R * 0.35, cy - R * 0.4, R * 0.1, cx, cy, R)
      sphere.addColorStop(0, '#2a2216'); sphere.addColorStop(0.7, '#130f0a'); sphere.addColorStop(1, '#070605')
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.fillStyle = sphere; ctx.fill()

      const lam0 = rotRef.current; const sinT = Math.sin(TILT); const cosT = Math.cos(TILT)
      const project = (lon: number, lat: number): [number, number, boolean] => {
        const l = lon * RAD - lam0; const p = lat * RAD
        const cosc = sinT * Math.sin(p) + cosT * Math.cos(p) * Math.cos(l)
        return [cx + R * Math.cos(p) * Math.sin(l), cy - R * (cosT * Math.sin(p) - sinT * Math.cos(p) * Math.cos(l)), cosc >= 0]
      }
      const strokeRing = (ring: Ring) => {
        let pen = false
        for (const [lon, lat] of ring) {
          const [x, y, vis] = project(lon, lat)
          if (!vis) { pen = false; continue }
          if (pen) ctx.lineTo(x, y); else { ctx.moveTo(x, y); pen = true }
        }
      }

      ctx.lineWidth = 0.6; ctx.strokeStyle = 'rgba(199,161,106,.14)'; ctx.beginPath()
      for (let lon = -180; lon < 180; lon += 30) { const ring: Ring = []; for (let lat = -90; lat <= 90; lat += 5) ring.push([lon, lat]); strokeRing(ring) }
      for (let lat = -60; lat <= 60; lat += 30) { const ring: Ring = []; for (let lon = -180; lon <= 180; lon += 5) ring.push([lon, lat]); strokeRing(ring) }
      ctx.stroke()

      for (const country of worldRef.current) {
        const hovered = hoverRef.current === country
        for (const polygon of country.polygons) {
          const outer = polygon[0]
          let allVisible = true
          ctx.beginPath()
          let pen = false
          for (const [lon, lat] of outer) {
            const [x, y, vis] = project(lon, lat)
            if (!vis) { allVisible = false; pen = false; continue }
            if (pen) ctx.lineTo(x, y); else { ctx.moveTo(x, y); pen = true }
          }
          if (allVisible) { ctx.closePath(); ctx.fillStyle = hovered ? 'rgba(229,200,149,.55)' : 'rgba(199,161,106,.16)'; ctx.fill() }
          ctx.lineWidth = hovered ? 1.1 : 0.55
          ctx.strokeStyle = hovered ? '#f0d9ac' : 'rgba(229,200,149,.62)'
          ctx.stroke()
        }
      }

      const shine = ctx.createRadialGradient(cx - R * 0.45, cy - R * 0.5, 0, cx - R * 0.45, cy - R * 0.5, R * 0.9)
      shine.addColorStop(0, 'rgba(255,236,200,.16)'); shine.addColorStop(1, 'rgba(255,236,200,0)')
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.fillStyle = shine; ctx.fill()
      ctx.lineWidth = 1; ctx.strokeStyle = 'rgba(199,161,106,.55)'; ctx.stroke()
    }
    frame = requestAnimationFrame(draw)
    return () => { cancelAnimationFrame(frame); observer.disconnect() }
  }, [])

  const locate = (clientX: number, clientY: number): GlobeCountry | undefined => {
    const canvas = canvasRef.current
    if (!canvas || !worldRef.current.length) return undefined
    const rect = canvas.getBoundingClientRect()
    const R = rect.width / 2 - 2
    const x = (clientX - rect.left - rect.width / 2) / R
    const y = -(clientY - rect.top - rect.height / 2) / R
    const rho = Math.hypot(x, y)
    if (rho > 1) return undefined
    const c = Math.asin(Math.min(1, rho))
    const sinc = Math.sin(c); const cosc = Math.cos(c)
    const lat = rho === 0 ? TILT : Math.asin(cosc * Math.sin(TILT) + (y * sinc * Math.cos(TILT)) / rho)
    const lon = rotRef.current + Math.atan2(x * sinc, rho * cosc * Math.cos(TILT) - y * sinc * Math.sin(TILT))
    let deg = (lon / RAD) % 360
    if (deg > 180) deg -= 360
    if (deg < -180) deg += 360
    return findCountry(worldRef.current, deg, lat / RAD)
  }

  return (
    <div className="desk-globe">
      <canvas
        ref={canvasRef}
        className="desk-globe-canvas"
        role="img"
        aria-label="Globo terrestre giratório. Arraste para girar e toque em um país para abri-lo no atlas."
        onPointerDown={(event) => { event.currentTarget.setPointerCapture(event.pointerId); dragRef.current = { x: event.clientX, rot: rotRef.current, moved: false } }}
        onPointerMove={(event) => {
          const drag = dragRef.current
          if (drag) {
            const dx = event.clientX - drag.x
            if (Math.abs(dx) > 3) drag.moved = true
            rotRef.current = drag.rot - dx * 0.008
            return
          }
          if (event.pointerType !== 'mouse') return
          const country = locate(event.clientX, event.clientY) ?? null
          if (country !== hoverRef.current) { hoverRef.current = country; setHoverName(country?.name ?? '') }
        }}
        onPointerUp={(event) => {
          const drag = dragRef.current
          dragRef.current = null
          if (drag && !drag.moved) {
            const country = locate(event.clientX, event.clientY)
            if (country) { hoverRef.current = country; setHoverName(country.name); onSelect(country) }
          }
        }}
        onPointerLeave={() => { if (!dragRef.current) { hoverRef.current = null; setHoverName('') } }}
      />
      <div className="desk-globe-stand" aria-hidden="true"><i /><b /></div>
      <span className="desk-globe-label" aria-live="polite">
        {status === 'erro' ? 'Mapa indisponível sem conexão' : status === 'carregando' ? 'Carregando o globo…' : hoverName || 'Arraste para girar · toque num país'}
      </span>
    </div>
  )
}
