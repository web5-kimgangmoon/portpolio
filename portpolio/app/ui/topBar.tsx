"use client";

import { useState } from "react";
import { LittleBox } from "./littleBox";
import { Bars3Icon } from "@heroicons/react/24/outline";

export const TopBar = ({
  setColor,
  setIsNavOpen,
}: {
  setColor: (text: string) => void;
  setIsNavOpen: () => void;
}) => {
  const [showNum, setShowNum] = useState<number>();
  return (
    <div className="fixed flex w-full justify-center h-[30px] bg-background z-10">
      <div className="flex">
        <ColorBox
          setColor={() => setColor("yellow")}
          closeBox={() => setShowNum(undefined)}
          inner="bg-black"
          isOpenBox={showNum === 1}
          outer="bg-yellow-300"
          setShowNum={() => setShowNum(1)}
        />
        <ColorBox
          setColor={() => setColor("black")}
          closeBox={() => setShowNum(undefined)}
          inner="bg-white"
          isOpenBox={showNum === 2}
          outer="bg-black"
          setShowNum={() => setShowNum(2)}
        />
        <ColorBox
          setColor={() => setColor("pink")}
          closeBox={() => setShowNum(undefined)}
          inner="bg-black"
          isOpenBox={showNum === 3}
          outer="bg-pink-300"
          setShowNum={() => setShowNum(3)}
        />
        <ColorBox
          setColor={() => setColor("blue")}
          closeBox={() => setShowNum(undefined)}
          inner="bg-black"
          isOpenBox={showNum === 4}
          outer="bg-blue-300"
          setShowNum={() => setShowNum(4)}
        />
      </div>
      <div
        className="top-[5px] right-[5px] fixed xl:hidden w-[20px] h-[20px]"
        onClick={setIsNavOpen}
      >
        <Bars3Icon className="w-full h-full" />
      </div>
    </div>
  );
};

// 각 colorbox 안에 마우스가 들어갈 때마다 ()=> setShowNum(컬러명) 실행되고, 나올 때마다 ()=>setShowNum(undefined)가 실행된다.
// inner는 black일 경우에 한정하여, 하얀색 사각형이다.
// outer은 각 색상설정에 걸맞는 색상이다.
// setColor가 실행되면, 각 색상에 맞는 색상이 설정된다.
export const ColorBox = ({
  setColor,
  setShowNum,
  closeBox,
  isOpenBox,
  outer,
  inner,
}: {
  isOpenBox: boolean;
  setShowNum: () => void;
  closeBox: () => void;
  setColor: () => void;
  outer: string;
  inner: string;
}) => {
  return (
    <div className="relative h-4 w-4">
      <div
        className={
          "h-4 w-4 flex justify-center items-center cursor-pointer " + outer
        }
        onClick={setColor}
        onMouseEnter={setShowNum}
        onMouseLeave={closeBox}
      >
        <div className={"h-1 w-1 " + inner}></div>
      </div>
      <LittleBox isShown={isOpenBox} />
    </div>
  );
};
