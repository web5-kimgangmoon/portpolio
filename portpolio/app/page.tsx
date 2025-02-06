"use client";

import { useEffect, useId, useRef, useState } from "react";
import { TopBar } from "./ui/topBar";
import { RightMenu } from "./ui/rightMenu";
import clsx from "clsx";
import Image from "next/image";
import { motion } from "framer-motion";

import { selectIndex } from "./lib/selectIndex";
import {
  Experience_each,
  Section,
  SectionEmail,
  SectionTitle,
  Skill,
} from "./ui/sections";
import sectionCheck from "./lib/sectionCheck";
import { Paragraph } from "./ui/word";

export default function Page() {
  const sliderId = useId();
  const slider = useRef<HTMLDivElement>(null);

  const [innerHeight, setInnerHeight] = useState<number>(0);

  const [isMobile, setIsMoblie] = useState<boolean>();
  const [color, setColor] = useState<string>("yellow");
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [playAnimeNum, setPlayAnimeNum] = useState<number>(0);

  const section1 = useRef<HTMLElement>(null);
  const section2 = useRef<HTMLElement>(null);
  const section3 = useRef<HTMLElement>(null);
  const section4 = useRef<HTMLElement>(null);
  const section5 = useRef<HTMLElement>(null);
  const section6 = useRef<HTMLElement>(null);

  // const [isSend, setIsSend] = useState<boolean>(false);

  useEffect(() => {
    setIsMoblie(window.matchMedia("(any-pointer:coarse)").matches);
  }, []);
  useEffect(() => {
    let heightSum = 0;
    const refsNum: number[] = [];
    for (const item of [
      section1,
      section2,
      section3,
      section4,
      section5,
      section6,
    ]) {
      refsNum.push((item.current!.clientHeight / 1.5 + heightSum) as number);
      heightSum += item.current!.clientHeight;
    }
    const indexFunction = selectIndex(refsNum);
    if (window.innerWidth < 1280)
      setPlayAnimeNum(indexFunction(window.scrollY));
    // const handleThrottle = throttle(() => {
    //   setPlayAnimeNum(indexFunction(window.scrollY));
    // }, 300);
    // window.addEventListener("scroll", handleThrottle);
    window.addEventListener("scroll", () => {
      if (window.innerWidth < 1280)
        setPlayAnimeNum(indexFunction(window.scrollY));
    });
  }, [innerHeight]);
  useEffect(() => {
    if (isMobile !== undefined && !isMobile)
      window.addEventListener("resize", () => {
        if (window.innerWidth < 1280) {
          window.onwheel = null;
          sectionCheck(section1, playAnimeNum, 0);
          sectionCheck(section2, playAnimeNum, 1);
          sectionCheck(section3, playAnimeNum, 2);
          sectionCheck(section4, playAnimeNum, 3);
          sectionCheck(section5, playAnimeNum, 4);
          sectionCheck(section6, playAnimeNum, 5);
        } else
          window.onwheel = (e) => {
            if (!slider.current) return;
            if (slider.current.style.transform) {
              // const slideX = +slider.current.style.transform
              //   .split("translateX(")[1]
              //   .split("%)")[0];
              // const slideIDX = slideX / 100;
              // if (e.deltaY > 0 && slideIDX > -5) {
              // slider.current.style.transform = `translateX(${slideX - 100}%)`;
              // setPlayAnimeNum(-slideX / 100 + 1);
              if (e.deltaY > 0 && playAnimeNum < 5) {
                // slider.current.style.transform = `translateX(${
                //   -playAnimeNum * 100 - 100
                // }%)`;
                setPlayAnimeNum(playAnimeNum + 1);
              }
              // if (e.deltaY < 0 && slideIDX < 0) {
              // slider.current.style.transform = `translateX(${slideX + 100}%)`;

              // setPlayAnimeNum(-slideX / 100 - 1);
              if (e.deltaY < 0 && playAnimeNum > 0) {
                // slider.current.style.transform = `translateX(${
                //   -playAnimeNum * 100 + 100
                // }%)`;
                setPlayAnimeNum(playAnimeNum - 1);
              }
            }
          };
        if (window.innerHeight !== innerHeight)
          setInnerHeight(window.innerHeight);
      });
  }, [playAnimeNum, isMobile]);
  // 추가했습니다
  useEffect(() => {
    if (window.innerWidth < 1280) window.onwheel = null;
    else
      window.onwheel = (e) => {
        if (!slider.current) return;
        if (slider.current.style.transform) {
          // const slideX = +slider.current.style.transform
          //   .split("translateX(")[1]
          //   .split("%)")[0];
          // const slideIDX = slideX / 100;
          // if (e.deltaY > 0 && slideIDX > -5) {
          // slider.current.style.transform = `translateX(${slideX - 100}%)`;
          // setPlayAnimeNum(-slideX / 100 + 1);
          if (e.deltaY > 0 && playAnimeNum < 5) {
            // slider.current.style.transform = `translateX(${
            //   -playAnimeNum * 100 - 100
            // }%)`;
            setPlayAnimeNum(playAnimeNum + 1);
          }
          // if (e.deltaY < 0 && slideIDX < 0) {
          // slider.current.style.transform = `translateX(${slideX + 100}%)`;

          // setPlayAnimeNum(-slideX / 100 - 1);
          if (e.deltaY < 0 && playAnimeNum > 0) {
            // slider.current.style.transform = `translateX(${
            //   -playAnimeNum * 100 + 100
            // }%)`;
            setPlayAnimeNum(playAnimeNum - 1);
          }
        }
      };
  }, [slider.current, playAnimeNum]);
  useEffect(() => {
    if (slider.current) {
      // if (window.innerWidth < 1280) {
      // sectionCheck(section1, playAnimeNum, 0);
      // sectionCheck(section2, playAnimeNum, 1);
      // sectionCheck(section3, playAnimeNum, 2);
      // sectionCheck(section4, playAnimeNum, 3);
      // sectionCheck(section5, playAnimeNum, 4);
      // sectionCheck(section6, playAnimeNum, 5);
      // }
      if (!(window.innerWidth < 1280))
        slider.current.style.transform =
          slider.current.style.transform = `translateX(${
            -playAnimeNum * 100
          }%)`;
    }
  }, [playAnimeNum]);

  return (
    <div
      className={clsx(
        `body ${color} box-border px-2 select-none`,
        {
          "cursor-custom_dark": color === "black",
          "cursor-custom_dark_upX": color === "black" && playAnimeNum === 0,
          "cursor-custom_dark_downX": color === "black" && playAnimeNum === 5,
        },
        {
          "cursor-custom": color !== "black",
          "cursor-custom_upX": color !== "black" && playAnimeNum === 0,
          "cursor-custom_downX": color !== "black" && playAnimeNum === 5,
        }
      )}
    >
      <TopBar
        setColor={setColor}
        setIsNavOpen={() =>
          setIsNavOpen((value) => {
            return !value;
          })
        }
      />

      <div className={clsx("container flex flex-row-reverse")}>
        <RightMenu
          select={playAnimeNum}
          setSelect={setPlayAnimeNum}
          isNavOpen={isNavOpen}
          slider={slider}
          refs={[section1, section2, section3, section4, section5, section6]}
        />
        <div
          className={clsx(
            "relative overflow-hidden w-full xl:h-screen",
            "transition-transform duration-300",
            isNavOpen
              ? "translate-x-[-150%] xl:translate-x-0 ease-in"
              : "ease-out"
          )}
        >
          <div
            className={clsx(
              "w-full h-full",
              "xl:flex xl:absolute xl:top-0 xl:left-0",
              "sm:!translate-x-0 md:!translate-x-0",
              "transition-transform duration-300"
            )}
            id={sliderId}
            ref={slider}
          >
            <SectionTitle
              reference={section1}
              nextRef={section2}
              setIdx={() => setPlayAnimeNum(1)}
              // slider={slider}
              // nextIdx={1}
            />
            <Section
              reference={section2}
              nextRef={section3}
              isPlayAnime={playAnimeNum === 1}
              title="ABOUT ME"
              indexStr="02/06"
              setIdx={() => setPlayAnimeNum(2)}

              // slider={slider}
              // nextIdx={2}
            >
              <div className="text-xl xl:flex">
                <div className="grow xl:w-[50%]">
                  <div className="text-3xl rightMoveAnime translate-x-[-100%] font-bold">
                    저는
                  </div>
                  <div
                    className="text-3xl rightMoveAnime translate-x-[-100%] font-bold"
                    style={{ animationDelay: "300ms" }}
                  >
                    꿈을 향해 달려나가는 프론트 웹 개발을
                  </div>
                  <div
                    className="pb-4 text-3xl rightMoveAnime translate-x-[-100%] font-bold"
                    style={{ animationDelay: "600ms" }}
                  >
                    지향하는 개발자 지망생입니다!
                  </div>
                  <div
                    className="py-4 flex flex-col gap-8"
                    // style={{ animationDelay: "900ms" }}
                  >
                    <Paragraph
                      words={[
                        "국비교육을",
                        "수료하며",
                        "js와",
                        "typescript를",
                        "학습하고",
                        "프로젝트를",
                        "배포하기",
                        "위해",
                        "aws로",
                        "gitHub",
                        "action으로",
                        "CI/CD",
                        "환경을",
                        "구축해봤습니다.",
                      ]}
                    />
                    <Paragraph
                      words={[
                        "react의",
                        "생명주기와",
                        "컴포넌트에",
                        "대해",
                        "학습하여",
                        "다양한",
                        "훅을",
                        "이용한",
                        "코딩을",
                        "배웠습니다.",
                      ]}
                    />
                    <Paragraph
                      words={[
                        "https",
                        "프로토콜로",
                        "aws에서",
                        "배포하기",
                        "위해",
                        "인증받는",
                        "법을",
                        "배웠으며,",
                        "figma를",
                        "통한",
                        "웹설계와",
                        "디자인을",
                        "할",
                        "수",
                        "있습니다.",
                      ]}
                    />
                    {/* <ul className="list-disc pl-6">
                      <li className="py-2">
                        국비 교육을 수료하며 js와 typescript을 학습하고
                        프로젝트를 배포하기 위해 aws로 gitHub action으로 CI/CD
                        환경을 구축해봤습니다.
                      </li>
                      <li className="py-2">
                        react의 생명주기와 컴포넌트에 대해 학습하여 다양한 훅을
                        이용한 코딩을 배웠습니다.
                      </li>
                      <li className="py-2">
                        https 프로토콜로 aws에서 배포하기 위해 인증받는 법을
                        배웠으며, figma를 통한 웹설계와 디자인을 할 수 있습니다.
                      </li>
                    </ul> */}
                  </div>
                </div>
                <div className="overflow-hidden grow xl:w-[50%] xl:pl-4">
                  <div className="py-4">
                    <div
                      className="text-3xl pb-8 font-bold leftMoveAnime translate-x-[100%] text-end"
                      style={{ animationDelay: "1050ms" }}
                    >
                      EXPERIENCE STACKS
                    </div>
                    <div className="flex flex-col gap-2">
                      <div
                        className={clsx(
                          "flex flex-wrap gap-2  xl:justify-end justify-center"
                        )}
                      >
                        <StackImg
                          src="stacks/aws.png"
                          isStarting={playAnimeNum === 1}
                        />
                        <StackImg
                          src="stacks/github.png"
                          isStarting={playAnimeNum === 1}
                        />
                        <StackImg
                          src="stacks/js.png"
                          isStarting={playAnimeNum === 1}
                        />
                        <StackImg
                          src="stacks/mysql.png"
                          isStarting={playAnimeNum === 1}
                        />
                        <StackImg
                          src="stacks/nodejs.png"
                          isStarting={playAnimeNum === 1}
                        />
                      </div>
                      <div
                        className={clsx(
                          "flex flex-wrap gap-2 xl:justify-end justify-center"
                          // "leftMoveAnime translate-x-full"
                        )}
                        // style={{ animationDelay: "1350ms" }}
                      >
                        <StackImg
                          src="stacks/npm.png"
                          isStarting={playAnimeNum === 1}
                        />
                        <StackImg
                          src="stacks/reactjs.png"
                          isStarting={playAnimeNum === 1}
                        />
                        <StackImg
                          src="stacks/tailwindcss.png"
                          isStarting={playAnimeNum === 1}
                        />
                        <StackImg
                          src="stacks/typescript.png"
                          isStarting={playAnimeNum === 1}
                        />
                        <StackImg
                          src="stacks/vscode.png"
                          isStarting={playAnimeNum === 1}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Section>
            <Section
              reference={section3}
              nextRef={section4}
              isPlayAnime={playAnimeNum === 2}
              title="EXPERIENCE"
              indexStr="03/06"
              setIdx={() => setPlayAnimeNum(3)}

              // slider={slider}
              // nextIdx={3}
            >
              <div className="flex">
                <div
                  className={clsx(
                    "text-xl lineDownComp relative mx-2 overflow-x-hidden"
                  )}
                >
                  <div className="top-0 left-0 h-0 absolute lineDownCompBase flex flex-col justify-end items-center">
                    <div className="w-[2px] h-full bg-color20"></div>
                    <div className="w-[3px] h-[3px] bg-text"></div>
                  </div>
                  <Experience_each
                    title="웹배포"
                    content="aws-ec2, 클라우드 호스팅 서비스를 활용하여 ubuntu 운영체제 상에 nginx로 페이지를 배포해봤습니다."
                  />
                  <Experience_each
                    title="figma"
                    content="피그마로 코딩할 페이지를 유동적으로 재구성가능한 요소들로 설계해봤습니다."
                  />
                  <Experience_each
                    title="gitHub actions"
                    content="학원에서 배운 gitHub actions를 통해 github에 커밋될 때마다 자동적으로 배포되도록 설정해봤습니다."
                  />
                </div>
                <div
                  className={clsx(
                    "text-xl lineDownComp relative mx-2 overflow-x-hidden flex flex-col justify-center"
                  )}
                >
                  <div className="top-0 left-0 h-0 absolute lineDownCompBase flex flex-col justify-end items-center">
                    <div className="w-[2px] h-full bg-color20"></div>
                    <div className="w-[3px] h-[3px] bg-text"></div>
                  </div>
                  <Experience_each
                    title="회의록 작성"
                    content="첫번째 프로젝트에서 팀장을 맡아 매일 아침 회의록을 작성해본 적이 있습니다."
                  />
                  <Experience_each
                    title="클론코딩"
                    content="실제로 존재하는 웹페이지를 클론코딩 해봄으로써 익숙치않은 css를 활용해본 적 있습니다."
                  />
                </div>
              </div>
            </Section>
            <Section
              reference={section4}
              nextRef={section5}
              isPlayAnime={playAnimeNum === 3}
              title="SKILLS"
              indexStr="04/06"
              setIdx={() => setPlayAnimeNum(4)}

              // slider={slider}
              // nextIdx={4}
            >
              <div className="text-xl rightMoveAnime flex flex-wrap">
                <Skill
                  title="REACT"
                  description="useMemo, useCallback, useState, useContext로 커스텀 훅을 코딩해보고, useEffect를 활용해 componentDidMount와 componenetDidUpdate 주기에 따라 리렌더링 시켜봤습니다."
                />
                <Skill
                  title="TAILWIND"
                  description="tailwind의 document에서 검색해보며 커스텀 클래스를 만들어보고 오직 tailwind 클래스만으로 css를 구성해봤습니다."
                />
                <Skill
                  title="CLSX"
                  description="clsx 라이브러리로 요소들의 클래스들을 객체와 논리연산자를 활용하여 자유롭게 제어할 수 있습니다"
                />
                <Skill
                  title="TS"
                  description="복합타입을 사용하여 타입을 자유롭게 지정하고 값들을 활용할 수 있습니다."
                />
              </div>
            </Section>
            <Section
              reference={section5}
              nextRef={section6}
              isPlayAnime={playAnimeNum === 4}
              title="PROJECT"
              indexStr="05/06"
              setIdx={() => setPlayAnimeNum(5)}
              // slider={slider}
              // nextIdx={5}
            >
              <div className="rightMoveAnime flex gap-20 flex-wrap">
                <ProjectInstance
                  projectImg="project.png"
                  projectName="person"
                  projectPath="https://personalproject1.clashcrash.com"
                  gitPath="https://github.com/web5-kimgangmoon/nextJS_PersonalProject"
                  isBack={true}
                />
                <ProjectInstance
                  projectImg="team1.png"
                  projectName="team1"
                  projectPath="https://teamproject1.clashcrash.com"
                  gitPath="https://github.com/web5-kimgangmoon/team_wansungmun"
                />
                <ProjectInstance
                  projectImg="team2.png"
                  projectName="team2"
                  projectPath="https://teamproject2.clashcrash.com"
                  gitPath="https://github.com/web5-kimgangmoon/teamproject_cloneCoding-Kim-Lee-Son-"
                />
              </div>
            </Section>
            <SectionEmail
              reference={section6}
              playAnimeNum={playAnimeNum}
              // slider={slider}
            />
            {/* <Section
              reference={section6}
              isPlayAnime={playAnimeNum === 5}
              title="CONTACT"
              indexStr="06/06"
            >
              <div className="rightMoveAnime">
                <div>
                  <div className="pb-16 font-bold text-3xl">
                    LEAVE A MESSAGE
                  </div>
                  <div className="flex gap-8 xl:pr-40 md:pr-20 pb-10">
                    <InputBox title="NAME" placeholder="Your name" id="name" />
                    <InputBox title="E-MAIL" placeholder="@" id="email" />
                  </div>
                  <div className="xl:pr-40 md:pr-20">
                    <InputBox
                      title="MESSAGE"
                      placeholder="Your message"
                      id="message"
                      rows={6}
                    />
                  </div>
                  <div className="pt-12">
                    <button className="px-8 py-2 border-2 border-text ">
                      send
                    </button>
                  </div>
                </div>
              </div>
            </Section> */}
          </div>
        </div>
      </div>
    </div>
  );
}

