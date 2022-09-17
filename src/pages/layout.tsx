import React, { useEffect, useLayoutEffect, useState } from "react";
import { generateProducts } from "./data";

// //待ち時間の設定
// const sleep = (waitMsec: number) => {
//   const startMsec: any = new Date();
//   const init: any = new Date()
//   while ((init - startMsec) < waitMsec);
// };

export const LayoutPage: React.FC = () => {
  // const [text, setText] = useState("表示");

  // useLayoutEffect(() => {
  //   setTimeout(() => {
  //     setText("test");
  //   }, 5000);
  // }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setText("test");
  //   }, 5000);
  // });

  // return (
  //   <>
  //     <p>画面は表示されました</p>
  //     <p>{`text:${text}`}</p>
  //   </>
  // );

  // return (
  //   <>
  //     <p>{`text:${text}`}</p>
  //   </>
  // );

  const [text, setText] = useState(generateProducts());

  useEffect(() => {
    // debugger
    setText(["表示後"]);
  }, []);

  // useLayoutEffect(() => {
  //   // debugger
  //   setText(["表示後"]);
  // }, []);

  return <div>{text}</div>;
};
