import { Chats } from '@/features/chats'
import { AuthenticatedLayout } from '@/components/layout/authenticated-layout'

export default function ChatsPage() {
  return (
    <AuthenticatedLayout>
      <Chats />
    </AuthenticatedLayout>
  )
}
