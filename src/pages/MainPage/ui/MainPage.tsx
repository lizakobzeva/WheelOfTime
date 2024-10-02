import style from "./MainPage.module.scss";
import DateSlider from "widgets/DatesSlider";
import Wheel from "widgets/Wheel";
import Years from "widgets/Years";
import Counter from "widgets/Counter";

const MainPage = () => {
  return (
    <div className={style.MainPage}>
      <div className={style.title}>
        <h2>
          Исторические
          <br /> даты
        </h2>
      </div>
      <Years />
      <Wheel />

      <div className={style.OptionsBlock}>
        <Counter />
        <DateSlider />
      </div>
    </div>
  );
};
export default MainPage;
