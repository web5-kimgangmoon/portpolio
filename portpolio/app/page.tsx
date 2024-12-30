"use client";

import { useEffect, useRef, useState } from "react";
import { TopBar } from "./ui/topBar";
import { RightMenu } from "./ui/rightMenu";
import clsx from "clsx";
import Image from "next/image";

import { selectIndex } from "./lib/selectIndex";
import { throttle } from "@/app/lib/throttle";
import { Experience_each, Section, SectionTitle, Skill } from "./ui/sections";

export default function Page() {
  const [innerHeight, setInnerHeight] = useState<number>(0);

  const [color, setColor] = useState<string>("yellow");
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [playAnimeNum, setPlayAnimeNum] = useState<number>(0);

  const section1 = useRef<HTMLElement>(null);
  const section2 = useRef<HTMLElement>(null);
  const section3 = useRef<HTMLElement>(null);
  const section4 = useRef<HTMLElement>(null);
  const section5 = useRef<HTMLElement>(null);
  // const section6 = useRef<HTMLElement>(null);

  // const [isSend, setIsSend] = useState<boolean>(false);

  useEffect(() => {
    let heightSum = 0;
    const refsNum: number[] = [];
    for (const item of [
      section1,
      section2,
      section3,
      section4,
      section5,
      // section6,
    ]) {
      refsNum.push((item.current!.clientHeight / 1.5 + heightSum) as number);
      heightSum += item.current!.clientHeight;
    }
    const indexFunction = selectIndex(refsNum);
    setPlayAnimeNum(indexFunction(window.scrollY));
    const handleThrottle = throttle(() => {
      setPlayAnimeNum(indexFunction(window.scrollY));
    }, 300);
    window.addEventListener("scroll", handleThrottle);
    window.addEventListener("resize", () => {
      if (window.innerHeight !== innerHeight)
        setInnerHeight(window.innerHeight);
    });
  }, [innerHeight]);

  return (
    <div className={`body ${color} box-border px-2`}>
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
              isNavOpen && "translate-x-[-30rem] xl:translate-x-0"
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
              <div className="text-xl">
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
                  className="rightMoveAnime translate-x-[-100%]"
                  style={{ animationDelay: "900ms" }}
                >
                  국비 교육을 수료하며 js와 typescript, mysql을 학습해보고
                  프로젝트를 배포하기 위해 aws EC2에서 개인키를 받아와 git
                  action으로 CI/CD 환경을 구축해봤습니다. 더나아가 react의
                  생명주기와 컴포넌트에 대해 학습하여 렌더링을 줄이는 코딩법을
                  배웠습니다. 또한 https 프로토콜로 aws에서 배포하는 법을
                  배웠으며, 서버에서 활용하는 mysql과 nginx, nodejs를 설치 및
                  초기설정을 배웠습니다.
                </div>
                <div className="py-4">
                  <div
                    className="pb-2 font-bold rightMoveAnime translate-x-[-100%]"
                    style={{ animationDelay: "1050ms" }}
                  >
                    EXPERIENCE STACKS
                  </div>
                  <div className="flex flex-col gap-2">
                    <div
                      className="flex flex-wrap gap-2 rightMoveAnime translate-x-[-100%]"
                      style={{ animationDelay: "1200ms" }}
                    >
                      <StackImg src="/stacks/aws.png" />
                      <StackImg src="/stacks/github.png" />
                      <StackImg src="/stacks/js.png" />
                      <StackImg src="/stacks/mysql.png" />
                      <StackImg src="/stacks/nodejs.png" />
                    </div>
                    <div
                      className="flex flex-wrap gap-2 rightMoveAnime translate-x-[-100%]"
                      style={{ animationDelay: "1350ms" }}
                    >
                      <StackImg src="/stacks/npm.png" />
                      <StackImg src="/stacks/reactjs.png" />
                      <StackImg src="/stacks/tailwindcss.png" />
                      <StackImg src="/stacks/typescript.png" />
                      <StackImg src="/stacks/vscode.png" />
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
              indexStr="04/05"
            >
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
                  title="github"
                  content="팀프로젝트로 github의 형상관리를 통해 팀원들과 협업과 분업을 경험했습니다."
                />
                <Experience_each
                  title="figma"
                  content="피그마로 코딩할 페이지를 유동적으로 재구성가능한 요소들로 설계해봤습니다."
                />
                <Experience_each
                  title="git actions"
                  content="학원에서 배운 git actions를 통해 github에 커밋될 때마다 자동적으로 배포되도록 설정해봤습니다."
                />
              </div>
            </Section>
            <Section
              reference={section4}
              nextRef={section5}
              isPlayAnime={playAnimeNum === 3}
              title="SKILLS"
              indexStr="03/05"
            >
              <div className="text-xl rightMoveAnime flex flex-wrap">
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
                  description="프로젝트를 진행하면서 테이블들을 설계해보고, 최소한의 테이블로 최대한 많은 정보를 저장할 방법을 찾아보고 일대다 다대다 등 다양한 관계를 맺어봤습니다."
                />
              </div>
            </Section>
            <Section
              reference={section5}
              // nextRef={section6}
              isPlayAnime={playAnimeNum === 4}
              title="PROJECT"
              indexStr="05/05"
            >
              <div className="rightMoveAnime">
                <div className="max-w-max opacity_hover group">
                  <div className="group-hover:translate-y-[-10%] transition-transform">
                    <div className="w-32 h-64">
                      <Image
                        src={"/project.png"}
                        alt="no image"
                        width={120}
                        height={120}
                        className="w-full h-full  opacity-50 transition-opacity target"
                      />
                    </div>
                    <div className="text-3xl font-bold">The board</div>
                    <div className="text-xl text-color50">
                      <button
                        className="hover:text-text hover:font-bold hover:underline"
                        onClick={() => {
                          window.open(
                            "https://deploy.clashcrash.com",
                            "project",
                            "fullscreen=yes"
                          );
                        }}
                      >
                        게시판
                      </button>
                    </div>

                    <div className="text-xl text-color50">
                      <button
                        className="hover:text-text hover:font-bold hover:underline"
                        onClick={() => {
                          window.open(
                            "https://github.com/web5-kimgangmoon/nextJS_PersonalProject",
                            "gitPage",
                            "fullscreen=yes"
                          );
                        }}
                      >
                        git
                      </button>
                    </div>
                    <div className="py-6 text-sm flex gap-2">
                      FRONTED
                      <div className="w-3 pt-[0.625rem] before:border-t before:border-text before:w-full before:block"></div>
                      BACKEND
                    </div>
                  </div>
                </div>
              </div>
            </Section>
            {/* <Section
              reference={section6}
              isPlayAnime={playAnimeNum === 5}
              title="CONTACT"
              indexStr="06/05"
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

const StackImg = ({ src }: { src: string }) => {
  return (
    <div className="bg-white p-2 w-max rounded border-text border-2">
      <Image src={src} alt="no image" width={40} height={40} />
    </div>
  );
};
