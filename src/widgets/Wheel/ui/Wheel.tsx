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
      <div className={style.PointersBlock}>
        {wheelValuesArray.map((item, id) => (
          <div
            key={id}
            onClick={() => setCurrentValue(item)}
            className={classNames(style.wheelPoint, {
              [style.miniPoint]: item !== currentValue,
            })}
          >
            {wheelValuesArray[id]}
          </div>
        ))}
        {/* <div className={style.around}>
          <div className={classNames(style.wheelPoint, style.miniPoint)}>
            {wheelValuesArray[0]}
          </div>
          <div className={classNames(style.wheelPoint)}>
            {wheelValuesArray[1]}
          </div>
        </div>
        <div className={style.between}>
          <div className={classNames(style.wheelPoint, style.miniPoint)}>
            {wheelValuesArray[2]}
          </div>
          <div className={classNames(style.wheelPoint, style.miniPoint)}>
            {wheelValuesArray[3]}
          </div>
        </div>
        <div className={style.around}>
          <div className={classNames(style.wheelPoint, style.miniPoint)}>
            {wheelValuesArray[4]}
          </div>
          <div className={classNames(style.wheelPoint, style.miniPoint)}>
            {wheelValuesArray[5]}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Wheel;
