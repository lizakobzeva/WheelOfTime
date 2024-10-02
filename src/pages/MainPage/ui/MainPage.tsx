import classNames from "classnames";
import style from "./MainPage.module.scss";
import DateSlider from "widgets/DatesSlider";
import Wheel from "widgets/Wheel";
import Years from "widgets/Years";

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
      <DateSlider />
    </div>
  );
};
export default MainPage;
