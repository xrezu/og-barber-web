import { useState } from 'react'
import { BUSINESS } from '@/constants/config'
import BeforeAfter from './BeforeAfter'

// Media imports
import img_recepcion     from '@media/recepcion.jpeg'
import img_corte_clasico from '@media/corte_clasico.jpeg'
import img_corte_diseno  from '@media/corte_disenyo.jpeg'
import img_lavadero      from '@media/lavadero_cabeza.jpeg'
import img_silla         from '@media/silla.jpeg'
import img_tenyido       from '@media/tenyido_rojo.jpeg'
import img_sofa          from '@media/sofaespera.jpeg'
import img_ninos         from '@media/sillaniños.jpeg'

// ── Types ────────────────────────────────────────────────────────────────
type Cat = 'todo' | 'clasico' | 'diseno' | 'barba' | 'tratamientos'

interface Photo {
  src:  string
  alt:  string
  cat:  Exclude<Cat, 'todo'>
}

// ── Data ─────────────────────────────────────────────────────────────────
const PHOTOS: Photo[] = [
  { src: img_corte_clasico.src, alt: 'Fade clásico',           cat: 'clasico'      },
  { src: img_recepcion.src,     alt: 'Recepción del studio',   cat: 'clasico'      },
  { src: img_corte_diseno.src,  alt: 'Corte con diseño',       cat: 'diseno'       },
  { src: img_sofa.src,          alt: 'Zona de espera',         cat: 'diseno'       },
  { src: img_silla.src,         alt: 'Silla de barbero',       cat: 'barba'        },
  { src: img_ninos.src,         alt: 'Silla infantil',         cat: 'barba'        },
  { src: img_tenyido.src,       alt: 'Tinte rojo',             cat: 'tratamientos' },
  { src: img_lavadero.src,      alt: 'Servicio de lavado',     cat: 'tratamientos' },
]

const FILTERS: { id: Cat; label: string }[] = [
  { id: 'todo',         label: 'Todo'           },
  { id: 'clasico',      label: 'Corte Clásico'  },
  { id: 'diseno',       label: 'Corte Diseño'   },
  { id: 'barba',        label: 'Corte y Barba'  },
  { id: 'tratamientos', label: 'Tratamientos'   },
]

// ── Transformaciones ─────────────────────────────────────────────────────
const TRANSFORMATIONS = [
  { id: 'diseno',  image: img_corte_diseno.src,  label: 'Corte con Diseño' },
  { id: 'clasico', image: img_corte_clasico.src, label: 'Fade Clásico'     },
]

// ── Component ─────────────────────────────────────────────────────────────
export default function Gallery() {
  const [active, setActive] = useState<Cat>('todo')

  const filtered = active === 'todo'
    ? PHOTOS
    : PHOTOS.filter(p => p.cat === active)

  return (
    <section
      id="galeria"
      className="bg-charcoal dark:bg-charcoal"
      aria-label="Galería y transformaciones OG Barber Studio"
    >
      {/* ── Header ── */}
      <div className="section-pad pb-0">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="section-label mb-5">Galería</p>
            <h2
              className="font-body font-bold leading-[1.05] text-off-white"
              style={{ fontSize: 'clamp(28px, 5.5vw, 48px)', letterSpacing: '-0.02em' }}
            >
              Nuestro<br />
              <span className="font-display font-light italic text-white/60">Trabajo</span>
            </h2>
          </div>
        </div>

        {/* ── Filter bar ── */}
        <div className="flex items-center gap-2 flex-wrap mt-10">
          {FILTERS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`
                font-body text-[10px] font-bold tracking-[0.16em] uppercase
                px-4 py-2 border transition-colors duration-150
                ${active === id
                  ? 'bg-gold text-og-black border-gold'
                  : 'bg-transparent text-white/40 border-white/[0.15] hover:text-off-white hover:border-white/30'
                }
              `}
              style={{ borderRadius: '2px' }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Photo grid ── */}
      <div className="px-6 md:px-10 lg:px-16 pt-6 pb-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 auto-rows-[200px] md:auto-rows-[240px]">
          {filtered.map(({ src, alt }) => (
            <div key={src} className="overflow-hidden group">
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="flex items-center justify-center h-40">
            <p className="font-body text-[13px] text-white/30 tracking-[0.1em] uppercase">
              Próximamente más fotos
            </p>
          </div>
        )}
      </div>

      {/* ── Transformaciones ── */}
      <div className="section-pad">
        <div className="flex items-center gap-4 mb-3">
          <span className="copper-rule" />
          <p className="section-label">Transformaciones</p>
        </div>
        <h3
          className="font-body font-bold text-off-white mb-2"
          style={{ fontSize: 'clamp(22px, 4vw, 36px)', letterSpacing: '-0.02em' }}
        >
          Arrastra y compara
        </h3>
        <p className="font-body text-[14px] text-white/40 mb-10 max-w-sm">
          Desliza el divisor para ver el antes y el después de cada transformación.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.08] border border-white/[0.08]">
          {TRANSFORMATIONS.map(t => (
            <BeforeAfter key={t.id} image={t.image} label={t.label} />
          ))}
        </div>

        <p className="font-body text-[11px] text-white/25 mt-5 tracking-wide">
          * Las transformaciones muestran resultados reales de nuestros clientes.
        </p>
      </div>
    </section>
  )
}
