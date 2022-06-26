import React, { memo } from "react";

export const TopPage: React.FC = memo(() => {
  return (
    <>
      {/* ドキュメントにはmainランドマークが1つ含まれていなければなりません */}
      <main>
        <h1>TOP</h1>
        <div>こんにちは</div>
        {/* 画像には代替テキストがなければなりません */}
        <img src="logo192.png" alt="reactのロゴ" />
        {/* 隣接領域とのコントラスト比の確保 */}
        <div style={{ backgroundColor: "#F7F5F5", color: "#2864F0" }}>
          こんにちは
        </div>
        <div>
          {/* ラベルの確保 */}
          <label htmlFor="name">名前を入れてください:</label>
          <input type="text" id="name" name="name" />
        </div>
        {/* https://waic.jp/docs/WCAG21/#target-size
        Success Criterion 2.5.5 Target Size */}
        <button style={{ width: "44px", height: "44px" }}>登録</button>
        <section aria-live="assertive" aria-atomic="true"></section>
      </main>
    </>
  );
});
