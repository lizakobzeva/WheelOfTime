import DateSliderBlock, { DateProps } from "shared/ui/DateSliderBlock";
import style from "./DateSlider.module.scss";

interface DateSliderProps {
  list: DateProps[];
}

const DateSlider = ({ list }: DateSliderProps) => {
  return (
    <div className={style.dates}>
      {list.map((dateItem) => (
        <DateSliderBlock {...dateItem} />
      ))}
    </div>
  );
};

export default DateSlider;
