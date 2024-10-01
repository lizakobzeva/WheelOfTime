import classNames from "classnames";
import style from "./Wheel.module.scss";
import { useState } from "react";

interface WheelProps {
  initialValue: number;
}

const Wheel = ({ initialValue }: WheelProps) => {
  const [currentValue, setCurrentValue] = useState(initialValue);
  const wheelValuesArray = [1, 2, 3, 4, 5, 6];

  return (
    <div className={style.wheel}>
      <div
        className={style.PointersBlock}
        style={{ transform: `rotate(${(3 - currentValue) * 60}deg)` }}
      >
        {wheelValuesArray.map((item, id) => (
          <div
            key={id}
            onClick={() => setCurrentValue(item)}
            className={classNames(style.wheelPoint, {
              [style.miniPoint]: item !== currentValue,
            })}
          >
            <p style={{ transform: `rotate(${(3 - currentValue) * -60}deg)` }}>
              {wheelValuesArray[id]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wheel;
