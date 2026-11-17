import { InnerView } from '@/views/inner-view'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata('en', 'services')

export default function Page() {
  return <InnerView page="services" />
}
