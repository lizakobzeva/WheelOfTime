import { WHEEL_VALUES } from "shared/const/WheelValues";
import style from "./Counter.module.scss";
import useDateStore from "entities/model/DateSlice";
import Button from "shared/ui/Button";
import PrevIcon from "shared/assets/Prev.svg";
import classNames from "classnames";

const Counter = () => {
  const currentValue = useDateStore((state) => state.currentDateId) + 1;
  const updateCurrentDateId = useDateStore(
    (state) => state.updateCurrentDateId
  );

  const decreaseCurrentValue = () => {
    if (currentValue > 1) updateCurrentDateId(currentValue - 2);
  };
  const increaseCurrentValue = () => {
    if (currentValue < WHEEL_VALUES.length) updateCurrentDateId(currentValue);
  };
  return (
    <div className={style.Counter}>
      <h4>
        0{currentValue}/0{WHEEL_VALUES.length}
      </h4>
      <div className={style.buttons}>
        <Button onClick={decreaseCurrentValue} disable={currentValue == 1}>
          <PrevIcon />
        </Button>
        <Button
          onClick={increaseCurrentValue}
          disable={currentValue == WHEEL_VALUES.length}
        >
          <PrevIcon className={style.next} />
        </Button>
      </div>
    </div>
  );
};

export default Counter;
