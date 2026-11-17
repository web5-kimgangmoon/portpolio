export const LittleBox = ({ isShown }: { isShown: boolean }) => {
  return (
    <div
      className={`absolute bottom-[-2rem] transition left-[-2.375rem] ${
        isShown ? "opacity-1" : "opacity-0 z-[-1]"
      }`}
      onMouseEnter={(e) => e.preventDefault()}
    >
      <div className="flex justify-center">
        <svg height="5" width="10">
          <polygon
            className="bg-background"
            points="5,0 0,5 10,5"
            strokeWidth={1}
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="text-background bg-text p-1 rounded text-sm whitespace-nowrap">
        Select theme
      </div>
    </div>
  );
};

// text-background는 CSS 변수 background를 사용하며, black, yellow 등 global.css에 정의된 클래스에 따라 background의 색상이 달라진다.
