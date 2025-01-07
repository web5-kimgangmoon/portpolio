import { RefObject } from "react";

const sectionCheck = (
  section: RefObject<HTMLElement>,
  playAnimeNum: number,
  target: number
) => {
  if (section.current && playAnimeNum === target)
    section.current.scrollIntoView({
      block: "start",
      behavior: "smooth",
      inline: "start",
    });
};

export default sectionCheck;
