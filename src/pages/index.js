import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import cn from "@/styles/Home.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* kv */}
      <section className={`${cn.kv} pos-r`}>
        <div className={`${cn.kvContents} grid1 sec-c`}>
          <div className={`${cn.kvLogo} sec-c`}>
            <img src="/img/IMPRESSENSE.svg" alt="" />
          </div>
          <h2 className={`${cn.kvText} fon4 white tex-c`}>
            あなたの自己紹介トークから、第一印象をAIで分析
          </h2>
          <div className={`${cn.kvImage} mar-t4 sec-c`}>
            <img src="/img/kvImage.png" alt="" />
          </div>
        </div>
      </section>

      {/* About */}
      <main>
        <section className={`about grid1 sec-c fon-b`}>
          <div className={`${cn.aboutText} fle-f fon4`}>
            <p>ちがいは個性</p>
            <p>ちがいは魅力</p>
            <p>ちがいは多様性</p>
          </div>

          <h1 className={`fon2 tex-c`}>ちがいは、たのしい！</h1>

          <h2 className={`${cn.aboutDes}`}>
            誰もがソーシャルメディアで自分を発信できる現代。
            世界中の人々からの自分の評価はほんの数秒で決まり、第一印象＝その人のイメージとなってしまいます。
          </h2>
          <h2 className={`${cn.aboutDes}`}>
            人と比べるのではなく、ちがいがあることを楽しみ、自信をつけてもらいたい。他の人の自分とは異なる部分を受け入れ、相互理解を深めていけるそんな世界を目指して生まれました。
          </h2>
          <h2 className={`${cn.aboutDes} sec-c tex-c`}>
            IMPRESSENSEを通じて自分を知り、他の人との違いを発見することで、”みんな同じではなくちがうからこそたのしい”ということに気づいてもらえたら嬉しいです。
          </h2>
          <h2>
            創造しよう。誰もがぞれぞれの違いを楽しみ、認め合うことで、自信に溢れ生き生きと生活する社会を。
          </h2>
        </section>

        <section className={`description`}>
          <div>
            <h3>次世代メディア処理AI</h3>
            <div>
              <img src="/img/mediagnosis.svg" alt="" />
            </div>

            <div>
              <h1>ヒトの脳の 情報処理方法をベースに 情報解析を行うAI</h1>
              <p>
                他者の視点でプレイヤーの個性的な部分を分析し、その魅力を最大限に引き出す方法を提案します。
              </p>
            </div>
          </div>

          <div>
            <h1>HOW TO PLAY</h1>
            <p>IMPRESSENSEの使い方</p>
            <h2>自己紹介トピック</h2>
            <p>
              遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。
            </p>
            <div>
              <img src="/img/Group 3465368.png" alt="" />
            </div>
            <div>
              <img src="/img/border.png" alt="" />
            </div>
          </div>
        </section>

        <section className={`review`}>
          <h1>IMPRESSENSEを 使ってみた</h1>
          <div>
            <article></article>
            <article></article>
            <article></article>
          </div>
        </section>

        <aside className={`news`}>
          <h1>NEWS</h1>
          <p>メディアの掲載情報です</p>
          <div>
            <article></article>
            <article></article>
            <article></article>
            <article></article>
          </div>
        </aside>
      </main>
    </>
  );
}