const StackImg = ({
  src,
  isStarting,
}: {
  src: string;
  isStarting: boolean;
}) => {
  return (
    <div className="w-[80px] border-text relative text-text">
      <svg
        viewBox="0 0 40 40"
        strokeWidth="2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ pathLength: 0, fillOpacity: 0 }}
          animate={isStarting && { pathLength: 1, fillOpacity: 1 }}
          transition={{
            pathLength: { ease: "easeInOut", duration: 0.7, delay: 0.3 },
            fillOpacity: { ease: "easeInOut", duration: 0.3, delay: 1 },
          }}
          d="M1 4 C 1 4, 1 1, 4 1 H35 C 35 1, 39, 1, 39 4 V35 C 39 35, 39 39, 35, 39H 5 C 5 39, 1 39, 1, 35 Z"
          fill="white"
          stroke="currentColor"
        ></motion.path>
      </svg>
      <motion.img
        src={src}
        alt="no image"
        width={40}
        height={40}
        initial={{ opacity: 0 }}
        animate={isStarting && { opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute left-[calc(50%-20px)] top-[calc(50%-20px)]"
      />
    </div>
  );
};

const ProjectInstance = ({
  projectImg,
  projectName,
  projectPath,
  gitPath,
  isBack,
}: {
  projectImg: string;
  projectName: string;
  projectPath: string;
  gitPath: string;
  isBack?: boolean;
}) => {
  return (
    <div className="max-w-max opacity_hover group">
      <div className="">
        <div className="w-32 h-64">
          <Image
            src={projectImg}
            alt="no image"
            width={120}
            height={120}
            className="w-full h-full  opacity-50 transition-opacity target group-hover:translate-y-[-10px] transition-transform"
          />
        </div>
        <div className="text-3xl font-bold">{projectName}</div>
        <div className="text-xl text-color50">
          <button
            className="hover:text-text hover:font-bold hover:underline"
            onClick={() => {
              window.open(projectPath, projectName, "fullscreen=yes");
            }}
          >
            링크
          </button>
        </div>

        <div className="text-xl text-color50">
          <button
            className="hover:text-text hover:font-bold hover:underline"
            onClick={() => {
              window.open(gitPath, `${projectName}_gitPage`, "fullscreen=yes");
            }}
          >
            git
          </button>
        </div>
        <div className="py-6 text-sm flex gap-2">
          FRONTEND
          {isBack && (
            <div className="w-3 pt-[0.625rem] before:border-t before:border-text before:w-full before:block"></div>
          )}
          {isBack && "BACKEND"}
        </div>
      </div>
    </div>
  );
};

// const StackImg = ({ src }: { src: string }) => {
//   return (
//     <div className="w-[80px] border-text relative text-text">
//       <svg
//         viewBox="0 0 40 40"
//         strokeWidth="2"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M1 4 C 1 4, 1 1, 4 1 H35 C 35 1, 39, 1, 39 4 V35 C 39 35, 39 39, 35, 39H 5 C 5 39, 1 39, 1, 35 Z"
//           fill="white"
//           stroke="currentColor"
//         ></path>
//       </svg>
//       <Image
//         src={src}
//         alt="no image"
//         width={40}
//         height={40}
//         className="absolute left-[calc(50%-20px)] top-[calc(50%-20px)]"
//       />
//     </div>
//   );
// };
