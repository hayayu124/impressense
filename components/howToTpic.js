import React, { useState, useEffect, useRef } from "react";

import cn from "@/styles/howToTopic.module.scss";
import Link from "next/link";
import ScrollEffect from "components/utility/utilityscrollEffect";

gsap;
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function HowToTpic() {
  const [activeHowTo1, setActiveHowTo1] = useState(false);
  const [activeHowTo2, setActiveHowTo2] = useState(false);
  const [activeHowTo3, setActiveHowTo3] = useState(false);
  const [activeHowTo4, setActiveHowTo4] = useState(false);

  useEffect(() => {
    const setAnimation = gsap.context(() => {
      gsap.to("#howToDisplay", {
        // アニメーション内容

        scrollTrigger: {
          trigger: "#howTo",
          pin: true, // 要素を固定する
          anticipatePin: 1,
          pinSpacing: false,
          markers: true, // マーカー表示
          start: "top top",
          end: "bottom bottom",
        },
      });

      gsap.to("#howTo01", {
        scrollTrigger: {
          trigger: "#howTo01",
          start: "top 50%",
          end: "bottom 10%",
          onEnter: (self) => {
            setActiveHowTo1(true);
          },
          onLeave: (self) => {
            setActiveHowTo1(false);
          },
          onEnterBack: () => {
            setActiveHowTo1(true);
          },
        },
      });

      gsap.to("#howTo02", {
        scrollTrigger: {
          trigger: "#howTo02",
          start: "top 10%",
          end: "bottom 10%",
          onEnter: (self) => {
            setActiveHowTo2(true);
          },
          onLeave: (self) => {
            setActiveHowTo2(false);
          },
          onEnterBack: () => {
            setActiveHowTo2(true);
          },
          onLeaveBack: () => {
            setActiveHowTo2(false);
          },
        },
      });

      gsap.to("#howTo03", {
        scrollTrigger: {
          trigger: "#howTo03",
          start: "top 10%",
          end: "bottom 10%",
          onEnter: (self) => {
            setActiveHowTo3(true);
          },

          onEnterBack: () => {
            setActiveHowTo3(true);
          },
          onLeaveBack: () => {
            setActiveHowTo3(false);
          },
        },
      });

      gsap.to("#howTo04", {
        scrollTrigger: {
          trigger: "#howTo04",
          start: "top 10%",
          end: "bottom 10%",
          onEnter: (self) => {
            setActiveHowTo4(true);
          },

          onEnterBack: () => {
            setActiveHowTo4(true);
          },
          onLeaveBack: () => {
            setActiveHowTo4(false);
          },
        },
      });
    });
    if (process.browser) {
      gsap.registerPlugin(ScrollTrigger);
    }

    return () => setAnimation.revert();
  }, []);

  return (
    <>
      <section id="howTo" className={`pos-r`}>
        <div id="howToDisplay" className={`${cn.howToInner}`}>
          <div
            id="howTo01"
            className={`${cn.howToIndividual} ${cn.fixedContentsWrap} pos-r`}
          >
            {/* how to トピック1 */}
            <div
              id="titleWrap"
              className={`${cn.howToTopic1} ${activeHowTo1 ? cn.active : ""}`}
            >
              <div className={`${cn.textColumn} tex-l pos-a`}>
                <ScrollEffect className={`${cn.intDelay}`} after={cn.intActive}>
                  <h2 className={`fon3 fonSp3 regular spaS`}>
                    自己紹介トピック
                  </h2>
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

            {/* how to トピック2 */}
            <div
              className={`${cn.howToTopic2} ${activeHowTo2 ? cn.active : ""}`}
            >
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

            {/* how to トピック3 */}
            <div
              className={`${cn.howToTopic3} ${activeHowTo3 ? cn.active : ""}`}
            >
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
          </div>

          <div id="howTo02" className={`${cn.howToIndividual} pos-r`}></div>

          <div id="howTo03" className={`${cn.howToIndividual} pos-r`}></div>

          <div id="howTo04" className={`${cn.howToIndividual} pos-r`}></div>
        </div>
      </section>
    </>
  );
}
