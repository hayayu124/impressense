import cn from "/components/footer.module.scss";
import Link from "next/link";
import menu from "/json/menu.json";
import ScrollEffect from "components/utility/utilityscrollEffect";

export default function Footer() {
  const footerMenu = menu.menu;
  return (
    <>
      <footer className={`${cn.footer} sec-c sectionSpaceM pos-r`}>
        <ScrollEffect className={`${cn.intDelay}`} after={cn.intActive}>
          <div className={`pos-a ${cn.charcterRight}`}>
            <ScrollEffect className={`${cn.intMoreDelay}`} after={cn.intActive}>
              <img src="/img/kvCharcter2.svg" alt="" />
            </ScrollEffect>
          </div>

          <div className={`${cn.footerColor} sec-c`}>
            <div className={`${cn.menuSection} fle-f `}>
              <div className={`${cn.footerMenu} fle-f`}>
                {footerMenu.map((el, index) => {
                  return (
                    <menu key={`footer${index}`}>
                      <li className={`fon4 fonSp4 pointer avenir`}>
                        {/* PCメニュー */}

                        <ul className={`fon4 br`}>
                          <Link href={el.link}>
                            {el.menu}
                            &nbsp;/&nbsp;
                          </Link>
                        </ul>

                        {/* SPメニュー */}

                        <ul className={`fon4 brSp mar-b1`}>
                          <Link href={el.link}>{el.menu}</Link>
                        </ul>
                      </li>
                    </menu>
                  );
                })}
              </div>

              <div className={`${cn.snsColumn}`}>
                <h3 className={`fon5 fonSp4 avenir regular`}>OFFICIAL SNS</h3>
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

            <div className={`${cn.footerLink} mar-t2`}>
              <h2 className={`fon4 fonSp3 tex-c avenir regular`}>Link</h2>

              <menu className={`${cn.siteMenu} fle-f mar-t05`}>
                <div className={`fon5 fonSp5 ${cn.siteMenuCol} pointer`}>
                  <a
                    href="https://www.rd.ntt/cds/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className={`pointer`}
                  >
                    NTTコンピュータ&データサイエンス研究所
                  </a>
                </div>

                <div className={`fon5 fonSp5 ${cn.siteMenuCol}`}>
                  <a
                    href="https://www.rd.ntt/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className={`pointer`}
                  >
                    NTT R&D Website
                  </a>
                </div>
              </menu>
            </div>
          </div>
          <p className={`${cn.credit} fon5 fonSp5 tex-c mar-t4 mar-b4`}>
            © 2022 日本電信電話株式会社
          </p>

          <div className={`pos-a ${cn.charcterLeft}`}>
            <img src="/img/kvCharcter5.svg" alt="" />
          </div>
        </ScrollEffect>
      </footer>
    </>
  );
}
