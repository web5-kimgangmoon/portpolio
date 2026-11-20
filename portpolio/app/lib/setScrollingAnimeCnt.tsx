import { RefObject } from "react";

const setScrollingAnimeCnt = (
  select: number,
  selectBar: number,
  setSelect: (num: number) => void,
  setSelectBar: (num: number) => void,
  slider: RefObject<HTMLElement | null>,
  setIsSliding: (is: boolean) => void,
  isSliding: boolean,
  target: number,
) => {
  return () => {
    if (!isSliding) {
      if (select > target) {
        setIsSliding(true);
        const minus = setInterval(() => {
          if (selectBar === target) {
            clearInterval(minus); // selectbar를 minus하는 interval 함수 클리어.
            setSelect(target); // target을 select를 같이 만든다.
            if (slider.current) slider.current.style.transition = ""; // 슬라이드가 있으면, 슬라이드의 transform을 없앤다.
            setIsSliding(false); // IsSliding 변수를 false로.
          }
          setSelectBar(--selectBar); // selectbar 줄이기
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
