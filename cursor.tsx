export default function Page() {
  return (
    <svg
      width={36}
      height={90}
      viewBox="0 0 36 90"
      stroke="black"
      strokeWidth={2}
      fill="none"
    >
      <defs>
        <path
          id="ellipse"
          d="M4.5 36 C 4.5 36, 4.5 27, 9 27 M31.5 36 C 31.5 36, 31.5 27, 27 27 M4.5 54 C 4.5 54, 4.5 63, 9 63 M31.5 54 C 31.5 54, 31.5 63, 27 63 M9 27 H27 M9 63 H27 M4.5 36 V54 M31.5 36 V54"
        ></path>
        <path
          id="decoLines"
          d="M8 45 H28 M10 39 H26 M12 33 H24 M10 51 H26 M12 57 H24"
          strokeWidth="3"
        ></path>
        <path
          id="up_diagonal"
          d="M2 10 L18 2 L34 10 M2 16 L18 8 L34 16 M2 22 L18 14 L34 22"
        ></path>
        <path
          id="down_diagonal"
          d="M2 68 L18 76 L34 68 M2 74 L18 82 L34 74 M2 80 L18 88 L34 80"
        ></path>
      </defs>
      <use href="#ellipse" />
      <use href="#decoLines" />
      <use href="#up_diagonal" />
      <use href="#down_diagonal" />
    </svg>
  );
}
