import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/config'

const paths = ['', '/servicios', '/proyectos', '/proceso', '/contacto']

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return paths.flatMap((path) => {
    const esPath = path || '/'
    const enPath = path ? `/en${path}` : '/en'
    return [
      { url: `${siteConfig.url}${esPath}`, lastModified: now, changeFrequency: 'monthly' as const, priority: path ? 0.7 : 1 },
      {
        url: `${siteConfig.url}${enPath}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: path ? 0.6 : 0.9,
      },
    ]
  })
}
