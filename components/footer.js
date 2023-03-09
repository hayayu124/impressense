import cn from "/components/footer.module.scss";
import Link from "next/link";
import menu from "/json/menu.json";
const footerMenu = menu.menu;
export default function Footer() {
  return (
    <>
      <footer className={`${cn.footer} sec-c sectionSpaceM pos-r`}>
        <div className={`pos-a ${cn.charcterRight}`}>
          <img src="/img/kvCharcter2.svg" alt="" />
        </div>

        <div className={`${cn.footerColor} sec-c`}>
          <div className={`${cn.menuSection} fle-f `}>
            <div className={`${cn.footerMenu} fle-f`}>
              {footerMenu.map((el, index) => {
                return (
                  <menu key={`${index}`}>
                    <li className={`fon4 fonSp4 pointer avenir`}>
                      <Link href={el.link}>
                        {/* PCメニュー */}
                        <ul className={`fon4 br`}>
                          {el.menu}
                          &nbsp;/&nbsp;
                        </ul>

                        {/* SPメニュー */}
                        <ul className={`fon4 brSp`}>{el.menu}</ul>
                      </Link>
                    </li>
                  </menu>
                );
              })}
            </div>

            <div className={`${cn.snsColumn}`}>
              <h3 className={`fon5 fonSp5 avenir regular`}>OFFICIAL SNS</h3>
              <menu className={`${cn.snsMenu} fle-f mar-t05`}>
                <div className={`${cn.twitter}`}>
                  <img src="/img/twitter.png" alt="" />
                </div>
                <div>
                  <img src="/img/youtube.png" alt="" />
                </div>
              </menu>
            </div>
          </div>

          <div className={`mar-t2`}>
            <h2 className={`fon4 tex-c avenir regular`}>Link</h2>

            <menu className={`${cn.siteMenu} fle-f mar-t05`}>
              <div className={`fon5 ${cn.siteMenuCol}`}>
                プライバシーポリシー
              </div>
              <div className={`fon5 ${cn.siteMenuCol}`}>利用規約</div>
              <div className={`fon5 ${cn.siteMenuCol}`}>
                NTTメディアインテリジェンス研究所
              </div>
            </menu>
          </div>
        </div>
        <p className={`fon5 tex-c mar-t4 mar-b4`}>
          © 2022 日本電信電話株式会社
        </p>

        <div className={`pos-a ${cn.charcterLeft}`}>
          <img src="/img/kvCharcter5.svg" alt="" />
        </div>
      </footer>
    </>
  );
}
