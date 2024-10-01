import classNames from "classnames";
import style from "./MainPage.module.scss";
import DateSlider from "widgets/DatesSlider";
import { FIRST_TEXT_FOR_DATE_SLIDES } from "shared/const/TextForDateSlides";
import Wheel from "widgets/Wheel";

const MainPage = () => {
  return (
    <div className={style.MainPage}>
      <div className={style.title}>
        <h2>
          Исторические
          <br /> даты
        </h2>
      </div>
      <div className={style.years}>
        <h1>
          2015 <span className={style.accentSecondText}>2022</span>
        </h1>
      </div>
      <Wheel initialValue={3} />
      <DateSlider list={FIRST_TEXT_FOR_DATE_SLIDES} />
    </div>
  );
};
export default MainPage;
