import "../container-section/container-section.css";

// не нужно везде писать props
// лучше делай деструктуризацию вот так сразу сonst ContainerSection = ({ icon, title, description })

// props можно писать если у тебя такой кейс что props не используется а ты просто их пробрасываешь дальше, вот пример

/* 
const Header = (props) => {
  return (
    <header className="header">
      <div className="header__container _container">
        <button
          className="menu__burger"
          onClick={() => setMenuActive(!menuActive)}
        ></button>
        <a href="" className="mobile__logo"></a>
        <a href="" className="header__logo"></a>
        <Nav
          active={menuActive}
          setActive={setMenuActive}
          ...props
        />
      </div>
    </header>
  );
*/


/* 
изменить название папки и файла, все компоненты и их папки файлы называем в стиле 
ContainerSection.js
ContainerSection.css
*/

const ContainerSection = (props) => {
  return (
    <div className="container-section">
      <div className="container-logo">
        <div id={props.icon}></div>
      </div>
      <div className="project-title">{props.title}</div>
      <p className="project-description">{props.description}</p>
    </div>
  );
};

export default ContainerSection;
