export const throttle = (fn: (...args: any[]) => void, delay: number) => {
  let lastCall = 0;

  return function (...args: any[]) {
    const now = Date.now();
    if (!(now - lastCall < delay)) {
      lastCall = now;
      fn(...args);
    }
  };
};
