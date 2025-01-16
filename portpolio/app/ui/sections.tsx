"use client";

import { HeroArrow } from "@/public/heroArrow";
import clsx from "clsx";
import Image from "next/image";
import { ReactNode, RefObject, useCallback, useEffect, useState } from "react";
import z from "zod";
import { MyName } from "../../public/myName";

export const SectionTitle = ({
  reference,
  nextRef,
  setIdx,
}: // slider,
// nextIdx,
{
  reference: RefObject<HTMLElement>;
  nextRef: RefObject<HTMLElement>;
  // slider: RefObject<HTMLElement | null>;
  // nextIdx: number;
  setIdx: () => void;
}) => {
  const [isFocusName, setIsFocusName] = useState(false);
  return (
    <section
      className={clsx(
        "w-full shrink-0",
        "overflow-hidden pt-[30px] min-h-screen flex flex-col justify-between"
      )}
      ref={reference}
    >
      <div className="xl:flex">
        <div className="xl:w-[50%]">
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
                  className="w-full h-full rounded-[2rem]"
                />
              </div>
            </div>
            <div
              className={clsx(
                "sm:text-[3rem] sm:pl-3 text-[6rem] font-bold cursor-pointer",
                "rightMoveAnime custom translate-x-[-100%]"
              )}
              style={{ animationDelay: "450ms" }}
              onClick={() => setIsFocusName(!isFocusName)}
            >
              <div className="pl-2 xl:w-[27.5rem] md:w-[27.5rem] sm:w-[14rem]">
                <MyName isFocus={isFocusName} />
              </div>
              <h1 className={`${isFocusName ? "hidden" : "inline"}`}>김강문</h1>
            </div>
            <div className="flex pb-4 w-full">
              {/* <div
                className="reduceAnime w-full"
                style={{ animationDelay: "1300ms" }}
              ></div>
              <div className="reduceAnime_another border-b-2 border-text min-w-0 w-16 translate-x-[250%]"></div> */}
              <div
                className={clsx(
                  "before:border-b-2 before:border-text before:min-w-0 before:w-16 before:content-[''] before:block before:translate-x-[-100%] titleLineAnimeBefore",
                  "translate-x-[200%] w-full titleLineAnime"
                )}
              ></div>
            </div>
            <div
              className="pt-4 pb-12 font-bold text-xl rightMoveAnime translate-x-[-100%]"
              style={{ animationDelay: "500ms" }}
            >
              웹 프론트개발 지향
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Tags
              tags={[
                ["프론트", "text-[1.5rem] sm:text-[1rem]", true],
                ["웹개발", "text-[1.5rem] sm:text-[1rem]", true],
              ]}
              delay={450}
            />
            <Tags
              tags={[
                ["NODEJS", "text-[1.5rem] sm:text-[1rem]", true],
                ["JS", "text-[1.25rem] sm:text-[0.75rem]", true],
                ["HTML", "text-[1.25rem] sm:text-[0.75rem]", true],
              ]}
              delay={550}
            />
            <Tags
              tags={[
                ["REACT", "text-[1.5rem] sm:text-[1rem]", true],
                ["TS", "text-[1.25rem] sm:text-[0.75rem]", false],
                ["AWS", "text-[1rem] sm:text-[0.6rem]", false],
                ["ES8", "text-[1rem] sm:text-[0.6rem]", false],
              ]}
              delay={650}
            />
          </div>
        </div>
        <div
          className={clsx(
            "xl:w-[50%] pt-12 flex flex-col justify-between pr-12 items-center",
            "sm:pr-0 md:pr-0",
            "leftMoveAnime translate-x-full"
          )}
          style={{ animationDelay: "600ms" }}
        >
          <div className="overflow-hidden">
            <h1
              className="sm:pb-5 md:pb-5 translate-y-[-100%] downMoveAnime flex items-end"
              style={{ animationDelay: "900ms" }}
            >
              <strong className="text-3xl inline-block">
                EXPERIENCE TIMES
              </strong>
              <div className="overflow-hidden">
                <i
                  className="rightMoreMoveAnime inline-block translate-x-[-150%]"
                  style={{ animationDelay: "1350ms" }}
                >
                  (MONTHS)
                </i>
              </div>
            </h1>
          </div>
          <div className="sm:w-full md:w-[75%] xl:w-full">
            <div className="flex gap-8 px-8 sm:px-4 items-end border-b-2 border-text w-full justify-between">
              <Graph_bar delay={900} bg={0} height={9}>
                JS
              </Graph_bar>
              <Graph_bar delay={1050} bg={1} height={9}>
                CSS
              </Graph_bar>
              <Graph_bar delay={1200} bg={2} height={2}>
                REACT
              </Graph_bar>
              <Graph_bar delay={1350} bg={3} height={2}>
                TS
              </Graph_bar>
            </div>
            <div className="pb-6 w-full"></div>
          </div>
        </div>
      </div>
      <NextButton
        nextRef={nextRef}
        delay="750ms"
        indexStr="01/06"
        setIdx={setIdx}
        // slider={slider}
        // moveIdx={nextIdx}
      />
    </section>
  );
};

