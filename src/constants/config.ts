export const BUSINESS = {
  name: 'OG Barber Studio',
  tagline: 'Tu estilo empieza aquí.',
  address: 'Calle Madrid 45, 28901 Getafe, Madrid',
  phone: '+34 600 000 000',
  whatsappNumber: '34600000000',
  whatsappMessage: 'Hola, quiero pedir cita en OG Barber Studio',
  booksyUrl: 'https://ogbarberstudio67.booksy.com/a',
  googleMapsEmbed: 'https://maps.google.com/maps?q=Calle+Madrid+45+Getafe+Madrid&output=embed',
  schedule: [
    { days: 'Lun – Vie', hours: '10:00 – 20:30' },
    { days: 'Sábado',    hours: '10:00 – 15:00' },
    { days: 'Domingo',   hours: 'Cerrado' },
  ],
} as const

export const getWhatsAppUrl = () =>
  `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`