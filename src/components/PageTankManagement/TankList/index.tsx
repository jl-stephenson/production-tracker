import { Tank } from "../index";
import styles from "./index.module.css";

type TankListProps = {
  tanks: Tank[];
  handleDeleteTank: (id: number) => void;
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
          <button
            className={styles.cardButton}
            onClick={() => handleDeleteTank(tank.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
