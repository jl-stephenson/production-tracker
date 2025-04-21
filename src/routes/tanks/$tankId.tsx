import { createFileRoute } from "@tanstack/react-router";
import { NewFermentationPage } from "@/features/fermentations/pages/NewFermentationPage";

export const Route = createFileRoute("/tanks/$tankId")({
  component: NewFermentation,
});

function NewFermentation() {
  const { tankId } = Route.useParams();
  return <NewFermentationPage tankId={tankId} />;
}
