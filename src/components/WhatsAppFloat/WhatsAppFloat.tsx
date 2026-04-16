import { WhatsappLogo } from '@phosphor-icons/react'
import { getWhatsAppUrl } from '@/constants/config'

export default function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      data-cta="whatsapp"
      className="
        flex
        fixed bottom-6 right-6 z-40
        w-12 h-12
        bg-wa text-white
        items-center justify-center
        shadow-[0_2px_12px_rgba(37,211,102,0.35)]
        hover:bg-wa-dark hover:shadow-[0_4px_18px_rgba(37,211,102,0.5)]
        hover:-translate-y-0.5
        transition-all duration-200
        animate-bounce-slow
      "
      style={{ borderRadius: '2px' }}
    >
      <WhatsappLogo size={22} weight="fill" />
    </a>
  )
}
