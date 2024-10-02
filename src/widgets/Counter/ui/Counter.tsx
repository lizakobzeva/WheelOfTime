import { WHEEL_VALUES } from "shared/const/WheelValues";
import style from "./Counter.module.scss";
import useDateStore from "entities/model/DateSlice";
import Button from "shared/ui/Button";
import PrevIcon from "shared/assets/Prev.svg";

const Counter = () => {
  const currentValue = useDateStore((state) => state.currentDateId) + 1;
  return (
    <div className={style.Counter}>
      <h4>
        0{currentValue}/0{WHEEL_VALUES.length}
      </h4>
      <div className={style.buttons}>
        <Button>
          <PrevIcon />
        </Button>
        <Button>
          <PrevIcon className={style.next} />
        </Button>
      </div>
    </div>
  );
};

export default Counter;
