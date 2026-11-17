import { HomeView } from '@/views/home-view'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata('es', 'home')

export default function Page() {
  return <HomeView />
}
