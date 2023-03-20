import React, { useState, useEffect, useRef } from "react";

import cn from "@/styles/howToTopic.module.scss";
import Link from "next/link";
import ScrollEffect from "components/utility/utilityscrollEffect";

//gsap
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function HowToTpic() {
  //   const setAnimation = () => {
  //     gsap.to("#titleWrap", {
  //       scrollTrigger: {
  //         trigger: "#howTo",
  //         start: "top top", //要素のトップが、画面の中央まできたら開始
  //         // end: "bottom bottom",
  //         end: "bottom bottom",
  //         // endTrigger: ".bottom",
  //         pin: true,
  //         anticipatePin: 1,
  //         pinSpacing: false,
  //         scrub: true,
  //         invalidateOnRefresh: false,

  //         markers: true, // マーカー表示
  //       },
  //     });
  //   };

  //   useEffect(() => {
  //     if (process.browser) {
  //       gsap.registerPlugin(ScrollTrigger);
  //       setAnimation();
  //     }

  //     return () => {
  //       // let allTriggers = ScrollTrigger.getAll();
  //       // allTriggers.forEach((trigger) => {
  //       //   trigger.disable();
  //       // });
  //     };
  //   }, []);

  return (
    <>
      <section id="howTo">
        <div className={`side-scroll-list-wrapper pos-r`}>
          {/* how to トピック1 */}
          {/* <div className={`${cn.howToTopic} pos-r side-scroll-list`}> */}
          <div id="titleWrap" className={`pos-r ${cn.howToTopic}`}>
            <div className={`${cn.textColumn} tex-l pos-a`}>
              <ScrollEffect className={`${cn.intDelay}`} after={cn.intActive}>
                <h2 className={`fon3 fonSp3 regular spaS`}>自己紹介トピック</h2>
                <p className={`fon4 fonSp5 mar-t2 lin-10 regular`}>
                  遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。
                </p>
              </ScrollEffect>
            </div>

            <div className={`${cn.howToImgColumn} right pos-a fle-f`}>
              <ScrollEffect className={`${cn.howToImg}`} after={cn.intActive}>
                <img className={`br`} src="/img/introduce1.png" alt="" />
                <img className={`brSp`} src="/img/introduceSp1.png" alt="" />
              </ScrollEffect>
              <ScrollEffect className={`${cn.howToImg}`} after={cn.intActive}>
                <img className={`br`} src="/img/introduce2.png" alt="" />
                <img className={`brSp`} src="/img/introduceSp2.png" alt="" />
              </ScrollEffect>
              <ScrollEffect className={`${cn.howToImg}`} after={cn.intActive}>
                <img className={`br`} src="/img/introduce3.png" alt="" />
                <img className={`brSp`} src="/img/introduceSp3.png" alt="" />
              </ScrollEffect>
              <ScrollEffect className={`${cn.howToImg}`} after={cn.intActive}>
                <img className={`br`} src="/img/introduce4.png" alt="" />
                <img className={`brSp`} src="/img/introduceSp4.png" alt="" />
              </ScrollEffect>
              <ScrollEffect className={`${cn.howToImg}`} after={cn.intActive}>
                <img className={`br`} src="/img/introduce5.png" alt="" />
                <img className={`brSp`} src="/img/introduceSp5.png" alt="" />
              </ScrollEffect>
              <ScrollEffect className={`${cn.howToImg}`} after={cn.intActive}>
                <img className={`br`} src="/img/introduce6.png" alt="" />
                <img className={`brSp`} src="/img/introduceSp6.png" alt="" />
              </ScrollEffect>
              <ScrollEffect className={`${cn.howToImg}`} after={cn.intActive}>
                <img className={`br`} src="/img/introduce7.png" alt="" />
                <img className={`brSp`} src="/img/introduceSp7.png" alt="" />
              </ScrollEffect>
              <ScrollEffect className={`${cn.howToImg}`} after={cn.intActive}>
                <img className={`br`} src="/img/introduce8.png" alt="" />
                <img className={`brSp`} src="/img/introduceSp8.png" alt="" />
              </ScrollEffect>
              <ScrollEffect className={`${cn.howToImg}`} after={cn.intActive}>
                <img className={`br`} src="/img/introduce9.png" alt="" />
                <img className={`brSp`} src="/img/introduceSp9.png" alt="" />
              </ScrollEffect>
              <ScrollEffect className={`${cn.howToImg}`} after={cn.intActive}>
                <img className={`br`} src="/img/introduce10.png" alt="" />
                <img className={`brSp`} src="/img/introduceSp10.png" alt="" />
              </ScrollEffect>
            </div>

            <div className={`pos-a dropShadow ${cn.charcter7}`}>
              <ScrollEffect
                className={`${cn.intMostDelay}`}
                after={cn.intActive}
              >
                <img src="/img/kvCharcter7.svg" alt="" />
              </ScrollEffect>
            </div>
          </div>
          {/* </div> */}

          {/* how to トピック2 */}
          {/* <div className={`${cn.howToTopic} pos-r side-scroll-list`}> */}
          <div className={`${cn.howToTopic} pos-r`}>
            <div className={`${cn.textColumn} ${cn.twoTopic} tex-l pos-a`}>
              <ScrollEffect className={`${cn.intDelay}`} after={cn.intActive}>
                <h2 className={`fon3 fonSp3 regular spaS`}>
                  子供のころの印象的な思い出について1分で話してください
                </h2>
                <p className={`fon4 fonSp5 mar-t2 lin-10 regular`}>
                  遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。
                </p>
              </ScrollEffect>

              <ScrollEffect
                className={`${cn.intMoreDelay}`}
                after={cn.intActive}
              >
                <div
                  className={`mar-t3 sec-c ${cn.textColumnImg} ${cn.two} left`}
                >
                  <img src="/img/Group 3465809.png" alt="" />
                </div>
              </ScrollEffect>
            </div>

            <div className={`${cn.twoPageImgColumn}`}>
              <ScrollEffect
                className={`pos-a ${cn.twoPageImg}`}
                after={cn.intActive}
              >
                <img src="/img/howtoimage2-1.png" alt="" />
              </ScrollEffect>

              <ScrollEffect
                className={`pos-a ${cn.twoPageImg}`}
                after={cn.intActive}
              >
                <img src="/img/howtoimage2-2.png" alt="" />
              </ScrollEffect>
              <ScrollEffect
                className={`pos-a ${cn.twoPageImg}`}
                after={cn.intActive}
              >
                <img src="/img/howtoimage2-3.png" alt="" />
              </ScrollEffect>
              <ScrollEffect
                className={`pos-a ${cn.twoPageImg}`}
                after={cn.intActive}
              >
                <img src="/img/howtoimage2-4.png" alt="" />
              </ScrollEffect>
            </div>
          </div>
          {/* </div> */}

          {/* how to トピック3 */}
          {/* <div className={`${cn.howToTopic} pos-a side-scroll-list`}> */}
          <div className={`pos-r ${cn.howToTopic}`}>
            <div className={`${cn.textColumn} ${cn.threeTopic} tex-l pos-a`}>
              <ScrollEffect className={`${cn.intDelay}`} after={cn.intActive}>
                <h2 className={`fon3 fonSp3 regular spaS`}>
                  AIから見たあなたの印象
                </h2>
                <p className={`fon4 fonSp5 mar-t2 lin-10 regular`}>
                  遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。
                </p>
              </ScrollEffect>
            </div>

            <div className={`mar-t2 ${cn.textColumnImg} ${cn.three} pos-a`}>
              <ScrollEffect
                className={`${cn.intMostDelay}`}
                after={cn.intActive}
              >
                <img src="/img/kvCharcter5.svg" alt="" />
              </ScrollEffect>
            </div>

            <div className={`pos-a ${cn.threePageImg}`}>
              <ScrollEffect
                className={`${cn.intMoreDelay}`}
                after={cn.intActive}
              >
                <img src="/img/Group 3465810.png" alt="" />
              </ScrollEffect>
            </div>
          </div>
          {/* </div> */}
        </div>
      </section>
    </>
  );
}
