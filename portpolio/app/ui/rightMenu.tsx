import Link from "next/link";
import {
  MutableRefObject,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { selectIndex } from "../lib/selectIndex";
import clsx from "clsx";
import { scrollEvControll } from "../lib/scrollEvControll";

export const RightMenu = ({
  refs,
  isNavOpen,
}: {
  refs: RefObject<HTMLElement | null>[];
  isNavOpen: boolean;
}) => {
  const [select, setSelect] = useState<number>(0);
  return (
    <div
      className={clsx(
        "xl:sticky fixed top-[60px] right-0 overflow-hidden px-10 h-max transition-transform xl:w-[30rem] bg-background xl:translate-x-0",
        !isNavOpen && "translate-x-[300%]",
        isNavOpen && "translate-x-0"
      )}
    >
      <RightMenuComp refs={refs} select={select} setSelect={setSelect} />
    </div>
  );
};

export const RightMenuComp = ({
  refs,
  select,
  setSelect,
}: {
  refs: RefObject<HTMLElement | null>[];
  select: number;
  setSelect: (num: number) => void;
}) => {
  const all = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let sum = 0;
    const refsNum: number[] = [];
    for (let item of refs) {
      refsNum.push((item.current!.clientHeight + sum) as number);
      sum += item.current!.clientHeight;
    }
    setSelect(selectIndex(window.scrollY, refsNum));
    scrollEvControll(true);
    if (all.current) all.current.classList.remove("parent");
    window.onscroll = () => {
      setSelect(selectIndex(window.scrollY, refsNum));
    };
    scrollEvControll(false);
  }, []);
  return (
    <div className={clsx("parent")} ref={all}>
      <div
        className={clsx(
          "relative lineDown",
          "before:top-0 before:left-0 before:w-[2px] xl:before:h-0 before:h-full before:content-[''] before:border-l-2 before:border-color20 before:absolute"
          // "before:duration-[750ms]"
        )}
      >
        <nav className="text-xl font-bold">
          <IndexComp
            title="TOP"
            number={"01"}
            target={refs[0]}
            isSelect={select === 0}
          />
          <IndexComp
            title="ABOUT ME"
            number={"02"}
            target={refs[1]}
            isSelect={select === 1}
          />
          <IndexComp
            title="SKILLS"
            number={"03"}
            target={refs[2]}
            isSelect={select === 2}
          />
          <IndexComp
            title="EXPERIENCE"
            number={"04"}
            target={refs[3]}
            isSelect={select === 3}
          />
          <IndexComp
            title="PROJECT"
            number={"05"}
            target={refs[4]}
            isSelect={select === 4}
          />
        </nav>
        <div className="px-6 py-8 slideItem xl:translate-x-[250%]">
          rkdans2111@naver.com
        </div>
      </div>
    </div>
  );
};

export const IndexComp = ({
  title,
  number,
  target,
  isSelect,
}: {
  title: string;
  number: string;
  target: RefObject<HTMLElement | null>;
  isSelect?: boolean;
}) => {
  return (
    <button
      className={clsx(
        "py-2 px-6 block hover:text-color60 relative xl:translate-x-[300%] slideItem",
        isSelect && "text-color60"
      )}
      onClick={() => {
        if (target.current) {
          target.current.scrollIntoView({
            block: "start",
            behavior: "smooth",
          });
        }
      }}
    >
      <div
        className={clsx(
          "absolute w-full h-full flex items-center top-0 left-[0] before:duration-300",
          "hover:before:border-l-2 hover:before:border-text hover:before:h-[100%]",
          !isSelect && "before:h-0",
          isSelect && "before:border-l-2 before:border-text before:h-[100%]"
        )}
      ></div>
      <span className="text-base font-light pr-2">{number}</span> {title}
    </button>
  );
};
