import { Scissors, Sparkle } from '@phosphor-icons/react'
import { SERVICE_CATEGORIES, type Service, type ServiceCategory } from '@/constants/services'
import { BUSINESS } from '@/constants/config'
const sofaImg = '/images/sofaespera.jpeg'

// ── Price display ───────────────────────────────────────────────────────
function PriceTag({ service }: { service: Service }) {
  const isFeatured = service.featured

  return (
    <div className="shrink-0 text-right">
      {service.pricePrefix && (
        <span className="block text-[10px] font-body font-medium tracking-[0.12em] uppercase text-mid-gray mb-0.5">
          {service.pricePrefix}
        </span>
      )}
      <div className={`flex items-baseline gap-0.5 justify-end ${isFeatured ? 'text-copper' : 'text-og-black dark:text-off-white'}`}>
        <span className="font-body font-bold text-[20px] leading-none tabular-nums">
          {service.price}
        </span>
        {service.priceMax && (
          <>
            <span className="text-mid-gray text-[13px] mx-1">–</span>
            <span className="font-body font-bold text-[20px] leading-none tabular-nums">
              {service.priceMax}
            </span>
          </>
        )}
        <span className="text-[12px] font-medium text-mid-gray ml-0.5">€</span>
      </div>
    </div>
  )
}

// ── Service row ─────────────────────────────────────────────────────────
function ServiceRow({ service, isLast }: { service: Service; isLast: boolean }) {
  return (
    <div
      className={`
        group flex items-start justify-between gap-6 py-5
        ${!isLast ? 'border-b border-light-gray dark:border-white/[0.08]' : ''}
        ${service.featured ? 'relative pl-3 -ml-3 border-l-[1.5px] border-l-copper' : ''}
        transition-colors duration-150
      `}
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3
            className={`
              font-body font-semibold leading-tight tracking-[-0.01em]
              transition-colors duration-150 group-hover:text-copper
              ${service.featured ? 'text-copper' : 'text-og-black dark:text-off-white'}
            `}
            style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}
          >
            {service.name}
          </h3>
          {service.featured && (
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 text-[9px] font-bold tracking-[0.14em] uppercase bg-copper/15 text-copper border border-copper/25"
              style={{ borderRadius: '2px' }}>
              Popular
            </span>
          )}
        </div>
        {service.description && (
          <p className="font-body text-[13px] text-mid-gray leading-relaxed">
            {service.description}
          </p>
        )}
      </div>

      <PriceTag service={service} />
    </div>
  )
}

// ── Category block ──────────────────────────────────────────────────────
function CategoryBlock({ category }: { category: ServiceCategory }) {
  const Icon = category.id === 'cortes' ? Scissors : Sparkle

  return (
    <div className="mb-10 last:mb-0">
      {/* Category header */}
      <div className="flex items-center gap-3 mb-1 pb-3 border-b-2 border-og-black dark:border-off-white">
        <Icon size={14} weight="bold" className="text-copper shrink-0" />
        <span className="font-body text-[10px] font-bold tracking-[0.2em] uppercase text-og-black dark:text-off-white">
          {category.label}
        </span>
      </div>

      {/* Rows */}
      <div>
        {category.services.map((service, i) => (
          <ServiceRow
            key={service.id}
            service={service}
            isLast={i === category.services.length - 1}
          />
        ))}
      </div>
    </div>
  )
}

// ── Main section ────────────────────────────────────────────────────────
export default function Services() {
  return (
    <section
      id="servicios"
      className="bg-white dark:bg-charcoal"
      aria-label="Nuestros servicios"
    >
      <div className="grid lg:grid-cols-[5fr_7fr]">

        {/* Left — atmospheric image (desktop only) */}
        <div className="relative hidden lg:block">
          <div
            className="sticky top-0 h-screen overflow-hidden"
          >
            <img
              src={sofaImg}
              alt="Interior OG Barber Studio"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Single clean dark overlay */}
            <div className="absolute inset-0 bg-og-black/55" />

            {/* Bottom quote */}
            <div className="absolute bottom-12 left-10 right-10">
              <span className="copper-rule mb-4 block" />
              <p
                className="font-display italic font-light text-white/[0.85] leading-snug"
                style={{ fontSize: 'clamp(17px, 1.8vw, 22px)' }}
              >
                &ldquo;Más que un corte.<br />Una experiencia.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Right — service menu */}
        <div className="section-pad">
          {/* Header */}
          <div className="mb-12">
            <p className="section-label mb-5">Servicios</p>
            <h2 className="section-title mb-5">
              Nuestros<br /><em>Servicios</em>
            </h2>
            <p className="font-body text-[14px] text-mid-gray leading-relaxed max-w-xs">
              Cada servicio está pensado con precisión. Sin prisa. Resultados reales.
            </p>
          </div>

          {/* Category blocks */}
          {SERVICE_CATEGORIES.map(cat => (
            <CategoryBlock key={cat.id} category={cat} />
          ))}

        </div>
      </div>
    </section>
  )
}
