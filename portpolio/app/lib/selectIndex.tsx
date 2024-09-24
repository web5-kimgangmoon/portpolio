export const selectIndex = (y: number, refs: number[]) => {
  let target = 1;
  for (let i = 0; i < refs.length; i++) {
    target = i;
    if (y < refs[i]) break;
  }
  return target;
};
