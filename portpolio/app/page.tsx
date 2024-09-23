"use client";

import { useEffect, useRef, useState } from "react";
import { TopBar } from "./ui/topBar";
import { RightMenu } from "./ui/rightMenu";
import clsx from "clsx";

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
        <div
          className={clsx(
            "container flex flex-row-reverse transition-transform duration-300",
            isNavOpen && "translate-x-[-30rem]"
          )}
        >
          <RightMenu
            refs={[section1, section2, section3, section4, section5]}
          />
          <div className="overflow-hidden">
            <section
              style={{ paddingBlockStart: "30px", height: "100vh" }}
              ref={section1}
            >
              <h2>
                섹션
                1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
              </h2>
              <p>내용 1</p>
            </section>
            <section
              style={{ paddingBlockStart: "30px", height: "100vh" }}
              ref={section2}
            >
              <h2>섹션 2</h2>
              <p>내용 2</p>
            </section>
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
