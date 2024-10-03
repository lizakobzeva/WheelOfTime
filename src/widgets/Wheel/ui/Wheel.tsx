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
              [style.miniPoint]: id + 1 !== currentValue,
            })}
          >
            <p style={{ transform: `rotate(${(3 - currentValue) * -60}deg)` }}>
              {id + 1}
            </p>
          </div>
        ))}
      </div>

      <div key={currentValue} className={style.pointTitle}>
        <h3>{WHEEL_VALUES[currentValue - 1]}</h3>
      </div>
    </div>
  );
};

export default Wheel;