export const Graph_bar = ({
  delay,
  children,
  bg,
  height,
}: {
  delay: number;
  children: string;
  bg: number;
  height: number;
}) => {
  return (
    <div className="relative grow max-w-16">
      <div className="overflow-hidden w-full">
        <div
          className={clsx(
            {
              "bg-color75": bg === 0,
              "bg-color60": bg === 1,
              "bg-color50": bg === 2,
              "bg-color20": bg === 3,
            },
            "upMoveAnime translate-y-[-100%]"
          )}
          style={{
            height: `${2.25 * height}rem`,
            animationDelay: `${delay}ms`,
          }}
        ></div>
      </div>
      <div
        className={clsx(
          "absolute bottom-[-1.5rem] left-0 w-full overflow-hidden"
        )}
      >
        <div
          className="text-center downMoveAnime translate-y-full flex items-end justify-center"
          style={{ animationDelay: `${delay}ms` }}
        >
          <strong className="text-sm sm:text-xs">{children}</strong>
          <div className="inline-block overflow-hidden">
            <i
              className="text-xs sm:text-[0.5rem] sm:leading-3 rightMoreMoveAnime translate-x-[-150%] block pr-1"
              // style={{ animationDelay: `${delay + 300}ms` }}
              style={{ animationDelay: `1350ms` }}
            >
              ({height})
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Tags = ({
  tags,
  delay,
}: {
  tags: [string, string, boolean][];
  delay: number;
}) => {
  return (
    <div
      className="text-background text-lg rightMoveAnime translate-x-[-100%] text-color60 flex gap-2 items-center"
      style={{ animationDelay: `${delay}ms` }}
    >
      {tags.map((content, idx) => {
        return (
          <Tag key={idx} className={content[1]} isBold={content[2]}>
            {content[0]}
          </Tag>
        );
      })}
    </div>
  );
};

export const Tag = ({
  children,
  className,
  isBold,
}: {
  children: string;
  className: string;
  isBold: boolean;
}) => {
  return (
    <span
      // className="hover:text-text hover:text-3xl hover:font-bold delay-75 transition-all"
      className={`text-text ${isBold ? "font-bold" : ""} ${className}`}
    >
      #{children}
    </span>
  );
};

export const SectionEmail = ({
  reference,
  playAnimeNum,
  setIdx,
}: // slider,
// nextIdx,
{
  reference: RefObject<HTMLElement>;
  playAnimeNum: number;
  setIdx?: () => void;
  // slider: RefObject<HTMLElement | null>;
  // nextIdx?: number;
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [sendState, setSendState] = useState({ isSend: false, isFail: false });
  const emailCheck = z.string().email();

  const onSend = useCallback(
    async (name: string, email: string, message: string) => {
      const emailChkResult = emailCheck.safeParse(email);

      if (emailChkResult.success && name && message) {
        if (
          (await (
            await fetch("https://api.emailjs.com/api/v1.0/email/send", {
              method: "post",
              headers: [["content-type", "application/json"]],
              body: JSON.stringify({
                service_id: "service_portfolio",
                template_id: "template_portfolio",
                user_id: "kmQb_Zh3Ixp7REMDa",
                template_params: {
                  name: name,
                  email: email,
                  message: message,
                },
              }),
            })
          ).text()) === "OK"
        ) {
          setSendState({ isSend: true, isFail: false });
          setName("");
          setEmail("");
          setMessage("");
        }
      } else {
        setSendState({ isSend: false, isFail: true });
      }
    },
    []
  );
  return (
    <Section
      reference={reference}
      isPlayAnime={playAnimeNum === 5}
      title="CONTACT"
      indexStr="06/06"
      setIdx={setIdx}
      // slider={slider}
      // nextIdx={nextIdx ? nextIdx : 0}
    >
      <div className="rightMoveAnime">
        <div>
          <div className="pb-16 font-bold text-3xl">LEAVE A MESSAGE</div>
          <div className="flex gap-8 xl:pr-40 md:pr-20 pb-10">
            <InputBox
              title="NAME"
              placeholder="Your name"
              id="name"
              value={name}
              setState={setName}
            />
            <InputBox
              title="E-MAIL"
              placeholder="@"
              id="email"
              value={email}
              setState={setEmail}
            />
          </div>
          <div className="xl:pr-40 md:pr-20">
            <InputBox
              title="MESSAGE"
              placeholder="Your message"
              id="message"
              rows={6}
              value={message}
              setState={setMessage}
            />
          </div>
          <div className="pt-12">
            <button
              className={clsx(
                "px-8 py-2 border-2",
                sendState.isSend ? "text-color50 border-color50" : "border-text"
              )}
              disabled={sendState.isSend}
              onClick={() => onSend(name, email, message)}
            >
              {sendState.isSend
                ? "complete"
                : sendState.isFail
                ? "resend"
                : "send"}
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export const Section = ({
  reference,
  nextRef,
  isPlayAnime,
  indexStr,
  children,
  title,
  setIdx,
}: // slider,
// nextIdx,
{
  reference: RefObject<HTMLElement>;
  nextRef?: RefObject<HTMLElement>;
  isPlayAnime: boolean;
  indexStr: string;
  children: ReactNode;
  title: string;
  setIdx?: () => void;
  // slider: RefObject<HTMLElement | null>;
  // nextIdx: number;
}) => {
  useEffect(() => {
    if (isPlayAnime) {
      reference.current?.classList.remove("parent");
    }
  }, [isPlayAnime, reference]);
  return (
    <section
      className={clsx(
        "w-full shrink-0",
        "overflow-hidden pt-[30px] min-h-screen flex flex-col justify-between parent"
      )}
      ref={reference}
    >
      <div>
        <div className="relative w-full pb-12">
          {/* <div className="absolute top-0 left-0 w-full border-b-[1rem] border-color75 py-5 reduceAnime"></div> */}
          <h1 className="text-[4rem] font-bold">{title}</h1>
        </div>
        {children}
      </div>

      {setIdx ? (
        <NextButton
          nextRef={nextRef}
          delay="300ms"
          indexStr={indexStr}
          setIdx={setIdx}
          // slider={slider}
          // moveIdx={nextIdx}
        />
      ) : (
        ""
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
    <div className="w-[100%] xl:max-w-[50%] overflow-hidden">
      <div className="pr-10">
        <div className="pb-6 text-2xl font-bold">{title}</div>
        <div
          className={clsx(
            "strechAnime border-t-2 border-color20 pt-3 relative w-0 translate-x-[-100%] w-full",
            "strechAnimeB before:border-t-2 before:border-text before:pt-6 before:absolute before:top-[-2px] before:left-0 before:block before:translate-x-[-100%] before:w-full"
          )}
        ></div>
        <div
          className="pb-8 text-sm rightMoveAnime translate-x-[-100%]"
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
  value,
  setState,
}: {
  title: string;
  placeholder: string;
  id: string;
  rows?: number;
  value: string;
  setState: (str: string) => void;
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
            value={value}
            onChange={(e) => {
              setState(e.currentTarget.value);
            }}
          />
        ) : (
          <textarea
            id={id}
            className="outline-none bg-background py-2 border-b-2 border-text w-full"
            placeholder={placeholder}
            rows={rows}
            value={value}
            onChange={(e) => {
              setState(e.currentTarget.value);
            }}
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
  // slider,
  // moveIdx,
  setIdx,
}: {
  nextRef?: RefObject<HTMLElement>;
  delay: string;
  indexStr: string;
  // slider: RefObject<HTMLElement | null>;
  // moveIdx: number;
  setIdx: () => void;
}) => {
  const nextMove = useCallback(() => {
    if (!nextRef) return;
    setIdx();
    if (!window) return;
    if (window.innerWidth < 1280) {
      if (nextRef.current)
        nextRef.current.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
    }
    // else {
    //   slider.current!.style.transform = `translateX(${-moveIdx * 100}%)`;
    // }
  }, []);
  return (
    <div className="py-10">
      <div
        className={clsx(
          "flex items-end bounceIcon rightMoveAnime flex items-end translate-x-[-100%] w-max",
          nextRef && "cursor-pointer"
        )}
        style={{ animationDelay: delay }}
        onClick={nextMove}
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
