export const BUSINESS = {
  name: 'OG Barber Studio',
  tagline: 'Tu estilo empieza aquí.',
  address: 'Calle Quevedo, 9, 28901 Getafe, Madrid',
  phone: '+34 655 057 937',
  whatsappNumber: '34655057937',
  whatsappMessage: 'Hola, quiero pedir cita en OG Barber Studio',
  booksyUrl:   'https://ogbarberstudio67.booksy.com/a',
  instagramUrl: 'https://www.instagram.com/ogbarber_studio_/',
  tiktokUrl:    'https://www.tiktok.com/@ogbarber_studio_',
  googleMapsEmbed: 'https://maps.google.com/maps?q=Calle+Quevedo+9+Getafe+Madrid&output=embed',
  schedule: [
    { days: 'Lun – Vie', hours: '10:00 – 14:00',  hours2: '16:00 – 20:30' },
    { days: 'Sábado',    hours: '10:00 – 17:00',  hours2: null             },
    { days: 'Domingo',   hours: '10:00 – 14:00',  hours2: null             },
  ],
} as const

export const getWhatsAppUrl = () =>
  `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`