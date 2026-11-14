import { RefObject } from "react";

const sectionCheck = (
  section: RefObject<HTMLElement>,
  playAnimeNum: number,
  target: number,
) => {
  if (section.current && playAnimeNum === target)
    // 해당 섹션이 존재하고, 재생해야할 애니메이션 넘버와 해당 섹션의 타겟 넘버가 일치하면.
    section.current.scrollIntoView({
      // 스크롤을 이동한다.
      block: "start",
      behavior: "smooth",
      inline: "start",
    });
};

export default sectionCheck;
