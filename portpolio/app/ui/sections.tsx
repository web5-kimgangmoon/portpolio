"use client";

import { HeroArrow } from "@/public/heroArrow";
import clsx from "clsx";
import Image from "next/image";
import { ReactNode, RefObject, useCallback, useEffect, useState } from "react";
import z from "zod";

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
  return (
    <section
      className={clsx(
        "w-full shrink-0",
        "overflow-hidden pt-[30px] min-h-screen flex flex-col justify-between"
      )}
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
              className="w-full h-full rounded-[2rem]"
            />
          </div>
        </div>
        <div
          className="md:text-[10rem] text-[6rem] font-bold rightMoveAnime custom translate-x-[-100%]"
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
      <div className="flex flex-col gap-3 cursor-default">
        <Tags tags={["프론트", "웹개발", "AWS"]} delay={450} />
        <Tags tags={["REACT", "NODEJS", "TS"]} delay={550} />
        <Tags tags={["JS", "HTML", "ES8"]} delay={650} />
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

export const Tags = ({ tags, delay }: { tags: string[]; delay: number }) => {
  return (
    <div
      className="text-background text-lg rightMoveAnime translate-x-[-100%] text-color60 flex gap-2 items-center"
      style={{ animationDelay: `${delay}ms` }}
    >
      {tags.map((content, idx) => {
        return <Tag key={idx}>{content}</Tag>;
      })}
    </div>
  );
};

export const Tag = ({ children }: { children: string }) => {
  return (
    <span className="hover:text-text hover:text-3xl hover:font-bold delay-75 transition-all">
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
          "flex items-end bounceIcon rightMoveAnime flex items-end translate-x-[-100%]",
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
