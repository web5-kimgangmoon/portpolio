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
        // select가 target보다 큰 경우.
        setIsSliding(true); // 슬라이딩 중.
        const minus = setInterval(() => {
          // 타이머 함수 설정.
          if (selectBar === target) {
            // selectbar와 target이 같은 경우.
            clearInterval(minus); // selectbar를 minus하는 interval 함수 클리어.
            setSelect(target); // target을 select를 같이 만든다.
            if (slider.current) slider.current.style.transition = ""; // 슬라이드가 있으면, 슬라이드의 transform을 없앤다.
            setIsSliding(false); // IsSliding 변수를 false로.
          }
          setSelectBar(--selectBar); // selectbar 줄이기
        }, 150); // 150ms은 애니메이션보다 다소 먼저 바꾸기로.
      }
      if (select < target) {
        // select가 target보다 작은 경우.
        setIsSliding(true); // 슬라이딩 중.

        const plus = setInterval(() => {
          // 타이머 함수 절정.
          if (selectBar === target) {
            // selectbar와 target이 같은 경우.
            clearInterval(plus); // selectbar를 plus하는 interval 함수 클리어.
            setSelect(target); // target을 select를 같이 만든다.
            if (slider.current) slider.current.style.transition = ""; // 슬라이드가 있으면, 슬라이드의 transform을 없앤다.
            setIsSliding(false); // IsSliding 변수를 false로.
          }
          setSelectBar(++selectBar); // selectbar 늘리기
        }, 150); // 150ms은 애니메이션보다 다소 먼저 바꾸기로.
      }
      if (slider.current) {
        // slider가 있으면.
        slider.current.style.transform = `translateX(${-target * 100}%)`; // 한칸 이동.
        slider.current.style.transition = `${
          Math.abs(selectBar - target) * 300 // 더 많이 이동할수록, 더 많이 시간이 걸린다.
        }ms`;
      }
    }
  };
};

export default setScrollingAnimeCnt;
