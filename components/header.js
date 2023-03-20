import React, { useState, useEffect, useRef } from "react";
import cn from "components/header.module.scss";
import Link from "next/link";
import menu from "/json/menu.json";

export default function Header() {
  //ハンバーガーボタン
  const [button, setButton] = useState(false);
  const headerMenu = menu.menu;
  const isFirstRender = useRef(false);

  //ハンバーガメニューを開いたときに後ろの要素を固定
  useEffect(() => {
    if (isFirstRender.current) {
      // 初回レンダー判定
      isFirstRender.current = false; // もう初回レンダーじゃないよ代入
    } else {
      const body = document.body;
      body.classList.toggle("noscroll");
    }
  }, [button]);

  return (
    <>
      <header className={`${cn.header} sec-c`}>
        <div className={`${cn.headerColumn} sec-c mar-t1 fle-f`}>
          <div className={`${cn.logo}`}>
            <img src="/img/IMPRESSENSE.png" alt="" />
          </div>

          <menu className={`${cn.headerMenu} fle-f br`}>
            {headerMenu.map((el, index) => {
              return (
                <p
                  key={`${index}`}
                  className={`fon4 pointer avenir tex-r shadow`}
                >
                  {/* SPメニュー */}

                  <Link href={el.link} className={`white pointer`}>
                    {el.menu}
                  </Link>
                </p>
              );
            })}
          </menu>

          {/* ハンバーガーボタン */}
          <div
            onClick={() => {
              setButton((prevState) => !prevState);
            }}
            className={`brSp ${cn.humburgerbutton} ${
              button ? cn.active : ""
            } shadow`}
          >
            <div className={`${cn.humburgerBorder}`}></div>
            <div className={`${cn.humburgerBorder}`}></div>
            <div className={`${cn.humburgerBorder}`}></div>
          </div>
        </div>

        {/* SPハンバーガーメニュー */}
        <div className={`${cn.humburgerColumn} ${button ? cn.active : ""}`}>
          <div
            className={`${cn.humburgerBack} ${button ? cn.active : ""} pos-a`}
          >
            <img src="/img/humberger_background.svg" alt="" />
          </div>

          <menu className={`${cn.humburgerMenuContents} pos-a`}>
            <h1 className={`fonSp2 avenirshadow white spaS`}>IMPRESSENSE</h1>
            {headerMenu.map((el, index) => {
              return (
                <Link href={el.link} className={`pointer`}>
                  <p
                    key={`${index}`}
                    className={`fonSp3 pointer avenir tex-r shadow regular white spaS`}
                  >
                    {/* SPメニュー */}

                    {el.menu}
                  </p>
                </Link>
              );
            })}
          </menu>
        </div>
      </header>
    </>
  );
}
