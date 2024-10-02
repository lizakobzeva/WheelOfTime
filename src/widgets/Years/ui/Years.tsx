import { useEffect, useRef, useState } from "react";
import style from "./Years.module.scss";
import { gsap } from "gsap";
import { YEARS_LIST } from "shared/const/YearsList";
import useDateStore from "entities/model/DateSlice";

const Years = () => {
  const current = useDateStore((state) => state.currentDateId);

  const startEl = useRef();
  const endEl = useRef();
  const [start, setStart] = useState(YEARS_LIST[current]?.dateStart || 0);
  const [end, setEnd] = useState(YEARS_LIST[current]?.dateEnd || 0);
  useEffect(() => {
    setStart(YEARS_LIST[current]?.dateStart || 0);
    setEnd(YEARS_LIST[current]?.dateEnd || 0);
    gsap.to(startEl.current, {
      innerText: start,
      duration: 1,
      snap: {
        innerText: 1,
      },
    });
    gsap.to(endEl.current, {
      innerText: end,
      duration: 1,
      snap: {
        innerText: 1,
      },
    });
  }, [current, start, end]);

  return (
    <div className={style.years}>
      <h1>
        <span ref={startEl}>{YEARS_LIST[0].dateStart}</span>{" "}
        <span ref={endEl} className={style.accentSecondText}>
          {YEARS_LIST[0].dateEnd}
        </span>
      </h1>
    </div>
  );
};

export default Years;
