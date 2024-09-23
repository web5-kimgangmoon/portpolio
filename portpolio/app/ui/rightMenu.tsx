import Link from "next/link";
import { MutableRefObject } from "react";

export const RightMenu = ({ refs }: { refs: MutableRefObject<null>[] }) => {
  return (
    <div className="fixed justify-end top-16 right-20 border-l border-color20">
      <div>
        <nav className="text-xl font-bold">
          <IndexComp title="TOP" number={"01"} ref={refs[0]} />
          <IndexComp title="ABOUT ME" number={"02"} ref={refs[1]} />
          <IndexComp title="SKILLS" number={"03"} ref={refs[2]} />
          <IndexComp title="EXPERIENCE" number={"04"} ref={refs[3]} />
          <IndexComp title="PROJECT" number={"05"} ref={refs[4]} />
        </nav>
        <div className="px-6 py-8">rkdans2111@naver.com</div>
      </div>
    </div>
  );
};

export const IndexComp = ({
  title,
  number,
  ref,
}: {
  title: string;
  number: string;
  ref: MutableRefObject<null>;
}) => {
  return (
    <button className="py-2 px-6 block" ref={ref}>
      <span className="text-base font-light pr-2">{number}</span> {title}
    </button>
  );
};
