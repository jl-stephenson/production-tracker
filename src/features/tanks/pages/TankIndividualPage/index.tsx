import { useTankStore } from "@/stores/tankStore";
import { Link } from "@tanstack/react-router";

type TankIndividualPageProps = {
  tankId: string;
};

export function TankIndividualPage({ tankId }: TankIndividualPageProps) {
  const tank = useTankStore((state) => state.fetchTank(tankId));

  if (!tank) return <div>Something went wrong</div>;

  return (
    <ul role="list">
      <li>Capacity: {tank.capacity} litres</li>
      <li>Material: {tank.material}</li>
      {tank.currentFermentation ? (
        <li>{tank.currentFermentation.fruits.map((fruit) => (
          <li key={tank.currentFermentation?.id}>{fruit.variety}</li>
        ))}</li>
      ) : (
        <Link to="/tanks/$tankId/fermentations/new" params={{tankId: tankId}}>Add fermentation</Link>
      )}
    </ul>
  );
}
