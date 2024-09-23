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
}: {
  refs: RefObject<HTMLElement | null>[];
}) => {
  const [select, setSelect] = useState<number>(0);
  return <RightMenuComp refs={refs} select={select} setSelect={setSelect} />;
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
  const emailRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.onresize = (e) => {
      if (window.innerWidth < 1280) {
        if (emailRef.current) emailRef.current.style.transform = "";
        if (lineRef.current) lineRef.current.classList.remove("lineFull");
      } else {
        if (emailRef.current) emailRef.current.style.transform = "";
        if (lineRef.current) lineRef.current.classList.add("lineFull");
      }
    };
    setSelect(selectIndex(window.scrollY, window.innerHeight));
    scrollEvControll(true);
    if (emailRef.current) emailRef.current.style.transform = "translateX(0)";
    if (lineRef.current) lineRef.current.classList.add("lineFull");

    setTimeout(() => {
      scrollEvControll(false);
      window.onscroll = () => {
        setSelect(selectIndex(window.scrollY, window.innerHeight));
      };
    }, 1000);
  }, []);
  return (
    <div className="xl:sticky fixed  top-[30px] right-0 overflow-hidden w-80 px-10 h-max">
      <div
        className={clsx(
          "relative xl:translate-x-0 translate-x-[30rem] transition-transform",
          "before:top-0 before:left-0 before:w-[2px] before:h-0 before:content-[''] before:border-l-2 before:border-color20 before:absolute before:transition-[height]",
          "before:duration-[1000ms]"
        )}
        ref={lineRef}
      >
        <nav className="text-xl font-bold">
          <IndexComp
            index={0}
            title="TOP"
            number={"01"}
            target={refs[0]}
            isSelect={select === 0}
          />
          <IndexComp
            index={1}
            title="ABOUT ME"
            number={"02"}
            target={refs[1]}
            isSelect={select === 1}
          />
          <IndexComp
            index={2}
            title="SKILLS"
            number={"03"}
            target={refs[2]}
            isSelect={select === 2}
          />
          <IndexComp
            index={3}
            title="EXPERIENCE"
            number={"04"}
            target={refs[3]}
            isSelect={select === 3}
          />
          <IndexComp
            index={4}
            title="PROJECT"
            number={"05"}
            target={refs[4]}
            isSelect={select === 4}
          />
        </nav>
        <div
          className="px-6 py-8"
          style={{
            transform: `translateX(500%)`,
            transition: `${200 * 5}ms`,
          }}
          ref={emailRef}
        >
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
  index,
}: {
  title: string;
  number: string;
  target: RefObject<HTMLElement | null>;
  isSelect?: boolean;
  index: number;
}) => {
  const thisRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (thisRef.current) {
      thisRef.current.style.transform = "translateX(0)";
    }
    window.addEventListener("resize", (e) => {
      if (window.innerWidth < 1280) {
        if (thisRef.current) {
          thisRef.current.style.transform = `translateX(${index + 2}00%)`;
        }
      } else {
        if (thisRef.current) {
          thisRef.current.style.transform = "translateX(0)";
        }
      }
    });
  }, []);
  return (
    <button
      className={clsx(
        "py-2 px-6 block hover:text-color60 relative",
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
      style={{
        transform: `translateX(${index + 2}00%)`,
        transition: `${200 * (index + 1)}ms`,
      }}
      onTouchStart={(e) => {
        setTimeout(() => {
          e.currentTarget.blur();
        }, 300);
      }}
      ref={thisRef}
    >
      <div
        className={clsx(
          "absolute w-full h-full flex items-center top-0 left-[0] before:transition-[height] before:ease-in before:duration-300",
          "hover:before:border-l-2 hover:before:border-text hover:before:h-[100%]",
          !isSelect && "before:h-0",
          isSelect && "before:border-l-2 before:border-text before:h-[100%]"
        )}
      ></div>
      <span className="text-base font-light pr-2">{number}</span> {title}
    </button>
  );
};
