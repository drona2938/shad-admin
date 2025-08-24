import { Tasks } from '@/features/tasks'
import { AuthenticatedLayout } from '@/components/layout/authenticated-layout'

export default function TasksPage() {
  return (
    <AuthenticatedLayout>
      <Tasks />
    </AuthenticatedLayout>
  )
}
