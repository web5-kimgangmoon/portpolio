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
    <div className="fixed flex w-full justify-center h-[30px] bg-background z-10 ">
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
