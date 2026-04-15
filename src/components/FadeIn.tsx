import { useRef, useEffect, useState } from 'react'

interface FadeInProps {
  children:   React.ReactNode
  className?: string
  delay?:     number   // ms
  y?:         number   // px offset
}

/**
 * Wraps children in a div that fades + slides up when it enters the viewport.
 * Fires once — no re-animation on scroll back.
 */
export default function FadeIn({ children, className = '', delay = 0, y = 22 }: FadeInProps) {
  const ref     = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setShow(true); obs.disconnect() } },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity:    show ? 1 : 0,
        transform:  show ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms,
                     transform 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
