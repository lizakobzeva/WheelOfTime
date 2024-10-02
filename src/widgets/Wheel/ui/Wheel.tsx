import classNames from "classnames";
import style from "./Wheel.module.scss";
import { useState } from "react";
import useDateStore from "entities/model/DateSlice";

const Wheel = () => {
  const currentValue = useDateStore((state) => state.currentDateId) + 1;
  const updateCurrentDateId = useDateStore(
    (state) => state.updateCurrentDateId
  );

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
            onClick={() => updateCurrentDateId(id)}
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
