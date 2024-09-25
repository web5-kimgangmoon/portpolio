"use client";

import { ReactNode, RefObject, useEffect, useRef, useState } from "react";
import { TopBar } from "./ui/topBar";
import { RightMenu } from "./ui/rightMenu";
import clsx from "clsx";
import Image from "next/image";
import { ArrowTurnRightDownIcon } from "@heroicons/react/24/outline";
import { HeroArrow } from "@/public/heroArrow";
import { selectIndex } from "./lib/selectIndex";
import { throttle } from "@/app/lib/throttle";
import Link from "next/link";

export default function Home() {
  const [color, setColor] = useState<string>("yellow");
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [playAnimeNum, setPlayAnimeNum] = useState<number>(0);

  const section1 = useRef<HTMLElement>(null);
  const section2 = useRef<HTMLElement>(null);
  const section3 = useRef<HTMLElement>(null);
  const section4 = useRef<HTMLElement>(null);
  const section5 = useRef<HTMLElement>(null);

  useEffect(() => {
    let heightSum = 0;
    const refsNum: number[] = [];
    for (let item of [section1, section2, section3, section4, section5]) {
      refsNum.push((item.current!.clientHeight / 1.5 + heightSum) as number);
      heightSum += item.current!.clientHeight;
    }
    setPlayAnimeNum(selectIndex(window.scrollY, refsNum));
    const handleThrottle = throttle(() => {
      setPlayAnimeNum(selectIndex(window.scrollY, refsNum));
    }, 300);
    window.addEventListener("scroll", handleThrottle);
  }, []);

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
            <Section
              reference={section2}
              nextRef={section3}
              isPlayAnime={playAnimeNum === 1}
              title="ABOUT ME"
              indexStr="02/05"
            >
              <div className="text-xl rightMoveAnime">
                국비 교육을 수료하며 js와 typescript, mysql을 학습해보고
                프로젝트를 배포하기 위해 aws EC2에서 개인키를 받아와 git
                action으로 CI/CD 환경을 구축해봤습니다. 더나아가 react의
                생명주기와 컴포넌트에 대해 학습하여 렌더링을 줄이는 코딩법을
                배웠습니다.
              </div>
            </Section>
            <Section
              reference={section3}
              nextRef={section4}
              isPlayAnime={playAnimeNum === 2}
              title="SKILLS"
              indexStr="03/05"
            >
              <div className="text-xl rightMoveAnime flex flex-wrap">
                <Skill
                  title="figma"
                  description="실제 html 구조처럼 프레임을 활용해 레이아웃을 구성해봤습니다."
                />
                <Skill
                  title="react"
                  description="useMemo, useCallback, useState, useContext로 커스텀 훅을 코딩해보고, useEffect를 활용해 componentDidMount와 componenetDidUpdate 주기에 따라 리렌더링 시켜봤습니다."
                />
                <Skill
                  title="tailwind"
                  description="tailwind의 document에서 검색해보며 커스텀 클래스를 만들어보고 오직 tailwind 클래스만으로 css를 구성해봤습니다."
                />
                <Skill
                  title="npm"
                  description="express, react, typescript, sequelize 등 다양한 라이브러리와 프레임워크를 설치하고 기능들을 활용해봤습니다."
                />
                <Skill
                  title="mysql"
                  description="mysql_installation_secure로 초기설정을 해보고, create user “username”@”localhost” identified with mysql_native_password by “password”;로 유저를 만들고 create database db;로 데이터베이스를 만들어 grant all privileges on db.* to username;으로 권한을 부여해봤습니다."
                />
              </div>
            </Section>
            <Section
              reference={section4}
              nextRef={section5}
              isPlayAnime={playAnimeNum === 3}
              title="EXPERIENCE"
              indexStr="04/05"
            >
              <div className="text-xl rightMoveAnime flex flex-wrap"></div>
            </Section>
            <Section
              reference={section5}
              isPlayAnime={playAnimeNum === 4}
              title="PROJECT"
              indexStr="05/05"
            >
              <div className="rightMoveAnime">
                <div className="hover:translate-y-[-10%] transition-transform max-w-max">
                  <div className="w-32 h-64">
                    <Image
                      src={"/project.png"}
                      alt="no image"
                      width={120}
                      height={120}
                      className="w-full h-full hover:opacity-100 opacity-50 transition-opacity"
                    />
                  </div>
                  <div className="text-3xl font-bold">The board</div>
                  <div className="text-xl text-color50">
                    <Link href={"https://deploy.clashcrash.com"}>게시판</Link>
                  </div>
                  <div className="text-xl text-color50">
                    <Link
                      href={
                        "https://github.com/web5-kimgangmoon/nextJS_PersonalProject"
                      }
                    >
                      git
                    </Link>
                  </div>
                  <div className="py-6 text-sm flex gap-2">
                    FRONTED
                    <div className="w-3 pt-[0.625rem] before:border-t before:border-text before:w-full before:block"></div>
                    BACKEND
                  </div>
                </div>
              </div>
            </Section>
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
          취업준비생
        </div>
      </div>
      <NextButton nextRef={nextRef} delay="750ms" indexStr="01/05" />
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
      <div className="">
        <div className="relative w-full pb-20">
          <div className="absolute top-0 left-0 w-full border-b-[1rem] border-color75 py-5 reduceAnime"></div>
          <h1 className="text-[4rem] font-bold">{title}</h1>
        </div>
        {children}
      </div>
      {nextRef && (
        <NextButton nextRef={nextRef} delay="300ms" indexStr={indexStr} />
      )}
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

export const NextButton = ({
  nextRef,
  delay,
  indexStr,
}: {
  nextRef: RefObject<HTMLElement>;
  delay: string;
  indexStr: string;
}) => {
  return (
    <div className="py-10">
      <div
        className="flex cursor-pointer items-end bounceIcon rightMoveAnime flex items-end translate-x-[-100%]"
        style={{ animationDelay: delay }}
        onClick={() => {
          if (nextRef.current)
            nextRef.current.scrollIntoView({
              block: "start",
              behavior: "smooth",
            });
        }}
      >
        <div className="whitespace-pre-wrap text-sm py-2">
          <span className="text-color20 pr-3">{indexStr}</span>
          <strong>{`다음으로`}</strong>
        </div>
        <div className="h-6 pb-2 target">
          <HeroArrow className="h-full" />
        </div>
      </div>
    </div>
  );
};
