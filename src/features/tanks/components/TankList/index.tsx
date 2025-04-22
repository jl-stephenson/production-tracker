import { Tank } from "@/features/tanks/utils/Types";
import styles from "./index.module.css";
import { Link } from "@tanstack/react-router";

type TankListProps = {
  tanks: Tank[];
  handleDeleteTank: (id: string) => void;
};

export function TankList({ tanks, handleDeleteTank }: TankListProps) {
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
            to="/tanks/$tankId"
            params={{ tankId: tank.id }}
            aria-label={`Edit tank with capacity of ${tank.capacity} litres`}
          >
            Edit
          </Link>
          <button
            className={styles.deleteButton}
            type="button"
            onClick={() => handleDeleteTank(tank.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
