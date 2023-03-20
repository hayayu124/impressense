import React, { useState, useEffect } from "react";

import cn from "@/styles/Home.module.scss";
import Link from "next/link";
import ScrollEffect from "components/utility/utilityscrollEffect";
import Header from "components/header.js";
import influencer from "/json/influencer.json";
import news from "/json/news.json";
import HowTo from "components/howToTpic.js";
import NewsSection from "components/news.js";

// gsap;
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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

// ロード制御

// const [load, setLoad] = useState(false);

// useEffect(() => {
//   const body = document.body;
//   body.classList.toggle("active");
//   setTimeout(() => {
//     setLoad(true);
//   }, 50);
// }, []);

export default function Home() {
  //gsap
  useEffect(() => {
    if (process.browser) {
      gsap.registerPlugin(ScrollTrigger);
      setAnimation();
    }
  }, []);

  const setAnimation = () => {
    gsap.to("#aboutDisplay", {
      // アニメーション内容

      opacity: 1,

      scrollTrigger: {
        trigger: "#concept",
        pin: true, // 要素を固定する
        anticipatePin: 1,
        pinSpacing: false,
        markers: true, // マーカー表示

        start: "top top",
        end: "bottom top",
      },
    });
  };
  return (
    <>
      {/* kv */}
      <main className={`sec-c ovf-h`}>
        <section className={`${cn.kv} pos-r`}>
          <div className={`${cn.kvContents} grid1 pos-a`}>
            <div className={`${cn.kvLogo} sec-c`}>
              <ScrollEffect
                className={`${cn.intMoreDelay}`}
                after={cn.intActive}
              >
                <img src="/img/IMPRESSENSE.svg" alt="" />
              </ScrollEffect>
            </div>

            <ScrollEffect
              className={`${cn.intMoreDelay} tex-c`}
              after={cn.intActive}
            >
              <h2
                className={`${cn.kvText} tex-c fon4 fonSp4 white spaS regular shadow`}
              >
                あなたの自己紹介トークから、
                <br className={`brSp`} />
                第一印象をAIで分析
              </h2>
            </ScrollEffect>

            <ScrollEffect className={`${cn.intMoreDelay}`} after={cn.intActive}>
              <div className={`${cn.kvImage} mar-t4 sec-c`}>
                <img src="/img/About (10 items) - hover 9 1.jpg" alt="" />
              </div>
            </ScrollEffect>
          </div>

          {/* 装飾 */}
          <div className={`${cn.kvEllipse} pos-a`}>
            <img src="/img/Ellipse 74.svg" alt="" />
          </div>

          <div className={`${cn.kvEllipseLeft} pos-a`}>
            {/* <img src="/img/Ellipse 75.svg" alt="" /> */}
          </div>

          <div className={`${cn.kvEllipseRight} pos-a`}>
            <img src="/img/Ellipse 76.svg" alt="" />
          </div>

          <div className={`${cn.kvCharcterLeft} pos-a dropShadow`}>
            <ScrollEffect className={`${cn.intMostDelay}`} after={cn.intActive}>
              <img src="/img/kvCharcter1.svg" alt="" />
            </ScrollEffect>
          </div>

          <div className={`${cn.kvCharcterRight} pos-a dropShadow`}>
            <ScrollEffect className={`${cn.intMostDelay}`} after={cn.intActive}>
              <img src="/img/kvCharcter2.svg" alt="" />
            </ScrollEffect>
          </div>

          <div className={`${cn.kvEllipseBottom} pos-a`}>
            {/* <img src="/img/Ellipse 80.svg" alt="" /> */}
          </div>
        </section>

        {/* About */}
        <section
          id="concept"
          className={`${cn.about} sec-c fon-b sectionSpaceM pad-t2 pos-r`}
        >
          {/* 横スクロール時の表示領域 */}
          <div id="aboutDisplay" className={`${cn.aboutDisplay} pos-a`}>
            {/* <div className={`${cn.aboutIndividual} pos-r`}>
              <ScrollEffect
                className={`${cn.intDelay} pos-a`}
                after={cn.intActive}
              >
                <div className={`${cn.aboutText} fle-f fon4 fonSp5 spaS ws-n`}>
                  <p>ちがいは個性</p>
                  <p>ちがいは魅力</p>
                  <p>ちがいは多様性</p>
                </div>
              </ScrollEffect>
              <div id="aboutTitle">
                <h1 className={`fon2 fonSp2 tex-c mar-t05 spaS ws-n`}>
                  ちがいは、たのしい！
                </h1>
              </div>
              <ScrollEffect className={`${cn.intDelay}`} after={cn.intActive}>
                <div className={`pos-r`}>
                  <ScrollEffect
                    className={`${cn.aboutDes}`}
                    after={cn.aboutDesFade}
                  >
                    <h2 className={`fon3 fonSp3 lin-10`}>
                      誰もがソーシャルメディアで自分を発信できる現代。
                      世界中の人々からの自分の評価はほんの数秒で決まり、第一印象＝その人のイメージとなってしまいます。
                    </h2>
                  </ScrollEffect>

                  <ScrollEffect
                    className={`${cn.intMostDelay}`}
                    after={cn.intActive}
                  >
                    <div
                      className={`${cn.charcter3} pos-a dropShadow dropShadow`}
                    >
                      <img src="/img/kvCharcter3.svg" alt="" />
                    </div>
                  </ScrollEffect>
                </div>
              </ScrollEffect>
            </div>

            <div className={`${cn.aboutIndividual} pos-r`}>
              <div className={`pos-a`}>
                <ScrollEffect className={`${cn.intDelay}`} after={cn.intActive}>
                  <div className={`pos-r`}>
                    <ScrollEffect
                      className={`${cn.aboutDes} right`}
                      after={cn.aboutDesFade}
                    >
                      <h2 className={`fon3 fonSp3 lin-10`}>
                        人と比べるのではなく、ちがいがあることを楽しみ、自信をつけてもらいたい。他の人の自分とは異なる部分を受け入れ、相互理解を深めていけるそんな世界を目指して生まれました。
                      </h2>
                    </ScrollEffect>

                    <ScrollEffect
                      className={`${cn.intMostDelay}`}
                      after={cn.intActive}
                    >
                      <div className={`${cn.charcter4} pos-a dropShadow`}>
                        <img src="/img/kvCharcter4.svg" alt="" />
                      </div>
                    </ScrollEffect>
                  </div>
                </ScrollEffect>
              </div>
            </div>

            <div className={`${cn.aboutIndividual} pos-r`}>
              <div className={`pos-a`}>
                <ScrollEffect className={`${cn.intDelay}`} after={cn.intActive}>
                  <div className={`pos-r`}>
                    <ScrollEffect
                      className={`${cn.aboutDes} sec-c`}
                      after={cn.aboutDesFade}
                    >
                      <h2 className={`fon3 fonSp3 sec-c lin-10`}>
                        IMPRESSENSEを通じて自分を知り、他の人との違いを発見することで、”みんな同じではなくちがうからこそたのしい”ということに気づいてもらえたら嬉しいです。
                      </h2>
                    </ScrollEffect>

                    <ScrollEffect
                      className={`${cn.intMoreDelay}`}
                      after={cn.intActive}
                    >
                      <div className={`${cn.charcter5} pos-a dropShadow`}>
                        <img src="/img/kvCharcter5.svg" alt="" />
                      </div>
                    </ScrollEffect>

                    <ScrollEffect
                      className={`${cn.intMostDelay}`}
                      after={cn.intActive}
                    >
                      <div className={`${cn.charcter6} pos-a dropShadow`}>
                        <img src="/img/kvCharcter6.svg" alt="" />
                      </div>
                    </ScrollEffect>
                  </div>
                </ScrollEffect>
              </div>
            </div>

            <div className={`${cn.aboutIndividual} pos-r`}>
              <div className={`pos-a`}>
                <ScrollEffect
                  className={`${cn.aboutDesTi} sectionSpace sec-c`}
                  after={cn.aboutDesTiDe}
                >
                  <h2 className={`fon3 fonSp3 sec-c tex-c lin-10`}>
                    創造しよう。
                  </h2>
                </ScrollEffect>
                <ScrollEffect
                  className={`${cn.aboutDesTi} mar-t05 sec-c`}
                  after={cn.aboutDesTiDe}
                >
                  <h2 className={`fon3 fonSp3 sec-c tex-c lin-10`}>
                    誰もがぞれぞれの違いを楽しみ、認め合うことで、
                  </h2>
                </ScrollEffect>
                <ScrollEffect
                  className={`${cn.aboutDesTi} mar-t05 sec-c`}
                  after={cn.aboutDesTiDe}
                >
                  <h2 className={`fon3 fonSp3 sec-c tex-c lin-10`}>
                    自信に溢れ生き生きと生活する社会を。
                  </h2>
                </ScrollEffect>
              </div>
            </div>

            <div className={`${cn.aboutIndividual} pos-r`}>
              <div className={`pos-a`}>
                <div id="about" className={`pos-r`}>
                  <div className={`${cn.ellipse77} pos-a`}>
                    <ScrollEffect
                      className={`${cn.circle}`}
                      after={cn.intActive}
                    >
                      <img src="/img/Ellipse 77.svg" alt="" />
                    </ScrollEffect>
                  </div>

                  <ScrollEffect
                    className={`${cn.intDelay}`}
                    after={cn.intActive}
                  >
                    <h2
                      className={`${cn.aboutDes} fon2 fonSp2 sec-c tex-c spaS lin-7 pad-t1`}
                    >
                      あなたの
                      <br />
                      ”魅力”と”個性” <br />
                      を発見
                    </h2>
                  </ScrollEffect>
                </div>
              </div>
            </div>

            <div className={`${cn.aboutIndividual} pos-r`}>
              <div className={`pos-a`}>
                <div className={`fle-f mar-t4 pos-r ${cn.meritColumn}`}>
                  <ScrollEffect
                    className={`${cn.intMostDelay} ${cn.meritPic1}`}
                    after={cn.intActive}
                  >
                    <div>
                      <img src="img/About (10 items) - hover 9 1.jpg" alt="" />
                    </div>
                  </ScrollEffect>

                  <ScrollEffect
                    className={`${cn.intMostDelay} ${cn.merit} sec-c`}
                    after={cn.intActive}
                  >
                    <p className={`fon5 fonSp5 lin-10`}>
                      自分自身の第一印象を客観視し、コミュニケーションの特徴＝個性を知りアピールすることで、自分と他者の関係をより深めることができます。
                      <br />
                      <br />
                      IMPRESSENSEは、あなたの個性や魅力を可視化してくれます。AI相手だからこそ安心して話すことができ、また何回でもプレイができます。
                    </p>
                  </ScrollEffect>

                  <ScrollEffect
                    className={`${cn.intMostDelay} ${cn.meritPic2}`}
                    after={cn.intActive}
                  >
                    <div>
                      <img src="img/質問と質問の間の画面.jpg" alt="" />
                    </div>
                  </ScrollEffect>
                </div>
              </div>
            </div> */}
          </div>
        </section>

        <section className={`${cn.description} sectionSpace grid1 sec-c pos-r`}>
          <ScrollEffect>
            <ScrollEffect className={`${cn.intDelay}`} after={cn.intActive}>
              <h1
                className={`${cn.descriptionTitle} right fon2 fonSp2 tex-r spaS lin-5`}
              >
                ヒトの脳の
                <br className={`br`} />
                情報処理方法をベースに
                <br className={`br`} />
                情報解析を行うAI
              </h1>
            </ScrollEffect>

            <div className={`fle-f ${cn.aboutMedia} mar-t2`}>
              <ScrollEffect
                className={`${cn.intMoreDelay}`}
                after={cn.intActive}
              >
                <div>
                  <h3 className={`fon4 fonSp4`}>次世代メディア処理AI</h3>
                  <div className={`mar-t05`}>
                    <img src="/img/mediagnosis.svg" alt="" />
                  </div>
                </div>
              </ScrollEffect>

              <ScrollEffect
                className={`${cn.intMostDelay}`}
                after={cn.intActive}
              >
                <div className={`right`}>
                  <p
                    className={`${cn.descriptionText} fon4 tex-r bold lin-9 spaS`}
                  >
                    他者の視点でプレイヤーの個性的な部分を分析し、その魅力を最大限に引き出す方法を提案します。
                  </p>

                  <div
                    className={`right mar-t5 pos-r pointer ${cn.button} ${cn.siteButton}`}
                  >
                    <p className={`fon5 fonSp5 white bold pos-a medium spaSs`}>
                      Mediagnosis公式サイト
                    </p>
                  </div>
                </div>
              </ScrollEffect>

              <ScrollEffect
                className={`${cn.intMostDelay}`}
                after={cn.intActive}
              >
                <div className={`pos-a ${cn.brain}`}>
                  <img src="/img/brain.svg" alt="" />
                </div>
              </ScrollEffect>
            </div>
          </ScrollEffect>

          <div className={`sectionSpace sec-c tex-c pos-r`}>
            <ScrollEffect className={`${cn.intDelay}`} after={cn.intActive}>
              <h1 className={`fon2 fonSp2 spaS`}>HOW TO PLAY</h1>
            </ScrollEffect>
            <ScrollEffect className={`${cn.intMoreDelay}`} after={cn.intActive}>
              <p className={`fon4 fonSp4 spaS regular`}>IMPRESSENSEの使い方</p>
            </ScrollEffect>

            <HowTo />
          </div>
        </section>

        <section className={`${cn.review} grid1 left pos-r  mar-t5`}>
          {/* 装飾 */}
          <div className={`pos-a ${cn.reviewEllipseLeft}`}>
            <img src="/img/Ellipse 78.svg" alt="" />
          </div>

          <ScrollEffect className={`${cn.intDelay}`} after={cn.intActive}>
            <h1 className={`fon2 fonSp2 tex-r spaS`}>
              IMPRESSENSEを
              <br />
              使ってみた
            </h1>
          </ScrollEffect>

          <ScrollEffect className={`${cn.intMoreDelay}`} after={cn.intActive}>
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
                          className={`pos-r mar-t1 pointer ${cn.button} ${cn.reviewButton}`}
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
          </ScrollEffect>

          {/* 装飾 */}
          <div className={`pos-a ${cn.reviewEllipseRight}`}>
            <img src="/img/Ellipse 79.svg" alt="" />
          </div>
        </section>

        <NewsSection newsColumn={newsColumn} />
      </main>
      <script src="path/swiper-bundle.min.js"></script>
    </>
  );
}
