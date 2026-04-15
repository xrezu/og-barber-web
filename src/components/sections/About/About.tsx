import { Scissors, Trophy, Users, Clock } from '@phosphor-icons/react'
import { BUSINESS } from '@/constants/config'
import FadeIn from '@/components/FadeIn'

// Placeholder images — swap later with real barbero photos
import imgMain    from '@media/corte_clasico.jpeg'
import imgSecond  from '@media/recepcion.jpeg'

const STATS = [
  { value: '+8',    label: 'Años de\nexperiencia',  Icon: Clock    },
  { value: '+500',  label: 'Clientes\nsatisfechos', Icon: Users    },
  { value: '100%',  label: 'Dedicación\ntotal',     Icon: Trophy   },
]

export default function About() {
  return (
    <section
      id="sobre"
      className="bg-white dark:bg-og-black overflow-hidden"
      aria-label="Sobre el barbero"
    >
      <div className="grid lg:grid-cols-2">

        {/* ── Left: images ── */}
        <div className="relative h-[480px] lg:h-auto lg:min-h-[680px]">
          {/* Main photo */}
          <img
            src={imgMain.src}
            alt="OG Barber en acción"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-og-black/40" />

          {/* Floating second photo */}
          <div className="absolute bottom-8 right-8 w-36 h-44 shadow-2xl hidden sm:block"
            style={{ borderRadius: '2px' }}>
            <img
              src={imgSecond.src}
              alt="Interior OG Barber Studio"
              className="w-full h-full object-cover"
              style={{ borderRadius: '2px' }}
            />
            <div className="absolute inset-0 border border-gold/40" style={{ borderRadius: '2px' }} />
          </div>

          {/* Gold accent line */}
          <div className="absolute top-10 left-10 flex flex-col gap-1.5">
            <span className="block w-8 h-px bg-gold" />
            <span className="block w-4 h-px bg-gold/50" />
          </div>
        </div>

        {/* ── Right: bio ── */}
        <div className="section-pad flex flex-col justify-center">

          <FadeIn>
            <p className="section-label mb-5">El Barbero</p>
          </FadeIn>

          <FadeIn delay={80}>
            <h2
              className="font-body font-bold leading-[1.05] text-og-black dark:text-off-white mb-2"
              style={{ fontSize: 'clamp(28px, 5vw, 46px)', letterSpacing: '-0.02em' }}
            >
              Detrás del<br />
              <span className="font-display font-light italic text-og-black/60 dark:text-off-white/60">
                tijera
              </span>
            </h2>
            <span className="copper-rule mt-4 mb-8 block" />
          </FadeIn>

          <FadeIn delay={160}>
            <p className="font-body text-[15px] text-mid-gray leading-relaxed mb-5 max-w-md">
              Con más de 8 años dando forma a estilos en Getafe, OG Barber Studio nació de una
              pasión simple: hacer que cada cliente salga sintiéndose diferente. No un corte
              más — <em className="font-display italic text-og-black dark:text-off-white not-italic" style={{ fontStyle: 'italic' }}>el corte que buscabas</em>.
            </p>
            <p className="font-body text-[15px] text-mid-gray leading-relaxed mb-12 max-w-md">
              Especializado en fades, diseños y tratamientos capilares, cada visita es una
              experiencia pensada al detalle: ambiente, música, precisión.
            </p>
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={240}>
            <div className="grid grid-cols-3 gap-px bg-light-gray dark:bg-white/[0.08] mb-12"
              style={{ borderRadius: '2px' }}>
              {STATS.map(({ value, label, Icon }) => (
                <div key={value}
                  className="flex flex-col items-center gap-2 py-6 px-3 bg-white dark:bg-og-black text-center">
                  <Icon size={16} weight="bold" className="text-gold" />
                  <span
                    className="font-body font-bold text-og-black dark:text-off-white leading-none tabular-nums"
                    style={{ fontSize: 'clamp(22px, 4vw, 32px)' }}
                  >
                    {value}
                  </span>
                  <span className="font-body text-[10px] tracking-[0.14em] uppercase text-mid-gray whitespace-pre-line leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <span className="flex items-center gap-2">
              <Scissors size={13} className="text-gold" weight="bold" />
              <span className="font-body text-[11px] tracking-[0.12em] uppercase text-mid-gray">
                Reserva disponible online
              </span>
            </span>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
