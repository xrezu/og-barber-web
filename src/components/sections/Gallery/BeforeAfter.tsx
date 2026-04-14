import { useRef, useState, useCallback, useEffect } from 'react'
import { ArrowsHorizontal } from '@phosphor-icons/react'

interface BeforeAfterProps {
  image:        string
  label:        string
  beforeLabel?: string
  afterLabel?:  string
}

/**
 * Interactive before/after slider.
 * Uses the same image — left side rendered desaturated (ANTES),
 * right side rendered in full color (DESPUÉS).
 * Drag the handle to reveal.
 */
export default function BeforeAfter({
  image,
  label,
  beforeLabel = 'Antes',
  afterLabel  = 'Después',
}: BeforeAfterProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition]   = useState(42) // % from left
  const [dragging, setDragging]   = useState(false)
  const [revealed, setRevealed]   = useState(false)

  // Mark as revealed after first interaction
  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const { left, width } = el.getBoundingClientRect()
    const pct = ((clientX - left) / width) * 100
    setPosition(Math.max(4, Math.min(96, pct)))
    if (!revealed) setRevealed(true)
  }, [revealed])

  // Mouse events
  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setDragging(true)
    updatePosition(e.clientX)
  }
  useEffect(() => {
    if (!dragging) return
    const onMove = (e: MouseEvent) => updatePosition(e.clientX)
    const onUp   = () => setDragging(false)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
  }, [dragging, updatePosition])

  // Touch events
  const onTouchStart = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX)
    setDragging(true)
  }
  useEffect(() => {
    if (!dragging) return
    const onMove = (e: TouchEvent) => updatePosition(e.touches[0].clientX)
    const onEnd  = () => setDragging(false)
    window.addEventListener('touchmove', onMove, { passive: true })
    window.addEventListener('touchend', onEnd)
    return () => {
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('touchend', onEnd)
    }
  }, [dragging, updatePosition])

  return (
    <div className="flex flex-col gap-0">
      {/* Label above */}
      <div className="px-5 pt-5 pb-4 border-b border-light-gray dark:border-white/[0.08] bg-white dark:bg-surface">
        <p className="font-body text-[11px] font-bold tracking-[0.16em] uppercase text-og-black dark:text-off-white">
          {label}
        </p>
      </div>

      {/* Slider */}
      <div
        ref={containerRef}
        className={`relative overflow-hidden aspect-[4/5] select-none ${dragging ? 'cursor-grabbing' : 'cursor-ew-resize'}`}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        aria-label={`Transformación: ${label}. Arrastra para comparar antes y después.`}
      >
        {/* ANTES — full width, grayscale + desaturated */}
        <img
          src={image}
          alt={`${label} — ${beforeLabel}`}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'grayscale(0.92) contrast(0.85) brightness(0.9)' }}
          draggable={false}
        />

        {/* DESPUÉS — clipped to right portion */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 0 0 ${position}%)` }}
          aria-hidden="true"
        >
          <img
            src={image}
            alt={`${label} — ${afterLabel}`}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* ANTES label */}
        <div className="absolute top-4 left-4 pointer-events-none">
          <span className="font-body text-[9px] font-bold tracking-[0.18em] uppercase px-2 py-1 bg-og-black/70 text-white/80 backdrop-blur-sm"
            style={{ borderRadius: '1px' }}>
            {beforeLabel}
          </span>
        </div>

        {/* DESPUÉS label */}
        <div className="absolute top-4 right-4 pointer-events-none">
          <span className="font-body text-[9px] font-bold tracking-[0.18em] uppercase px-2 py-1 bg-copper/[0.85] text-white backdrop-blur-sm"
            style={{ borderRadius: '1px' }}>
            {afterLabel}
          </span>
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-px bg-white/90 pointer-events-none"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        />

        {/* Handle */}
        <div
          className={`
            absolute top-1/2 -translate-y-1/2 -translate-x-1/2
            w-10 h-10 rounded-full
            bg-white text-og-black
            flex items-center justify-center
            shadow-[0_2px_12px_rgba(0,0,0,0.35)]
            pointer-events-none
            transition-transform duration-150
            ${dragging ? 'scale-110' : 'scale-100'}
          `}
          style={{ left: `${position}%` }}
          aria-hidden="true"
        >
          <ArrowsHorizontal size={16} weight="bold" />
        </div>

        {/* First-time hint — fades after reveal */}
        {!revealed && (
          <div className="absolute inset-x-0 bottom-5 flex justify-center pointer-events-none">
            <span className="font-body text-[9px] font-medium tracking-[0.14em] uppercase px-3 py-1.5 bg-og-black/60 text-white/70 backdrop-blur-sm animate-bounce-slow"
              style={{ borderRadius: '1px' }}>
              Arrastra para comparar
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
