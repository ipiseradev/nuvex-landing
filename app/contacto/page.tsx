import { InnerView } from '@/views/inner-view'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata('es', 'contact')

export default function Page() {
  return <InnerView page="contact" />
}
