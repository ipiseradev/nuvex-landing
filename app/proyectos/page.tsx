import { InnerView } from '@/views/inner-view'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata('es', 'projects')

export default function Page() {
  return <InnerView page="projects" />
}
