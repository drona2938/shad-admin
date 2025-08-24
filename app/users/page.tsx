import { Users } from '@/features/users'
import { AuthenticatedLayout } from '@/components/layout/authenticated-layout'

export default function UsersPage() {
  return (
    <AuthenticatedLayout>
      <Users />
    </AuthenticatedLayout>
  )
}
