import { useTankStore } from "@/stores/tankStore";
import { Link } from "@tanstack/react-router";
import styles from "./index.module.css";

type TankIndividualPageProps = {
  tankId: string;
};

export function TankIndividualPage({ tankId }: TankIndividualPageProps) {
  const tank = useTankStore((state) => state.fetchTank(tankId));

  if (!tank) return <div>Something went wrong</div>;

  console.log(tank);

  return (
    <main className="dashboard-container">
      <Link className="back-link" to="/tanks">
        Back
      </Link>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <div className="dashboard-card-header">
            <h3>Tank Details</h3>
          </div>
          <div className="dashboard-card-body">
            <p>Capacity: {tank.capacity} litres</p>
            <p>Material: {tank.material}</p>
          </div>
        </div>
        <div className="dashboard-card">
          <div className="dashboard-card-header">
            <h3>Contents</h3>
          </div>
          <div className="dashboard-card-body">
            {tank.currentFermentation ? (
              <ul role="list">
                <li>Name: {tank.currentFermentation.name}</li>
                <li>
                  Volume: {tank.currentFermentation.totalVolume}L /{" "}
                  {tank.capacity}L
                </li>
                <li>Status: {tank.status}</li>
                <li>
                  Combined Sugar Level (SG):{" "}
                  {tank.currentFermentation.averageSugarLevel.toFixed(2)}{" "}
                </li>
                <div className={styles.varieties}>
                  <li className={styles.varietiesHeader}>Varieties:</li>
                  {Object.entries(
                    tank.currentFermentation.varietyPercentages,
                  ).map(([variety, percentage]) => (
                    <li key={variety}>
                      {variety} - {(percentage * 100).toFixed(1)}%
                    </li>
                  ))}
                </div>
              </ul>
            ) : (
              <p>Tank is empty. Click below to start fermentation.</p>
            )}
          </div>
          <div className="dashboard-card-footer">
            {tank.currentFermentation ? (
              <Link
                aria-disabled="true"
                className="dashboard-card-link"
                to="/tanks/$tankId/fermentations/new"
                params={{ tankId: tankId }}
                onClick={(event) => event.preventDefault()}
              >
                Edit
              </Link>
            ) : (
              <Link
                className="dashboard-card-link"
                to="/tanks/$tankId/fermentations/new"
                params={{ tankId: tankId }}
              >
                Add fermentation
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
