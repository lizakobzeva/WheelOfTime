import DateSliderBlock, { DateProps } from "shared/ui/DateSliderBlock";
import style from "./DateSlider.module.scss";
import useDateStore from "entities/model/DateSlice";
import { TEXT_FOR_DATE_SLIDES } from "shared/const/TextForDateSlides";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Pagination } from "swiper/modules";
import NextButtonIcon from "shared/assets/NextButton.svg";
import "swiper/css";
import "swiper/css/pagination";
import classNames from "classnames";
import { useMediaQuery } from "react-responsive";

const DateSlider = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 750px)" });
  const current = useDateStore((state) => state.currentDateId);
  return (
    <div className={style.DateSlider}>
      {!isMobile && (
        <div
          id="prevButton"
          className={classNames(style.SliderButton, style.prev)}
        >
          <NextButtonIcon />
        </div>
      )}
      <Swiper
        key={current}
        className={style.dates}
        slidesPerView={isTabletOrMobile ? 2 : 3}
        spaceBetween={isTabletOrMobile ? 25 : 74}
        freeMode={true}
        direction="horizontal"
        navigation={
          !isMobile && {
            nextEl: "#nextButton",
            prevEl: "#prevButton",
            disabledClass: `${style.swiperButtonDisable}`,
          }
        }
        pagination={
          isMobile && {
            el: "#swiperPagination",
            clickable: true,
          }
        }
        modules={[Navigation, FreeMode, Pagination]}
      >
        {TEXT_FOR_DATE_SLIDES[current].map((dateItem, id) => (
          <SwiperSlide key={id}>
            <DateSliderBlock {...dateItem} />
          </SwiperSlide>
        ))}
      </Swiper>
      {!isMobile && (
        <div id="nextButton" className={style.SliderButton}>
          <NextButtonIcon />
        </div>
      )}
      {isMobile && (
        <div className={style.swiperPagination}>
          <div id="swiperPagination"></div>
        </div>
      )}
    </div>
  );
};

export default DateSlider;
