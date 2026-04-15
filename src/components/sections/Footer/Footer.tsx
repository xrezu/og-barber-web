import { WhatsappLogo, InstagramLogo, TiktokLogo, ArrowRight } from '@phosphor-icons/react'
import { BUSINESS, getWhatsAppUrl } from '@/constants/config'
import logoImg from '@media/logo_barber_wo_bg.png'

const NAV_LINKS = [
  { href: '#servicios', label: 'Servicios'  },
  { href: '#sobre',     label: 'Barbero'    },
  { href: '#galeria',   label: 'Galería'    },
  { href: '#ubicacion', label: 'Ubicación'  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="bg-og-black border-t border-white/[0.06]"
      aria-label="Pie de página OG Barber Studio"
    >
      {/* ── Main footer ── */}
      <div className="px-6 py-16 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_2fr] gap-12">

          {/* Brand */}
          <div>
            <img
              src={logoImg}
              alt={BUSINESS.name}
              className="h-10 w-auto brightness-0 invert mb-5 opacity-90"
              draggable={false}
            />
            <p className="font-body text-[13px] text-white/40 leading-relaxed max-w-[220px]">
              Barbería premium en Getafe, Madrid.<br />
              Tu estilo, nuestra precisión.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 flex items-center justify-center border border-white/[0.12] text-white/50 hover:text-gold hover:border-gold/40 transition-colors duration-150"
                style={{ borderRadius: '2px' }}
              >
                <WhatsappLogo size={15} weight="fill" />
              </a>
              <a
                href={BUSINESS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center border border-white/[0.12] text-white/50 hover:text-gold hover:border-gold/40 transition-colors duration-150"
                style={{ borderRadius: '2px' }}
              >
                <InstagramLogo size={15} weight="fill" />
              </a>
              <a
                href={BUSINESS.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 flex items-center justify-center border border-white/[0.12] text-white/50 hover:text-gold hover:border-gold/40 transition-colors duration-150"
                style={{ borderRadius: '2px' }}
              >
                <TiktokLogo size={15} weight="fill" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-body text-[10px] font-bold tracking-[0.2em] uppercase text-gold mb-5">
              Navegación
            </p>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-body text-[13px] text-white/50 hover:text-off-white transition-colors duration-150"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-[10px] font-bold tracking-[0.2em] uppercase text-gold mb-5">
              Contacto
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="font-body text-[13px] text-white/50 hover:text-off-white transition-colors duration-150"
                >
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[13px] text-white/50 hover:text-off-white transition-colors duration-150"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <p className="font-body text-[13px] text-white/40 leading-relaxed">
                  {BUSINESS.address}
                </p>
              </li>
            </ul>
          </div>

          {/* CTA block */}
          <div className="flex flex-col justify-between gap-8">
            <div>
              <p className="font-body text-[10px] font-bold tracking-[0.2em] uppercase text-gold mb-4">
                Reserva tu cita
              </p>
              <p className="font-body text-[13px] text-white/40 leading-relaxed mb-6 max-w-[200px]">
                Agenda online en segundos. Sin llamadas, sin esperas.
              </p>
              <a
                href={BUSINESS.booksyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary self-start"
              >
                Reservar en Booksy
                <ArrowRight size={12} weight="bold" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/[0.06] px-6 py-5 md:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-body text-[11px] text-white/25 tracking-[0.06em]">
          © {year} {BUSINESS.name}. Todos los derechos reservados.
        </p>
        <p className="font-body text-[11px] text-white/20 tracking-[0.04em]">
          Getafe, Madrid
        </p>
      </div>
    </footer>
  )
}
