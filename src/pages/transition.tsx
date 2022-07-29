import React, { useState, useTransition } from "react";
import ProductList from "../components/ProductList";
import { generateProducts } from "./data";
import "./index.css";

// NOTE: １万のダミーデータを作成
const dummyProducts = generateProducts();

const filterProducts = (filterWord: string) => {
  // NOTE: 抽出キーワードがなければ、１万のデータを返す。
  if (!filterWord) {
    return dummyProducts;
  }
  // NOTE: 抽出キーワードでフィルタリングを行う。
  return dummyProducts.filter((product) => product.includes(filterWord));
};

const Transition = () => {
  const [isPending, startTransition] = useTransition();
  const [filterWord, setFilterWord] = useState("");
  const startTime = Date.now();
  // NOTE: 特定のワードをキーに、１万のダミーデータから対象データを抽出
  const filteredProducts = filterProducts(filterWord);
  const endTime = Date.now();
  // console.log(endTime - startTime);

  const updateFilterHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // NOTE: 状態（ステート）の更新を遅らせて、ユーザーのインプットの入出力を優先させる。（状態更新の優先順位低）
    // startTransition(() => {
    //   // console.log("test")
    //   setFilterWord(event.target.value);
    // });
    setFilterWord(event.target.value);
  };

  return (
    <div id="app">
      <h1>React18系 - useTransition</h1>
      <input
        type="text"
        placeholder="数字を入力してください"
        onChange={updateFilterHandler}
      />
      {/* <p> */}
        {/* NOTE: 状態（ステート）の更新を遅らせている間は、「isPending = true」となる。 */}
        {/* {isPending && (
          <span style={{ color: "white" }}>
            プロダクトをアップデート中・・・
          </span>
        )} */}
      {/* </p> */}
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default Transition;
