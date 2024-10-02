import { useEffect, useRef, useState } from "react";
import style from "./Years.module.scss";
import { gsap } from "gsap";
import { YEARS_LIST } from "shared/const/YearsList";

interface YearsProps {
  currentValue: number;
}

const Years = ({ currentValue }: YearsProps) => {
  const startEl = useRef();
  const endEl = useRef();
  const [current, setCurrent] = useState(currentValue);
  const [start, setStart] = useState(YEARS_LIST[current]?.dateStart || 0);
  const [end, setEnd] = useState(YEARS_LIST[current]?.dateEnd || 0);
  useEffect(() => {
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

  const handleClick = (idx: number) => {
    if (idx < 0) return;
    if (idx >= YEARS_LIST.length) return;
    setCurrent(idx);
    setStart(YEARS_LIST[idx].dateStart);
    setEnd(YEARS_LIST[idx].dateEnd);
  };
  return (
    <div className={style.years}>
      <h1>
        <span ref={startEl}>{YEARS_LIST[0].dateStart}</span>{" "}
        <span ref={endEl} className={style.accentSecondText}>
          {YEARS_LIST[0].dateEnd}
        </span>
      </h1>

      <div>
        <button onClick={() => handleClick(current - 1)}>назад</button>
        <button onClick={() => handleClick(current + 1)}>вперед</button>
      </div>
    </div>
  );
};

export default Years;
