import DateSliderBlock, { DateProps } from "shared/ui/DateSliderBlock";
import style from "./DateSlider.module.scss";
import useDateStore from "entities/model/DateSlice";
import { TEXT_FOR_DATE_SLIDES } from "shared/const/TextForDateSlides";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import NextButtonIcon from "shared/assets/NextButton.svg";
import "swiper/css";
import classNames from "classnames";

const DateSlider = () => {
  const current = useDateStore((state) => state.currentDateId);
  return (
    <div className={style.DateSlider}>
      <div
        id="prevButton"
        className={classNames(style.SliderButton, style.prev)}
      >
        <NextButtonIcon />
      </div>
      <Swiper
        className={style.dates}
        slidesPerView={3}
        spaceBetween={74}
        freeMode={true}
        direction="horizontal"
        navigation={{
          nextEl: "#nextButton",
          prevEl: "#prevButton",
          disabledClass: `${style.swiperButtonDisable}`,
        }}
        modules={[Navigation, FreeMode]}
      >
        {TEXT_FOR_DATE_SLIDES[current].map((dateItem, id) => (
          <SwiperSlide key={id}>
            <DateSliderBlock {...dateItem} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div id="nextButton" className={style.SliderButton}>
        <NextButtonIcon />
      </div>
    </div>
  );
};

export default DateSlider;
