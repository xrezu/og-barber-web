import { ArrowRight, WhatsappLogo, ArrowDown, Star } from '@phosphor-icons/react'
import { BUSINESS, getWhatsAppUrl } from '@/constants/config'
import logoImg from '@media/logo_barber_wo_bg.png'
import heroBg  from '@media/sillafoco.jpeg'

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

      {/* ── Single clean dark overlay (no heavy gradients) ── */}
      <div className="absolute inset-0 bg-og-black/72" aria-hidden="true" />

      {/* ── Subtle dot pattern ── */}
      <div className="absolute inset-0 bg-dots opacity-50" aria-hidden="true" />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-xl mx-auto pt-24 pb-28">

        {/* Logo */}
        <div className="hero-item mb-10" style={delay(60)}>
          <img
            src={logoImg}
            alt={BUSINESS.name}
            className="w-auto max-w-[200px] md:max-w-[280px] brightness-0 invert"
            draggable={false}
          />
        </div>

        {/* Copper rule */}
        <span
          className="hero-line copper-rule mb-8"
          style={delay(320)}
          aria-hidden="true"
        />

        {/* Location label */}
        <p className="hero-item section-label mb-6" style={delay(440)}>
          Barbería&nbsp;&nbsp;·&nbsp;&nbsp;Getafe, Madrid
        </p>

        {/* Tagline — Cormorant italic for elegance */}
        <p
          className="hero-item font-display italic font-light text-off-white/90 mb-12 leading-snug"
          style={{ ...delay(580), fontSize: 'clamp(22px, 4.5vw, 36px)' }}
        >
          {BUSINESS.tagline}
        </p>

        {/* CTAs */}
        <div
          className="hero-item flex flex-col sm:flex-row items-center gap-3"
          style={delay(740)}
        >
          <a
            href={BUSINESS.booksyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Reservar cita
            <ArrowRight size={14} weight="bold" />
          </a>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-white"
          >
            <WhatsappLogo size={15} weight="fill" />
            WhatsApp
          </a>
        </div>
      </div>

      {/* ── Social proof — bottom left ── */}
      <div
        className="hero-item absolute bottom-8 left-6 lg:left-14 hidden sm:flex items-center gap-2"
        style={delay(1000)}
      >
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={11} weight="fill" className="text-copper" />
          ))}
        </div>
        <span className="text-white/40 text-[11px] tracking-[0.14em] uppercase font-body">
          +500 clientes
        </span>
      </div>

      {/* ── Scroll indicator — bottom center ── */}
      <div
        className="hero-item absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={delay(1100)}
        aria-hidden="true"
      >
        <ArrowDown size={14} className="text-white/30 animate-bounce-slow" />
      </div>
    </section>
  )
}
