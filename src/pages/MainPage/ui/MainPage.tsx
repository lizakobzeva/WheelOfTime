import classNames from "classnames";
import style from "./MainPage.module.scss";
import DateSlider from "widgets/DatesSlider";
import { FIRST_TEXT_FOR_DATE_SLIDES } from "shared/const/TextForDateSlides";
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
      <Years currentValue={3} />
      <Wheel initialValue={3} />
      <DateSlider list={FIRST_TEXT_FOR_DATE_SLIDES} />
    </div>
  );
};
export default MainPage;
