import { createFileRoute } from "@tanstack/react-router";
import { NewFermentationPage } from "@/features/fermentations/pages/NewFermentationPage";

export const Route = createFileRoute("/tanks/$tankId")({
  component: NewFermentation,
  loader: async ({ params }) => {
    return {
      tankId: params.tankId,
    };
  },
});

function NewFermentation() {
  const { tankId } = Route.useLoaderData();
  return <NewFermentationPage tankId={tankId} />;
}
