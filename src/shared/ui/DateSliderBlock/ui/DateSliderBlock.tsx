import style from "./DateSliderBlock.module.scss";

export interface DateProps {
  year: number;
  text: string;
}

const DateSliderBlock = ({ year, text }: DateProps) => {
  return (
    <div className={style.date}>
      <h3 className={style.dateTitle}>{year}</h3>
      <p>{text}</p>
    </div>
  );
};

export default DateSliderBlock;
