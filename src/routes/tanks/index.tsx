import { TankListPage } from '@/features/tanks/pages/TankListPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tanks/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <TankListPage />
}
