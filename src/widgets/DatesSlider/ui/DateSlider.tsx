import DateSliderBlock, { DateProps } from "shared/ui/DateSliderBlock";
import style from "./DateSlider.module.scss";
import useDateStore from "entities/model/DateSlice";
import { TEXT_FOR_DATE_SLIDES } from "shared/const/TextForDateSlides";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

const DateSlider = () => {
  const current = useDateStore((state) => state.currentDateId);
  return (
    <Swiper
      className={style.dates}
      slidesPerView={3}
      spaceBetween={80}
      navigation={true}
      modules={[Navigation]}
    >
      {TEXT_FOR_DATE_SLIDES[current].map((dateItem, id) => (
        <SwiperSlide key={id}>
          <DateSliderBlock {...dateItem} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DateSlider;
