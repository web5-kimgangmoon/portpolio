"use client";

import { useState } from "react";
import { TopBar } from "./ui/topBar";

export default function Home() {
  const [color, setColor] = useState<string>("yellow");

  return (
    <div className={`body ${color}`}>
      <TopBar setColor={setColor}></TopBar>
      <div>ㅇㅇ</div>
    </div>
  );
}
