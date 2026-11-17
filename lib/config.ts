export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://nuvex.com.ar',
  name: 'NUVEX Solutions',
  shortName: 'NUVEX',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || '[COMPLETAR]',
  whatsapp: (process.env.NEXT_PUBLIC_WHATSAPP || '').replace(/\D/g, ''),
  instagram: 'https://www.instagram.com/nachodev.ar/',
  location: 'Buenos Aires, Argentina',
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const isEmailConfigured = () => emailPattern.test(siteConfig.email)

export function whatsappHref(message: string): string {
  const text = encodeURIComponent(message)
  return siteConfig.whatsapp
    ? `https://wa.me/${siteConfig.whatsapp}?text=${text}`
    : `https://api.whatsapp.com/send?text=${text}`
}
