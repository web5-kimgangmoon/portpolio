const prevent = (e: Event) => e.preventDefault();

// 스크롤 이벤트리스너를 추가하고 제거하는 방식으로 토글을 구현했다.
export const scrollEvControll = (toggle: boolean) => {
  if (toggle) {
    window.addEventListener("scroll", prevent, {
      passive: false,
    });
    window.addEventListener("wheel", prevent, {
      passive: false,
    });
    window.addEventListener("touchmove", prevent, {
      passive: false,
    });
    window.addEventListener("keydown", prevent, {
      passive: false,
    });
  } else {
    window.removeEventListener("scroll", prevent);
    window.removeEventListener("wheel", prevent);
    window.removeEventListener("touchmove", prevent);
    window.removeEventListener("keydown", prevent);
  }
};
