import { TankForm } from "@/features/tanks/components/TankForm";
import { TankList } from "@/features/tanks/components/TankList";

export function TankListPage() {
  return (
    <main>
      <TankForm />
      <TankList />
    </main>
  );
}
