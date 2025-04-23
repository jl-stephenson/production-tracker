import { TankIndividualPage } from '@/features/tanks/pages/TankIndividualPage';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tanks/$tankId/detail')({
  component: TankDetail,
})

function TankDetail() {
  const {tankId} = Route.useParams();
  return <TankIndividualPage tankId={tankId} />
}
