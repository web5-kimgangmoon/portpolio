"use client";

import { HeroArrow } from "@/public/heroArrow";
import clsx from "clsx";
import Image from "next/image";
import { ReactNode, RefObject, useEffect } from "react";

export const SectionTitle = ({
  reference,
  nextRef,
}: {
  reference: RefObject<HTMLElement>;
  nextRef: RefObject<HTMLElement>;
}) => {
  return (
    <section
      className="overflow-hidden pt-[30px] min-h-screen flex flex-col justify-between"
      ref={reference}
    >
      <div>
        <div
          className="pt-12 py-8 rightMoveAnime translate-x-[-100%]"
          style={{ animationDelay: "300ms" }}
        >
          <div className="w-40 h-40">
            <Image
              src={"/face.png"}
              width={"120"}
              height={"120"}
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
          <div
            className="reduceAnime w-full"
            style={{ animationDelay: "1300ms" }}
          ></div>
          <div className="reduceAnime_another border-b-2 border-text min-w-0 w-16 translate-x-[250%]"></div>
        </div>
        <div
          className="pt-4 font-bold text-xl rightMoveAnime translate-x-[-100%]"
          style={{ animationDelay: "600ms" }}
        >
          웹 프론트개발 지향
        </div>
      </div>
      <NextButton nextRef={nextRef} delay="750ms" indexStr="01/06" />
    </section>
  );
};

export const Section = ({
  reference,
  nextRef,
  isPlayAnime,
  indexStr,
  children,
  title,
}: {
  reference: RefObject<HTMLElement>;
  nextRef?: RefObject<HTMLElement>;
  isPlayAnime: boolean;
  indexStr: string;
  children: ReactNode;
  title: string;
}) => {
  useEffect(() => {
    if (isPlayAnime) {
      reference.current?.classList.remove("parent");
    }
  }, [isPlayAnime]);
  return (
    <section
      className="overflow-hidden pt-[30px] min-h-screen flex flex-col justify-between parent"
      ref={reference}
    >
      <div>
        <div className="relative w-full pb-12">
          <div className="absolute top-0 left-0 w-full border-b-[1rem] border-color75 py-5 reduceAnime"></div>
          <h1 className="text-[4rem] font-bold">{title}</h1>
        </div>
        {children}
      </div>

      <NextButton nextRef={nextRef} delay="300ms" indexStr={indexStr} />
    </section>
  );
};

export const Skill = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="max-w-[100%] xl:max-w-[50%] overflow-hidden">
      <div className="pr-10">
        <div className="pb-6 text-2xl font-bold">{title}</div>
        <div
          className={clsx(
            "strechAnime border-t-2 border-color20 pt-6 relative w-0 translate-x-[-100%] w-full",
            "strechAnimeB before:border-t-2 before:border-text before:pt-6 before:absolute before:top-[-2px] before:left-0 before:block before:translate-x-[-100%] before:w-full"
          )}
        ></div>
        <div
          className="pb-8 text-xl rightMoveAnime translate-x-[-100%]"
          style={{ animationDelay: "1600ms" }}
        >
          {description}
        </div>
      </div>
    </div>
  );
};
export const Experience_each = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <div className="pb-20">
      <div
        className={clsx(
          "px-4 py-2 translate-x-[-100%] relative lineDownComp rightMoveAnime",
          "before:border-l-2 before:border-text before:absolute before:top-0 before:left-[0.5px] before:w-[2px] before:h-0"
        )}
        style={{ animationDelay: "500ms" }}
      >
        <div className="text-2xl font-bold pb-1">{title}</div>
        <div className="text-sm">{content}</div>
      </div>
    </div>
  );
};

export const InputBox = ({
  title,
  placeholder,
  id,
  rows,
}: {
  title: string;
  placeholder: string;
  id: string;
  rows?: number;
}) => {
  return (
    <div className="grow">
      <div>
        <label htmlFor="name" className="font-bold">
          {title}
        </label>
      </div>
      <div>
        {!rows ? (
          <input
            id={id}
            className="outline-none bg-background py-2 border-b-2 border-text w-full"
            placeholder={placeholder}
          />
        ) : (
          <textarea
            id={id}
            className="outline-none bg-background py-2 border-b-2 border-text w-full"
            placeholder={placeholder}
            rows={rows}
          />
        )}
      </div>
    </div>
  );
};

export const NextButton = ({
  nextRef,
  delay,
  indexStr,
}: {
  nextRef?: RefObject<HTMLElement>;
  delay: string;
  indexStr: string;
}) => {
  return (
    <div className="py-10">
      <div
        className={clsx(
          "flex items-end bounceIcon rightMoveAnime flex items-end translate-x-[-100%]",
          nextRef && "cursor-pointer"
        )}
        style={{ animationDelay: delay }}
        onClick={
          nextRef
            ? () => {
                if (nextRef.current)
                  nextRef.current.scrollIntoView({
                    block: "start",
                    behavior: "smooth",
                  });
              }
            : undefined
        }
      >
        <div className="whitespace-pre-wrap text-sm py-2">
          <span className="text-color20 pr-3">{indexStr}</span>
          {nextRef && <strong>{`다음으로`}</strong>}
        </div>
        {nextRef && (
          <div className="h-6 pb-2 target">
            <HeroArrow className="h-full" />
          </div>
        )}
      </div>
    </div>
  );
};
