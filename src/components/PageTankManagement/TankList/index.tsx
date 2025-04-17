import { Tank } from "../index";
import styles from "./index.module.css";

type TankListProps = {
  tanks: Tank[];
  handleDeleteTank: (id: number) => void;
};

export function TankList({ tanks, handleDeleteTank }: TankListProps) {
  return (
    <ul role="list" className={styles.container}>
      {tanks.map((tank) => (
        <li className={styles.tankCard}>
          <div className={styles.cardInfo}>
            <p>Size: {tank.size}</p>
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
