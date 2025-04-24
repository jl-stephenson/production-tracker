import { TankForm } from "@/features/tanks/components/TankForm";
import { TankList } from "@/features/tanks/components/TankList";
import { Link } from "@tanstack/react-router";

export function TankListPage() {
  return (
    <main className="dashboard-container">
      <Link className="back-link" to="/">Back</Link>
      <TankForm />
      <TankList />
    </main>
  );
}
