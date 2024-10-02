import classNames from "classnames";
import style from "./Wheel.module.scss";
import useDateStore from "entities/model/DateSlice";
import { WHEEL_VALUES } from "shared/const/WheelValues";

const Wheel = () => {
  const currentValue = useDateStore((state) => state.currentDateId) + 1;
  const updateCurrentDateId = useDateStore(
    (state) => state.updateCurrentDateId
  );

  return (
    <div className={style.wheel}>
      <div
        className={style.PointersBlock}
        style={{ transform: `rotate(${(3 - currentValue) * 60}deg)` }}
      >
        {WHEEL_VALUES.map((item, id) => (
          <div
            key={id}
            onClick={() => updateCurrentDateId(id)}
            className={classNames(style.wheelPoint, {
              [style.miniPoint]: item !== currentValue,
            })}
          >
            <p style={{ transform: `rotate(${(3 - currentValue) * -60}deg)` }}>
              {WHEEL_VALUES[id]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wheel;
