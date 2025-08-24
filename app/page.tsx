import { Dashboard } from '@/features/dashboard'
import { AuthenticatedLayout } from '@/components/layout/authenticated-layout'

export default function HomePage() {
  return (
    <AuthenticatedLayout>
      <Dashboard />
    </AuthenticatedLayout>
  )
}
