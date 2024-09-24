"use client";

import { RefObject, useEffect, useRef, useState } from "react";
import { TopBar } from "./ui/topBar";
import { RightMenu } from "./ui/rightMenu";
import clsx from "clsx";
import Image from "next/image";
import { ArrowTurnRightDownIcon } from "@heroicons/react/24/outline";
import { HeroArrow } from "@/public/heroArrow";

export default function Home() {
  const [color, setColor] = useState<string>("yellow");
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const section1 = useRef<HTMLElement>(null);
  const section2 = useRef<HTMLElement>(null);
  const section3 = useRef<HTMLElement>(null);
  const section4 = useRef<HTMLElement>(null);
  const section5 = useRef<HTMLElement>(null);

  return (
    <div className={`body ${color} box-border`}>
      <TopBar
        setColor={setColor}
        setIsNavOpen={() =>
          setIsNavOpen((value) => {
            return !value;
          })
        }
      />
      <div>
        <div className={clsx("container flex flex-row-reverse")}>
          <RightMenu
            isNavOpen={isNavOpen}
            refs={[section1, section2, section3, section4, section5]}
          />
          <div
            className={clsx(
              "w-full",
              "transition-transform duration-300",
              isNavOpen && "translate-x-[-30rem]"
            )}
          >
            <SectionTitle reference={section1} nextRef={section2} />
            <Section reference={section2}></Section>
            <section
              style={{ paddingBlockStart: "30px", height: "100vh" }}
              ref={section3}
            >
              <h2>섹션 3</h2>
              <p>내용 3</p>
            </section>
            <section
              style={{ paddingBlockStart: "30px", height: "100vh" }}
              ref={section4}
            >
              <h2>섹션 4</h2>
              <p>내용 4</p>
            </section>
            <section
              style={{ paddingBlockStart: "30px", height: "100vh" }}
              ref={section5}
            >
              <h2>섹션 5</h2>
              <p>내용 5</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export const SectionTitle = ({
  reference,
  nextRef,
}: {
  reference: RefObject<HTMLElement>;
  nextRef: RefObject<HTMLElement>;
}) => {
  return (
    <section
      className="overflow-hidden pt-[30px] h-screen flex flex-col"
      // style={{ paddingBlockStart: "30px", height: "100vh" }}
      ref={reference}
    >
      <div
        className="pt-12 pb-8 rightMoveAnime translate-x-[-100%]"
        style={{ animationDelay: "300ms" }}
      >
        <div className="w-40 h-40">
          <Image
            src={"/face.png"}
            width={"20"}
            height={"20"}
            alt="no image"
            className="w-full h-full rounded-full border-text border"
          />
        </div>
      </div>
      <div
        className="text-[10rem] font-bold rightMoveAnime custom translate-x-[-100%]"
        style={{ animationDelay: "450ms" }}
      >
        <h1>김강문</h1>
      </div>
      <div className="flex pb-4 overflow-hidden">
        <div className="reduceAnime w-full"></div>
        <div className="reduceAnime_another border-b-2 border-text min-w-0 w-16 translate-x-[250%]"></div>
      </div>
      <div
        className="pt-4 font-bold text-xl rightMoveAnime translate-x-[-100%]"
        style={{ animationDelay: "600ms" }}
      >
        취업준비생
      </div>
      <NextButton nextRef={nextRef} delay="750ms" />
    </section>
  );
};

export const Section = ({
  reference,
}: {
  reference: RefObject<HTMLElement>;
}) => {
  return (
    <section
      className="overflow-hidden pt-[30px] h-screen flex flex-col"
      ref={reference}
    >
      <div className="rightMoveAnime grow flex items-end">
        <div>01/5 다음으로</div>
      </div>
    </section>
  );
};

export const NextButton = ({
  nextRef,
  delay,
}: {
  nextRef: RefObject<HTMLElement>;
  delay: string;
}) => {
  return (
    <div
      className="rightMoveAnime grow flex items-end translate-x-[-100%]"
      style={{ animationDelay: delay }}
    >
      <div
        className="flex cursor-pointer items-center"
        onClick={() => {
          if (nextRef.current)
            nextRef.current.scrollIntoView({
              block: "start",
              behavior: "smooth",
            });
        }}
      >
        <div className="whitespace-pre-wrap text-sm py-2">
          <span className="text-color20">01/05</span>
          <strong>{` 다음으로`}</strong>
        </div>
        <div className="w-20 h-20">
          <HeroArrow className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};
