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

        <div className={`${cn.footerColor}`}>
          <div className={`${cn.menuSection} fle-f `}>
            <div className={`${cn.footerMenu} fle-f`}>
              {footerMenu.map((el, index) => {
                return (
                  <menu key={`${index} fle-f`}>
                    <li className={`fon4 pointer avenir`}>
                      <li className={`fon4`}>
                        <Link href={el.link}>{el.menu}</Link>
                        &nbsp;/&nbsp;
                      </li>
                    </li>
                  </menu>
                );
              })}
            </div>

            <div className={`${cn.snsColumn}`}>
              <h3 className={`fon5 avenir regular`}>OFFICIAL SNS</h3>
              <menu className={`${cn.snsMenu} fle-f mar-t05`}>
                <li>
                  <img src="/img/twitter.png" alt="" />
                </li>
                <li>
                  <img src="/img/youtube.png" alt="" />
                </li>
              </menu>
            </div>
          </div>

          <div className={`mar-t2`}>
            <h2 className={`fon4 tex-c avenir regular`}>Link</h2>

            <menu className={`${cn.siteMenu} fle-f mar-t05`}>
              <li className={`fon5`}>プライバシーポリシー</li>
              <li className={`fon5`}>利用規約</li>
              <li className={`fon5`}>NTTメディアインテリジェンス研究所</li>
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
