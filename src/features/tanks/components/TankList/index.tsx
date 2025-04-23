import styles from "./index.module.css";
import { Link } from "@tanstack/react-router";
import { useTankStore } from "@/stores/tankStore";


export function TankList() {
const {tanks} = useTankStore();

  return (
    <ul role="list" className={styles.container} aria-label="Tank list">
      {tanks.length === 0 && (
        <li className={styles.emptyState}>
          <p>
            No tanks registered. Add a new tank using the registration form.
          </p>
        </li>
      )}
      {tanks.map((tank) => (
        <li
          key={tank.id}
          className={styles.tankCard}
          data-status={tank.status.toLowerCase()}
        >
          <div className={styles.cardInfo}>
            <p>Capacity: {tank.capacity} litres</p>
            <p>Material: {tank.material}</p>
          </div>
          <Link
            className={styles.editLink}
            to="/tanks/$tankId/detail"
            params={{ tankId: tank.id }}
            aria-label={`Edit tank with capacity of ${tank.capacity} litres`}
          >
            Edit
          </Link>
        </li>
      ))}
    </ul>
  );
}
