import React, { useState, useEffect } from "react";

import cn from "@/styles/Home.module.scss";
import Link from "next/link";
import influencer from "/json/influencer.json";
import news from "/json/news.json";
const influ = influencer.influencer;
const newsColumn = news.news;

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination } from "swiper";

export default function Home() {
  return (
    <>
      {/* kv */}
      <section className={`${cn.kv} pos-r ovf-h`}>
        <div className={`${cn.kvContents} grid1 pos-a`}>
          <div className={`${cn.kvLogo} sec-c`}>
            <img src="/img/IMPRESSENSE.svg" alt="" />
          </div>
          <h2
            className={`${cn.kvText} fon4 fonSp4 white tex-c spaS regular shadow`}
          >
            あなたの自己紹介トークから、
            <br className={`brSp`} />
            第一印象をAIで分析
          </h2>
          <div className={`${cn.kvImage} mar-t4 sec-c`}>
            <img src="/img/About (10 items) - hover 9 1.jpg" alt="" />
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

        <div className={`${cn.kvCharcterLeft} pos-a dropShadow`}>
          <img src="/img/kvCharcter1.svg" alt="" />
        </div>

        <div className={`${cn.kvCharcterRight} pos-a dropShadow`}>
          <img src="/img/kvCharcter2.svg" alt="" />
        </div>

        <div className={`${cn.kvEllipseBottom} pos-a`}>
          <img src="/img/Ellipse 80.svg" alt="" />
        </div>
      </section>

      {/* About */}
      <main className={`sec-c ovf-h`}>
        <section className={`${cn.about} grid1 sec-c fon-b sectionSpaceM`}>
          <div className={`${cn.aboutText} fle-f fon4 fonSp5 spaS ws-n`}>
            <p>ちがいは個性</p>
            <p>ちがいは魅力</p>
            <p>ちがいは多様性</p>
          </div>

          <h1 className={`fon2 fonSp2 tex-c mar-t05 spaS ws-n`}>
            ちがいは、たのしい！
          </h1>

          <div className={`pos-r`}>
            <h2 className={`${cn.aboutDes} fon3 fonSp3 lin-10`}>
              誰もがソーシャルメディアで自分を発信できる現代。
              <br />
              世界中の人々からの自分の評価はほんの数秒で決まり、第一印象＝その人のイメージとなってしまいます。
            </h2>

            <div className={`${cn.charcter3} pos-a dropShadow dropShadow`}>
              <img src="/img/kvCharcter3.svg" alt="" />
            </div>
          </div>

          <div className={`pos-r`}>
            <h2 className={`${cn.aboutDes} right fon3 fonSp3 lin-10`}>
              人と比べるのではなく、ちがいがあることを楽しみ、自信をつけてもらいたい。他の人の自分とは異なる部分を受け入れ、相互理解を深めていけるそんな世界を目指して生まれました。
            </h2>
            <div className={`${cn.charcter4} pos-a dropShadow`}>
              <img src="/img/kvCharcter4.svg" alt="" />
            </div>
          </div>

          <div className={`pos-r`}>
            <h2 className={`${cn.aboutDes} fon3 fonSp3 sec-c lin-10`}>
              IMPRESSENSEを通じて自分を知り、他の人との違いを発見することで、”みんな同じではなくちがうからこそたのしい”ということに気づいてもらえたら嬉しいです。
            </h2>

            <div className={`${cn.charcter5} pos-a dropShadow`}>
              <img src="/img/kvCharcter5.svg" alt="" />
            </div>

            <div className={`${cn.charcter6} pos-a dropShadow`}>
              <img src="/img/kvCharcter6.svg" alt="" />
            </div>
          </div>

          <h2 className={`${cn.aboutDesTi} fon3 fonSp3 sec-c tex-c lin-10`}>
            創造しよう。
            <br />
            誰もがぞれぞれの違いを楽しみ、認め合うことで、
            <br />
            自信に溢れ生き生きと生活する社会を。
          </h2>

          <div className={`pos-r`}>
            <div className={`${cn.ellipse77} pos-a`}>
              <img src="/img/Ellipse 77.svg" alt="" />
            </div>

            <h2 className={`${cn.aboutDes} fon2 fonSp2 sec-c tex-c spaS lin-7`}>
              あなたの
              <br />
              ”魅力”と”個性” <br />
              を発見
            </h2>
          </div>

          <div className={`fle-f mar-t4 pos-r ${cn.meritColumn}`}>
            <div className={`${cn.meritPic1}`}>
              <img src="img/About (10 items) - hover 9 1.jpg" alt="" />
            </div>
            <p className={`${cn.merit} fon5 fonSp5 sec-c lin-10`}>
              自分自身の第一印象を客観視し、コミュニケーションの特徴＝個性を知りアピールすることで、自分と他者の関係をより深めることができます。
              <br />
              <br />
              IMPRESSENSEは、あなたの個性や魅力を可視化してくれます。AI相手だからこそ安心して話すことができ、また何回でもプレイができます。
            </p>
            <div className={`${cn.meritPic2}`}>
              <img src="img/質問と質問の間の画面.jpg" alt="" />
            </div>
          </div>
        </section>

        <section className={`${cn.description} sectionSpace grid1 sec-c pos-r`}>
          <h1
            className={`${cn.descriptionTitle} right fon2 fonSp2 tex-r spaS lin-5`}
          >
            ヒトの脳の
            <br className={`br`} />
            情報処理方法をベースに
            <br className={`br`} />
            情報解析を行うAI
          </h1>

          <div className={`fle-f ${cn.aboutMedia} mar-t2`}>
            <div className={``}>
              <h3 className={`fon4 fonSp4`}>次世代メディア処理AI</h3>
              <div className={`mar-t05`}>
                <img src="/img/mediagnosis.svg" alt="" />
              </div>
            </div>

            <div className={`right`}>
              <p className={`${cn.descriptionText} fon4 tex-r bold lin-9 spaS`}>
                他者の視点でプレイヤーの個性的な部分を分析し、その魅力を最大限に引き出す方法を提案します。
              </p>

              <div
                className={`right mar-t5 pos-r ${cn.button} ${cn.siteButton}`}
              >
                <p className={`fon5 fonSp5 white bold pos-a medium spaSs`}>
                  Mediagnosis公式サイト
                </p>
              </div>
            </div>

            <div className={`pos-a ${cn.brain}`}>
              <img src="/img/brain.svg" alt="" />
            </div>
          </div>

          <div className={`sectionSpace sec-c tex-c pos-r`}>
            <h1 className={`fon2 fonSp2 spaS`}>HOW TO PLAY</h1>
            <p className={`fon4 fonSp4 spaS regular`}>IMPRESSENSEの使い方</p>
            {/* how to トピック */}
            <div className={`tex-l mar-t5`}>
              <h2 className={`fon3 fonSp3 regular spaS`}>自己紹介トピック</h2>
              <p
                className={`${cn.howToText} fon4 fonSp4 mar-t2 lin-10 regular`}
              >
                遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。
              </p>
              <div className={`${cn.howToImg} right mar-t3`}>
                <img src="/img/Group 3465368.png" alt="" />
              </div>
            </div>
            <div className={`pos-a dropShadow ${cn.charcter7}`}>
              <img src="/img/kvCharcter7.svg" alt="" />
            </div>
            <div className={`pos-a ${cn.howToBorder}`}>
              <img src="/img/border.png" alt="" />
            </div>
          </div>
        </section>

        <section className={`${cn.review} grid1 left pos-r`}>
          {/* 装飾 */}
          <div className={`pos-a ${cn.reviewEllipseLeft}`}>
            <img src="/img/Ellipse 78.svg" alt="" />
          </div>

          <h1 className={`fon2 fonSp2 tex-r mar-t5 spaS`}>
            IMPRESSENSEを
            <br />
            使ってみた
          </h1>

          {/* swiper */}
          <Swiper
            className={`mar-t2 mySwiper`}
            breakpoints={{
              0: {
                slidesPerView: 1.3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            autoplay={{
              reverseDirection: false,
            }}
          >
            <div className="swiper-wrapper">
              {influ.map((el, index) => {
                return (
                  <SwiperSlide key={`${index}`}>
                    <div className={`${cn.sliderBack}`}>
                      <div className={`${cn.sliderPick} sec-c`}>
                        <img src={`${el.pic}`} alt="" />
                      </div>

                      <h3 className={`mar-t1 fon3 fonSp3 bold`}>{el.name}</h3>
                      <h5 className={`mar-t1 fon5 fonSp5 lin-10`}>
                        {el.profile}
                      </h5>

                      <div
                        className={`pos-r mar-t1 ${cn.button} ${cn.reviewButton}`}
                      >
                        <Link href={el.link}>
                          <p className={`fon5 fonSp5 white pos-a`}>
                            動画を見る
                          </p>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>

          {/* 装飾 */}
          <div className={`pos-a ${cn.reviewEllipseRight}`}>
            <img src="/img/Ellipse 79.svg" alt="" />
          </div>
        </section>

        {/* News */}
        <aside className={`${cn.news} sectionSpaceM fle-f right`}>
          <div className={`${cn.verticalTitle}`}>
            <h1 className={`regular avenir medium`}>NEWS</h1>
            <p className={`fon4 fonSp4 spaS regular`}>メディアの掲載情報です</p>
          </div>

          <Swiper
            slidesPerView={2}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination]}
            className={`${cn.newsColumn} mySwiper`}
            breakpoints={{
              0: {
                slidesPerView: 1.3,
                spaceBetween: 20,
                row: 1,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
                row: 2,
              },
            }}
          >
            {newsColumn.map((el, index) => {
              return (
                <SwiperSlide key={`${index}`} className={`${cn.newsDetail}`}>
                  <div className={`${cn.newsPic}`}>
                    <img src={el.pic} alt="" />
                  </div>
                  <h3 className={`fon4 fonSp4 lin-10 mar-t1`}>{el.title}</h3>

                  <div
                    className={`pos-r mar-t1 ${cn.button} 
                    ${cn.reviewButton}`}
                  >
                    <Link href={el.link}>
                      <p className={`fon5 fonSp5 white regular pos-a`}>
                        記事を見る
                      </p>
                    </Link>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </aside>
      </main>
      <script src="path/swiper-bundle.min.js"></script>
    </>
  );
}
