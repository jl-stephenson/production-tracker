import { TankForm } from "@/features/tanks/components/TankForm";
import { TankList } from "@/features/tanks/components/TankList";
import { useTankStore } from "@/stores/tankStore";
import { Link } from "@tanstack/react-router";
import styles from "./index.module.css";

export function TankListPage() {
  const { sortTanks } = useTankStore();

  return (
    <main className="dashboard-container">
      <Link className="back-link" to="/">
        Back
      </Link>
      <TankForm />
      <div className={styles.container}>
        <label htmlFor="tank-sort">Sort tanks:</label>
        <select
          id="tank-sort"
          onChange={(event) => sortTanks(event.currentTarget.value)}
        >
          <option value="date-created">
            Date created (newest &gt; oldest)
          </option>
          <option value="capacity">Capacity (large &gt; small)</option>
        </select>
      </div>
      <TankList />
    </main>
  );
}
