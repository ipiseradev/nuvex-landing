import { isEmailConfigured, siteConfig } from '@/lib/config'

export function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        url: siteConfig.url,
        description:
          'Software house argentina. Desarrollo de software a medida, experiencias digitales, inteligencia artificial y automatización de procesos.',
        areaServed: { '@type': 'Country', name: 'Argentina' },
        sameAs: [siteConfig.instagram],
        ...(isEmailConfigured() ? { email: siteConfig.email } : {}),
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${siteConfig.url}/#service`,
        name: siteConfig.shortName,
        url: siteConfig.url,
        description:
          'Desarrollo de software a medida en Argentina: sitios web, software corporativo, agentes de IA para empresas y automatización.',
        provider: { '@id': `${siteConfig.url}/#organization` },
        areaServed: { '@type': 'Country', name: 'Argentina' },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}
