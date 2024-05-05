"use client";

import Image from "next/image";
import * as PIXI from "pixi.js";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const app = new PIXI.Application();

    const initApp = async () => {
      await app.init();
      document.body.appendChild(app.canvas);
    }

    initApp();
  });
  return (
    <div>
    </div>
  );
}
