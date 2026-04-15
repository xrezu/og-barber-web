import { useState, useEffect } from 'react'
import { List, X, WhatsappLogo } from '@phosphor-icons/react'
import { useScrolled } from '@/hooks/useScrolled'
import { useActiveSection } from '@/hooks/useActiveSection'
import { BUSINESS, getWhatsAppUrl } from '@/constants/config'
import logoImg from '@media/logo_barber_wo_bg.png'

const NAV_LINKS = [
  { href: '#servicios', label: 'Servicios', id: 'servicios' },
  { href: '#sobre',     label: 'Barbero',   id: 'sobre'     },
  { href: '#galeria',   label: 'Galería',   id: 'galeria'   },
  { href: '#ubicacion', label: 'Ubicación', id: 'ubicacion' },
]

export default function Navbar() {
  const scrolled      = useScrolled()
  const activeSection = useActiveSection()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (scrolled) setMenuOpen(false)
  }, [scrolled])

  const closeMenu = () => setMenuOpen(false)
  const isLight   = !scrolled   // sobre el hero → necesita colores adaptados

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300 ease-in-out
        ${scrolled
          ? 'bg-white/[0.97] dark:bg-charcoal/[0.97] backdrop-blur-sm border-b border-light-gray dark:border-white/[0.08]'
          : 'bg-transparent'
        }
      `}
    >
      {/* ── Main bar ── */}
      <div className="flex items-center justify-between px-6 lg:px-14 h-[64px]">

        {/* Logo — original en light, blanco en dark */}
        <a href="#hero" onClick={closeMenu} aria-label={BUSINESS.name} className="shrink-0">
          <img
            src={logoImg}
            alt={BUSINESS.name}
            className="h-10 md:h-11 w-auto transition-all duration-300 dark:brightness-0 dark:invert"
            draggable={false}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Navegación principal">
          {NAV_LINKS.map(({ href, label, id }) => {
            const isActive = activeSection === id
            return (
              <a
                key={href}
                href={href}
                className={`
                  font-body text-[12px] font-medium tracking-[0.06em] uppercase
                  transition-colors duration-150
                  ${isActive
                    ? 'text-gold'
                    : isLight
                      ? 'text-og-black/60 dark:text-white/70 hover:text-og-black dark:hover:text-white'
                      : 'text-mid-gray dark:text-white/60 hover:text-gold'
                  }
                `}
              >
                {label}
                {isActive && (
                  <span className="block h-px bg-gold mt-0.5" />
                )}
              </a>
            )
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-body text-[11px] font-semibold tracking-[0.1em] uppercase px-4 py-2.5 bg-wa text-white hover:bg-wa-dark transition-colors duration-150"
            style={{ borderRadius: '2px' }}
          >
            <WhatsappLogo size={13} weight="fill" />
            WhatsApp
          </a>
          <a
            href={BUSINESS.booksyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-body text-[11px] font-semibold tracking-[0.1em] uppercase px-5 py-2.5 bg-gold text-og-black hover:bg-gold-light transition-colors duration-150"
            style={{ borderRadius: '2px' }}
          >
            Reservar
          </a>
        </div>

        {/* Mobile: hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          className={`
            md:hidden p-1.5 transition-colors duration-150
            ${isLight ? 'text-og-black dark:text-white' : 'text-og-black dark:text-white'}
          `}
        >
          {menuOpen ? <X size={22} weight="regular" /> : <List size={22} weight="regular" />}
        </button>
      </div>

      {/* ── Mobile dropdown ── */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-250 ease-in-out
          ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}
          ${scrolled
            ? 'bg-white/[0.97] dark:bg-charcoal/[0.97] backdrop-blur-sm border-b border-light-gray dark:border-white/[0.08]'
            : 'bg-white/[0.96] dark:bg-og-black/[0.96] backdrop-blur-sm'
          }
        `}
      >
        <nav className="flex flex-col px-6 pb-5 pt-2" aria-label="Menú móvil">
          {NAV_LINKS.map(({ href, label, id }) => {
            const isActive = activeSection === id
            return (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                className={`
                  py-3.5 font-body text-[13px] font-medium tracking-[0.04em] uppercase
                  border-b border-light-gray dark:border-white/[0.08] last:border-b-0
                  transition-colors duration-150
                  ${isActive
                    ? 'text-gold'
                    : 'text-og-black/70 dark:text-white/70 hover:text-gold'
                  }
                `}
              >
                {label}
              </a>
            )
          })}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="flex items-center gap-2 pt-4 font-body text-[13px] font-medium text-wa"
          >
            <WhatsappLogo size={14} weight="fill" />
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}
