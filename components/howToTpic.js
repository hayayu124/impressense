import React, { useState, useEffect } from "react";

import cn from "@/styles/howToTopic.module.scss";
import Link from "next/link";

//gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HowToTpic() {
  return (
    <>
      <section>
        {/* how to トピック1 */}
        <div className={`${cn.howToTopic} pos-r`}>
          <div className={`${cn.textColumn} tex-l`}>
            <h2 className={`fon3 fonSp3 regular spaS`}>自己紹介トピック</h2>
            <p className={`fon4 fonSp5 mar-t2 lin-10 regular`}>
              遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。
            </p>

            <div className={`${cn.howToImg} right pos-a`}>
              <img src="/img/Group 3465368.png" alt="" />
            </div>
          </div>

          <div className={`${cn.howToImg} right pos-a`}>
            <img src="/img/Group 3465368.png" alt="" />
          </div>

          <div className={`${cn.howToImgSp} right pos-a`}>
            <img src="/img/Group 3465811.png" alt="" />
          </div>

          <div className={`pos-a dropShadow ${cn.charcter7}`}>
            <img src="/img/kvCharcter7.svg" alt="" />
          </div>
        </div>

        {/* how to トピック2 */}
        <div className={`${cn.howToTopic} pos-r`}>
          <div className={`${cn.textColumn} tex-l`}>
            <h2 className={`fon3 fonSp3 regular spaS`}>
              子供のころの印象的な思い出について1分で話してください
            </h2>
            <p className={`fon4 fonSp5 mar-t2 lin-10 regular`}>
              遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。
            </p>

            <div className={`mar-t2 sec-c ${cn.textColumnImg}`}>
              <img src="/img/Group 3465809.png" alt="" />
            </div>
          </div>

          <div className={`pos-a ${cn.twoPageImg}`}>
            <img src="/img/グループ 140.png" alt="" />
          </div>

          <div className={`pos-a ${cn.twoPageImgSp}`}>
            <img src="/img/グループ 141.png" alt="" />
          </div>
        </div>

        {/* how to トピック3 */}
        <div className={`${cn.howToTopic} pos-r`}>
          <div className={`${cn.textColumn} tex-l`}>
            <h2 className={`fon3 fonSp3 regular spaS`}>
              AIから見たあなたの印象
            </h2>
            <p className={`fon4 fonSp5 mar-t2 lin-10 regular`}>
              遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。遊び方の説明が入ります。
            </p>
          </div>

          <div className={`mar-t2 ${cn.textColumnImg} ${cn.three} pos-a`}>
            <img src="/img/kvCharcter5.svg" alt="" />
          </div>

          <div className={`pos-a ${cn.threePageImg}`}>
            <img src="/img/Group 3465810.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
