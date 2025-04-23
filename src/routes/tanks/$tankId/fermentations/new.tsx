import { NewFermentationPage } from "@/features/fermentations/pages/NewFermentationPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tanks/$tankId/fermentations/new")({
  component: RouteComponent,
});

function RouteComponent() {
  const {tankId} = Route.useParams();
  return <NewFermentationPage tankId={tankId} />;
}
