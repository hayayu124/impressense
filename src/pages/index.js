import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import cn from "@/styles/Home.module.scss";
import influencer from "/json/influencer.json";
const influ = influencer.influencer;

//swiper
<link rel="stylesheet" href="path/swiper.min.css" />;
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import SwiperCore, {
  Thumbs,
  Pagination,
  Navigation,
  Lazy,
  Controller,
  Autoplay,
  EffectFade,
} from "swiper";

SwiperCore.use([
  Thumbs,
  Pagination,
  Navigation,
  Lazy,
  Controller,
  Autoplay,
  EffectFade,
]);

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

        {/* 装飾 */}
        <div className={`${cn.kvEllipse} pos-a`}>
          <img src="/img/Ellipse 74.svg" alt="" />
        </div>

        <div className={`${cn.kvEllipseLeft} pos-a`}>
          <img src="/img/Ellipse 75.svg" alt="" />
        </div>

        <div className={`${cn.kvEllipseRight} pos-a`}>
          <img src="/img/Ellipse 76.svg" alt="" />
        </div>

        <div className={`${cn.kvCharcterLeft} pos-a`}>
          <img src="/img/kvCharcter1.svg" alt="" />
        </div>

        <div className={`${cn.kvCharcterRight} pos-a`}>
          <img src="/img/kvCharcter2.svg" alt="" />
        </div>
      </section>

      {/* About */}
      <main>
        <section className={`about grid1 sec-c fon-b sectionSpaceM`}>
          <div className={`${cn.aboutText} fle-f fon4`}>
            <p>ちがいは個性</p>
            <p>ちがいは魅力</p>
            <p>ちがいは多様性</p>
          </div>

          <h1 className={`fon2 tex-c mar-t05`}>ちがいは、たのしい！</h1>

          <div className={`pos-r`}>
            <h2 className={`${cn.aboutDes} fon3 lin-10`}>
              誰もがソーシャルメディアで自分を発信できる現代。
              <br />
              世界中の人々からの自分の評価はほんの数秒で決まり、第一印象＝その人のイメージとなってしまいます。
            </h2>

            <div className={`${cn.charcter3} pos-a`}>
              <img src="/img/kvCharcter3.svg" alt="" />
            </div>
          </div>

          <div className={`pos-r`}>
            <h2 className={`${cn.aboutDes} right fon3 lin-10`}>
              人と比べるのではなく、ちがいがあることを楽しみ、自信をつけてもらいたい。他の人の自分とは異なる部分を受け入れ、相互理解を深めていけるそんな世界を目指して生まれました。
            </h2>
            <div className={`${cn.charcter4} pos-a`}>
              <img src="/img/kvCharcter4.svg" alt="" />
            </div>
          </div>

          <div className={`pos-r`}>
            <h2 className={`${cn.aboutDes} fon3 sec-c lin-10`}>
              IMPRESSENSEを通じて自分を知り、他の人との違いを発見することで、”みんな同じではなくちがうからこそたのしい”ということに気づいてもらえたら嬉しいです。
            </h2>

            <div className={`${cn.charcter5} pos-a`}>
              <img src="/img/kvCharcter5.svg" alt="" />
            </div>

            <div className={`${cn.charcter6} pos-a`}>
              <img src="/img/kvCharcter6.svg" alt="" />
            </div>
          </div>

          <h2 className={`${cn.aboutDes} fon3 sec-c tex-c lin-10`}>
            創造しよう。
            <br />
            誰もがぞれぞれの違いを楽しみ、認め合うことで、自信に溢れ生き生きと生活する社会を。
          </h2>

          <div className={`pos-r`}>
            <div className={`${cn.ellipse77} pos-a`}>
              <img src="/img/Ellipse 77.svg" alt="" />
            </div>

            <h2 className={`${cn.aboutDes} fon2 sec-c tex-c`}>
              あなたの
              <br />
              ”魅力”と”個性” <br />
              を発見
            </h2>
          </div>

          <div className={`fle-f mar-t4 pos-r`}>
            <div className={`${cn.meritPic} pos-a`}>
              <img src="img/About (10 items) - hover 9 1.jpg" alt="" />
            </div>
            <p className={`${cn.merit} fon5 sec-c lin-10`}>
              自分自身の第一印象を客観視し、コミュニケーションの特徴＝個性を知りアピールすることで、自分と他者の関係をより深めることができます。
              <br />
              <br />
              IMPRESSENSEは、あなたの個性や魅力を可視化してくれます。AI相手だからこそ安心して話すことができ、また何回でもプレイができます。
            </p>
            <div className={`${cn.meritPic} pos-a`}>
              <img src="img/質問と質問の間の画面.jpg" alt="" />
            </div>
          </div>
        </section>

        <section className={`${cn.description} sectionSpace grid1 sec-c`}>
          <div className={`fle-f ${cn.aboutMedia} pos-r`}>
            <div className={``}>
              <h3>次世代メディア処理AI</h3>
              <div>
                <img src="/img/mediagnosis.svg" alt="" />
              </div>
            </div>

            <div className={`right`}>
              <h1 className={`fon2 tex-r`}>
                ヒトの脳の
                <br />
                情報処理方法をベースに
                <br />
                情報解析を行うAI
              </h1>
              <p className={`${cn.descriptionText} fon4 tex-r mar-t4 bold`}>
                他者の視点でプレイヤーの個性的な部分を分析し、その魅力を最大限に引き出す方法を提案します。
              </p>

              <div className={`right sectionSpaceM pos-r ${cn.button}`}>
                <p className={`fon5 white bold pos-a`}>Mediagnosis公式サイト</p>
              </div>
            </div>

            <div className={`pos-a ${cn.brain}`}>
              <img src="/img/brain.svg" alt="" />
            </div>
          </div>

          <div className={`sectionSpace sec-c tex-c pos-r`}>
            <h1 className={`fon2`}>HOW TO PLAY</h1>
            <p className={`fon4`}>IMPRESSENSEの使い方</p>

            <div className={`tex-l mar-t5`}>
              <h2 className={`fon3`}>自己紹介トピック</h2>
              <p className={`${cn.howToText} fon4 mar-t2 lin-10`}>
                遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。
              </p>
            </div>
            <div className={`pos-a ${cn.charcter7}`}>
              <img src="/img/kvCharcter7.svg" alt="" />
            </div>
            <div className={`${cn.howToImg} right mar-t3`}>
              <img src="/img/Group 3465368.png" alt="" />
            </div>
            <div className={`pos-a ${cn.howToBorder}`}>
              <img src="/img/border.png" alt="" />
            </div>
          </div>
        </section>

        <section className={`${cn.review} grid1 left`}>
          <h1 className={`fon2 tex-r mar-t4`}>
            IMPRESSENSEを
            <br />
            使ってみた
          </h1>

          {/* swiper */}
          <Swiper
            className={`mar-t3`}
            spaceBetween={60}
            slidesPerView={3.3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={{
              clickable: true,
            }}
            navigation
            loop={true}
          >
            <div class="swiper-wrapper">
              {influ.map((el, index) => {
                return (
                  <SwiperSlide key={`${index}`}>
                    <div class={`${cn.sliderBack}`}>
                      <div class={`${cn.sliderPick} sec-c`}>
                        <img src={`${el.pic}`} alt="" />
                      </div>

                      <h3 class={`mar-t05 fon3`}>{el.name}</h3>
                      <h5 class={`mar-t05 fon5 lin-10`}>{el.profile}</h5>

                      <div className={`pos-r mar-t1 ${cn.button}`}>
                        <p className={`fon5 white pos-a`}>動画を見る</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>

          <div class="swiper-controller">
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>

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
      <script src="path/swiper-bundle.min.js"></script>
    </>
  );
}
