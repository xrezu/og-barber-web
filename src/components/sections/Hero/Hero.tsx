import { WhatsappLogo, ArrowDown, Star, ArrowRight } from '@phosphor-icons/react'
import { BUSINESS, getWhatsAppUrl } from '@/constants/config'

const logoImg = '/images/logo_barber_wo_bg.png'
const heroBg  = '/images/sillafoco.jpeg'

const delay = (ms: number): React.CSSProperties => ({ animationDelay: `${ms}ms` })

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="OG Barber Studio — Barbería premium en Getafe"
    >
      {/* ── Background ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden="true"
      />

      {/* ── Overlay ── */}
      <div
        className="absolute inset-0 bg-og-black/[0.58] dark:bg-og-black/[0.72]"
        aria-hidden="true"
      />

      {/* ── Dot pattern ── */}
      <div className="absolute inset-0 bg-dots opacity-30" aria-hidden="true" />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl mx-auto pt-24 pb-28">

        {/* Logo */}
        <div className="hero-item mb-8" style={delay(60)}>
          <img
            src={logoImg}
            alt={BUSINESS.name}
            className="w-auto max-w-[200px] md:max-w-[280px] brightness-0 invert"
            fetchPriority="high"
            draggable={false}
          />
        </div>

        {/* Headline — conversión */}
        <h1
          className="hero-item font-body font-bold text-off-white leading-[1.05] mb-3"
          style={{ ...delay(200), fontSize: 'clamp(28px, 6vw, 52px)', letterSpacing: '-0.02em' }}
        >
          {BUSINESS.heroHeadline}
        </h1>

        {/* Subheadline — reducir fricción */}
        <p
          className="hero-item font-body text-white/60 leading-relaxed mb-8"
          style={{ ...delay(340), fontSize: 'clamp(14px, 2vw, 17px)', maxWidth: '480px' }}
        >
          {BUSINESS.heroSubheadline}
        </p>

        {/* Social proof — visible en mobile */}
        <div className="hero-item flex items-center gap-2 mb-8" style={delay(440)}>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={12} weight="fill" className="text-gold" />
            ))}
          </div>
          <span className="text-white/50 text-[12px] tracking-[0.1em] uppercase font-body">
            +500 clientes satisfechos
          </span>
        </div>

        {/* CTAs */}
        <div className="hero-item flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto" style={delay(560)}>
          <a
            href={BUSINESS.booksyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto text-[13px] px-8 py-4"
            data-cta="booksy"
          >
            Reservar cita
            <ArrowRight size={14} weight="bold" />
          </a>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-white w-full sm:w-auto"
            data-cta="whatsapp"
          >
            <WhatsappLogo size={15} weight="fill" />
            WhatsApp
          </a>
        </div>

        {/* Trust pill */}
        <p className="hero-item mt-5 font-body text-[11px] text-white/30 tracking-wide" style={delay(680)}>
          Sin registro · Confirmación inmediata · Online 24/7
        </p>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="hero-item absolute bottom-8 left-1/2 -translate-x-1/2"
        style={delay(900)}
        aria-hidden="true"
      >
        <ArrowDown size={14} className="text-white/30 animate-bounce-slow" />
      </div>
    </section>
  )
}
