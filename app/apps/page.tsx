import { Apps } from '@/features/apps'
import { AuthenticatedLayout } from '@/components/layout/authenticated-layout'

export default function AppsPage() {
  return (
    <AuthenticatedLayout>
      <Apps />
    </AuthenticatedLayout>
  )
}
