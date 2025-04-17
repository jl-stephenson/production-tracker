import {Tank} from "../index";

type TankListProps = {
    tanks: Tank[];
}

export function TankList({tanks}: TankListProps) {
    return (
        <ul>
        {tanks.map((tank) => (
            <li>{tank.size} - {tank.material}</li>
        ))}
        </ul>
    )
}