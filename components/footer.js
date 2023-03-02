import menu from "/json/menu.json";
const footerMenu = menu.menu;
export default function Fotter() {
  return (
    <>
      <footer>
        {footerMenu.map((el, index) => {
          return (
            <menu>
              <li>{el.menu}</li>
            </menu>
          );
        })}

        <h3>OFFICIAL SNS</h3>
        <menu className={`snsMenu`}>
          <li></li>
          <li></li>
        </menu>

        <menu className={`siteLink`}>
          <li>プライバシーポリシー</li>
          <li>利用規約</li>
          <li>NTTメディアインテリジェンス研究所</li>
        </menu>

        <p>© 2022 日本電信電話株式会社</p>
      </footer>
    </>
  );
}
