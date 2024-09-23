"use client";

import { useState } from "react";
import { TopBar } from "./ui/topBar";
import { RightMenu } from "./ui/rightMenu";

export default function Home() {
  const [color, setColor] = useState<string>("yellow");

  return (
    <div className={`body ${color}`}>
      <TopBar setColor={setColor} />
      <RightMenu />
      <div>
        <div className="min-h-screen"></div>
      </div>
      <div style={{ height: "100vh" }} id="section1">
        <h2>섹션 1</h2>
        <p>내용 1</p>
      </div>
      <div style={{ height: "100vh" }} id="section2">
        <h2>섹션 2</h2>
        <p>내용 2</p>
      </div>
    </div>
  );
}
