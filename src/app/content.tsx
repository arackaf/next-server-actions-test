"use client";

import { FC, useTransition } from "react";
import { serverActionA, serverActionB } from "./actions";

export const Content: FC<{}> = () => {
  const [running, startTransition] = useTransition();
  const [runningB, startTransitionB] = useTransition();

  function runBoth() {
    // serverActionA();
    // serverActionB();
    startTransition(() => serverActionA());
    startTransitionB(() => serverActionB());
  }

  return (
    <div className="p-4">
      <button onClick={runBoth}>Run</button>
    </div>
  );
};
