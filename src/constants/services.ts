export interface Service {
  id:           string
  name:         string
  description?: string
  price:        number
  priceMax?:    number   // for range prices
  pricePrefix?: string
  featured?:    boolean
}

export interface ServiceCategory {
  id:       string
  label:    string
  services: Service[]
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id:    'cortes',
    label: 'Cortes',
    services: [
      {
        id:          'corte-og',
        name:        'Corte OG',
        description: 'Fade, clásico o moderno. Adaptado a tu estilo.',
        price:       15,
      },
      {
        id:          'arreglo-barba',
        name:        'Arreglo de Barba OG',
        description: 'Perfilado, arreglo y definición con navaja.',
        price:       13,
      },
      {
        id:          'corte-gentleman',
        name:        'Corte OG Gentleman',
        description: 'Precio especial para jubilados.',
        price:       10,
      },
      {
        id:          'afeitado',
        name:        'Afeitado OG',
        description: 'Afeitado tradicional con navaja.',
        price:       10,
      },
      {
        id:          'corte-barba',
        name:        'Corte y Barba OG',
        description: 'El pack completo. Corte a medida y barba perfecta.',
        price:       24,
        featured:    true,
      },
    ],
  },
  {
    id:    'tratamientos',
    label: 'Tratamientos',
    services: [
      {
        id:           'decoloracion-completa',
        name:         'Decoloración Completa OG',
        description:  'Decoloración total con cuidado premium.',
        price:        60,
        priceMax:     70,
        pricePrefix:  'desde ',
      },
      {
        id:           'decoloracion-mechas',
        name:         'Decoloración Mechas OG',
        description:  'Mechas y degradados personalizados.',
        price:        50,
        priceMax:     60,
        pricePrefix:  'desde ',
      },
      {
        id:           'permanente-rizos',
        name:         'Permanente Rizos OG',
        description:  'Rizos definidos y duraderos.',
        price:        30,
        priceMax:     40,
        pricePrefix:  'desde ',
      },
      {
        id:           'limpieza-facial',
        name:         'Limpieza Facial OG',
        description:  'Tratamiento facial profundo y revitalizante.',
        price:        15,
        priceMax:     25,
        pricePrefix:  'desde ',
      },
      {
        id:          'completo-og',
        name:        'Completo OG',
        description: 'Tratamiento total. La experiencia OG completa.',
        price:       40,
        featured:    true,
      },
    ],
  },
]

// Flat list for backwards compatibility
export type { Service }
export const SERVICES: Service[] = SERVICE_CATEGORIES.flatMap(c => c.services)
