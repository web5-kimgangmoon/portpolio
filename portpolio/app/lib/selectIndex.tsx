export const selectIndex = (refs: number[]) => {
  return (y: number) => {
    let target = 1;
    for (let i = 0; i < refs.length; i++) {
      target = i;
      if (y < refs[i]) break;
    }
    return target;
  }; // 클로저를 이용한 함수. 함수(객체)를 생성하기 위한 객체. refs라는 배열을 매개변수로 쓴다.
  // 새로 생성되는 화살표 함수는 refs라는 배열을 참조하기에 refs는 은닉성을 지니며, 또한 매번 다시 refs를 재설정할 필요가 없고 재사용이 가능하다.
  // 생성된 함수의 용도: y가 참조되는 배열의 값보다 작으면서, 동시에 최대값이어야 한다.
  // 전제조건: 함수에는 전제조건이 따로 제시되진 않았지만, 함수(객체)를 생성할 때 쓰이는 매개변수의 값은 무조건 오름차순이어야만 한다. 그렇지 않으면, y < refs[i] 수식이 목적성을 지니기 때문이다.
};
