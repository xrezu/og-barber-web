import { useEffect, useState } from 'react'

const SECTION_IDS = ['hero', 'servicios', 'galeria', 'sobre', 'ubicacion']

/**
 * Returns the id of the section currently in the viewport centre.
 * Uses IntersectionObserver with a middle-band rootMargin so only
 * the section occupying ≥20% of the visible viewport triggers.
 */
export function useActiveSection(): string {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-35% 0px -35% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  return active
}
