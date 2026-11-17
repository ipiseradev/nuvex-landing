import { InnerView } from '@/views/inner-view'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata('es', 'process')

export default function Page() {
  return <InnerView page="process" />
}
