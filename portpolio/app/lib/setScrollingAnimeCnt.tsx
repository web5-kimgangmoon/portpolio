import { RefObject } from "react";

const setScrollingAnimeCnt = (
  select: number,
  selectBar: number,
  setSelect: (num: number) => void,
  setSelectBar: (num: number) => void,
  slider: RefObject<HTMLElement | null>,
  setIsSliding: (is: boolean) => void,
  isSliding: boolean,
  target: number
) => {
  return () => {
    if (!isSliding) {
      if (select > target) {
        setIsSliding(true);
        const minus = setInterval(() => {
          if (selectBar === target) {
            clearInterval(minus);
            setSelect(target);
            if (slider.current) slider.current.style.transition = "";
            setIsSliding(false);
          }
          setSelectBar(--selectBar);
        }, 150);
      }
      if (select < target) {
        setIsSliding(true);

        const plus = setInterval(() => {
          if (selectBar === target) {
            clearInterval(plus);
            setSelect(target);
            if (slider.current) slider.current.style.transition = "";
            setIsSliding(false);
          }
          setSelectBar(++selectBar);
        }, 150);
      }
      if (slider.current) {
        slider.current.style.transform = `translateX(${-target * 100}%)`;
        slider.current.style.transition = `${
          Math.abs(selectBar - target) * 300
        }ms`;
      }
    }
  };
};

export default setScrollingAnimeCnt;
