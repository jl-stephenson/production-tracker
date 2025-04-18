import { TankListPage } from "@/features/tanks/pages/TankListPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <TankListPage />
    </>
  );
}
