import { MapPin, Clock, WhatsappLogo, ArrowRight } from '@phosphor-icons/react'
import { BUSINESS, getWhatsAppUrl } from '@/constants/config'
import FadeIn from '@/components/FadeIn'

export default function Location() {
  return (
    <section
      id="ubicacion"
      className="bg-og-black dark:bg-og-black overflow-hidden"
      aria-label="Ubicación y horarios"
    >
      <div className="grid lg:grid-cols-2">

        {/* ── Left: info ── */}
        <div className="section-pad flex flex-col justify-center">

          <FadeIn>
            <p className="section-label mb-5">Ubicación</p>
            <h2
              className="font-body font-bold leading-[1.05] text-off-white mb-2"
              style={{ fontSize: 'clamp(28px, 5vw, 46px)', letterSpacing: '-0.02em' }}
            >
              Encuéntranos<br />
              <span className="font-display font-light italic text-off-white/50">
                en Getafe
              </span>
            </h2>
            <span className="copper-rule mt-4 mb-10 block" />
          </FadeIn>

          {/* Address */}
          <FadeIn delay={100}>
            <div className="flex items-start gap-3 mb-8">
              <MapPin size={16} weight="fill" className="text-gold mt-0.5 shrink-0" />
              <div>
                <p className="font-body text-[11px] font-bold tracking-[0.18em] uppercase text-gold mb-1">
                  Dirección
                </p>
                <p className="font-body text-[15px] text-off-white/80 leading-relaxed">
                  {BUSINESS.address}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Schedule */}
          <FadeIn delay={180}>
            <div className="flex items-start gap-3 mb-10">
              <Clock size={16} weight="fill" className="text-gold mt-0.5 shrink-0" />
              <div className="w-full">
                <p className="font-body text-[11px] font-bold tracking-[0.18em] uppercase text-gold mb-3">
                  Horario
                </p>
                <div className="flex flex-col gap-0 border border-white/[0.08]" style={{ borderRadius: '2px' }}>
                  {BUSINESS.schedule.map(({ days, hours }, i) => {
                    const closed = hours === 'Cerrado'
                    return (
                      <div
                        key={days}
                        className={`
                          flex items-center justify-between px-4 py-3 font-body text-[13px]
                          ${i < BUSINESS.schedule.length - 1 ? 'border-b border-white/[0.08]' : ''}
                        `}
                      >
                        <span className="text-off-white/60 tracking-[0.04em]">{days}</span>
                        <span className={closed ? 'text-white/25 line-through' : 'text-off-white font-medium'}>
                          {hours}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={260}>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={BUSINESS.booksyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Reservar cita
                <ArrowRight size={13} weight="bold" />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-white"
              >
                <WhatsappLogo size={14} weight="fill" />
                WhatsApp
              </a>
            </div>
          </FadeIn>

        </div>

        {/* ── Right: map ── */}
        <div className="relative h-[340px] lg:h-auto lg:min-h-[560px] bg-dark-gray">
          <iframe
            title="Ubicación OG Barber Studio"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(BUSINESS.address)}&output=embed`}
            className="absolute inset-0 w-full h-full border-0 grayscale contrast-[1.1] brightness-[0.85]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* Subtle gold frame */}
          <div className="absolute inset-0 pointer-events-none border border-gold/[0.15]" />
        </div>
      </div>
    </section>
  )
}
