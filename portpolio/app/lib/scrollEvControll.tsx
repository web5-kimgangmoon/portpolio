const prevent = (e: Event) => e.preventDefault();

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
